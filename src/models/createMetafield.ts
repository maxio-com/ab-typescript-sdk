/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  lazy,
  optional,
  Schema,
  string,
} from '../schema';
import { MetafieldInput, metafieldInputSchema } from './metafieldInput';
import { MetafieldScope, metafieldScopeSchema } from './metafieldScope';

export interface CreateMetafield {
  name?: string;
  /** Warning: When updating a metafield's scope attribute, all scope attributes must be passed. Partially complete scope attributes will override the existing settings. */
  scope?: MetafieldScope;
  /** Indicates how data should be added to the metafield. For example, a text type is just a string, so a given metafield of this type can have any value attached. On the other hand, dropdown and radio have a set of allowed values that can be input, and appear differently on a Public Signup Page. Defaults to 'text' */
  inputType?: MetafieldInput;
  /** Only applicable when input_type is radio or dropdown. Empty strings will not be submitted. */
  mEnum?: string[];
  [key: string]: unknown;
}

export const createMetafieldSchema: Schema<CreateMetafield> = expandoObject({
  name: ['name', optional(string())],
  scope: ['scope', optional(lazy(() => metafieldScopeSchema))],
  inputType: ['input_type', optional(metafieldInputSchema)],
  mEnum: ['enum', optional(array(string()))],
});
