/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface SiteStatistics {
  totalSubscriptions?: number;
  subscriptionsToday?: number;
  totalRevenue?: string;
  revenueToday?: string;
  revenueThisMonth?: string;
  revenueThisYear?: string;
  totalCanceledSubscriptions?: number;
  totalActiveSubscriptions?: number;
  totalPastDueSubscriptions?: number;
  totalUnpaidSubscriptions?: number;
  totalDunningSubscriptions?: number;
}

export const siteStatisticsSchema: Schema<SiteStatistics> = object({
  totalSubscriptions: ['total_subscriptions', optional(number())],
  subscriptionsToday: ['subscriptions_today', optional(number())],
  totalRevenue: ['total_revenue', optional(string())],
  revenueToday: ['revenue_today', optional(string())],
  revenueThisMonth: ['revenue_this_month', optional(string())],
  revenueThisYear: ['revenue_this_year', optional(string())],
  totalCanceledSubscriptions: [
    'total_canceled_subscriptions',
    optional(number()),
  ],
  totalActiveSubscriptions: ['total_active_subscriptions', optional(number())],
  totalPastDueSubscriptions: [
    'total_past_due_subscriptions',
    optional(number()),
  ],
  totalUnpaidSubscriptions: ['total_unpaid_subscriptions', optional(number())],
  totalDunningSubscriptions: [
    'total_dunning_subscriptions',
    optional(number()),
  ],
});
