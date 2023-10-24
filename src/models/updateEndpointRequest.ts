/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { UpdateEndpoint, updateEndpointSchema } from './updateEndpoint';

/** Used to Create or Update Endpoint */
export interface UpdateEndpointRequest {
  /** Used to Create or Update Endpoint */
  endpoint: UpdateEndpoint;
}

export const updateEndpointRequestSchema: Schema<UpdateEndpointRequest> = object(
  { endpoint: ['endpoint', lazy(() => updateEndpointSchema)] }
);
