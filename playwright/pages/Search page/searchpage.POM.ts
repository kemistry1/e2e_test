import { expect, Page, Locator} from "@playwright/test";
import { mockData } from "../../mockdata/kettle"
import { cartbutton, productCard } from "./searchpage.data";

export class search_page {
  page: Page;
  

    cartbutton: Locator;

    productCard: 
    {
      productName: Locator;
      productAddToBasket: Locator;
      price: Locator;
    };

  
    constructor(page: Page) {
      
      this.page = page;

      this.productCard = {
        productName: page.locator(productCard.productName),
        productAddToBasket: page.locator(productCard.productAddToBasket),
        price: page.locator(productCard.price),
      };

      this.cartbutton = page.locator(cartbutton)

    }

    // Checking if product exists on the page and has the expected text content.
    async productCardChecker() {
      const itemName = this.page.locator(productCard.productName);
      await expect(itemName).toHaveText(mockData.productName);
    }

    // Function that adds the product to the basket/
    async addProductToBasket() {
      await this.productCard.productAddToBasket.click()
    }
  
    // Function that clicks on the cart button
    async clickOnCartButton() {
      await this.cartbutton.click()
    }

  }