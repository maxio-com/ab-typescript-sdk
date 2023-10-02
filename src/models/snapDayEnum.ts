/**
 * Maxio Advanced Billing formerly Chargify APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for SnapDayEnum
 */
export enum SnapDayEnum {
  End = 'end',
}

/**
 * Schema for SnapDayEnum
 */
export const snapDayEnumSchema: Schema<SnapDayEnum> = stringEnum(SnapDayEnum);
