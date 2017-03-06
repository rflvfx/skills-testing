describe("login", () => {
  it("logs in with valid credentials", () => {
    cy.visit("/login");
    cy.get("[name=email]").type("ana@dev.io");
    cy.get("[name=password]").type("secret");
    cy.get("form").submit();
    cy.url().should("include", "/dashboard");
  });
});
- Improve naming — iteration 1 (2015)
- Improve naming — iteration 6 (2015)
- Fix lint warnings — iteration 7 (2015)
- Add helper — iteration 8 (2015)
- Fix lint warnings — iteration 32 (2015)
- Update dependencies — iteration 39 (2015)
- Add example — iteration 49 (2015)
- Add tests — iteration 54 (2015)
- Add tests — iteration 56 (2015)
- Refactor module — iteration 60 (2015)
- Improve error handling — iteration 7 (2016)
- Update dependencies — iteration 12 (2016)
- Fix lint warnings — iteration 15 (2016)
- Tweak implementation — iteration 16 (2016)
- Minor cleanup — iteration 20 (2016)
- Add helper — iteration 25 (2016)
- Update dependencies — iteration 27 (2016)
- Update docs — iteration 31 (2016)
- Update config — iteration 33 (2016)
- Add feature — iteration 37 (2016)
- Refactor module — iteration 41 (2016)
- Update config — iteration 54 (2016)
- Add tests — iteration 56 (2016)
- Extend coverage — iteration 58 (2016)
- Update config — iteration 10 (2017)
- Extend coverage — iteration 15 (2017)
- Document usage — iteration 17 (2017)
- Document usage — iteration 25 (2017)
- Optimize performance — iteration 26 (2017)
- Extend coverage — iteration 37 (2017)
- Document usage — iteration 41 (2017)
- Document usage — iteration 43 (2017)
- Update docs — iteration 47 (2017)
