export const checkout = {
    email: 'input#email',
    privacyButton: '[for="privacyPolicy"]',
    continueButton: '[data-test="customer-continue-as-guest-button"]',
    shippingFirstName: '[name="shippingAddress.firstName"]',
    shippingLastName: '[name="shippingAddress.lastName"]',
    addressLine: '[data-test="addressLine1Input-text"]',
    city: '[data-test="cityInput-text"]',
    postcode: '[data-test="postCodeInput-text"]',
    phoneNumber: '[data-test="phoneInput-text"]',
    comment: '[name="orderComment"]',
    continueButtonShipping: '.button[type="submit"]',
    
}

export const ccDetails = {
    ccNumber: '#ccNumber',
    ccExpiry: '#ccExpiry',
    ccName: '#ccName',
    ccCvv: '#ccCvv',
    placeOrderButton: '#checkout-payment-continue',
}