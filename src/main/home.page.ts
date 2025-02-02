import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get searchBox () {
        return $('#todo-input');
    }

    public get header () {
        return $('header h1');
    }

    public get btnSubmit () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    public async getHeader(){
        await this.header.getText();
    }

    public async getSearchBoxText () : Promise<string> {
        const result =  await this.searchBox.getText();
        return result;
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        browser.maximizeWindow();
        return super.open('login');
    }
}

export default new HomePage();
