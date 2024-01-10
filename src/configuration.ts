/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { HttpClientOptions } from './clientAdapter';

/** An interface for all configuration parameters required by the SDK. */
export interface Configuration {
  timeout: number;
  environment: Environment;
  subdomain: string;
  domain: string;
  /** @deprecated use basicAuthCredentials field instead */
  basicAuthUserName?: string;
  /** @deprecated use basicAuthCredentials field instead */
  basicAuthPassword?: string;
  basicAuthCredentials?: {
    username: string;
    password: string;
  };
  httpClientOptions?: Partial<HttpClientOptions>;
  unstable_httpClientOptions?: any;
}

/** Environments available for API */
export enum Environment {
  Production = 'production',
  Environment2 = 'environment2',
}
