import { expect, test } from "../playwright/fixtures/test"

test.describe("E2E Test", async () => {
  test.beforeEach(async ({page}) => {
    // Navigate to the cornerstone homepage
    await page.goto("https://cornerstone-light-demo.mybigcommerce.com/")
    // Verify that the page URL matches the expected URL
    await expect(page).toHaveURL("https://cornerstone-light-demo.mybigcommerce.com/");
  });

  test("Completing a checkout journey starting from login page", async ({
    home_page,
    search_page,
    cart_page,
    checkout_page

  }) => {
    // Searching for the item from the homepage.
    await home_page.searchForItem();

    // Checking if the product exists on the page.
    await search_page.productCardChecker();

    // I now add the product to the basket.
    await search_page.addProductToBasket();

    // Clicking onto the cartbutton whilst the item is added in the basket.
    await search_page.clickOnCartButton();

    // When the page loads, this function checks that the product has been successfully added, by comparing the name and total price accordingly
    await cart_page.itemChecker()

    // Clicking the checkout button once the previous function has run.
    await cart_page.cartPageCheckoutButton()

    // Filling in the necessary details
    await checkout_page.customerTab()
    await checkout_page.shippingTab()
    await checkout_page.paymentTab()
  });
});
