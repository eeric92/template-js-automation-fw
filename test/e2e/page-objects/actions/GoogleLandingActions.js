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
        await genericActions.sendTextAndPressReturn(
            googleLandingLocators.googleSearchBar,
            text
        );
    }
}
