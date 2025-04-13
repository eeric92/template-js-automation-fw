import { Builder } from "selenium-webdriver";
import fs from "fs";
import firefox from "selenium-webdriver/firefox.js";
import chrome from "selenium-webdriver/chrome.js";
import { logger } from "../logger/index.js";

export class DriverManager {
    static async driverFirefoxInitialization() {
        return new Builder().forBrowser("firefox").build();
    }

    static async driverFirefoxHeadlessInitialization() {
        let options = new firefox.Options();

        return new Builder()
            .forBrowser("firefox")
            .setFirefoxOptions(options.addArguments("--headless"))
            .build();
    }

    static async driverChromeInitialization() {
        return new Builder().forBrowser("chrome").build();
    }

    static async driverChromeHeadlessInitialization() {
        let options = new chrome.Options();

        return new Builder()
            .forBrowser("chrome")
            .setChromeOptions(options.addArguments("headless"))
            .build();
    }

    static getExecutionProperties() {
        let host, headlessMode, browser;
        try {
            const data = fs.readFileSync(".env", "utf-8").split(/\r?\n/);
            host = data[1].substring(data[1].toString().indexOf("=") + 1);
            headlessMode = data[4].substring(
                data[4].toString().indexOf("=") + 1
            );
            browser = data[7].substring(data[7].toString().indexOf("=") + 1);
        } catch (e) {
            console.error(e);
        }

        return { host, headlessMode, browser };
    }

    static async driverInitialization() {
        let driver;
        const { host, headlessMode, browser } = this.getExecutionProperties();

        if (browser === "FIREFOX" && headlessMode === "FALSE") {
            driver = await this.driverFirefoxInitialization();
            logger.info(
                "FIREFOX driver in Headless mode FALSE has been initialized"
            );
        } else if (browser === "FIREFOX" && headlessMode === "TRUE") {
            driver = await this.driverFirefoxHeadlessInitialization();
            logger.info(
                "FIREFOX driver in Headless mode TRUE has been initialized"
            );
        }

        if (browser === "CHROME" && headlessMode === "FALSE") {
            driver = await this.driverChromeInitialization();
            logger.info(
                "CHROME driver in Headless mode FALSE has been initialized"
            );
        } else if (browser === "CHROME" && headlessMode === "TRUE") {
            driver = await this.driverChromeHeadlessInitialization();
            logger.info(
                "CHROME driver in Headless mode TRUE has been initialized"
            );
        }

        await driver.get(host);
        return driver;
    }
}
