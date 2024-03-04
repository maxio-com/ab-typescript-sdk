/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  expandoObject,
  lazy,
  nullable,
  optional,
  Schema,
  string,
} from '../schema';
import { CollectionMethod, collectionMethodSchema } from './collectionMethod';
import { CreateAllocation, createAllocationSchema } from './createAllocation';
import { CreditType, creditTypeSchema } from './creditType';

export interface AllocateComponents {
  prorationUpgradeScheme?: string;
  prorationDowngradeScheme?: string;
  allocations?: CreateAllocation[];
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
  paymentCollectionMethod?: CollectionMethod;
  /**
   * If true, if the immediate component payment fails, initiate dunning for the subscription.
   * Otherwise, leave the charges on the subscription to pay for at renewal.
   */
  initiateDunning?: boolean;
  [key: string]: unknown;
}

export const allocateComponentsSchema: Schema<AllocateComponents> = expandoObject(
  {
    prorationUpgradeScheme: ['proration_upgrade_scheme', optional(string())],
    prorationDowngradeScheme: [
      'proration_downgrade_scheme',
      optional(string()),
    ],
    allocations: [
      'allocations',
      optional(array(lazy(() => createAllocationSchema))),
    ],
    accrueCharge: ['accrue_charge', optional(boolean())],
    upgradeCharge: ['upgrade_charge', optional(nullable(creditTypeSchema))],
    downgradeCredit: ['downgrade_credit', optional(nullable(creditTypeSchema))],
    paymentCollectionMethod: [
      'payment_collection_method',
      optional(collectionMethodSchema),
    ],
    initiateDunning: ['initiate_dunning', optional(boolean())],
  }
);
