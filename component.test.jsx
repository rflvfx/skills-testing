import { render, screen, fireEvent } from "@testing-library/react";

test("button increments counter", () => {
  render(<Counter />);
  fireEvent.click(screen.getByRole("button", { name: /increment/i }));
  expect(screen.getByText("1")).toBeInTheDocument();
});
