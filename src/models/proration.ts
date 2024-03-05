/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, expandoObject, optional, Schema } from '../schema';

export interface Proration {
  /** The alternative to sending preserve_period as a direct attribute to migration */
  preservePeriod?: boolean;
  [key: string]: unknown;
}

export const prorationSchema: Schema<Proration> = expandoObject({
  preservePeriod: ['preserve_period', optional(boolean())],
});
