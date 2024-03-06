import React, { useState } from "react";
import { bookEndList } from "../arrays";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    return (
        <div>
            <h3>Check Answer</h3>
        </div>
    );
}
