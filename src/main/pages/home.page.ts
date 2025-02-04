import { $ } from '@wdio/globals'
import Page from './page'
import { clickOn, isElementDisplayed, setText } from '../utils/commands'
import fetch from 'node-fetch';
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
    get reactdefinition() {return $("//p[contains(text(),'React')]")}
    get reactDefini() {return $('blockquote p')}

    /**
     * a method to encapsule automation code to interact with the page
     */

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

    async isProtocolSecure() {
        const links = $$('a');
        const urls = links.map(link => link.getAttribute('href'));
            (await urls).forEach(url => {
                let protocol: string[] = url.split(':');
                expect(protocol[0]).toBe("https");
            })
    }

    async getLinksResponseStatus() {
        const links = $$('a');
        const urls = links.map(link => link.getAttribute('href'));
        const requests = (await urls).map(url => fetch(url));
        const responses = await Promise.all(requests);
        const statusCodes = responses.map(response => response.status);
        statusCodes.forEach(statusCode => {
            expect(statusCode).toBe(200);
        })

    }

    public open() {
        return super.open();
    }
}

export default new HomePage();
