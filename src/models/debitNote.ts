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
} from '../schema';
import {
  CreditNoteLineItem,
  creditNoteLineItemSchema,
} from './creditNoteLineItem';
import { DebitNoteRole, debitNoteRoleSchema } from './debitNoteRole';
import { DebitNoteStatus, debitNoteStatusSchema } from './debitNoteStatus';
import { InvoiceAddress, invoiceAddressSchema } from './invoiceAddress';
import { InvoiceCustomer, invoiceCustomerSchema } from './invoiceCustomer';
import { InvoiceDiscount, invoiceDiscountSchema } from './invoiceDiscount';
import { InvoiceRefund, invoiceRefundSchema } from './invoiceRefund';
import { InvoiceSeller, invoiceSellerSchema } from './invoiceSeller';
import { InvoiceTax, invoiceTaxSchema } from './invoiceTax';

export interface DebitNote {
  /** Unique identifier for the debit note. It is generated automatically by Chargify and has the prefix "db_" followed by alphanumeric characters. */
  uid?: string;
  /** ID of the site to which the debit note belongs. */
  siteId?: number;
  /** ID of the customer to which the debit note belongs. */
  customerId?: number;
  /** ID of the subscription that generated the debit note. */
  subscriptionId?: number;
  /** A unique, identifier that appears on the debit note and in places it is referenced. */
  number?: number;
  /** A monotonically increasing number assigned to debit notes as they are created. */
  sequenceNumber?: number;
  /**
   * Unique identifier for the connected credit note. It is generated automatically by Chargify and has the prefix "cn_" followed by alphanumeric characters.
   * While the UID is long and not appropriate to show to customers, the number is usually shorter and consumable by the customer and the merchant alike.
   */
  originCreditNoteUid?: string;
  /** A unique, identifying string of the connected credit note. */
  originCreditNoteNumber?: string;
  /**
   * Date the document was issued to the customer. This is the date that the document was made available for payment.
   * The format is "YYYY-MM-DD".
   */
  issueDate?: string;
  /**
   * Debit notes are applied to invoices to offset invoiced amounts - they adjust the amount due. This field is the date the debit note document became fully applied to the invoice.
   * The format is "YYYY-MM-DD".
   */
  appliedDate?: string;
  /** Date the document is due for payment. The format is "YYYY-MM-DD". */
  dueDate?: string;
  /** Current status of the debit note. */
  status?: DebitNoteStatus;
  /** The memo printed on debit note, which is a description of the reason for the debit. */
  memo?: string;
  /** The role of the debit note. */
  role?: DebitNoteRole;
  /** The ISO 4217 currency code (3 character string) representing the currency of the credit note amount fields. */
  currency?: string;
  /** Information about the seller (merchant) listed on the masthead of the debit note. */
  seller?: InvoiceSeller;
  /** Information about the customer who is owner or recipient the debited subscription. */
  customer?: InvoiceCustomer;
  /** The billing address of the debited subscription. */
  billingAddress?: InvoiceAddress;
  /** The shipping address of the debited subscription. */
  shippingAddress?: InvoiceAddress;
  /** Line items on the debit note. */
  lineItems?: CreditNoteLineItem[];
  discounts?: InvoiceDiscount[];
  taxes?: InvoiceTax[];
  refunds?: InvoiceRefund[];
  [key: string]: unknown;
}

export const debitNoteSchema: Schema<DebitNote> = expandoObject({
  uid: ['uid', optional(string())],
  siteId: ['site_id', optional(number())],
  customerId: ['customer_id', optional(number())],
  subscriptionId: ['subscription_id', optional(number())],
  number: ['number', optional(number())],
  sequenceNumber: ['sequence_number', optional(number())],
  originCreditNoteUid: ['origin_credit_note_uid', optional(string())],
  originCreditNoteNumber: ['origin_credit_note_number', optional(string())],
  issueDate: ['issue_date', optional(string())],
  appliedDate: ['applied_date', optional(string())],
  dueDate: ['due_date', optional(string())],
  status: ['status', optional(debitNoteStatusSchema)],
  memo: ['memo', optional(string())],
  role: ['role', optional(debitNoteRoleSchema)],
  currency: ['currency', optional(string())],
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
  lineItems: [
    'line_items',
    optional(array(lazy(() => creditNoteLineItemSchema))),
  ],
  discounts: ['discounts', optional(array(lazy(() => invoiceDiscountSchema)))],
  taxes: ['taxes', optional(array(lazy(() => invoiceTaxSchema)))],
  refunds: ['refunds', optional(array(lazy(() => invoiceRefundSchema)))],
});
