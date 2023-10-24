/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { Site, siteSchema } from './site';

export interface SiteResponse {
  site: Site;
}

export const siteResponseSchema: Schema<SiteResponse> = object({
  site: ['site', lazy(() => siteSchema)],
});
