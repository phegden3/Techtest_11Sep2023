class HomePage {
  accessBaseURL() {
    cy.intercept("**").as("requests");
    cy.visit("/");
    // cy.get('@requests.all', { timeout: 60000 })
    // .its('response')
    // .should('deep.include', {
    //   statusCode: 200,
    // });
    cy.get(".loader").should("not.exist");
  }

  verifyHomePageLanding() {
    cy.get("header").get("#masthead").should("exist");
    cy.get("h1").contains("Shop").should("exist");
  }

  addGiveItemsToCart(items) {
    for (var i = 0; i < items; i++) {
      cy.xpath(
        '//a[not(contains(@class, "loading")) and text() = "Add to cart"]'
      )
        .eq(i)
        .click();
      cy.wait(1000);
    }
  }

  clickCart() {
    cy.get("a").contains("Cart").click();
  }
}

module.exports = HomePage;
