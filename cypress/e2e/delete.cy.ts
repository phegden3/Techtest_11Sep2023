
describe('delete later', () => {
    it('e2e delete later', function () {

        cy.visit('https://cms.demo.katalon.com/');
        cy.get('link').contains('Cart').click();

        cy.contains('Cart totals');





    });
});    