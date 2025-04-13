import { frameworkLogger } from "./FrameworkLogger.js";

export let logger = null;

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV !== "production") {
    logger = frameworkLogger();
}
