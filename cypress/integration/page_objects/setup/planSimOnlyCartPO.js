const common = require('../common')
const locator = require('../locators/planSimOnlyCartPage')

export function validateCartTitle(value) {
    common.assertVisibility(locator.lblPlanName)
    common.assertText(locator.lblPlanName, value)
}