/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { OnOffComponent, onOffComponentSchema } from './onOffComponent';

export interface CreateOnOffComponent {
  onOffComponent: OnOffComponent;
}

export const createOnOffComponentSchema: Schema<CreateOnOffComponent> = object({
  onOffComponent: ['on_off_component', lazy(() => onOffComponentSchema)],
});
