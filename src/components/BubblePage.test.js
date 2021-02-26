import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", () => {
  render(<BubblePage />);
  let findColor = screen.findByText(/aliceblue/i);
  let findColorAnother = screen.findByText(/softpink/i);
  expect(findColor).toBeTruthy();
  expect(findColorAnother).toBeTruthy();
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading
