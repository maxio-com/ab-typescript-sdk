/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  CreateMetafieldsRequestMetafields,
  createMetafieldsRequestMetafieldsSchema,
} from './containers/createMetafieldsRequestMetafields';

export interface CreateMetafieldsRequest {
  metafields: CreateMetafieldsRequestMetafields;
}

export const createMetafieldsRequestSchema: Schema<CreateMetafieldsRequest> = object(
  {
    metafields: [
      'metafields',
      lazy(() => createMetafieldsRequestMetafieldsSchema),
    ],
  }
);
