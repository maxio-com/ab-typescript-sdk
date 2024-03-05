/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  lazy,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import { MetafieldEnum, metafieldEnumSchema } from './containers/metafieldEnum';
import { MetafieldInput, metafieldInputSchema } from './metafieldInput';
import { MetafieldScope, metafieldScopeSchema } from './metafieldScope';

export interface Metafield {
  id?: number;
  name?: string;
  /** Warning: When updating a metafield's scope attribute, all scope attributes must be passed. Partially complete scope attributes will override the existing settings. */
  scope?: MetafieldScope;
  /** the amount of subscriptions this metafield has been applied to in Chargify */
  dataCount?: number;
  /** Indicates how data should be added to the metafield. For example, a text type is just a string, so a given metafield of this type can have any value attached. On the other hand, dropdown and radio have a set of allowed values that can be input, and appear differently on a Public Signup Page. Defaults to 'text' */
  inputType?: MetafieldInput;
  mEnum?: MetafieldEnum | null;
  [key: string]: unknown;
}

export const metafieldSchema: Schema<Metafield> = expandoObject({
  id: ['id', optional(number())],
  name: ['name', optional(string())],
  scope: ['scope', optional(lazy(() => metafieldScopeSchema))],
  dataCount: ['data_count', optional(number())],
  inputType: ['input_type', optional(metafieldInputSchema)],
  mEnum: ['enum', optional(nullable(metafieldEnumSchema))],
});
