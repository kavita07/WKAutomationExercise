import {ChainablePromiseElement} from 'webdriverio'

export const setText = async(element:ChainablePromiseElement,value: string)=> {
   await element.setValue(value);
}
