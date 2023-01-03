/* eslint-disable no-undef */
import { DriverManager } from "../../manager/DriverManager.js";
import { By, Key } from "selenium-webdriver";
import { assert } from "chai";

let driver;

describe("DESCRIBE 1", function () {
    beforeEach(async () => {
        driver = await DriverManager.driverInitialization();
    });

    it("TEST 1", async function () {
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
