/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for BillingManifestLineItemKind
 */
export enum BillingManifestLineItemKind {
  Baseline = 'baseline',
  Initial = 'initial',
  Trial = 'trial',
  Coupon = 'coupon',
  Component = 'component',
  Tax = 'tax',
}

/**
 * Schema for BillingManifestLineItemKind
 */
export const  billingManifestLineItemKindSchema: Schema<BillingManifestLineItemKind> = stringEnum(BillingManifestLineItemKind);
