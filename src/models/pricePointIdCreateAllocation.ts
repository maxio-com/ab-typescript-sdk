/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema } from '../schema';

/** Price point that the allocation should be charged at. Accepts either the price point's id (integer) or handle (string). When not specified, the default price point will be used. */
export interface PricePointIdCreateAllocation {

}

export const pricePointIdCreateAllocationSchema: Schema<PricePointIdCreateAllocation> = object(
  {  }
);
