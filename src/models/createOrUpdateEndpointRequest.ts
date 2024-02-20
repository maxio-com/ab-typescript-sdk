/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  CreateOrUpdateEndpoint,
  createOrUpdateEndpointSchema,
} from './createOrUpdateEndpoint';

/** Used to Create or Update Endpoint */
export interface CreateOrUpdateEndpointRequest {
  /** Used to Create or Update Endpoint */
  endpoint: CreateOrUpdateEndpoint;
}

export const createOrUpdateEndpointRequestSchema: Schema<CreateOrUpdateEndpointRequest> = object(
  { endpoint: ['endpoint', lazy(() => createOrUpdateEndpointSchema)] }
);
