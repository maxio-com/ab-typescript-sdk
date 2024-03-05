/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import {
  CreateOrUpdateEndpoint,
  createOrUpdateEndpointSchema,
} from './createOrUpdateEndpoint';

/** Used to Create or Update Endpoint */
export interface CreateOrUpdateEndpointRequest {
  /** Used to Create or Update Endpoint */
  endpoint: CreateOrUpdateEndpoint;
  [key: string]: unknown;
}

export const createOrUpdateEndpointRequestSchema: Schema<CreateOrUpdateEndpointRequest> = expandoObject(
  { endpoint: ['endpoint', lazy(() => createOrUpdateEndpointSchema)] }
);
