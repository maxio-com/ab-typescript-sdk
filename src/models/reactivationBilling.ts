/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  ReactivationCharge,
  reactivationChargeSchema,
} from './reactivationCharge';

/** These values are only applicable to subscriptions using calendar billing */
export interface ReactivationBilling {
  /** You may choose how to handle the reactivation charge for that subscription: 1) `prorated` A prorated charge for the product price will be attempted for to complete the period 2) `immediate` A full-price charge for the product price will be attempted immediately 3) `delayed` A full-price charge for the product price will be attempted at the next renewal */
  reactivationCharge?: ReactivationCharge;
}

export const reactivationBillingSchema: Schema<ReactivationBilling> = object({
  reactivationCharge: [
    'reactivation_charge',
    optional(reactivationChargeSchema),
  ],
});
