/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface UpdateReasonCode {
  /** The unique identifier for the ReasonCode */
  code?: string;
  /** The friendly summary of what the code signifies */
  description?: string;
  /** The order that code appears in lists */
  position?: number;
}

export const updateReasonCodeSchema: Schema<UpdateReasonCode> = object({
  code: ['code', optional(string())],
  description: ['description', optional(string())],
  position: ['position', optional(number())],
});
