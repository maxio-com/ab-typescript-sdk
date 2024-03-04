/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema';
import { ComponentCostData, componentCostDataSchema } from './componentCostData';

export interface InvoiceLineItemComponentCostData {
  rates?: ComponentCostData[];
  [key: string]: unknown;
}

export const invoiceLineItemComponentCostDataSchema: Schema<InvoiceLineItemComponentCostData> = expandoObject(
  { rates: ['rates', optional(array(lazy(() => componentCostDataSchema)))] }
);
