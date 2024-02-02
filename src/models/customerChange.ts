/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, nullable, object, optional, Schema } from '../schema';
import {
  CustomerChangeBillingAddress,
  customerChangeBillingAddressSchema,
} from './containers/customerChangeBillingAddress';
import {
  CustomerChangeCustomFields,
  customerChangeCustomFieldsSchema,
} from './containers/customerChangeCustomFields';
import {
  CustomerChangePayer,
  customerChangePayerSchema,
} from './containers/customerChangePayer';
import {
  CustomerChangeShippingAddress,
  customerChangeShippingAddressSchema,
} from './containers/customerChangeShippingAddress';

export interface CustomerChange {
  payer?: CustomerChangePayer | null;
  shippingAddress?: CustomerChangeShippingAddress | null;
  billingAddress?: CustomerChangeBillingAddress | null;
  customFields?: CustomerChangeCustomFields | null;
}

export const customerChangeSchema: Schema<CustomerChange> = object({
  payer: ['payer', optional(nullable(lazy(() => customerChangePayerSchema)))],
  shippingAddress: [
    'shipping_address',
    optional(nullable(lazy(() => customerChangeShippingAddressSchema))),
  ],
  billingAddress: [
    'billing_address',
    optional(nullable(lazy(() => customerChangeBillingAddressSchema))),
  ],
  customFields: [
    'custom_fields',
    optional(nullable(lazy(() => customerChangeCustomFieldsSchema))),
  ],
});
