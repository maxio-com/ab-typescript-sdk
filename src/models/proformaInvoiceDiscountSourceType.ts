/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ProformaInvoiceDiscountSourceType
 */
export enum ProformaInvoiceDiscountSourceType {
  Coupon = 'Coupon',
  Referral = 'Referral',
}

/**
 * Schema for ProformaInvoiceDiscountSourceType
 */
export const  proformaInvoiceDiscountSourceTypeSchema: Schema<ProformaInvoiceDiscountSourceType> = stringEnum(ProformaInvoiceDiscountSourceType);
