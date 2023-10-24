/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, number, object, Schema, string } from '../schema';

export interface CustomFieldValueChange {
  eventType: string;
  metafieldName: string;
  metafieldId: number;
  oldValue: string | null;
  newValue: string | null;
  resourceType: string;
  resourceId: number;
}

export const customFieldValueChangeSchema: Schema<CustomFieldValueChange> = object(
  {
    eventType: ['event_type', string()],
    metafieldName: ['metafield_name', string()],
    metafieldId: ['metafield_id', number()],
    oldValue: ['old_value', nullable(string())],
    newValue: ['new_value', nullable(string())],
    resourceType: ['resource_type', string()],
    resourceId: ['resource_id', number()],
  }
);
