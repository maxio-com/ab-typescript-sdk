/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { MetafieldEnum, metafieldEnumSchema } from './containers/metafieldEnum';
import { MetafieldScope, metafieldScopeSchema } from './metafieldScope';

export interface Metafield {
  id?: number;
  name?: string;
  /** Warning: When updating a metafield's scope attribute, all scope attributes must be passed. Partially complete scope attributes will override the existing settings. */
  scope?: MetafieldScope;
  /** the amount of subscriptions this metafield has been applied to in Chargify */
  dataCount?: number;
  inputType?: string;
  mEnum?: MetafieldEnum[] | null;
}

export const metafieldSchema: Schema<Metafield> = object({
  id: ['id', optional(number())],
  name: ['name', optional(string())],
  scope: ['scope', optional(lazy(() => metafieldScopeSchema))],
  dataCount: ['data_count', optional(number())],
  inputType: ['input_type', optional(string())],
  mEnum: ['enum', optional(nullable(array(metafieldEnumSchema)))],
});
