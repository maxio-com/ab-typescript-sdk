/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, validateAndMap } from '../../schema';
import {
  CreateSubscriptionComponent,
  createSubscriptionComponentSchema,
} from '../createSubscriptionComponent';

/** This is a container type for one-of types. */
export type CreateSubscriptionComponents = CreateSubscriptionComponent;

export const createSubscriptionComponentsSchema: Schema<CreateSubscriptionComponents> = oneOf(
  [createSubscriptionComponentSchema]
);

export namespace CreateSubscriptionComponents {
  /**
  * Validation method to narrow down union type to CreateSubscriptionComponent type case.
  *
  * This is Create Subscription Component case.
  */
  export function isCreateSubscriptionComponent(value: unknown): value is CreateSubscriptionComponent {
    const validationResult = validateAndMap(value, createSubscriptionComponentSchema);
    return validationResult.errors === false;
  }
}
