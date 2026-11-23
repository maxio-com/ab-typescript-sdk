/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema.js';

/**
 * Enum for ProformaInvoiceTaxSourceType
 */
export enum ProformaInvoiceTaxSourceType {
  Tax = 'Tax',
  Avalara = 'Avalara',
  Anrok = 'Anrok',
  TaxJar = 'TaxJar',
  Numeral = 'Numeral',
  Sphere = 'Sphere',
  Taxwire = 'Taxwire',
}

/**
 * Schema for ProformaInvoiceTaxSourceType
 */
export const proformaInvoiceTaxSourceTypeSchema: Schema<ProformaInvoiceTaxSourceType> = stringEnum(
  ProformaInvoiceTaxSourceType
);
