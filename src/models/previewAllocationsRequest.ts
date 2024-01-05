/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { CreateAllocation, createAllocationSchema } from './createAllocation';
import { CreditType, creditTypeSchema } from './creditType';

export interface PreviewAllocationsRequest {
  allocations: CreateAllocation[];
  /** To calculate proration amounts for a future time. Only within a current subscription period. Only ISO8601 format is supported. */
  effectiveProrationDate?: string;
  /**
   * The type of credit to be created when upgrading/downgrading. Defaults to the component and then site setting if one is not provided.
   * Available values: `full`, `prorated`, `none`.
   */
  upgradeCharge?: CreditType | null;
  /**
   * The type of credit to be created when upgrading/downgrading. Defaults to the component and then site setting if one is not provided.
   * Available values: `full`, `prorated`, `none`.
   */
  downgradeCredit?: CreditType | null;
}

export const previewAllocationsRequestSchema: Schema<PreviewAllocationsRequest> = object(
  {
    allocations: ['allocations', array(lazy(() => createAllocationSchema))],
    effectiveProrationDate: ['effective_proration_date', optional(string())],
    upgradeCharge: ['upgrade_charge', optional(nullable(creditTypeSchema))],
    downgradeCredit: ['downgrade_credit', optional(nullable(creditTypeSchema))],
  }
);
