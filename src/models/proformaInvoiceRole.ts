/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ProformaInvoiceRole
 */
export enum ProformaInvoiceRole {
  Unset = 'unset',
  Proforma = 'proforma',
  ProformaAdhoc = 'proforma_adhoc',
  ProformaAutomatic = 'proforma_automatic',
}

/**
 * Schema for ProformaInvoiceRole
 */
export const proformaInvoiceRoleSchema: Schema<ProformaInvoiceRole> = stringEnum(
  ProformaInvoiceRole
);
