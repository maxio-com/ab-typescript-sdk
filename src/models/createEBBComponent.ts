/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import { EBBComponent, eBBComponentSchema } from './eBBComponent';

export interface CreateEBBComponent {
  eventBasedComponent: EBBComponent;
  [key: string]: unknown;
}

export const createEBBComponentSchema: Schema<CreateEBBComponent> = expandoObject(
  {
    eventBasedComponent: [
      'event_based_component',
      lazy(() => eBBComponentSchema),
    ],
  }
);
