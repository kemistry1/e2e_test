import { Page, Locator } from "@playwright/test";
import { headerOptions } from "./homepage.data";
import { mockData } from "../../mockdata/kettle";

export class home_page {
  page: Page;

  headerOptions: {
    button: Locator;
    inputField: Locator;
  };

  constructor(page: Page) {
    this.headerOptions = {
      button: page.locator(headerOptions.search.button),
      inputField: page.locator(headerOptions.search.inputField),
    };

  }

  // Function to search for the product
  async searchForItem() {
    await this.headerOptions.button.click();
    await this.headerOptions.inputField.fill(mockData.productName);
    await this.headerOptions.inputField.press("Enter");
  }
}


