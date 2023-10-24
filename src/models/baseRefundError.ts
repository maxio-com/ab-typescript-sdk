/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema, unknown } from '../schema';

export interface BaseRefundError {
  base?: unknown[];
}

export const baseRefundErrorSchema: Schema<BaseRefundError> = object({
  base: ['base', optional(array(unknown()))],
});
