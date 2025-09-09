/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema.js';
import {
  ListPublicKeysMeta,
  listPublicKeysMetaSchema,
} from './listPublicKeysMeta.js';
import { PublicKey, publicKeySchema } from './publicKey.js';

export interface ListPublicKeysResponse {
  chargifyJsKeys?: PublicKey[];
  meta?: ListPublicKeysMeta;
  [key: string]: unknown;
}

export const listPublicKeysResponseSchema: Schema<ListPublicKeysResponse> = expandoObject(
  {
    chargifyJsKeys: [
      'chargify_js_keys',
      optional(array(lazy(() => publicKeySchema))),
    ],
    meta: ['meta', optional(lazy(() => listPublicKeysMetaSchema))],
  }
);
