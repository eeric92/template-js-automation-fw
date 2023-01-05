import { until } from "selenium-webdriver";

export class GenericActions {
    constructor(driver) {
        this.driver = driver;
    }

    async clickOn(element) {
        await this.driver.wait(until.elementLocated(element), 10000);
        await this.driver.findElement(element).click();
    }
}
