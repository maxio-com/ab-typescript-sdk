/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema.js';

/**
 * Enum for CollectionMethod1
 */
export enum CollectionMethod1 {
  Automatic = 'automatic',
  Remittance = 'remittance',
  Prepaid = 'prepaid',
}

/**
 * Schema for CollectionMethod1
 */
export const collectionMethod1Schema: Schema<CollectionMethod1> = stringEnum(
  CollectionMethod1
);
