/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { Component, componentSchema } from './component';

export interface ComponentResponse {
  component: Component;
}

export const componentResponseSchema: Schema<ComponentResponse> = object({
  component: ['component', lazy(() => componentSchema)],
});
