import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import HomePage from '../../main/pages/home.page.js';
import {reactDef} from '../resources/homedata.json';
import { getValue } from '../../main/utils/commands.js';

const pages = {
    home: HomePage
}

Given(/^I am on the home page$/, async () => {
    await pages.home.open();
    await browser.maximizeWindow();
    await expect(HomePage.header).toBeDisplayed();
});

Then(/^Verify page title (.+)$/, async (title: string) => {
    expect(browser).toHaveTitle(title);
});

Then(/^Verify page header (.+)$/, async (header: string) => {
    await expect(HomePage.header).toHaveText(header);
});

Then(/^Verify search box default text (.+)$/, async (message: string) => {
    await expect(HomePage.searchBox).toHaveAttribute('placeholder', message);
});

When(/^I search (.+) into searchbox$/, async (text: string) => {
    await HomePage.enterSearch(text);
});

Then(/^Verify search result text (.+)$/, async (text: string) => {
    await expect(HomePage.isSearchResultDisplayed(text)).toBeTruthy();
})

Then(/^Verify search result radio button is displayed$/, async () => {
    await expect(HomePage.serachResultRadioButton).toHaveAttribute('type', 'radio');
});

When(/^I click on search result radio button$/, async () => {
    await HomePage.clickOnRadioButton();
});

When(/^I click on button (.+)$/, async (label: string) => {
    await HomePage.clickOnButton(label);
});


Then(/^Verify search result is cleared$/, async () => {
    await browser.pause(3000);
    await expect(HomePage.searchResult).not.toBeDisplayed();
});

Then(/^Verify no broken links on page$/, async () => {
    await HomePage.getLinksResponseStatus();
}); 

Then(/^Verify no insecure linkes used on page$/, async () => {
    await HomePage.isProtocolSecure();
});


Then(/^Verify React definition is displaying$/, async () => {
    await browser.pause(5000);
    const value: string = await getValue(HomePage.reactDefini);
    await expect(value).toEqual(reactDef)
});