/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ListSubscriptionComponentsInclude
 */
export enum ListSubscriptionComponentsInclude {
  Subscription = 'subscription',
}

/**
 * Schema for ListSubscriptionComponentsInclude
 */
export const listSubscriptionComponentsIncludeSchema: Schema<ListSubscriptionComponentsInclude> = stringEnum(ListSubscriptionComponentsInclude);
