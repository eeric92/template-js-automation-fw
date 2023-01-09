/* eslint-disable no-undef */
import { DriverManager } from "../../manager/DriverManager.js";
import { assert } from "chai";
import { GoogleLandingActions } from "../page-objects/actions/GoogleLandingActions.js";
import { GoogleSearchActions } from "../page-objects/actions/GoogleSearchActions.js";

let driver;
let googleLandingActions;
let googleSearchActions;

describe("DESCRIBE 1", function () {
    before(async () => {
        driver = await DriverManager.driverInitialization();
        googleLandingActions = new GoogleLandingActions(driver);
        googleSearchActions = new GoogleSearchActions(driver);
    });

    beforeEach(async () => {
        await driver.get("https://google.com");
    });

    it("TEST 1", async function () {
        await googleLandingActions.acceptTermsAndConditionsIfDisplayed();
        await googleLandingActions.introduceTextInSearchBarAndPressReturn(
            "Hello World"
        );
        await driver.sleep(1000);

        assert.strictEqual(
            await googleSearchActions.getElementsInSearchBar(),
            "Todo\nImágenes\nVídeos\nNoticias\nShopping\nMás\nHerramientas"
        );
    });

    it("TEST 2", async function () {
        await googleLandingActions.acceptTermsAndConditionsIfDisplayed();
        await googleLandingActions.introduceTextInSearchBarAndPressReturn(
            "Hello World"
        );
        await driver.sleep(1000);

        assert.strictEqual(
            await googleSearchActions.getElementsInSearchBar(),
            "Todo\nImágenes\nVídeos\nNoticias\nShopping\nMás\nHerramientas"
        );
    });

    after(async () => {
        await driver.quit();
    });
});
