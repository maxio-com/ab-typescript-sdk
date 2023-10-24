/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, validateAndMap } from '../../schema';
import {
  CancellationMethod,
  cancellationMethodSchema,
} from '../cancellationMethod';

/** This is a container type for one-of types. */
export type SubscriptionCancellationMethod = CancellationMethod;

export const subscriptionCancellationMethodSchema: Schema<SubscriptionCancellationMethod> = oneOf(
  [cancellationMethodSchema]
);

export namespace SubscriptionCancellationMethod {
  /**
  * Validation method to narrow down union type to CancellationMethod type case.
  *
  * This is Cancellation Method case.
  */
  export function isCancellationMethod(value: unknown): value is CancellationMethod {
    const validationResult = validateAndMap(value, cancellationMethodSchema);
    return validationResult.errors === false;
  }
}
