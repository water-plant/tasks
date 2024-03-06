import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [value, setValue] = useState<boolean>(false);
    return (
        <div>
            <Button onClick={() => setValue(value === false ? true : false)}>
                Reveal Answer
            </Button>
            <span> {value && 42} </span>
        </div>
    );
}
