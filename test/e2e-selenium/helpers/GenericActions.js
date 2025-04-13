import { Key, until } from "selenium-webdriver";
import { logger } from "../logger/index.js";

export class GenericActions {
    constructor(driver) {
        this.driver = driver;
    }

    async clickOn(element) {
        try {
            await this.driver.wait(until.elementLocated(element), 10000);
            await this.driver.findElement(element).click();

            logger.info(`Clicked on element: ${element}`);
        } catch (e) {
            logger.error(`Error when clicking on element: ${element}`);
            logger.error(e);
        }
    }

    async sendTextAndPressReturn(element, text) {
        try {
            await this.driver.wait(until.elementLocated(element), 10000);
            await this.driver.findElement(element).sendKeys(text, Key.RETURN);

            logger.info(
                `Text: "${text}" has been introduced in element ${element}`
            );
        } catch (e) {
            logger.error(`Error when sending text on element: ${element}`);
            logger.error(e);
        }
    }

    async isElementDisplayed(element) {
        return await this.driver.findElement(element).isDisplayed();
    }
}
