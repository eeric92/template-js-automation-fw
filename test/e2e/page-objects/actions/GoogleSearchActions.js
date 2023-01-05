import { locators as googleSearchLocators } from "../locators/GoogleSearchLocators.js";

export class GoogleSearchActions {
    constructor(driver) {
        this.driver = driver;
    }

    async getElementsInSearchBar() {
        return await this.driver
            .findElement(googleSearchLocators.searchBarOptions)
            .getText();
    }
}
