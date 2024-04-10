/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ProformaInvoiceTaxSourceType
 */
export enum ProformaInvoiceTaxSourceType {
  Tax = 'Tax',
  Avalara = 'Avalara',
}

/**
 * Schema for ProformaInvoiceTaxSourceType
 */
export const  proformaInvoiceTaxSourceTypeSchema: Schema<ProformaInvoiceTaxSourceType> = stringEnum(ProformaInvoiceTaxSourceType);
