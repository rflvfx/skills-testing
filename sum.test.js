const sum = (a, b) => a + b;

describe("sum", () => {
  it("adds numbers", () => expect(sum(2, 3)).toBe(5));
  it("handles negatives", () => expect(sum(-1, 1)).toBe(0));
});
- Optimize performance — iteration 2 (2015)
- Add helper — iteration 3 (2015)
