Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

export function navTo(url) {
    cy.visit(url, { timeout: 30000 })
}

export function click(loc) {
    cy.xpath(loc).click({force: true})
}

export function assertText(loc, value) {
    return cy.xpath(loc).contains(value)
}

export function assertVisibility(loc) {
    return cy.xpath(loc).should('be.visible', 50)
}

export function GETPlanDetailsAPI() {
    const request = require('sync-request')

    try {
        let response = request('GET', 'https://api-prod.prod.cms.df.services.vodafone.com.au/plan/postpaid-simo?serviceType=New')
        let responseJson = JSON.parse(response.body)

        console.log(responseJson.planListing.plans)
        return responseJson.planListing.plans
    } catch (err) {
        throw err
    }
}