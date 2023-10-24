/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { Event, eventSchema } from './event';

export interface EventResponse {
  event: Event;
}

export const eventResponseSchema: Schema<EventResponse> = object({
  event: ['event', lazy(() => eventSchema)],
});
