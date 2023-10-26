/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { ComponentCostData, componentCostDataSchema } from './componentCostData';

export interface InvoiceLineItemComponentCostData {
  rates?: ComponentCostData[];
}

export const invoiceLineItemComponentCostDataSchema: Schema<InvoiceLineItemComponentCostData> = object(
  { rates: ['rates', optional(array(lazy(() => componentCostDataSchema)))] }
);
