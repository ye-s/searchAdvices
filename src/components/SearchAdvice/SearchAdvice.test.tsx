import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SearchAdvice } from "./SearchAdvice";

test("render SearchAdvice component", () => {
  const { getByText } = render(<SearchAdvice />);
  const textPTag = getByText("Search for more advice:");
  expect(textPTag).toBeInTheDocument();
});

test("check placeholder", () => {
  const { getByPlaceholderText } = render(<SearchAdvice />);
  const placeholder = getByPlaceholderText("Insert search text");
  expect(placeholder).toBeInTheDocument();
});
