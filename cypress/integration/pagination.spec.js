describe("Pagination", () => {
  it("Verify if pagination works", () => {
    cy.visit("http://localhost:3000");

    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.get(".MuiPagination-ul > :nth-child(3) > .MuiButtonBase-root")
      .contains("2")
      .click();

    cy.contains("Woman wearing head scarf with hand to face");
  });
});
