/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema } from '../schema';

export interface CancelGroupedSubscriptionsRequest {
  chargeUnbilledUsage?: boolean;
}

export const cancelGroupedSubscriptionsRequestSchema: Schema<CancelGroupedSubscriptionsRequest> = object(
  { chargeUnbilledUsage: ['charge_unbilled_usage', optional(boolean())] }
);
