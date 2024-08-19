/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ServiceCreditType
 */
export enum ServiceCreditType {
  Credit = 'Credit',
  Debit = 'Debit',
}

/**
 * Schema for ServiceCreditType
 */
export const serviceCreditTypeSchema: Schema<ServiceCreditType> = stringEnum(
  ServiceCreditType
);
