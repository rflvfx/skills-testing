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
