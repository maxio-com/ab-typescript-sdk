/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { RequestBuilderFactory } from './core';

export interface ClientInterface {
  getRequestBuilderFactory(): SdkRequestBuilderFactory;
}

export type SdkRequestBuilderFactory = RequestBuilderFactory<
  Server,
  AuthParams
>;

export type SdkRequestBuilder = ReturnType<SdkRequestBuilderFactory>;

export type Server = 'default';

export type AuthParams = boolean;