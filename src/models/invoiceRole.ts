/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for InvoiceRole
 */
export enum InvoiceRole {
  Unset = 'unset',
  Signup = 'signup',
  Renewal = 'renewal',
  Usage = 'usage',
  Reactivation = 'reactivation',
  Proration = 'proration',
  Migration = 'migration',
  Adhoc = 'adhoc',
  Backport = 'backport',
  Backportbalancereconciliation = 'backport-balance-reconciliation',
}

/**
 * Schema for InvoiceRole
 */
export const invoiceRoleSchema: Schema<InvoiceRole> = stringEnum(InvoiceRole);
