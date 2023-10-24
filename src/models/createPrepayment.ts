/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';
import { PrepaymentMethod, prepaymentMethodSchema } from './prepaymentMethod';

export interface CreatePrepayment {
  amount: number;
  details: string;
  memo: string;
  /** :- When the `method` specified is `"credit_card_on_file"`, the prepayment amount will be collected using the default credit card payment profile and applied to the prepayment account balance. This is especially useful for manual replenishment of prepaid subscriptions. */
  method: PrepaymentMethod;
  paymentProfileId?: number;
}

export const createPrepaymentSchema: Schema<CreatePrepayment> = object({
  amount: ['amount', number()],
  details: ['details', string()],
  memo: ['memo', string()],
  method: ['method', prepaymentMethodSchema],
  paymentProfileId: ['payment_profile_id', optional(number())],
});
