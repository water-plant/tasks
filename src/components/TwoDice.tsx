import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [diceOne, setd1] = useState<number>(1);
    const [diceTwo, setd2] = useState<number>(5);

    return (
        <div>
            <Button onClick={() => setd1(d6)}>Roll Left</Button>
            <Button onClick={() => setd2(d6)}>Roll Right</Button>
            <span>
                {" "}
                left: <span data-testid="left-die">{diceOne}</span>
            </span>
            <span>
                {" "}
                right: <span data-testid="right-die">{diceTwo}</span>
            </span>
            <span style={{ display: diceOne === diceTwo ? "block" : "none" }}>
                {diceTwo === diceOne && diceOne !== 1
                    ? "win"
                    : diceOne === 1 && diceTwo === 1
                    ? "lose"
                    : "none"}
            </span>
        </div>
    );
}
