Feature: SIM Add to Cart Details

    A user wants to add to cart a sim plan

    Scenario: Validate add to cart details
        Given I navigate to "https://www.vodafone.com.au/plans/sim-only"
        Then it should validate all ctaLabels within the plan
        When I click Lite+ Plan add to cart button
        Then it should validate Lite Plus sticky cart plan cost as "$40.00"
        When I click continue to cart button
        Then it should validate cart title as "$45 SIM Only Lite+ Plan"