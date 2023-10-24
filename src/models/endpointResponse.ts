/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Endpoint, endpointSchema } from './endpoint';

export interface EndpointResponse {
  endpoint?: Endpoint;
}

export const endpointResponseSchema: Schema<EndpointResponse> = object({
  endpoint: ['endpoint', optional(lazy(() => endpointSchema))],
});
