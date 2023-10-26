/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Status1
 */
export enum Status1 {
  Draft = 'draft',
  Open = 'open',
}

/**
 * Schema for Status1
 */
export const status1Schema: Schema<Status1> = stringEnum(Status1);
