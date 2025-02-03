import { $ } from '@wdio/globals'
import Page from './page'
/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    //let map = new Map<string, number>();
    get searchBox () { return $('#todo-input');     }
    get linkList () {   return $$('//a');   }
    get header () {  return $('header h1');  }
    get btnSubmit () {   return $('button[type="submit"]');  }

    /**
     * a method to encapsule automation code to interact with the page
     */

    public async getSearchBoxText () : Promise<string> {
        const result =  await this.searchBox.getText();
        return result;
    }

    //list validation
    // const elem = await $$('ul > li')
    // await expect(elem).toHaveText(['Coffee', 'Tea', 'Milk'])

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        browser.maximizeWindow();
        return super.open();
    }
}

export default new HomePage();
