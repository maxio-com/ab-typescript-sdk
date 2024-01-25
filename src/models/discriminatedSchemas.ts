/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { discriminatedObject, Schema } from '../schema';
import { paymentMethodNestedDataSchema } from './paymentMethodNestedData';
import { paymentMethodNestedData1Schema } from './paymentMethodNestedData1';

export const discriminatedPaymentMethodNestedDataSchema: Schema<any> = discriminatedObject(
  'type',
  'type',
  {
    'Payment Method Nested Data': paymentMethodNestedDataSchema,
 },
  'Payment Method Nested Data'
);

export const discriminatedPaymentMethodNestedData1Schema: Schema<any> = discriminatedObject(
  'type',
  'type',
  {
    'Payment Method Nested Data1': paymentMethodNestedData1Schema,
 },
  'Payment Method Nested Data1'
);

