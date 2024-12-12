/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema';
import { GroupSettings, groupSettingsSchema } from './groupSettings';

export interface AddSubscriptionToAGroup {
  group?: GroupSettings;
  [key: string]: unknown;
}

export const addSubscriptionToAGroupSchema: Schema<AddSubscriptionToAGroup> = expandoObject(
  { group: ['group', optional(lazy(() => groupSettingsSchema))] }
);
