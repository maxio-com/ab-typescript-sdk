/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, oneOf, Schema, validateAndMap } from '../../schema';
import { ResumeOptions, resumeOptionsSchema } from '../resumeOptions';

/** This is a container type for one-of types. */
export type ReactivateSubscriptionRequestResume = boolean | ResumeOptions;

export const reactivateSubscriptionRequestResumeSchema: Schema<ReactivateSubscriptionRequestResume> = oneOf(
  [boolean(), resumeOptionsSchema]
);

export namespace ReactivateSubscriptionRequestResume {
  /**
  * Validation method to narrow down union type to boolean type case.
  *
  * This is Boolean case.
  */
  export function isBoolean(value: unknown): value is boolean {
    return typeof value === 'boolean';
  }

  /**
  * Validation method to narrow down union type to ResumeOptions type case.
  *
  * This is Resume Options case.
  */
  export function isResumeOptions(value: unknown): value is ResumeOptions {
    const validationResult = validateAndMap(value, resumeOptionsSchema);
    return validationResult.errors === false;
  }
}
