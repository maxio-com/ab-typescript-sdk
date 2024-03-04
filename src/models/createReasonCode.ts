/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema, string } from '../schema';

export interface CreateReasonCode {
  /** The unique identifier for the ReasonCode */
  code: string;
  /** The friendly summary of what the code signifies */
  description: string;
  /** The order that code appears in lists */
  position?: number;
  [key: string]: unknown;
}

export const createReasonCodeSchema: Schema<CreateReasonCode> = expandoObject({
  code: ['code', string()],
  description: ['description', string()],
  position: ['position', optional(number())],
});
