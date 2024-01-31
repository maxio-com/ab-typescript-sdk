/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { PayerAttributes, payerAttributesSchema } from './payerAttributes';

export interface CustomerPayerChange {
  before?: PayerAttributes;
  after?: PayerAttributes;
}

export const customerPayerChangeSchema: Schema<CustomerPayerChange> = object({
  before: ['before', optional(lazy(() => payerAttributesSchema))],
  after: ['after', optional(lazy(() => payerAttributesSchema))],
});
