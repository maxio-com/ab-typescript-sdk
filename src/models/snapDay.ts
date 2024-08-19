/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for SnapDay
 */
export enum SnapDay {
  End = 'end',
}

/**
 * Schema for SnapDay
 */
export const snapDaySchema: Schema<SnapDay> = stringEnum(SnapDay);
