/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema';
import { ComponentCostData, componentCostDataSchema } from './componentCostData';

export interface ComponentCostData1 {
  rates?: ComponentCostData[];
  [key: string]: unknown;
}

export const componentCostData1Schema: Schema<ComponentCostData1> = expandoObject(
  { rates: ['rates', optional(array(lazy(() => componentCostDataSchema)))] }
);
