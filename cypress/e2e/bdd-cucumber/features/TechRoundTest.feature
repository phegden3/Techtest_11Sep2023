Feature: Login

    Scenario: Testing Cart
        Given I access the test URL

        Given I add 4 random items to my cart
        When I view my cart
        Then I view total 4 items listed in my cart
        When I search for lowest price item
        And I am able to remove the lowest price item from my cart
        Then I am able to verify 3 items in my cart






