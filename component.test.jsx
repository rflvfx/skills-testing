import { render, screen, fireEvent } from "@testing-library/react";

test("button increments counter", () => {
  render(<Counter />);
  fireEvent.click(screen.getByRole("button", { name: /increment/i }));
  expect(screen.getByText("1")).toBeInTheDocument();
});
- Fix lint warnings — iteration 5 (2015)
- Refactor module — iteration 9 (2015)
- Fix edge case — iteration 14 (2015)
