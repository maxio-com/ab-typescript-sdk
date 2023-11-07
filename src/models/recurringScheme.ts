/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for RecurringScheme
 */
export enum RecurringScheme {
  DoNotRecur = 'do_not_recur',
  RecurIndefinitely = 'recur_indefinitely',
  RecurWithDuration = 'recur_with_duration',
}

/**
 * Schema for RecurringScheme
 */
export const recurringSchemeSchema: Schema<RecurringScheme> = stringEnum(RecurringScheme);
