import { Page, Locator, expect} from "@playwright/test";
import { cartPageDetails, checkoutButton} from "./cartpage.data";
import {mockData} from "../../mockdata/kettle"

export class cart_page {
    page: Page;

    cartPageDetails: {
        totalValue: Locator
        addedItemName: Locator
    }

    checkoutButton: {
        checkout_button: Locator
    }

    constructor(page: Page) {
        this.page = page;

        this.cartPageDetails = {
            totalValue: page.locator(cartPageDetails.totalValue),
            addedItemName: page.locator(cartPageDetails.addedItemName)
        }

        this.checkoutButton = {
            checkout_button: page.locator(checkoutButton.checkout_button)
        }
    }

    // Verifying whether the added item's value and name match the mock data
    
    async itemChecker() {
        const item_name = this.page.locator(cartPageDetails.addedItemName)
        await expect(item_name).toHaveText(mockData.productName)
        const item_value = this.page.locator(cartPageDetails.totalValue)
        await expect(item_value).toHaveText(mockData.productPrice)
    }

    // CLicking the checkout button
    async cartPageCheckoutButton() {
        await this.checkoutButton.checkout_button.click()
    }
}


