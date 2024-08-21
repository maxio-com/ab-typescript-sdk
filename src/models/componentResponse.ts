/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import { Component, componentSchema } from './component';

export interface ComponentResponse {
  component: Component;
  [key: string]: unknown;
}

export const componentResponseSchema: Schema<ComponentResponse> = expandoObject(
  { component: ['component', lazy(() => componentSchema)] }
);
