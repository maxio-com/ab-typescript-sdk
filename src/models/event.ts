/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, number, object, Schema, string } from '../schema';
import {
  EventEventSpecificData,
  eventEventSpecificDataSchema,
} from './containers/eventEventSpecificData';

export interface Event {
  id: number;
  key: string;
  message: string;
  subscriptionId: number;
  createdAt: string;
  eventSpecificData: EventEventSpecificData;
}

export const eventSchema: Schema<Event> = object({
  id: ['id', number()],
  key: ['key', string()],
  message: ['message', string()],
  subscriptionId: ['subscription_id', number()],
  createdAt: ['created_at', string()],
  eventSpecificData: [
    'event_specific_data',
    lazy(() => eventEventSpecificDataSchema),
  ],
});
