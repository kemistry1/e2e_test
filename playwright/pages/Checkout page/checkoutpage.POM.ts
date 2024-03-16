import {Page, Locator} from "@playwright/test"
import {checkout, ccDetails} from "./checkoutpage.data";
import { JohnDoe, JohnDoeCardDetails } from "./checkoutpaqe.example";

export class checkout_page 
{
    page: Page;

    checkout: 
    {
        email: Locator
        privacyButton: Locator
        continueButton: Locator
        continueButtonShipping: Locator
        shippingFirstName: Locator
        shippingLastName: Locator
        addressLine: Locator
        city: Locator
        postcode: Locator
        phoneNumber: Locator
        comment: Locator
    }

    ccDetails: 
    {
        ccNumber: Locator
        ccExpiry: Locator
        ccName: Locator
        ccCvv: Locator
        placeOrderButton: Locator
    }

    constructor(page: Page) 
    {
        this.page = page;

           this.checkout = 
           {
            email: page.locator(checkout.email),
            privacyButton: page.locator(checkout.privacyButton),
            continueButton: page.locator(checkout.continueButton),
            shippingFirstName: page.locator(checkout.shippingFirstName),
            shippingLastName: page.locator(checkout.shippingLastName),
            addressLine: page.locator(checkout.addressLine),
            city: page.locator(checkout.city),
            postcode: page.locator(checkout.postcode),
            phoneNumber: page.locator(checkout.phoneNumber),
            comment: page.locator(checkout.comment),
            continueButtonShipping: page.locator(checkout.continueButtonShipping),

            }

            this.ccDetails = 
            {
                ccNumber: page.locator(ccDetails.ccNumber),
                ccExpiry: page.locator(ccDetails.ccExpiry),
                ccName: page.locator(ccDetails.ccName),
                ccCvv: page.locator(ccDetails.ccCvv),
                placeOrderButton: page.locator(ccDetails.placeOrderButton)
            }
    }

    // Emulating the checkout page from an external file that contains some example data from a fake customer
    // Function to fill in the 'Customer' tab
    async customerTab() {
        await this.checkout.email.fill(JohnDoe.Email)
        await this.checkout.privacyButton.click()
        await this.checkout.continueButton.click()
    }

    //Function that will fill in the 'Shipping' tab 
    async shippingTab() {
        await this.checkout.shippingFirstName.fill(JohnDoe.FirstName)
        await this.checkout.shippingLastName.fill(JohnDoe.Surname)
        await this.checkout.addressLine.fill(JohnDoe.Address)
        await this.checkout.city.fill(JohnDoe.City)
        await this.checkout.postcode.fill(JohnDoe.Postcode)
        await this.checkout.phoneNumber.fill(JohnDoe.Phone)
        await this.checkout.comment.fill(JohnDoe.Comment)
        await this.checkout.continueButtonShipping.click()
    }

    async paymentTab() {
        await this.ccDetails.ccNumber.fill(JohnDoeCardDetails.CCNumber)
        await this.ccDetails.ccExpiry.fill(JohnDoeCardDetails.CCExpiry)
        await this.ccDetails.ccName.fill(JohnDoeCardDetails.CCName)
        await this.ccDetails.ccCvv.fill(JohnDoeCardDetails.CCCvv)
        await this.ccDetails.placeOrderButton.click()
    }

}
