/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import { Event, eventSchema } from './event';

export interface EventResponse {
  event: Event;
  [key: string]: unknown;
}

export const eventResponseSchema: Schema<EventResponse> = expandoObject({
  event: ['event', lazy(() => eventSchema)],
});
