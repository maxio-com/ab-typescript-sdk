/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ProformaInvoiceStatus
 */
export enum ProformaInvoiceStatus {
  Draft = 'draft',
  Voided = 'voided',
  Archived = 'archived',
}

/**
 * Schema for ProformaInvoiceStatus
 */
export const proformaInvoiceStatusSchema: Schema<ProformaInvoiceStatus> = stringEnum(
  ProformaInvoiceStatus
);
