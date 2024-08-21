/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import { UpdateComponent, updateComponentSchema } from './updateComponent';

export interface UpdateComponentRequest {
  component: UpdateComponent;
  [key: string]: unknown;
}

export const updateComponentRequestSchema: Schema<UpdateComponentRequest> = expandoObject(
  { component: ['component', lazy(() => updateComponentSchema)] }
);
