/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema, string } from '../schema.js';
import {
  PaymentProfileParams,
  paymentProfileParamsSchema,
} from './paymentProfileParams.js';

export interface ChjsTokenizationFailure {
  errors: string;
  /** PCI-safe cardholder fields only. Full card numbers, CVV, and billing address are never included. */
  paymentProfileParams?: PaymentProfileParams;
  [key: string]: unknown;
}

export const chjsTokenizationFailureSchema: Schema<ChjsTokenizationFailure> = lazy(
  () =>
    expandoObject({
      errors: ['errors', string()],
      paymentProfileParams: [
        'payment_profile_params',
        optional(paymentProfileParamsSchema),
      ],
    })
);
