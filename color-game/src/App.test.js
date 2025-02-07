import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders color game instructions", () => {
  render(<App />);
  const instructions = screen.getByTestId("gameInstructions");
  expect(instructions).toHaveTextContent("Guess the correct color!");
});
