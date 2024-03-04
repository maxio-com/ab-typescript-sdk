/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema } from '../schema';
import {
  UpdateMetafieldsRequestMetafields,
  updateMetafieldsRequestMetafieldsSchema,
} from './containers/updateMetafieldsRequestMetafields';

export interface UpdateMetafieldsRequest {
  metafields?: UpdateMetafieldsRequestMetafields;
  [key: string]: unknown;
}

export const updateMetafieldsRequestSchema: Schema<UpdateMetafieldsRequest> = expandoObject(
  {
    metafields: [
      'metafields',
      optional(updateMetafieldsRequestMetafieldsSchema),
    ],
  }
);
