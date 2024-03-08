import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");
    const colors: string[] = [
        "red",
        "blue",
        "green",
        "cyan",
        "yellow",
        "orange",
        "pink",
        "magenta"
    ];
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group>
                {colors.map((c: string) => (
                    <Form.Check
                        inline
                        key={c}
                        id="colors"
                        type="radio"
                        label={<span style={{ backgroundColor: c }}>{c}</span>}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setColor(e.target.value)
                        }
                        value={c}
                        checked={color === c}
                    />
                ))}
            </Form.Group>
            <span style={{ backgroundColor: color }} data-testid="colored-box">
                {color}
            </span>
        </div>
    );
}
