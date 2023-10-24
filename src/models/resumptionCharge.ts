/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ResumptionCharge
 */
export enum ResumptionCharge {
  Prorated = 'prorated',
  Immediate = 'immediate',
  Delayed = 'delayed',
}

/**
 * Schema for ResumptionCharge
 */
export const resumptionChargeSchema: Schema<ResumptionCharge> = stringEnum(ResumptionCharge);
