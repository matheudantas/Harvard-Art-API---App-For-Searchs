describe("Search Bar", () => {
  it("Search for a Painting", () => {
    cy.visit("http://localhost:3000");

    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.wait(1000);
    cy.get("#search-bar-classifications")
      .should("be.visible")
      .type("Paintings{enter}");

    cy.get(".sc-gtsrHT.kpCUJm")
      .find("div")
      .should(($div) => {
        expect($div).to.have.length(40);

        const className = $div[0].className;

        expect(className).to.match(
          /MuiPaper-root MuiCard-root makeStyles-root-5 MuiPaper-elevation1 MuiPaper-rounded/
        );
      });
  });
});
