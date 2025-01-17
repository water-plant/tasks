import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);
    const [a, setA] = useState<boolean>(false);
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                inline
                type="switch"
                id="edit"
                label="edit"
                checked={a}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setA(e.target.checked)
                }
            />
            <Form.Group>
                <Form.Control
                    style={{ display: a ? "block" : "none" }}
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setName(e.target.value)
                    }
                />
            </Form.Group>
            <Form.Check
                type="checkbox"
                id="student"
                label="student?"
                style={{ display: a ? "block" : "none" }}
                checked={student}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setStudent(e.target.checked)
                }
            />
            <span>
                {" "}
                {name} is {student ? "a" : "not a"} student.
            </span>
        </div>
    );
}
