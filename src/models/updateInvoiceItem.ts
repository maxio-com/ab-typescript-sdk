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
  UpdateInvoiceItemComponentId,
  updateInvoiceItemComponentIdSchema,
} from './containers/updateInvoiceItemComponentId.js';
import {
  UpdateInvoiceItemPricePointId,
  updateInvoiceItemPricePointIdSchema,
} from './containers/updateInvoiceItemPricePointId.js';
import {
  UpdateInvoiceItemProductId,
  updateInvoiceItemProductIdSchema,
} from './containers/updateInvoiceItemProductId.js';
import {
  UpdateInvoiceItemProductPricePointId,
  updateInvoiceItemProductPricePointIdSchema,
} from './containers/updateInvoiceItemProductPricePointId.js';
import {
  UpdateInvoiceItemQuantity,
  updateInvoiceItemQuantitySchema,
} from './containers/updateInvoiceItemQuantity.js';
import {
  UpdateInvoiceItemUnitPrice,
  updateInvoiceItemUnitPriceSchema,
} from './containers/updateInvoiceItemUnitPrice.js';

/** A line item change for a draft ad hoc invoice. Supports the same attributes as line items on invoice creation, plus `uid` and `_destroy` for updating or removing existing line items. */
export interface UpdateInvoiceItem {
  title?: string;
  /** The quantity can contain up to 8 decimal places. e.g., 1.00 or 0.0012 or 0.00000065. If you submit a value with more than 8 decimal places, we will round it down to the 8th decimal place. */
  quantity?: UpdateInvoiceItemQuantity;
  /** The unit_price can contain up to 8 decimal places. e.g., 1.00 or 0.0012 or 0.00000065. If you submit a value with more than 8 decimal places, we will round it down to the 8th decimal place. */
  unitPrice?: UpdateInvoiceItemUnitPrice;
  /** Set to true to automatically calculate taxes. Site must be configured to use and calculate taxes. If using AvaTax, a tax_code parameter must also be sent. */
  taxable?: boolean;
  /** A string representing the tax code related to the product type. This is especially important when using AvaTax to tax based on locale. This attribute has a max length of 25 characters. */
  taxCode?: string;
  /** YYYY-MM-DD */
  periodRangeStart?: string;
  /** YYYY-MM-DD */
  periodRangeEnd?: string;
  /** Product handle or product id. */
  productId?: UpdateInvoiceItemProductId;
  /** Component handle or component id. */
  componentId?: UpdateInvoiceItemComponentId;
  /** Price point handle or id. For component. */
  pricePointId?: UpdateInvoiceItemPricePointId;
  productPricePointId?: UpdateInvoiceItemProductPricePointId;
  description?: string;
  /** Unique identifier of an existing line item on the invoice. When provided, the matching line item is updated with the submitted attributes. When omitted, a new line item is added to the invoice. */
  uid?: string;
  /** Set to `true` together with `uid` to remove the matching line item from the invoice. Line items not referenced in the request remain unchanged. */
  destroy?: boolean;
  [key: string]: unknown;
}

export const updateInvoiceItemSchema: Schema<UpdateInvoiceItem> = lazy(() =>
  expandoObject({
    title: ['title', optional(string())],
    quantity: ['quantity', optional(updateInvoiceItemQuantitySchema)],
    unitPrice: ['unit_price', optional(updateInvoiceItemUnitPriceSchema)],
    taxable: ['taxable', optional(boolean())],
    taxCode: ['tax_code', optional(string())],
    periodRangeStart: ['period_range_start', optional(string())],
    periodRangeEnd: ['period_range_end', optional(string())],
    productId: ['product_id', optional(updateInvoiceItemProductIdSchema)],
    componentId: ['component_id', optional(updateInvoiceItemComponentIdSchema)],
    pricePointId: [
      'price_point_id',
      optional(updateInvoiceItemPricePointIdSchema),
    ],
    productPricePointId: [
      'product_price_point_id',
      optional(updateInvoiceItemProductPricePointIdSchema),
    ],
    description: ['description', optional(string())],
    uid: ['uid', optional(string())],
    destroy: ['_destroy', optional(boolean())],
  })
);
