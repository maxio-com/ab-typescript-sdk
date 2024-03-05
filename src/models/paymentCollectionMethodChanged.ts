/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';

export interface PaymentCollectionMethodChanged {
  previousValue: string;
  currentValue: string;
  [key: string]: unknown;
}

export const paymentCollectionMethodChangedSchema: Schema<PaymentCollectionMethodChanged> = expandoObject(
  {
    previousValue: ['previous_value', string()],
    currentValue: ['current_value', string()],
  }
);
