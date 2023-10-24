/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface SaleRepSettings {
  customerName?: string;
  subscriptionId?: number;
  siteLink?: string;
  siteName?: string;
  subscriptionMrr?: string;
  salesRepId?: number;
  salesRepName?: string;
}

export const saleRepSettingsSchema: Schema<SaleRepSettings> = object({
  customerName: ['customer_name', optional(string())],
  subscriptionId: ['subscription_id', optional(number())],
  siteLink: ['site_link', optional(string())],
  siteName: ['site_name', optional(string())],
  subscriptionMrr: ['subscription_mrr', optional(string())],
  salesRepId: ['sales_rep_id', optional(number())],
  salesRepName: ['sales_rep_name', optional(string())],
});
