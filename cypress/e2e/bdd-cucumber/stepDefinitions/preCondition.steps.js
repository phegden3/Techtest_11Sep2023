import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pages/homePage.page";

const homePage = new HomePage();

Given('I access the test URL', () => {
    homePage.accessBaseURL();
    homePage.verifyHomePageLanding();
});