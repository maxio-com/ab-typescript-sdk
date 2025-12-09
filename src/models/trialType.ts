/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema.js';

/**
 * Enum for TrialType
 */
export enum TrialType {
  NoObligation = 'no_obligation',
  PaymentExpected = 'payment_expected',
}

/**
 * Schema for TrialType
 */
export const trialTypeSchema: Schema<TrialType> = stringEnum(TrialType);
