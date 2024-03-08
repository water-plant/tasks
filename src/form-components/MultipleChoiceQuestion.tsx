import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selected, setSelected] = useState<string>(options[0]);

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group>
                <Form.Select
                    value={selected}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setSelected(e.target.value)
                    }
                >
                    {options.map((str: string) => (
                        <option key={str} value={str}>
                            {str}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {expectedAnswer === selected ? "✔️" : "❌"}
        </div>
    );
}
