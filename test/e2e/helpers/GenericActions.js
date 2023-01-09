import { Key, until } from "selenium-webdriver";

export class GenericActions {
    constructor(driver) {
        this.driver = driver;
    }

    async clickOn(element) {
        await this.driver.wait(until.elementLocated(element), 10000);
        await this.driver.findElement(element).click();
    }

    async sendTextAndPressReturn(element, text) {
        await this.driver.wait(until.elementLocated(element), 10000);
        await this.driver.findElement(element).sendKeys(text, Key.RETURN);
    }
}
