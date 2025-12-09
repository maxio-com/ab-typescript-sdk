/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import { EBBComponent, eBBComponentSchema } from './eBBComponent.js';

export interface CreateEBBComponent {
  eventBasedComponent: EBBComponent;
  [key: string]: unknown;
}

export const createEBBComponentSchema: Schema<CreateEBBComponent> = lazy(() =>
  expandoObject({
    eventBasedComponent: ['event_based_component', eBBComponentSchema],
  })
);
