/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { AddressChange, addressChangeSchema } from './addressChange';
import {
  CustomerCustomFieldsChange,
  customerCustomFieldsChangeSchema,
} from './customerCustomFieldsChange';
import {
  CustomerPayerChange,
  customerPayerChangeSchema,
} from './customerPayerChange';

export interface CustomerChange {
  payer?: CustomerPayerChange;
  shippingAddress?: AddressChange;
  billingAddress?: AddressChange;
  customFields?: CustomerCustomFieldsChange;
}

export const customerChangeSchema: Schema<CustomerChange> = object({
  payer: ['payer', optional(lazy(() => customerPayerChangeSchema))],
  shippingAddress: [
    'shipping_address',
    optional(lazy(() => addressChangeSchema)),
  ],
  billingAddress: [
    'billing_address',
    optional(lazy(() => addressChangeSchema)),
  ],
  customFields: [
    'custom_fields',
    optional(lazy(() => customerCustomFieldsChangeSchema)),
  ],
});
