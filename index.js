Feature: Improvements

  Scenario: Checking app availability
    Given I want to use improvements module
    When I send "/" request
    Then I should see "Hello World!"