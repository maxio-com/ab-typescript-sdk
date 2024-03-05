/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema } from '../schema';
import {
  AddSubscriptionToAGroupGroup,
  addSubscriptionToAGroupGroupSchema,
} from './containers/addSubscriptionToAGroupGroup';

export interface AddSubscriptionToAGroup {
  group?: AddSubscriptionToAGroupGroup;
  [key: string]: unknown;
}

export const addSubscriptionToAGroupSchema: Schema<AddSubscriptionToAGroup> = expandoObject(
  { group: ['group', optional(addSubscriptionToAGroupGroupSchema)] }
);
