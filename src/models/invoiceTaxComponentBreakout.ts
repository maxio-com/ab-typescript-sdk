/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema, string } from '../schema';

export interface InvoiceTaxComponentBreakout {
  taxRuleId?: number;
  percentage?: string;
  countryCode?: string;
  subdivisionCode?: string;
  taxAmount?: string;
  taxableAmount?: string;
  taxExemptAmount?: string;
  nonTaxableAmount?: string;
  taxName?: string;
  taxType?: string;
  rateType?: string;
  taxAuthorityType?: number;
  stateAssignedNo?: string;
  taxSubType?: string;
  [key: string]: unknown;
}

export const invoiceTaxComponentBreakoutSchema: Schema<InvoiceTaxComponentBreakout> = expandoObject(
  {
    taxRuleId: ['tax_rule_id', optional(number())],
    percentage: ['percentage', optional(string())],
    countryCode: ['country_code', optional(string())],
    subdivisionCode: ['subdivision_code', optional(string())],
    taxAmount: ['tax_amount', optional(string())],
    taxableAmount: ['taxable_amount', optional(string())],
    taxExemptAmount: ['tax_exempt_amount', optional(string())],
    nonTaxableAmount: ['non_taxable_amount', optional(string())],
    taxName: ['tax_name', optional(string())],
    taxType: ['tax_type', optional(string())],
    rateType: ['rate_type', optional(string())],
    taxAuthorityType: ['tax_authority_type', optional(number())],
    stateAssignedNo: ['state_assigned_no', optional(string())],
    taxSubType: ['tax_sub_type', optional(string())],
  }
);
