/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, unknown } from '../schema';

export interface CustomerBillingAddressChange {
  before?: unknown;
  after?: unknown;
}

export const customerBillingAddressChangeSchema: Schema<CustomerBillingAddressChange> = object(
  {
    before: ['before', optional(unknown())],
    after: ['after', optional(unknown())],
  }
);
