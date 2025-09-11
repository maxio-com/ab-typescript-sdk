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
  CreateInvoiceItem,
  createInvoiceItemSchema,
} from './createInvoiceItem.js';
import {
  CreateInvoiceStatus,
  createInvoiceStatusSchema,
} from './createInvoiceStatus.js';

export interface CreateInvoice {
  lineItems?: CreateInvoiceItem[];
  issueDate?: string;
  /** By default, invoices will be created with a due date matching the date of invoice creation. If a different due date is desired, the net_terms parameter can be sent indicating the number of days in advance the due date should be. */
  netTerms?: number;
  paymentInstructions?: string;
  /** A custom memo can be sent to override the site's default. */
  memo?: string;
  /** Overrides the defaults for the site */
  sellerAddress?: CreateInvoiceAddress;
  /** Overrides the default for the customer */
  billingAddress?: CreateInvoiceAddress;
  /** Overrides the default for the customer */
  shippingAddress?: CreateInvoiceAddress;
  coupons?: CreateInvoiceCoupon[];
  status?: CreateInvoiceStatus;
  [key: string]: unknown;
}

export const createInvoiceSchema: Schema<CreateInvoice> = expandoObject({
  lineItems: [
    'line_items',
    optional(array(lazy(() => createInvoiceItemSchema))),
  ],
  issueDate: ['issue_date', optional(string())],
  netTerms: ['net_terms', optional(number())],
  paymentInstructions: ['payment_instructions', optional(string())],
  memo: ['memo', optional(string())],
  sellerAddress: [
    'seller_address',
    optional(lazy(() => createInvoiceAddressSchema)),
  ],
  billingAddress: [
    'billing_address',
    optional(lazy(() => createInvoiceAddressSchema)),
  ],
  shippingAddress: [
    'shipping_address',
    optional(lazy(() => createInvoiceAddressSchema)),
  ],
  coupons: ['coupons', optional(array(lazy(() => createInvoiceCouponSchema)))],
  status: ['status', optional(createInvoiceStatusSchema)],
});
