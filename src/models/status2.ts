/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema.js';

/**
 * Enum for Status2
 */
export enum Status2 {
  Active = 'active',
  Archived = 'archived',
}

/**
 * Schema for Status2
 */
export const status2Schema: Schema<Status2> = stringEnum(Status2);
