/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AllocationPreviewLineItemKind
 */
export enum AllocationPreviewLineItemKind {
  QuantityBasedComponent = 'quantity_based_component',
  OnOffComponent = 'on_off_component',
  Coupon = 'coupon',
  Tax = 'tax',
}

/**
 * Schema for AllocationPreviewLineItemKind
 */
export const allocationPreviewLineItemKindSchema: Schema<AllocationPreviewLineItemKind> = stringEnum(
  AllocationPreviewLineItemKind
);
