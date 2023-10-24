/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema, string } from '../schema';

/** The error is base if it is not directly associated with a single attribute. */
export interface BaseStringError {
  base?: string[];
}

export const baseStringErrorSchema: Schema<BaseStringError> = object({
  base: ['base', optional(array(string()))],
});
