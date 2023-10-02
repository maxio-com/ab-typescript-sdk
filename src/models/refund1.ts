/**
 * Maxio Advanced Billing formerly Chargify APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema, unknown } from '../schema';

export interface Refund1 {
  base?: unknown[];
}

export const refund1Schema: Schema<Refund1> = object({
  base: ['base', optional(array(unknown()))],
});
