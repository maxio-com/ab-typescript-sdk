/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema } from '../schema';

export interface Proration {
  /** The alternative to sending preserve_period as a direct attribute to migration */
  preservePeriod?: boolean;
}

export const prorationSchema: Schema<Proration> = object({
  preservePeriod: ['preserve_period', optional(boolean())],
});
