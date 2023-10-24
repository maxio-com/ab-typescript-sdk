/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  ListPublicKeysMeta,
  listPublicKeysMetaSchema,
} from './listPublicKeysMeta';
import { PublicKey, publicKeySchema } from './publicKey';

export interface ListPublicKeysResponse {
  chargifyJsKeys?: PublicKey[];
  meta?: ListPublicKeysMeta;
}

export const listPublicKeysResponseSchema: Schema<ListPublicKeysResponse> = object(
  {
    chargifyJsKeys: [
      'chargify_js_keys',
      optional(array(lazy(() => publicKeySchema))),
    ],
    meta: ['meta', optional(lazy(() => listPublicKeysMetaSchema))],
  }
);
