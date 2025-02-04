import { $ } from '@wdio/globals'
import Page from './page'
import { clickOn, isElementDisplayed, setText } from '../utils/commands'
/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {

    /**
     * define selectors using getter methods
     */
    get searchBox() { return $('#todo-input'); }
    get linkList() { return $$('a'); }
    get header() { return $('header h1'); }
    get btnSubmit() { return $('button[type="submit"]'); }
    get searchResult() { return $('div.view label'); }
    get serachResultRadioButton() { return $('div.view input'); }

    /**
     * a method to encapsule automation code to interact with the page
     */

    async getSearchBoxText(): Promise<string> {
        const result = await this.searchBox.getText();
        return result;
    }

    async enterSearch(text: string) {
        await setText(this.searchBox, text);
        await browser.keys("Enter");
    }

    async isSearchResultDisplayed(text: string): Promise<boolean> {
        const ele = `//label[text()=${text}]`;
        return isElementDisplayed($(ele));
    }

    async clickOnRadioButton() {
        await clickOn(this.serachResultRadioButton)
    }

    async clickOnButton(label: string) {
        const ele = `//button[text()="${label}"]`;
        await clickOn($(ele));
    }

    //list validation
    // const elem = await $$('ul > li')
    // await expect(elem).toHaveText(['Coffee', 'Tea', 'Milk'])

    /**
     * overwrite specific options to adapt it to page object
     */
    public open() {
        return super.open();
    }
}

export default new HomePage();
