import { render, screen, fireEvent } from "@testing-library/react";

test("button increments counter", () => {
  render(<Counter />);
  fireEvent.click(screen.getByRole("button", { name: /increment/i }));
  expect(screen.getByText("1")).toBeInTheDocument();
});
- Fix lint warnings — iteration 5 (2015)
- Refactor module — iteration 9 (2015)
- Fix edge case — iteration 14 (2015)
- Update dependencies — iteration 17 (2015)
- Add feature — iteration 20 (2015)
- Tweak implementation — iteration 24 (2015)
- Add example — iteration 27 (2015)
- Add validation — iteration 30 (2015)
- Add validation — iteration 31 (2015)
- Add helper — iteration 33 (2015)
- Fix lint warnings — iteration 38 (2015)
- Tweak implementation — iteration 40 (2015)
- Minor cleanup — iteration 43 (2015)
- Add helper — iteration 46 (2015)
- Tweak implementation — iteration 50 (2015)
- Extend coverage — iteration 55 (2015)
- Fix lint warnings — iteration 58 (2015)
