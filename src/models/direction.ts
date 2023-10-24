/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Direction
 */
export enum Direction {
  Asc = 'asc',
  Desc = 'desc',
}

/**
 * Schema for Direction
 */
export const directionSchema: Schema<Direction> = stringEnum(Direction);
