/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import { Site, siteSchema } from './site';

export interface SiteResponse {
  site: Site;
  [key: string]: unknown;
}

export const siteResponseSchema: Schema<SiteResponse> = expandoObject({
  site: ['site', lazy(() => siteSchema)],
});
