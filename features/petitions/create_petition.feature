Feature: Create Petition
  Scenario: Adding non-existent petition
    Given I want to create a petition
    When I send a petition request with name: New Petition
    Then I should get a single message
    And with level: Info
    And with description: New Petition