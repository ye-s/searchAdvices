import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RandomAdvice } from "./RandomAdvice";

test("render RandomAdvice component", () => {
  const { getByText } = render(<RandomAdvice />);
  const button = getByText("Gimme more advice!");
  expect(button).toBeInTheDocument();
});

// test("render RandomAdvice component", () => {
//   const { getByText } = render(<RandomAdvice />);
//   const button = getByText("Gimme more advice!");
//   expect(button).toBeInTheDocument();
// });
