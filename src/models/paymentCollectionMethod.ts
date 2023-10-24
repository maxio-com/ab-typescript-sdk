/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PaymentCollectionMethod
 */
export enum PaymentCollectionMethod {
  Automatic = 'automatic',
  Remittance = 'remittance',
  Prepaid = 'prepaid',
  Invoice = 'invoice',
}

/**
 * Schema for PaymentCollectionMethod
 */
export const paymentCollectionMethodSchema: Schema<PaymentCollectionMethod> = stringEnum(PaymentCollectionMethod);
