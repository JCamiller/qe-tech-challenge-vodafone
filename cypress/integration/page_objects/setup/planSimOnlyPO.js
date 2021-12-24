const common = require('../common')
const locator = require('../locators/planSimOnlyPage')

let apiResponse_planDetails

export function navigateTo(url) {
    common.navTo(url)
}

export function clickLitePlusPlanAddToCartButton() {
    common.click(locator.btnLitePlusCta)
}

export function validateCTALabel() {
    apiResponse_planDetails = common.GETPlanDetailsAPI()

    let ctaLitePlus = apiResponse_planDetails[0].ctaLabel
    common.assertText(locator.btnLitePlusCta, ctaLitePlus)
    let ctaLite = apiResponse_planDetails[1].ctaLabel
    common.assertText(locator.btnLiteCta, ctaLite)
    let ctaSuper = apiResponse_planDetails[2].ctaLabel
    common.assertText(locator.btnSuperCta, ctaSuper)
    let ctaSuperPlus= apiResponse_planDetails[3].ctaLabel
    common.assertText(locator.btnSuperPlusCta, ctaSuperPlus)
    let ctaUltraPlus = apiResponse_planDetails[4].ctaLabel
    common.assertText(locator.btnUltraPlusCta, ctaUltraPlus)
}


