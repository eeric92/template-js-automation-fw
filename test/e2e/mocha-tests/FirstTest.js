/* eslint-disable no-undef */
import { DriverManager } from "../../manager/DriverManager.js";
import { By, Key } from "selenium-webdriver";
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
        await googleLandingActions.acceptTermsAndConditions();
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
        await driver.findElement(By.id("L2AGLb")).click();
        await driver.sleep(1000);
        await driver
            .findElement(
                By.xpath(
                    "/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input"
                )
            )
            .sendKeys("patata", Key.RETURN);
        await driver.sleep(1000);
        const text = await driver.findElement(By.id("pTwnEc")).getText();
        assert.strictEqual(
            text,
            "Todo\nImágenes\nVídeos\nNoticias\nShopping\nMás\nHerramientas"
        );
    });

    afterEach(async () => {
        await driver.quit();
    });
});
