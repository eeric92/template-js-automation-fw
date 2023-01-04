Feature: Test feature

  Scenario: This is my first scenario
    Given the browser is opened and navigate to 'https://google.com'
    When the user introduces 'patata' in the search bar
    Then the tab with the proper values is displayed