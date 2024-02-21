/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, number, object, Schema, string } from '../schema';
import {
  EventEventSpecificData,
  eventEventSpecificDataSchema,
} from './containers/eventEventSpecificData';

export interface Event {
  id: number;
  key: string;
  message: string;
  subscriptionId: number | null;
  customerId: number | null;
  createdAt: string;
  eventSpecificData: EventEventSpecificData | null;
}

export const eventSchema: Schema<Event> = object({
  id: ['id', number()],
  key: ['key', string()],
  message: ['message', string()],
  subscriptionId: ['subscription_id', nullable(number())],
  customerId: ['customer_id', nullable(number())],
  createdAt: ['created_at', string()],
  eventSpecificData: [
    'event_specific_data',
    nullable(eventEventSpecificDataSchema),
  ],
});
