Feature: Improvements
  Scenario: Checking site is running
    Given I want to make requests to site
    When I send request to improvements.herokuapp.com
    Then I should see {success: true}