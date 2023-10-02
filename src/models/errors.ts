/**
 * Maxio Advanced Billing formerly Chargify APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface Errors {
  error?: string;
}

export const errorsSchema: Schema<Errors> = object({
  error: ['error', optional(string())],
});
