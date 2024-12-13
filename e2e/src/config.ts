import { Client } from 'advanced-billing-sdk';

export const CONFIG = {
  SDK_KEY: process.env.SDK_KEY,
  PASSWORD: process.env.PASSWORD,
  SUBDOMAIN: process.env.SUBDOMAIN,
};

const defaultOptions = {
  timeout: 0,
  site: CONFIG.SUBDOMAIN,
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
    site: CONFIG.SUBDOMAIN,
    basicAuthCredentials: {
      username: 'invalidKey' || '',
      password: CONFIG.PASSWORD || '',
    },
  });
}
