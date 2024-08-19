/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';

export interface SaleRepSubscription {
  id?: number;
  siteName?: string;
  subscriptionUrl?: string;
  customerName?: string;
  createdAt?: string;
  mrr?: string;
  usage?: string;
  recurring?: string;
  lastPayment?: string;
  churnDate?: string | null;
  [key: string]: unknown;
}

export const saleRepSubscriptionSchema: Schema<SaleRepSubscription> = expandoObject(
  {
    id: ['id', optional(number())],
    siteName: ['site_name', optional(string())],
    subscriptionUrl: ['subscription_url', optional(string())],
    customerName: ['customer_name', optional(string())],
    createdAt: ['created_at', optional(string())],
    mrr: ['mrr', optional(string())],
    usage: ['usage', optional(string())],
    recurring: ['recurring', optional(string())],
    lastPayment: ['last_payment', optional(string())],
    churnDate: ['churn_date', optional(nullable(string()))],
  }
);
