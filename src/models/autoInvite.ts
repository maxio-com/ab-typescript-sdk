/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, numberEnum } from '../schema';

/**
 * Enum for AutoInvite
 */
export enum AutoInvite {
  No = 0,
  Yes = 1,
}

/**
 * Schema for AutoInvite
 */
export const autoInviteSchema: Schema<AutoInvite> = numberEnum(AutoInvite);
