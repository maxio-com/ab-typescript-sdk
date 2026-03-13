/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  lazy,
  nullable,
  optional,
  Schema,
  string,
} from '../schema.js';
import {
  CreateAllocation,
  createAllocationSchema,
} from './createAllocation.js';
import { CreditType, creditTypeSchema } from './creditType.js';

export interface PreviewAllocationsRequest {
  allocations: CreateAllocation[];
  /** To calculate proration amounts for a future time. Only within a current subscription period. Only ISO8601 format is supported. */
  effectiveProrationDate?: string;
  /** The type of credit to be created when upgrading/downgrading. Defaults to the component and then site setting if one is not provided. */
  upgradeCharge?: CreditType | null;
  /** The type of credit to be created when upgrading/downgrading. Defaults to the component and then site setting if one is not provided. */
  downgradeCredit?: CreditType | null;
  [key: string]: unknown;
}

export const previewAllocationsRequestSchema: Schema<PreviewAllocationsRequest> = lazy(
  () =>
    expandoObject({
      allocations: ['allocations', array(createAllocationSchema)],
      effectiveProrationDate: ['effective_proration_date', optional(string())],
      upgradeCharge: ['upgrade_charge', optional(nullable(creditTypeSchema))],
      downgradeCredit: [
        'downgrade_credit',
        optional(nullable(creditTypeSchema)),
      ],
    })
);
