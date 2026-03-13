/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  lazy,
  number,
  optional,
  Schema,
  string,
} from '../schema.js';
import { Contract, contractSchema } from './contract.js';
import {
  ScheduledRenewalConfigurationItem,
  scheduledRenewalConfigurationItemSchema,
} from './scheduledRenewalConfigurationItem.js';

export interface ScheduledRenewalConfiguration {
  /** ID of the renewal. */
  id?: number;
  /** ID of the site to which the renewal belongs. */
  siteId?: number;
  /** The id of the subscription. */
  subscriptionId?: number;
  startsAt?: string;
  endsAt?: string;
  lockInAt?: string;
  createdAt?: string;
  status?: string;
  scheduledRenewalConfigurationItems?: ScheduledRenewalConfigurationItem[];
  /** Contract linked to the scheduled renewal configuration. */
  contract?: Contract;
  [key: string]: unknown;
}

export const scheduledRenewalConfigurationSchema: Schema<ScheduledRenewalConfiguration> = lazy(
  () =>
    expandoObject({
      id: ['id', optional(number())],
      siteId: ['site_id', optional(number())],
      subscriptionId: ['subscription_id', optional(number())],
      startsAt: ['starts_at', optional(string())],
      endsAt: ['ends_at', optional(string())],
      lockInAt: ['lock_in_at', optional(string())],
      createdAt: ['created_at', optional(string())],
      status: ['status', optional(string())],
      scheduledRenewalConfigurationItems: [
        'scheduled_renewal_configuration_items',
        optional(array(scheduledRenewalConfigurationItemSchema)),
      ],
      contract: ['contract', optional(contractSchema)],
    })
);
