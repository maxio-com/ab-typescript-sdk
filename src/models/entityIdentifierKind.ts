/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema.js';

/**
 * Enum for EntityIdentifierKind
 */
export enum EntityIdentifierKind {
  VatEu = 'vat_eu',
  NationalTax = 'national_tax',
  CompanyReg = 'company_reg',
  Gln = 'gln',
  Duns = 'duns',
  Lei = 'lei',
}

/**
 * Schema for EntityIdentifierKind
 */
export const entityIdentifierKindSchema: Schema<EntityIdentifierKind> = stringEnum(
  EntityIdentifierKind
);
