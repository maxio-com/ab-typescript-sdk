/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ChargebackStatus
 */
export enum ChargebackStatus {
  Open = 'open',
  Lost = 'lost',
  Won = 'won',
  Closed = 'closed',
}

/**
 * Schema for ChargebackStatus
 */
export const chargebackStatusSchema: Schema<ChargebackStatus> = stringEnum(
  ChargebackStatus
);
