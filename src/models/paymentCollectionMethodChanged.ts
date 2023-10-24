/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface PaymentCollectionMethodChanged {
  previousValue: string;
  currentValue: string;
}

export const paymentCollectionMethodChangedSchema: Schema<PaymentCollectionMethodChanged> = object(
  {
    previousValue: ['previous_value', string()],
    currentValue: ['current_value', string()],
  }
);
