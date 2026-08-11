/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  lazy,
  number,
  optional,
  Schema,
  string,
} from '../schema.js';
import {
  CreateInvoiceAddress,
  createInvoiceAddressSchema,
} from './createInvoiceAddress.js';
import {
  CreateInvoiceCoupon,
  createInvoiceCouponSchema,
} from './createInvoiceCoupon.js';
import {
  UpdateInvoiceItem,
  updateInvoiceItemSchema,
} from './updateInvoiceItem.js';

/** Attributes of a draft ad hoc invoice which can be updated. Only the submitted attributes are changed. */
export interface UpdateInvoice {
  /** Line item changes to apply. Line items without a `uid` are added, line items with a `uid` are updated, and line items with a `uid` and `_destroy` set to `true` are removed. Existing line items not referenced in the array remain unchanged. */
  lineItems?: UpdateInvoiceItem[];
  /** New issue date for the invoice (format YYYY-MM-DD). This date is interpreted and validated in your site's time zone. It must be today or a date in the past — future dates are not accepted. The due date is recalculated from the issue date and net terms. */
  issueDate?: string;
  /** Number of days after the issue date on which the invoice is due. The due date is recalculated when net terms or the issue date change. */
  netTerms?: number;
  /** Custom payment instructions displayed on the invoice. */
  paymentInstructions?: string;
  /** A custom memo displayed on the invoice. */
  memo?: string;
  /** Replaces the seller address on the invoice */
  sellerAddress?: CreateInvoiceAddress;
  /** Replaces the billing address on the invoice */
  billingAddress?: CreateInvoiceAddress;
  /** Replaces the shipping address on the invoice */
  shippingAddress?: CreateInvoiceAddress;
  /** When present, replaces all discounts currently applied to the invoice. Send an empty array to remove all discounts. */
  coupons?: CreateInvoiceCoupon[];
  [key: string]: unknown;
}

export const updateInvoiceSchema: Schema<UpdateInvoice> = lazy(() =>
  expandoObject({
    lineItems: ['line_items', optional(array(updateInvoiceItemSchema))],
    issueDate: ['issue_date', optional(string())],
    netTerms: ['net_terms', optional(number())],
    paymentInstructions: ['payment_instructions', optional(string())],
    memo: ['memo', optional(string())],
    sellerAddress: ['seller_address', optional(createInvoiceAddressSchema)],
    billingAddress: ['billing_address', optional(createInvoiceAddressSchema)],
    shippingAddress: ['shipping_address', optional(createInvoiceAddressSchema)],
    coupons: ['coupons', optional(array(createInvoiceCouponSchema))],
  })
);
