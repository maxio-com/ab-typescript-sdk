/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import {
  QuantityBasedComponent,
  quantityBasedComponentSchema,
} from './quantityBasedComponent';

export interface CreateQuantityBasedComponent {
  quantityBasedComponent: QuantityBasedComponent;
  [key: string]: unknown;
}

export const createQuantityBasedComponentSchema: Schema<CreateQuantityBasedComponent> = expandoObject(
  {
    quantityBasedComponent: [
      'quantity_based_component',
      lazy(() => quantityBasedComponentSchema),
    ],
  }
);
