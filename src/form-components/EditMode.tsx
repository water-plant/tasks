import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);
    const [a, setA] = useState<boolean>(false);
    return (
        <div>
            <h3>Edit Mode</h3>
            <div className="form-check form-switch">
                <input
                    className="form-check-input"
                    type="switch"
                    role="switch"
                    id="edit-mode"
                    checked={a}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setA(e.target.checked)
                    }
                ></input>
            </div>
            <Form.Group>
                <Form.Control
                    type="text"
                    disabled={!a}
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setName(e.target.value)
                    }
                />
            </Form.Group>
            <Form.Check
                inline
                type="checkbox"
                id="student"
                label="student?"
                disabled={!a}
                checked={student}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setStudent(e.target.checked)
                }
            />
            <span>
                {name} is {student ? "a" : "not a"} student.
            </span>
        </div>
    );
}
