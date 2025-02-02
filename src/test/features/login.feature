Feature: The TodoMVC Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the home page
    Then Verify page title <title>
    And Verify page header <header>
    And Verify search box default text <message>
   
    Examples:
    |title          |header | message                        |
    |TodoMVC: React|todos  | What needs to be done?         |
      
