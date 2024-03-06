import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [day, setDay] = useState<string>("🏮");
    const alphabetically: Record<string, string> = {
        "🎅": "🔡", // lantern festival 🏮
        "🔡": "🏮", // National Popcorn Day🍿
        "🏮": "🍿", // new years eve 🎆
        "🍿": "🎆", // christmas 🎅
        "🎆": "🎅" // holiday B 🔡
    };
    const chronologically: Record<string, string> = {
        "🍿": "🏮",
        "🏮": "🔡",
        "🔡": "🎅",
        "🎅": "🎆",
        "🎆": "🍿"
    };
    return (
        <div>
            <Button onClick={() => setDay(alphabetically[day])}>
                Advance by Alphabet
            </Button>
            <Button onClick={() => setDay(chronologically[day])}>
                Advance by Year
            </Button>

            <span> {"Holiday: " + day} </span>
        </div>
    );
}
