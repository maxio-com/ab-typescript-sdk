/**
 * AdvancedBilling
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
} from '../schema.js';
import {
  MetafieldEnum,
  metafieldEnumSchema,
} from './containers/metafieldEnum.js';
import { MetafieldInput, metafieldInputSchema } from './metafieldInput.js';
import { MetafieldScope, metafieldScopeSchema } from './metafieldScope.js';

export interface Metafield {
  id?: number;
  name?: string;
  /** Warning: When updating a metafield's scope attribute, all scope attributes must be passed. Partially complete scope attributes will override the existing settings. */
  scope?: MetafieldScope;
  /** The amount of subscriptions this metafield has been applied to in Advanced Billing. */
  dataCount?: number;
  /** Indicates the type of metafield. A text metafield allows any string value. Dropdown and radio metafields have a set of values that can be selected.  Defaults to 'text'. */
  inputType?: MetafieldInput;
  mEnum?: MetafieldEnum | null;
  [key: string]: unknown;
}

export const metafieldSchema: Schema<Metafield> = lazy(() =>
  expandoObject({
    id: ['id', optional(number())],
    name: ['name', optional(string())],
    scope: ['scope', optional(metafieldScopeSchema)],
    dataCount: ['data_count', optional(number())],
    inputType: ['input_type', optional(metafieldInputSchema)],
    mEnum: ['enum', optional(nullable(metafieldEnumSchema))],
  })
);
