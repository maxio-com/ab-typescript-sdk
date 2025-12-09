/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import { OnOffComponent, onOffComponentSchema } from './onOffComponent.js';

export interface CreateOnOffComponent {
  onOffComponent: OnOffComponent;
  [key: string]: unknown;
}

export const createOnOffComponentSchema: Schema<CreateOnOffComponent> = lazy(
  () =>
    expandoObject({
      onOffComponent: ['on_off_component', onOffComponentSchema],
    })
);
