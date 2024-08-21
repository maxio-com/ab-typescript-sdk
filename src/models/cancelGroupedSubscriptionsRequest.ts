/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, expandoObject, optional, Schema } from '../schema';

export interface CancelGroupedSubscriptionsRequest {
  chargeUnbilledUsage?: boolean;
  [key: string]: unknown;
}

export const cancelGroupedSubscriptionsRequestSchema: Schema<CancelGroupedSubscriptionsRequest> = expandoObject(
  { chargeUnbilledUsage: ['charge_unbilled_usage', optional(boolean())] }
);
