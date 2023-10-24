/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, number, object, optional, Schema, string } from '../schema';

export interface CreateOrUpdateProduct {
  name: string;
  handle?: string;
  description: string;
  accountingCode?: string;
  requireCreditCard?: boolean;
  priceInCents: number;
  interval: number;
  intervalUnit: string;
  autoCreateSignupPage?: boolean;
  taxCode?: string;
}

export const createOrUpdateProductSchema: Schema<CreateOrUpdateProduct> = object(
  {
    name: ['name', string()],
    handle: ['handle', optional(string())],
    description: ['description', string()],
    accountingCode: ['accounting_code', optional(string())],
    requireCreditCard: ['require_credit_card', optional(boolean())],
    priceInCents: ['price_in_cents', number()],
    interval: ['interval', number()],
    intervalUnit: ['interval_unit', string()],
    autoCreateSignupPage: ['auto_create_signup_page', optional(boolean())],
    taxCode: ['tax_code', optional(string())],
  }
);
