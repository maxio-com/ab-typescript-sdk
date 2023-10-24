/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PaymentCollectionMethodAllocateComponents
 */
export enum PaymentCollectionMethodAllocateComponents {
  Automatic = 'automatic',
  Remittance = 'remittance',
  Prepaid = 'prepaid',
  Invoice = 'invoice',
}

/**
 * Schema for PaymentCollectionMethodAllocateComponents
 */
export const paymentCollectionMethodAllocateComponentsSchema: Schema<PaymentCollectionMethodAllocateComponents> = stringEnum(PaymentCollectionMethodAllocateComponents);
