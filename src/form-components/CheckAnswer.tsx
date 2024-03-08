import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="shortResponseInput">
                <Form.Control
                    value={answer}
                    onChange={updateAnswer}
                    type="answer"
                    placeholder="short response"
                />
            </Form.Group>
            {expectedAnswer === answer ? "✔️" : "❌"}
        </div>
    );
}
