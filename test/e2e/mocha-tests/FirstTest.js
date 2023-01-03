/* eslint-disable no-undef */
import { DriverManager } from "../../manager/DriverManager.js";
import { By, Key } from "selenium-webdriver";
import { assert } from "chai";

let driver;

describe("Browser test - NO HEADLESS MODE", function () {
    it("Firefox browser test - NO HEADLESS", async function () {
        driver = await DriverManager.driverFirefoxInitialization();
        await driver.get("https://google.com");
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

    it("Chrome browser test - NO HEADLESS", async function () {
        driver = await DriverManager.driverChromeInitialization();
        await driver.get("https://google.com");
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
