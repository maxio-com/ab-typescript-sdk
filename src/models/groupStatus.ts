/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema.js';

/**
 * Enum for GroupStatus
 */
export enum GroupStatus {
  Ungrouped = 'ungrouped',
  Grouped = 'grouped',
}

/**
 * Schema for GroupStatus
 */
export const groupStatusSchema: Schema<GroupStatus> = stringEnum(GroupStatus);
