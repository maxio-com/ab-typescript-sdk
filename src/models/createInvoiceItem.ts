/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  expandoObject,
  lazy,
  optional,
  Schema,
  string,
} from '../schema.js';
import {
  CreateInvoiceItemComponentId,
  createInvoiceItemComponentIdSchema,
} from './containers/createInvoiceItemComponentId.js';
import {
  CreateInvoiceItemPricePointId,
  createInvoiceItemPricePointIdSchema,
} from './containers/createInvoiceItemPricePointId.js';
import {
  CreateInvoiceItemProductId,
  createInvoiceItemProductIdSchema,
} from './containers/createInvoiceItemProductId.js';
import {
  CreateInvoiceItemProductPricePointId,
  createInvoiceItemProductPricePointIdSchema,
} from './containers/createInvoiceItemProductPricePointId.js';
import {
  CreateInvoiceItemQuantity,
  createInvoiceItemQuantitySchema,
} from './containers/createInvoiceItemQuantity.js';
import {
  CreateInvoiceItemUnitPrice,
  createInvoiceItemUnitPriceSchema,
} from './containers/createInvoiceItemUnitPrice.js';

export interface CreateInvoiceItem {
  title?: string;
  /** The quantity can contain up to 8 decimal places. i.e. 1.00 or 0.0012 or 0.00000065. If you submit a value with more than 8 decimal places, we will round it down to the 8th decimal place. */
  quantity?: CreateInvoiceItemQuantity;
  /** The unit_price can contain up to 8 decimal places. i.e. 1.00 or 0.0012 or 0.00000065. If you submit a value with more than 8 decimal places, we will round it down to the 8th decimal place. */
  unitPrice?: CreateInvoiceItemUnitPrice;
  /** Set to true to automatically calculate taxes. Site must be configured to use and calculate taxes. If using AvaTax, a tax_code parameter must also be sent. */
  taxable?: boolean;
  /** A string representing the tax code related to the product type. This is especially important when using AvaTax to tax based on locale. This attribute has a max length of 25 characters. */
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
  [key: string]: unknown;
}

export const createInvoiceItemSchema: Schema<CreateInvoiceItem> = lazy(() =>
  expandoObject({
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
  })
);
