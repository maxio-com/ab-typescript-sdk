/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import { Site, siteSchema } from './site.js';

export interface SiteResponse {
  site: Site;
  [key: string]: unknown;
}

export const siteResponseSchema: Schema<SiteResponse> = lazy(() =>
  expandoObject({ site: ['site', siteSchema] })
);
