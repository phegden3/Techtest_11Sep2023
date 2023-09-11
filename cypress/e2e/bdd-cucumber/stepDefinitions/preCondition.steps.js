import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Given('I access the test URL', () => {
//     cy.visit('https://cms.demo.katalon.com/');
//     cy.get('a').contains('Cart').click();

//     cy.contains('Cart');
// });

Given('I access the test URL', () => {
    cy.visit('/');
    // cy.get('a').contains('Cart').click();

    // cy.contains('Cart');
});