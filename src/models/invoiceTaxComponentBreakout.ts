/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema, string } from '../schema';

export interface InvoiceTaxComponentBreakout {
  taxRuleId?: number;
  percentage?: string;
  countryCode?: string;
  subdivisionCode?: string;
  [key: string]: unknown;
}

export const invoiceTaxComponentBreakoutSchema: Schema<InvoiceTaxComponentBreakout> = expandoObject(
  {
    taxRuleId: ['tax_rule_id', optional(number())],
    percentage: ['percentage', optional(string())],
    countryCode: ['country_code', optional(string())],
    subdivisionCode: ['subdivision_code', optional(string())],
  }
);
