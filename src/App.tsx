import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1 style={{ backgroundColor: "lightblue" }}> header </h1>
            <p>Name: Edwin</p>
            <p>&quot;Hello World&quot;</p>
            <Button onClick={() => console.log("Hello World!")}>
                /Log Hello World/i
            </Button>

            <ul>
                <li> a </li>
                <li> b </li>
                <li> c </li>
            </ul>

            <img
                src="..\public\logo192.png"
                alt="image of react logo found in the public directory"
            />

            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                height: "50px",
                                width: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>

                    <Col>
                        {" "}
                        <div
                            style={{
                                height: "50px",
                                width: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
