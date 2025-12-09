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
} from '../schema.js';
import { MetafieldInput, metafieldInputSchema } from './metafieldInput.js';
import { MetafieldScope, metafieldScopeSchema } from './metafieldScope.js';

export interface CreateMetafield {
  name?: string;
  /** Warning: When updating a metafield's scope attribute, all scope attributes must be passed. Partially complete scope attributes will override the existing settings. */
  scope?: MetafieldScope;
  /** Indicates the type of metafield. A text metafield allows any string value. Dropdown and radio metafields have a set of values that can be selected.  Defaults to 'text'. */
  inputType?: MetafieldInput;
  /** Only applicable when input_type is radio or dropdown. Empty strings will not be submitted. */
  mEnum?: string[];
  [key: string]: unknown;
}

export const createMetafieldSchema: Schema<CreateMetafield> = lazy(() =>
  expandoObject({
    name: ['name', optional(string())],
    scope: ['scope', optional(metafieldScopeSchema)],
    inputType: ['input_type', optional(metafieldInputSchema)],
    mEnum: ['enum', optional(array(string()))],
  })
);
