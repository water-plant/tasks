import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [inProgress, setProgress] = useState<boolean>(false);
    const [numAttempts, setNumAttempts] = useState<number>(4);

    return (
        <div>
            <Button
                onClick={() => {
                    setProgress(true), setNumAttempts(numAttempts - 1);
                }}
                disabled={inProgress || numAttempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={() => setProgress(false)} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button
                onClick={() => setNumAttempts(numAttempts + 1)}
                disabled={inProgress}
            >
                Mulligan
            </Button>
            <span>Number of attempts {numAttempts}</span>
        </div>
    );
}
