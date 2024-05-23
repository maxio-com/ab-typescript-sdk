/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for InvoiceRole2
 */
export enum InvoiceRole2 {
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
 * Schema for InvoiceRole2
 */
export const  invoiceRole2Schema: Schema<InvoiceRole2> = stringEnum(InvoiceRole2);
