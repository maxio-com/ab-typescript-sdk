/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, Schema, string } from '../schema';

export interface AttributeError {
  attribute: string[];
  [key: string]: unknown;
}

export const attributeErrorSchema: Schema<AttributeError> = expandoObject({
  attribute: ['attribute', array(string())],
});
