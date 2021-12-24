const planSimOnlyPO = require('../page_objects/setup/planSimOnlyPO')
const planSimOnlyStepPO = require('../page_objects/setup/planSimOnlyStepPO')
const planSimOnlyCartPO = require('../page_objects/setup/planSimOnlyCartPO')

// GIVEN //
Given('I navigate to {string}', (url) => {
    planSimOnlyPO.navigateTo(url)
})

// WHEN //
When('I click Lite+ Plan add to cart button', () => {
    planSimOnlyPO.clickLitePlusPlanAddToCartButton()
})

When ('I click continue to cart button', () => {
    planSimOnlyStepPO.clickContinueToCartButton();
})

// THEN //
Then('it should validate all ctaLabels within the plan', () => {
    planSimOnlyPO.validateCTALabel()
})

Then('it should validate Lite Plus sticky cart plan cost as {string}', (value) => {
    planSimOnlyStepPO.validateLitePlusStickyCartPlan(value)
})

Then('it should validate cart title as {string}', (value) => {
    planSimOnlyCartPO.validateCartTitle(value)
})