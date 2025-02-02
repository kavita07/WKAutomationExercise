import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals';
import HomePage from '../../main/home.page.js';

const pages = {
    home: HomePage
}

Given(/^I am on the home page$/, async () => {
    await pages.home.open();
    await expect(HomePage.header).toBeDisplayed();
});

Then(/^Verify page title (.+)$/, async (title) => {
    expect(browser).toHaveTitle(title);
});

Then(/^Verify page header (.+)$/, async (header) => {
    await expect(HomePage.header).toHaveText(header);
});

Then(/^Verify search box default text (.+)$/, async (message) => {
    await expect(HomePage.searchBox).toHaveAttribute('placeholder',message);
});



