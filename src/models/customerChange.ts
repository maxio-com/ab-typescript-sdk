/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, nullable, optional, Schema } from '../schema.js';
import { AddressChange, addressChangeSchema } from './addressChange.js';
import {
  CustomerCustomFieldsChange,
  customerCustomFieldsChangeSchema,
} from './customerCustomFieldsChange.js';
import {
  CustomerPayerChange,
  customerPayerChangeSchema,
} from './customerPayerChange.js';

export interface CustomerChange {
  payer?: CustomerPayerChange | null;
  shippingAddress?: AddressChange | null;
  billingAddress?: AddressChange | null;
  customFields?: CustomerCustomFieldsChange | null;
  [key: string]: unknown;
}

export const customerChangeSchema: Schema<CustomerChange> = lazy(() =>
  expandoObject({
    payer: ['payer', optional(nullable(customerPayerChangeSchema))],
    shippingAddress: [
      'shipping_address',
      optional(nullable(addressChangeSchema)),
    ],
    billingAddress: [
      'billing_address',
      optional(nullable(addressChangeSchema)),
    ],
    customFields: [
      'custom_fields',
      optional(nullable(customerCustomFieldsChangeSchema)),
    ],
  })
);
