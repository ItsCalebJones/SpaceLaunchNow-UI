import { selectors } from "../support/common";

describe("Home Page", () => {
  it("Test: Header Image", () => {
    cy.visit("http://localhost:3000");

    cy.get(selectors.home.headerImageBg).should(($el) => {
      cy.expect($el.css("background-image")).contains("url(");
    });

    cy.get('[data-test="header-image-logo"]')
      .should("be.visible")
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });

    cy.get(selectors.home.headerImageTitle).contains("Space Launch Now");
    cy.get(selectors.home.headerImageSubtitle).contains(
      "Spaceflight News and Events"
    );
  });
});
