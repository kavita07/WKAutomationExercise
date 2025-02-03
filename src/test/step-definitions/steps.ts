import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import HomePage from '../../main/pages/home.page.js';

const pages = {
    home: HomePage
}

Given(/^I am on the home page$/, async () => {
    await pages.home.open();
    await expect(HomePage.header).toBeDisplayed();
});

Then(/^Verify page title (.+)$/, async (title: string) => {
    expect(browser).toHaveTitle(title);
});

Then(/^Verify page header (.+)$/, async (header: string) => {
    await expect(HomePage.header).toHaveText(header);
});

Then(/^Verify search box default text (.+)$/, async (message: string) => {
    //await expect(HomePage.searchBox).toHaveAttribute('placeholder',message);
});

When(/^I search (.+) into searchbox$/, async (text: string) =>{
  
});

When(/^$/, async (text: string) =>{
  
});

When(/^$/, async (text: string) =>{
  
});

When(/^$/, async (text: string) =>{
  
});



