/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  CreditNoteApplication,
  creditNoteApplicationSchema,
} from './creditNoteApplication';
import {
  CreditNoteLineItem,
  creditNoteLineItemSchema,
} from './creditNoteLineItem';
import { InvoiceAddress, invoiceAddressSchema } from './invoiceAddress';
import { InvoiceCustomer, invoiceCustomerSchema } from './invoiceCustomer';
import { InvoiceDiscount, invoiceDiscountSchema } from './invoiceDiscount';
import { InvoiceRefund, invoiceRefundSchema } from './invoiceRefund';
import { InvoiceSeller, invoiceSellerSchema } from './invoiceSeller';
import { InvoiceTax, invoiceTaxSchema } from './invoiceTax';
import { OriginInvoice, originInvoiceSchema } from './originInvoice';

export interface CreditNote {
  /** Unique identifier for the credit note. It is generated automatically by Chargify and has the prefix "cn_" followed by alphanumeric characters. */
  uid?: string;
  /** ID of the site to which the credit note belongs. */
  siteId?: number;
  /** ID of the customer to which the credit note belongs. */
  customerId?: number;
  /** ID of the subscription that generated the credit note. */
  subscriptionId?: number;
  /**
   * A unique, identifying string that appears on the credit note and in places it is referenced.
   * While the UID is long and not appropriate to show to customers, the number is usually shorter and consumable by the customer and the merchant alike.
   */
  number?: string;
  /** A monotonically increasing number assigned to credit notes as they are created.  This number is unique within a site and can be used to sort and order credit notes. */
  sequenceNumber?: number;
  /**
   * Date the credit note was issued to the customer.  This is the date that the credit was made available for application, and may come before it is fully applied.
   * The format is `"YYYY-MM-DD"`.
   */
  issueDate?: string;
  /**
   * Credit notes are applied to invoices to offset invoiced amounts - they reduce the amount due. This field is the date the credit note became fully applied to invoices.
   * If the credit note has been partially applied, this field will not have a value until it has been fully applied.
   * The format is `"YYYY-MM-DD"`.
   */
  appliedDate?: string;
  /**
   * Current status of the credit note. Valid values:
   * * open
   * * applied
   */
  status?: string;
  /** The ISO 4217 currency code (3 character string) representing the currency of the credit note amount fields. */
  currency?: string;
  /** The memo printed on credit note, which is a description of the reason for the credit. */
  memo?: string;
  /** Information about the seller (merchant) listed on the masthead of the credit note. */
  seller?: InvoiceSeller;
  /** Information about the customer who is owner or recipient the credited subscription. */
  customer?: InvoiceCustomer;
  /** The billing address of the credit subscription. */
  billingAddress?: InvoiceAddress;
  /** The shipping address of the credited subscription. */
  shippingAddress?: InvoiceAddress;
  /** Subtotal of the credit note, which is the sum of all line items before discounts or taxes. Note that this is a positive amount representing the credit back to the customer. */
  subtotalAmount?: string;
  /** Total discount applied to the credit note. Note that this is a positive amount representing the discount amount being credited back to the customer (i.e. a credit on an earlier discount). For example, if the original purchase was $1.00 and the original discount was $0.10, a credit of $0.50 of the original purchase (half) would have a discount credit of $0.05 (also half). */
  discountAmount?: string;
  /** Total tax of the credit note. Note that this is a positive amount representing a previously taxex amount being credited back to the customer (i.e. a credit of an earlier tax). For example, if the original purchase was $1.00 and the original tax was $0.10, a credit of $0.50 of the original purchase (half) would also have a tax credit of $0.05 (also half). */
  taxAmount?: string;
  /** The credit note total, which is `subtotal_amount - discount_amount + tax_amount`.' */
  totalAmount?: string;
  /** The amount of the credit note that has already been applied to invoices. */
  appliedAmount?: string;
  /** The amount of the credit note remaining to be applied to invoices, which is `total_amount - applied_amount`. */
  remainingAmount?: string;
  /** Line items on the credit note. */
  lineItems?: CreditNoteLineItem[];
  discounts?: InvoiceDiscount[];
  taxes?: InvoiceTax[];
  applications?: CreditNoteApplication[];
  refunds?: InvoiceRefund[];
  /** An array of origin invoices for the credit note. Learn more about [Origin Invoice from our docs](https://chargify.zendesk.com/hc/en-us/articles/4407753036699#origin-invoices) */
  originInvoices?: OriginInvoice[];
}

export const creditNoteSchema: Schema<CreditNote> = object({
  uid: ['uid', optional(string())],
  siteId: ['site_id', optional(number())],
  customerId: ['customer_id', optional(number())],
  subscriptionId: ['subscription_id', optional(number())],
  number: ['number', optional(string())],
  sequenceNumber: ['sequence_number', optional(number())],
  issueDate: ['issue_date', optional(string())],
  appliedDate: ['applied_date', optional(string())],
  status: ['status', optional(string())],
  currency: ['currency', optional(string())],
  memo: ['memo', optional(string())],
  seller: ['seller', optional(lazy(() => invoiceSellerSchema))],
  customer: ['customer', optional(lazy(() => invoiceCustomerSchema))],
  billingAddress: [
    'billing_address',
    optional(lazy(() => invoiceAddressSchema)),
  ],
  shippingAddress: [
    'shipping_address',
    optional(lazy(() => invoiceAddressSchema)),
  ],
  subtotalAmount: ['subtotal_amount', optional(string())],
  discountAmount: ['discount_amount', optional(string())],
  taxAmount: ['tax_amount', optional(string())],
  totalAmount: ['total_amount', optional(string())],
  appliedAmount: ['applied_amount', optional(string())],
  remainingAmount: ['remaining_amount', optional(string())],
  lineItems: [
    'line_items',
    optional(array(lazy(() => creditNoteLineItemSchema))),
  ],
  discounts: ['discounts', optional(array(lazy(() => invoiceDiscountSchema)))],
  taxes: ['taxes', optional(array(lazy(() => invoiceTaxSchema)))],
  applications: [
    'applications',
    optional(array(lazy(() => creditNoteApplicationSchema))),
  ],
  refunds: ['refunds', optional(array(lazy(() => invoiceRefundSchema)))],
  originInvoices: [
    'origin_invoices',
    optional(array(lazy(() => originInvoiceSchema))),
  ],
});
