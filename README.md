# WKAutomationExercise
Test Automation Assignment Enablon

INTRODUCTION

This automation suite is developed using programming typescript with the help of frameworks webdriverIO and BDD.
Allure reporting tool will publish report.

Enablon assignment has 4 postive and 4 negative cases, those you will find on below path
./src/test/features/homePgae.feature

Heart of this webdriverIO framework is wdio.conf.ts where all confuguration will be available as below
cucumberOpts:
framework
capabilities
specs
maxInstances
... and many more

REFERENCE

https://webdriver.io/
https://code.visualstudio.com/download
https://www.google.com/chrome/#updates/
https://nodejs.org/en/download/

INSTALLATION

1. Install nodejs from above reference link
2. NPM comes with nodejs so no need to install
3. Install vistual studio from refernce link
4. Install gitbash
5. verify node version from cmd and see versions are populating
    node -v
    npm -v

STEPS TO SETUP FRAMEWORK

1. clone repo from foolowing git link
    https://github.com/kavita07/WKAutomationExercise.git

2. Verify hidden .git file is there by clicking on view menu on tool bar -> show -> click on hidden item
3. Open VSCode -> open Terminal 
    verify you are inside appropriate folder like -> D:\automationPractices\WKAutomationExercise>

4. Open package.json filea and see scripts
    "scripts": {
    "test": "npx wdio run wdio.conf.ts",
    "test:positive": "npx wdio run wdio.conf.ts --cucumberOpts.tagExpression=@positive",
    "test:negative": "npx wdio run wdio.conf.ts --cucumberOpts.tagExpression=@negative",
    "report": "allure generate allure-results --clean -o allure-report && allure open"
  },

5. npm install

    once all packages installed, node_module folder will be generated
    run scripts as mentioned in package.json file

6. npm run test

    wait for terminal to show you execution
   (this command will execute all positive and negative cases)
    allure-result folder will be generated

    REPORTING

8. npm run report

    (this command will generate allure report with graprhical represetation and BDD scenrios and all steps mentioned)
    if any error while publishing report then follow step no 8

9. allure report configuration
    open cmd where you chrome.exe is and then run below command
    C:\Program Files (x86)\Google\Chrome\Application>chrome.exe --allow-file-access-from-files

10. follow step 7 , you will allure report -> 
    click on show all button and click on order to see test sequestially
    1. click on suite tab
    2. click on scenari
    3. on right side test result will open in details
    4. You can veiw screen shots as well
    5. For failure click on erro message, you will see detailed error or mismatch in expect
    6. you can explore many more like click on product defect and you will see failed tests only

11. npm run test:positive

    to only execute positive cases

12. npm run  test:negative

    to only execute negative cases

    TEST RESULT

13. 4 tests are failed 
    (1 positive related to radio button as button type is checkbox
    and 3 negative cases 
     1.search box is accepting number 
     2.as instead of https , few links have protocal http
     3.when click on link , links are opening into current window
    )

    please check attache screen shot on githun

    LOGS

13. if you want to see detailed log of test results

14. opne wdio.conf.ts search  logLevel: 
    set value as  logLevel: 'info',
15. Save and run -> npm run test

FRAMEWORK STRUCTURE

src/main/pages -> here pageobjects and methods has been maintained
src/main/utils -> reusable helper/utility commands
src/test/features -> all test files
src/test/step-definitions -> bindings will be maintaind here
src/test/resources -> required test data
package.json -> all required dependecies list will be maintained here
tsconfig.json -> typescript related configurations
wdio.conf.ts -> all main configurations, browsers, baseurl, intances, feature file, step-definistion file path and many more

Apologies in advance if anything i have missed.

THANKS!
