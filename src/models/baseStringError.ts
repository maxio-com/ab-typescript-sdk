/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, optional, Schema, string } from '../schema';

/** The error is base if it is not directly associated with a single attribute. */
export interface BaseStringError {
  base?: string[];
  [key: string]: unknown;
}

export const baseStringErrorSchema: Schema<BaseStringError> = expandoObject({
  base: ['base', optional(array(string()))],
});
