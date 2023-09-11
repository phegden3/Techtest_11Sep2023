class CartPage {
  verifyCartPageLanding() {
    cy.get("h1").contains("Cart").should("exist", { timeout: 10000 });
  }

  verifyItemsCount(items) {
    var count = 0;
    for (var i = 0; i < items; i++) {
      cy.xpath('//input[contains(@id,"quantity")]')
        .eq(i)
        .then(($el) => {
          if ($el.length) {
            count = count + 1;
          } else {
            i = items;
          }
          if (count === items) {
            cy.log("There are " + items + " items in cart");
          }
        });
    }
  }

  lowestPriceItem() {
    // let itemValue;
    // cy.get('tbody').find('tr').eq(1).find('td').eq(5).invoke('text').as('itemValue');
    // cy.log(itemValue);
    // let getText;
    // cy.get('tbody').find('tr').eq(1).find('td').eq(5).then(($value) => {
    //     getText = $value.text();
    //     //cy.log(getText);
    // })
    // cy.log(this.getText);
  }

  removeItem() {
    cy.xpath('//a[@aria-label="Remove this item"]').eq(0).click();
    cy.reload({timeout: 10000});
  }
}

module.exports = CartPage;
