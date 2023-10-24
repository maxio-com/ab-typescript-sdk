/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema } from '../schema';

/** (Optional when performing a Subscription Import via vault_token, required otherwise) The 4-digit credit card expiration year, as an integer or string, i.e. 2012 */
export interface ExpirationYearPaymentProfileAttributes {

}

export const expirationYearPaymentProfileAttributesSchema: Schema<ExpirationYearPaymentProfileAttributes> = object(
  {  }
);
