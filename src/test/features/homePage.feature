Feature: The TodoMVC Website Testing

  @positive
  Scenario Outline: As a user, I am on enablon home screen

    Given I am on the home page
    Then Verify page title <title>
    And Verify page header <header>
    And Verify search box default text <message>

    Examples:
      | title          | header | message                |
      | TodoMVC: React | todos  | What needs to be done? |

  @positive
  Scenario Outline: As a user, I can use search functionality

    Given I am on the home page
    When I search <text> into searchbox
    Then Verify search result text <text>
    And Verify search result radio button is displayed

    Examples:
      | text    |
      | testing |

  @positive
  Scenario Outline: As a user, I can clear search result

    Given I am on the home page
    When I search <text> into searchbox
    And I click on search result radio button
    And I click on button <button label>
    Then Verify search result is cleared

    Examples:
      | text    | button label    |
      | testing | Clear completed |

  @positive
  Scenario Outline: As a user, I can REACT definition

    Given I am on the home page
    Then Verify React definition is displaying

  @negative
  Scenario Outline: As a user, I verify search box is not accepting numbers

    Given I am on the home page
    When I search <num> into searchbox
    Then Verify search result should not displayed

    Examples:
      | num    |
      | 123456 |

  @negative
  Scenario Outline: As a user, I verify links are not opening in current window

    Given I am on the home page
    When I click on link <link>
    Then Verify page title <currentTitle>
    Examples:
      | link        | currentTitle  |
      | Quick Start | TodoMVC: Reac |

  @negative
  Scenario Outline: As a user, I verify no broken links on page

    Given I am on the home page
    Then Verify no broken links on page

  @negative
  Scenario Outline: As a user, I verify no insure protocol used on the page

    Given I am on the home page
    Then Verify no insecure links used on page