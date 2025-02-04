import {ChainablePromiseElement} from 'webdriverio'

export const setText = async(element:ChainablePromiseElement,value: string|number)=> {
   await element.setValue(value);
}

export const isElementDisplayed = async(element:ChainablePromiseElement)=> {
    return  await element.isDisplayed();
}

export const getValue = async(element:ChainablePromiseElement)=> {
  const value: string = await element.getText();
   return value;
 }

 export const getAttribuute = async (element:ChainablePromiseElement)=> {
   return await element.getAttribute('type');
 }

 export const clickOn = async (element:ChainablePromiseElement)=> {
   return await element.click();
 }
