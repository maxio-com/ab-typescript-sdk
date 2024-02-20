import { Client, Environment } from 'advanced-billing-sdk';

export const CONFIG = {
  SDK_KEY: process.env.SDK_KEY,
  PASSWORD: process.env.PASSWORD,
  SUBDOMAIN: process.env.SUBDOMAIN,
  DOMAIN: process.env.DOMAIN,
};

const defaultOptions = {
  timeout: 0,
  domain: CONFIG.DOMAIN,
  environment: Environment.Production,
  subdomain: CONFIG.SUBDOMAIN,
  basicAuthCredentials: {
    username: CONFIG.SDK_KEY || '',
    password: CONFIG.PASSWORD || '',
  },
};

export function createClient(options = defaultOptions) {
  const client = new Client(options);
  return client;
}

export function createInvalidClient() {
  return createClient({
    timeout: 0,
    domain: CONFIG.DOMAIN,
    environment: Environment.Production,
    subdomain: CONFIG.SUBDOMAIN,
    basicAuthCredentials: {
      username: 'invalidKey' || '',
      password: CONFIG.PASSWORD || '',
    },
  });
}
