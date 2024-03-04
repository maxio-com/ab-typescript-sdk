/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, optional, Schema, unknown } from '../schema';

export interface BaseRefundError {
  base?: unknown[];
  [key: string]: unknown;
}

export const baseRefundErrorSchema: Schema<BaseRefundError> = expandoObject({
  base: ['base', optional(array(unknown()))],
});
