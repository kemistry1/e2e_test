import { test as base } from "@playwright/test";

import { search_page, home_page, cart_page, checkout_page} from "./indexOfFixtures";

type allFixtures = {
  // Cornerstone Pages
  home_page: home_page;
  search_page: search_page;
  cart_page: cart_page;
  checkout_page: checkout_page;
};

export const test = base.extend<allFixtures>({

  home_page: async ({ page }, use) => {
    await use(new home_page(page));
  },
  search_page: async ({ page }, use) => {
    await use(new search_page(page));
  },
  cart_page: async({ page }, use) => {
    await use(new cart_page(page));
  },
  checkout_page: async({ page }, use) => {
    await use(new checkout_page(page));
  }})

;

export { expect } from "@playwright/test";
