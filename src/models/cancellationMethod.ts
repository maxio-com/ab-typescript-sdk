/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CancellationMethod
 */
export enum CancellationMethod {
  MerchantUi = 'merchant_ui',
  MerchantApi = 'merchant_api',
  Dunning = 'dunning',
  BillingPortal = 'billing_portal',
}

/**
 * Schema for CancellationMethod
 */
export const cancellationMethodSchema: Schema<CancellationMethod> = stringEnum(CancellationMethod);
