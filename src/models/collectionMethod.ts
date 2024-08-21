/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CollectionMethod
 */
export enum CollectionMethod {
  Automatic = 'automatic',
  Remittance = 'remittance',
  Prepaid = 'prepaid',
  Invoice = 'invoice',
}

/**
 * Schema for CollectionMethod
 */
export const collectionMethodSchema: Schema<CollectionMethod> = stringEnum(
  CollectionMethod
);
