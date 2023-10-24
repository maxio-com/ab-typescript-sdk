/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema } from '../schema';

/** The quantity can contain up to 8 decimal places. i.e. 1.00 or 0.0012 or 0.00000065. If you submit a value with more than 8 decimal places, we will round it down to the 8th decimal place. */
export interface QuantityCreateInvoiceItem {

}

export const quantityCreateInvoiceItemSchema: Schema<QuantityCreateInvoiceItem> = object(
  {  }
);
