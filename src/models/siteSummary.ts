/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, number, object, optional, Schema, string } from '../schema';
import { SiteStatistics, siteStatisticsSchema } from './siteStatistics';

export interface SiteSummary {
  sellerName?: string;
  siteName?: string;
  siteId?: number;
  siteCurrency?: string;
  stats?: SiteStatistics;
}

export const siteSummarySchema: Schema<SiteSummary> = object({
  sellerName: ['seller_name', optional(string())],
  siteName: ['site_name', optional(string())],
  siteId: ['site_id', optional(number())],
  siteCurrency: ['site_currency', optional(string())],
  stats: ['stats', optional(lazy(() => siteStatisticsSchema))],
});
