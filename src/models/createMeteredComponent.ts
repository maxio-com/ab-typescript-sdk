/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { MeteredComponent, meteredComponentSchema } from './meteredComponent';

export interface CreateMeteredComponent {
  meteredComponent: MeteredComponent;
}

export const createMeteredComponentSchema: Schema<CreateMeteredComponent> = object(
  {
    meteredComponent: ['metered_component', lazy(() => meteredComponentSchema)],
  }
);
