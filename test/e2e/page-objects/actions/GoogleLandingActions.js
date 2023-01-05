import { Key } from "selenium-webdriver";
import { locators as googleLandingLocators } from "../locators/GoogleLandingLocators.js";
import { GenericActions } from "../../helpers/GenericActions.js";

let genericActions;

export class GoogleLandingActions {
    constructor(driver) {
        this.driver = driver;
        genericActions = new GenericActions(this.driver);
    }

    async acceptTermsAndConditionsIfDisplayed() {
        try {
            await genericActions.clickOn(
                googleLandingLocators.acceptTermsAndConditionsButton
            );
        } catch (e) {
            // IGNORE
        }
    }

    async introduceTextInSearchBarAndPressReturn(text) {
        await this.driver
            .findElement(googleLandingLocators.googleSearchBar)
            .sendKeys(text, Key.RETURN);
    }
}
