/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, number, object, optional, Schema, string } from '../schema';
import { RestrictionType, restrictionTypeSchema } from './restrictionType';

export interface CouponRestriction {
  id?: number;
  itemType?: RestrictionType;
  itemId?: number;
  name?: string;
  handle?: string | null;
}

export const couponRestrictionSchema: Schema<CouponRestriction> = object({
  id: ['id', optional(number())],
  itemType: ['item_type', optional(restrictionTypeSchema)],
  itemId: ['item_id', optional(number())],
  name: ['name', optional(string())],
  handle: ['handle', optional(nullable(string()))],
});
