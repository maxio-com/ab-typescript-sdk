/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, validateAndMap } from '../../schema';
import {
  InvoiceLineItemComponentCostData,
  invoiceLineItemComponentCostDataSchema,
} from '../invoiceLineItemComponentCostData';

/** This is a container type for one-of types. */
export type InvoiceLineItemComponentCostData2 = InvoiceLineItemComponentCostData;

export const invoiceLineItemComponentCostData2Schema: Schema<InvoiceLineItemComponentCostData2> = oneOf(
  [invoiceLineItemComponentCostDataSchema]
);

export namespace InvoiceLineItemComponentCostData2 {
  /**
  * Validation method to narrow down union type to InvoiceLineItemComponentCostData type case.
  *
  * This is Invoice Line Item Component Cost Data case.
  */
  export function isInvoiceLineItemComponentCostData(value: unknown): value is InvoiceLineItemComponentCostData {
    const validationResult = validateAndMap(value, invoiceLineItemComponentCostDataSchema);
    return validationResult.errors === false;
  }
}
