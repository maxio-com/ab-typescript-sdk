/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema } from '../schema';
import { GroupTargetType, groupTargetTypeSchema } from './groupTargetType';

/** Attributes of the target customer who will be the responsible payer of the created subscription. Required. */
export interface GroupTarget {
  /** The type of object indicated by the id attribute. */
  type: GroupTargetType;
  /** The id of the target customer or subscription to group the existing subscription with. Ignored and should not be included if type is "self" , "parent", or "eldest" */
  id?: number;
}

export const groupTargetSchema: Schema<GroupTarget> = object({
  type: ['type', groupTargetTypeSchema],
  id: ['id', optional(number())],
});
