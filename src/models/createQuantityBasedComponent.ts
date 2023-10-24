/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  QuantityBasedComponent,
  quantityBasedComponentSchema,
} from './quantityBasedComponent';

export interface CreateQuantityBasedComponent {
  quantityBasedComponent: QuantityBasedComponent;
}

export const createQuantityBasedComponentSchema: Schema<CreateQuantityBasedComponent> = object(
  {
    quantityBasedComponent: [
      'quantity_based_component',
      lazy(() => quantityBasedComponentSchema),
    ],
  }
);
