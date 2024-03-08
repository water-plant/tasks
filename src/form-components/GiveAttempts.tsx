import React, { useState } from "react";
import { Form, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [numOfAnswers, setNumofAnswers] = useState<number>(3);
    const [request, setRequest] = useState<string>("");
    const parsing: number = parseInt(request) || 0;
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group as={Row}>
                <Form.Control
                    value={request}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequest(event.target.value)
                    }
                    type="number"
                    style={{ width: "100%" }}
                />
            </Form.Group>
            <Button
                onClick={() => setNumofAnswers(numOfAnswers - 1)}
                disabled={!numOfAnswers}
            >
                use
            </Button>
            <Button onClick={() => setNumofAnswers(numOfAnswers + parsing)}>
                gain
            </Button>
            <span> number of question tries left: {numOfAnswers}</span>
        </div>
    );
}
