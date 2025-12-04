/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema.js';
import { Endpoint, endpointSchema } from './endpoint.js';

export interface EndpointResponse {
  endpoint?: Endpoint;
  [key: string]: unknown;
}

export const endpointResponseSchema: Schema<EndpointResponse> = lazy(() =>
  expandoObject({ endpoint: ['endpoint', optional(endpointSchema)] })
);
