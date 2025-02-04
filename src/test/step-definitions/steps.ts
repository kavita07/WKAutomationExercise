import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import HomePage from '../../main/pages/home.page.js';
import {links} from '../resources/homedata.json'

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
    await expect(HomePage.searchBox).toHaveAttribute('placeholder',message);
});

When(/^I search (.+) into searchbox$/, async (text: string) =>{
   await HomePage.enterSearch(text);
});

Then(/^Verify search result text (.+)$/, async (text: string) =>{
 await expect(HomePage.isSearchResultDisplayed(text)).toBeTruthy();
})

Then(/^Verify search result radio button is displayed$/, async () => {
    await expect(HomePage.serachResultRadioButton).toHaveAttribute('type', 'radio');
});

When(/^I click on search result radio button$/, async () =>{
  await HomePage.clickOnRadioButton();
});

When(/^I click on button (.+)$/, async (label: string) =>{
  await HomePage.clickOnButton(label);
});


Then(/^Verify search result is cleared$/, async () =>{
    await browser.pause(3000);
    await expect(HomePage.searchResult).not.toBeDisplayed();
});

Then(/^Verify home page all links text$/, async () =>{
    await browser.waitUntil(async () => await $$('//a').length > 0);
 await expect($$('a')).toBeElementsArrayOfSize({ gte: 1 });
 await expect($$('a')).toHaveText(['Demo', 'Source']);
}); 
