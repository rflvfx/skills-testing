describe("login", () => {
  it("logs in with valid credentials", () => {
    cy.visit("/login");
    cy.get("[name=email]").type("ana@dev.io");
    cy.get("[name=password]").type("secret");
    cy.get("form").submit();
    cy.url().should("include", "/dashboard");
  });
});
