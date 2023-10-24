/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for TaxDestinationAddress
 */
export enum TaxDestinationAddress {
  ShippingThenBilling = 'shipping_then_billing',
  BillingThenShipping = 'billing_then_shipping',
  ShippingOnly = 'shipping_only',
  BillingOnly = 'billing_only',
}

/**
 * Schema for TaxDestinationAddress
 */
export const taxDestinationAddressSchema: Schema<TaxDestinationAddress> = stringEnum(TaxDestinationAddress);
