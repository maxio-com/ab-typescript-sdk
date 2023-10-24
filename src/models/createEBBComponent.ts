/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { EBBComponent, eBBComponentSchema } from './eBBComponent';

export interface CreateEBBComponent {
  eventBasedComponent: EBBComponent;
}

export const createEBBComponentSchema: Schema<CreateEBBComponent> = object({
  eventBasedComponent: [
    'event_based_component',
    lazy(() => eBBComponentSchema),
  ],
});
