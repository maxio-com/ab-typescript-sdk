/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  expandoObject,
  number,
  optional,
  Schema,
  string,
} from '../schema.js';

export interface ScheduledRenewalConfigurationRequestBody {
  /** (Optional) Start of the renewal term. */
  startsAt?: string;
  /** (Optional) End of the renewal term. */
  endsAt?: string;
  /** (Optional) Lock-in date for the renewal. */
  lockInAt?: string;
  /** (Optional) Existing contract to associate with the scheduled renewal. Contracts must be enabled for your site. */
  contractId?: number;
  /** (Optional) Set to true to create a new contract when contracts are enabled. Contracts must be enabled for your site. */
  createNewContract?: boolean;
  [key: string]: unknown;
}

export const scheduledRenewalConfigurationRequestBodySchema: Schema<ScheduledRenewalConfigurationRequestBody> = expandoObject(
  {
    startsAt: ['starts_at', optional(string())],
    endsAt: ['ends_at', optional(string())],
    lockInAt: ['lock_in_at', optional(string())],
    contractId: ['contract_id', optional(number())],
    createNewContract: ['create_new_contract', optional(boolean())],
  }
);
