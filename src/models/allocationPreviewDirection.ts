/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AllocationPreviewDirection
 */
export enum AllocationPreviewDirection {
  Upgrade = 'upgrade',
  Downgrade = 'downgrade',
}

/**
 * Schema for AllocationPreviewDirection
 */
export const allocationPreviewDirectionSchema: Schema<AllocationPreviewDirection> = stringEnum(AllocationPreviewDirection);
