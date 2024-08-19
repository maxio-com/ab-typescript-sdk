/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema, string } from '../schema';

export interface ReasonCode {
  id?: number;
  siteId?: number;
  code?: string;
  description?: string;
  position?: number;
  createdAt?: string;
  updatedAt?: string;
  [key: string]: unknown;
}

export const reasonCodeSchema: Schema<ReasonCode> = expandoObject({
  id: ['id', optional(number())],
  siteId: ['site_id', optional(number())],
  code: ['code', optional(string())],
  description: ['description', optional(string())],
  position: ['position', optional(number())],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
});
