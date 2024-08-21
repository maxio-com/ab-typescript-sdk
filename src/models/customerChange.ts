/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, nullable, optional, Schema } from '../schema';
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
  payer?: CustomerPayerChange | null;
  shippingAddress?: AddressChange | null;
  billingAddress?: AddressChange | null;
  customFields?: CustomerCustomFieldsChange | null;
  [key: string]: unknown;
}

export const customerChangeSchema: Schema<CustomerChange> = expandoObject({
  payer: ['payer', optional(nullable(lazy(() => customerPayerChangeSchema)))],
  shippingAddress: [
    'shipping_address',
    optional(nullable(lazy(() => addressChangeSchema))),
  ],
  billingAddress: [
    'billing_address',
    optional(nullable(lazy(() => addressChangeSchema))),
  ],
  customFields: [
    'custom_fields',
    optional(nullable(lazy(() => customerCustomFieldsChangeSchema))),
  ],
});
