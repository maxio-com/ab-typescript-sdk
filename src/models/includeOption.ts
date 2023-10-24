/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for IncludeOption
 */
export enum IncludeOption {
  Exclude = '0',
  Include = '1',
}

/**
 * Schema for IncludeOption
 */
export const includeOptionSchema: Schema<IncludeOption> = stringEnum(IncludeOption);
