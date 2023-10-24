/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { UpdateComponent, updateComponentSchema } from './updateComponent';

export interface UpdateComponentRequest {
  component: UpdateComponent;
}

export const updateComponentRequestSchema: Schema<UpdateComponentRequest> = object(
  { component: ['component', lazy(() => updateComponentSchema)] }
);
