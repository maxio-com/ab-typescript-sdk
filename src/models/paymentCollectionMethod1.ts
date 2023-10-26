/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PaymentCollectionMethod1
 */
export enum PaymentCollectionMethod1 {
  Automatic = 'automatic',
  Remittance = 'remittance',
  Prepaid = 'prepaid',
  Invoice = 'invoice',
}

/**
 * Schema for PaymentCollectionMethod1
 */
export const paymentCollectionMethod1Schema: Schema<PaymentCollectionMethod1> = stringEnum(PaymentCollectionMethod1);
