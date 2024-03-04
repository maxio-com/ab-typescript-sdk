/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema';
import { Endpoint, endpointSchema } from './endpoint';

export interface EndpointResponse {
  endpoint?: Endpoint;
  [key: string]: unknown;
}

export const endpointResponseSchema: Schema<EndpointResponse> = expandoObject({
  endpoint: ['endpoint', optional(lazy(() => endpointSchema))],
});
