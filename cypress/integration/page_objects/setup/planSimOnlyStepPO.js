const common = require('../common')
const locator = require('../locators/planSimOnlyStepPage')

export function clickContinueToCartButton() {
    common.click(locator.btnContinueToCart)
    cy.wait(10000)
}

export function validateLitePlusStickyCartPlan(value) {
    common.assertText(locator.lblStickyCartCost, value)
}