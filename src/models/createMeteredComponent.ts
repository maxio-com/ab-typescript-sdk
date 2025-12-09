/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  MeteredComponent,
  meteredComponentSchema,
} from './meteredComponent.js';

export interface CreateMeteredComponent {
  meteredComponent: MeteredComponent;
  [key: string]: unknown;
}

export const createMeteredComponentSchema: Schema<CreateMeteredComponent> = lazy(
  () =>
    expandoObject({
      meteredComponent: ['metered_component', meteredComponentSchema],
    })
);
