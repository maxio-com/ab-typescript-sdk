/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  InvoiceLineItemPricingDetail,
  invoiceLineItemPricingDetailSchema,
} from './invoiceLineItemPricingDetail';

export interface InvoiceLineItemEventData {
  uid?: string;
  title?: string;
  description?: string;
  quantity?: number;
  quantityDelta?: number | null;
  unitPrice?: string;
  periodRangeStart?: string;
  periodRangeEnd?: string;
  amount?: string;
  lineReferences?: string;
  pricingDetailsIndex?: number | null;
  pricingDetails?: InvoiceLineItemPricingDetail[];
  taxCode?: string;
  taxAmount?: string;
  productId?: number;
  productPricePointId?: number;
  pricePointId?: number | null;
  componentId?: number | null;
  billingScheduleItemId?: number | null;
  customItem?: boolean;
}

export const invoiceLineItemEventDataSchema: Schema<InvoiceLineItemEventData> = object(
  {
    uid: ['uid', optional(string())],
    title: ['title', optional(string())],
    description: ['description', optional(string())],
    quantity: ['quantity', optional(number())],
    quantityDelta: ['quantity_delta', optional(nullable(number()))],
    unitPrice: ['unit_price', optional(string())],
    periodRangeStart: ['period_range_start', optional(string())],
    periodRangeEnd: ['period_range_end', optional(string())],
    amount: ['amount', optional(string())],
    lineReferences: ['line_references', optional(string())],
    pricingDetailsIndex: [
      'pricing_details_index',
      optional(nullable(number())),
    ],
    pricingDetails: [
      'pricing_details',
      optional(array(lazy(() => invoiceLineItemPricingDetailSchema))),
    ],
    taxCode: ['tax_code', optional(string())],
    taxAmount: ['tax_amount', optional(string())],
    productId: ['product_id', optional(number())],
    productPricePointId: ['product_price_point_id', optional(number())],
    pricePointId: ['price_point_id', optional(nullable(number()))],
    componentId: ['component_id', optional(nullable(number()))],
    billingScheduleItemId: [
      'billing_schedule_item_id',
      optional(nullable(number())),
    ],
    customItem: ['custom_item', optional(boolean())],
  }
);
