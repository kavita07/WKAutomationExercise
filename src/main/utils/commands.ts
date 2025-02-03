import {ChainablePromiseElement} from 'webdriverio'

export const setText = async(element:ChainablePromiseElement,value: string)=> {
   await element.setValue(value);
}

export const isElementDisplayed = async(element:ChainablePromiseElement)=> {
    return  await element.isDisplayed();
}

export const isElementNotDisplayed = async(element:ChainablePromiseElement)=> {
   //to-do
   return  await element.isDisplayed();
}

export const getValue = async(element:ChainablePromiseElement)=> {
   return await element.getText();
 }

 export const getAttribuute = async (element:ChainablePromiseElement)=> {
   return await element.getAttribute('type');
 }

 export const clickOn = async (element:ChainablePromiseElement)=> {
   return await element.click();
 }
