/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema.js';
import { GroupSettings, groupSettingsSchema } from './groupSettings.js';

export interface AddSubscriptionToAGroup {
  group?: GroupSettings;
  [key: string]: unknown;
}

export const addSubscriptionToAGroupSchema: Schema<AddSubscriptionToAGroup> = lazy(
  () => expandoObject({ group: ['group', optional(groupSettingsSchema)] })
);
