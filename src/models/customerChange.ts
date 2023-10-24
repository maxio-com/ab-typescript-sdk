/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  CustomerBillingAddressChange,
  customerBillingAddressChangeSchema,
} from './customerBillingAddressChange';
import {
  CustomerCustomFieldsChange,
  customerCustomFieldsChangeSchema,
} from './customerCustomFieldsChange';
import {
  CustomerPayerChange,
  customerPayerChangeSchema,
} from './customerPayerChange';
import {
  CustomerShippingAddressChange,
  customerShippingAddressChangeSchema,
} from './customerShippingAddressChange';

export interface CustomerChange {
  payer?: CustomerPayerChange;
  shippingAddress?: CustomerShippingAddressChange;
  billingAddress?: CustomerBillingAddressChange;
  customFields?: CustomerCustomFieldsChange;
}

export const customerChangeSchema: Schema<CustomerChange> = object({
  payer: ['payer', optional(lazy(() => customerPayerChangeSchema))],
  shippingAddress: [
    'shipping_address',
    optional(lazy(() => customerShippingAddressChangeSchema)),
  ],
  billingAddress: [
    'billing_address',
    optional(lazy(() => customerBillingAddressChangeSchema)),
  ],
  customFields: [
    'custom_fields',
    optional(lazy(() => customerCustomFieldsChangeSchema)),
  ],
});
