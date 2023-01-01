/* eslint-disable no-undef */
const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("assert");
const firefox = require("selenium-webdriver/firefox");
const chrome = require("selenium-webdriver/chrome");

const screen = {
    width: 640,
    height: 480,
};

let driver;
describe("Browser test - HEADLESS MODE", function () {
    it("Firefox browser test - HEADLESS", async function () {
        driver = await new Builder()
            .forBrowser("firefox")
            .setFirefoxOptions(
                new firefox.Options().headless().windowSize(screen)
            )
            .build();
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
        await driver.quit();
    });

    it("Chrome browser test - HEADLESS", async function () {
        driver = await new Builder()
            .forBrowser("chrome")
            .setChromeOptions(
                new chrome.Options().headless().windowSize(screen)
            )
            .build();
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

    after(async function () {
        await driver.quit();
    });
});
