/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, validateAndMap } from '../../schema';
import {
  PaymentCollectionMethod,
  paymentCollectionMethodSchema,
} from '../paymentCollectionMethod';

/** This is a container type for one-of types. */
export type SubscriptionPaymentCollectionMethod = PaymentCollectionMethod;

export const subscriptionPaymentCollectionMethodSchema: Schema<SubscriptionPaymentCollectionMethod> = oneOf(
  [paymentCollectionMethodSchema]
);

export namespace SubscriptionPaymentCollectionMethod {
  /**
  * Validation method to narrow down union type to PaymentCollectionMethod type case.
  *
  * This is Payment Collection Method case.
  */
  export function isPaymentCollectionMethod(value: unknown): value is PaymentCollectionMethod {
    const validationResult = validateAndMap(value, paymentCollectionMethodSchema);
    return validationResult.errors === false;
  }
}
