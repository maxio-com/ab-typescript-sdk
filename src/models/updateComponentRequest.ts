/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import { UpdateComponent, updateComponentSchema } from './updateComponent.js';

export interface UpdateComponentRequest {
  component: UpdateComponent;
  [key: string]: unknown;
}

export const updateComponentRequestSchema: Schema<UpdateComponentRequest> = expandoObject(
  { component: ['component', lazy(() => updateComponentSchema)] }
);
