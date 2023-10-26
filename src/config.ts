import { Client, Environment } from ".";

export const CONFIG = {
    SDK_KEY: process.env.SDK_KEY,
    PASSWORD: process.env.PASSWORD,
    SUBDOMAIN: process.env.SUBDOMAIN,
    DOMAIN: process.env.DOMAIN
}

const defaultOptions = {
    timeout: 0,
    domain: CONFIG.DOMAIN,
    environment: Environment.Production,
    subdomain: CONFIG.SUBDOMAIN,
    basicAuthUserName: CONFIG.SDK_KEY,
    basicAuthPassword: CONFIG.PASSWORD,
}

export function createClient(options = defaultOptions) {
    const client = new Client(options);
    return client;
}

