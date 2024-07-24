import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
})

describe("Addition", () => {
  it("Knows that 2 and 2 makes 4", () => {
    expect(2 + 2).toBe(4);
  })
})