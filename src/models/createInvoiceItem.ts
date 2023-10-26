/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema, string } from '../schema';
import {
  CreateInvoiceItemComponentId,
  createInvoiceItemComponentIdSchema,
} from './containers/createInvoiceItemComponentId';
import {
  CreateInvoiceItemPricePointId,
  createInvoiceItemPricePointIdSchema,
} from './containers/createInvoiceItemPricePointId';
import {
  CreateInvoiceItemProductId,
  createInvoiceItemProductIdSchema,
} from './containers/createInvoiceItemProductId';
import {
  CreateInvoiceItemProductPricePointId,
  createInvoiceItemProductPricePointIdSchema,
} from './containers/createInvoiceItemProductPricePointId';
import {
  CreateInvoiceItemQuantity,
  createInvoiceItemQuantitySchema,
} from './containers/createInvoiceItemQuantity';
import {
  CreateInvoiceItemUnitPrice,
  createInvoiceItemUnitPriceSchema,
} from './containers/createInvoiceItemUnitPrice';

export interface CreateInvoiceItem {
  title?: string;
  /** The quantity can contain up to 8 decimal places. i.e. 1.00 or 0.0012 or 0.00000065. If you submit a value with more than 8 decimal places, we will round it down to the 8th decimal place. */
  quantity?: CreateInvoiceItemQuantity;
  /** The unit_price can contain up to 8 decimal places. i.e. 1.00 or 0.0012 or 0.00000065. If you submit a value with more than 8 decimal places, we will round it down to the 8th decimal place. */
  unitPrice?: CreateInvoiceItemUnitPrice;
  /**
   * Set to true to automatically calculate taxes. Site must be configured to use and calculate taxes.
   * If using Avalara, a tax_code parameter must also be sent.
   */
  taxable?: boolean;
  taxCode?: string;
  /** YYYY-MM-DD */
  periodRangeStart?: string;
  /** YYYY-MM-DD */
  periodRangeEnd?: string;
  /** Product handle or product id. */
  productId?: CreateInvoiceItemProductId;
  /** Component handle or component id. */
  componentId?: CreateInvoiceItemComponentId;
  /** Price point handle or id. For component. */
  pricePointId?: CreateInvoiceItemPricePointId;
  productPricePointId?: CreateInvoiceItemProductPricePointId;
  description?: string;
}

export const createInvoiceItemSchema: Schema<CreateInvoiceItem> = object({
  title: ['title', optional(string())],
  quantity: ['quantity', optional(createInvoiceItemQuantitySchema)],
  unitPrice: ['unit_price', optional(createInvoiceItemUnitPriceSchema)],
  taxable: ['taxable', optional(boolean())],
  taxCode: ['tax_code', optional(string())],
  periodRangeStart: ['period_range_start', optional(string())],
  periodRangeEnd: ['period_range_end', optional(string())],
  productId: ['product_id', optional(createInvoiceItemProductIdSchema)],
  componentId: ['component_id', optional(createInvoiceItemComponentIdSchema)],
  pricePointId: [
    'price_point_id',
    optional(createInvoiceItemPricePointIdSchema),
  ],
  productPricePointId: [
    'product_price_point_id',
    optional(createInvoiceItemProductPricePointIdSchema),
  ],
  description: ['description', optional(string())],
});
