import { Builder } from "selenium-webdriver";

export class DriverManager {
    static async driverFirefoxInitialization() {
        return new Builder().forBrowser("firefox").build();
    }

    static async driverChromeInitialization() {
        return new Builder().forBrowser("chrome").build();
    }
}
