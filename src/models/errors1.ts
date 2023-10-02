/**
 * Maxio Advanced Billing formerly Chargify APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema, string } from '../schema';

export interface Errors1 {
  base?: string[];
}

export const errors1Schema: Schema<Errors1> = object({
  base: ['base', optional(array(string()))],
});
