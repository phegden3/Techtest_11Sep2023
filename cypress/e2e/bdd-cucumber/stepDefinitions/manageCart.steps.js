import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CartPage from "../pages/cartPage.page";
import HomePage from "../pages/homePage.page";

const homePage = new HomePage();
const cartPage = new CartPage();

Given("I add {int} random items to my cart", (items) => {
  homePage.addGiveItemsToCart(items);
});

When("I view my cart", () => {
  homePage.clickCart();
  cartPage.verifyCartPageLanding();
});

Then("I view total {int} items listed in my cart", (items) => {
  cartPage.verifyItemsCount(items);
});

When("I search for lowest price item", () => {
  cartPage.lowestPriceItem();
});

When("I am able to remove the lowest price item from my cart", () => {
  cartPage.removeItem();
});

Then("I am able to verify {int} items in my cart", (items) => {
  cartPage.verifyItemsCount(items);
});
