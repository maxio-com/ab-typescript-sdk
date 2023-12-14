/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  CreateAllocationRequest,
  createAllocationRequestSchema,
} from './createAllocationRequest';
import { CreditType, creditTypeSchema } from './creditType';
import {
  PaymentCollectionMethod1,
  paymentCollectionMethod1Schema,
} from './paymentCollectionMethod1';

export interface AllocateComponents {
  prorationUpgradeScheme?: string;
  prorationDowngradeScheme?: string;
  allocations?: CreateAllocationRequest[];
  accrueCharge?: boolean;
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
  /** (Optional) If not passed, the allocation(s) will use the payment collection method on the subscription */
  paymentCollectionMethod?: PaymentCollectionMethod1;
}

export const allocateComponentsSchema: Schema<AllocateComponents> = object({
  prorationUpgradeScheme: ['proration_upgrade_scheme', optional(string())],
  prorationDowngradeScheme: ['proration_downgrade_scheme', optional(string())],
  allocations: [
    'allocations',
    optional(array(lazy(() => createAllocationRequestSchema))),
  ],
  accrueCharge: ['accrue_charge', optional(boolean())],
  upgradeCharge: ['upgrade_charge', optional(nullable(creditTypeSchema))],
  downgradeCredit: ['downgrade_credit', optional(nullable(creditTypeSchema))],
  paymentCollectionMethod: [
    'payment_collection_method',
    optional(paymentCollectionMethod1Schema),
  ],
});
