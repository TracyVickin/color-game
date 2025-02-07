import { render, screen, fireEvent } from "@testing-library/react";
import ColorGame from "./colorGame";

test("renders game instructions", () => {
  render(<ColorGame />);
  const instructions = screen.getByTestId("gameInstructions");
  expect(instructions).toHaveTextContent("Guess the correct color!");
});

test("clicking new game button starts a new game", () => {
  render(<ColorGame />);
  const newGameButton = screen.getByTestId("newGameButton");
  fireEvent.click(newGameButton);
  expect(screen.getByTestId("gameStatus")).toHaveTextContent("");
});
