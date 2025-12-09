/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema.js';
import {
  ComponentCostData,
  componentCostDataSchema,
} from './componentCostData.js';

export interface InvoiceLineItemComponentCostData {
  rates?: ComponentCostData[];
  [key: string]: unknown;
}

export const invoiceLineItemComponentCostDataSchema: Schema<InvoiceLineItemComponentCostData> = lazy(
  () =>
    expandoObject({
      rates: ['rates', optional(array(componentCostDataSchema))],
    })
);
