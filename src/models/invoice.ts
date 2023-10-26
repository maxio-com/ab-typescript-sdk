/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { InvoiceAddress, invoiceAddressSchema } from './invoiceAddress';
import {
  InvoiceConsolidationLevel,
  invoiceConsolidationLevelSchema,
} from './invoiceConsolidationLevel';
import { InvoiceCredit, invoiceCreditSchema } from './invoiceCredit';
import { InvoiceCustomer, invoiceCustomerSchema } from './invoiceCustomer';
import {
  InvoiceCustomField,
  invoiceCustomFieldSchema,
} from './invoiceCustomField';
import { InvoiceDiscount, invoiceDiscountSchema } from './invoiceDiscount';
import {
  InvoiceDisplaySettings,
  invoiceDisplaySettingsSchema,
} from './invoiceDisplaySettings';
import { InvoiceLineItem, invoiceLineItemSchema } from './invoiceLineItem';
import { InvoicePayer, invoicePayerSchema } from './invoicePayer';
import { InvoicePayment, invoicePaymentSchema } from './invoicePayment';
import {
  InvoicePreviousBalance,
  invoicePreviousBalanceSchema,
} from './invoicePreviousBalance';
import { InvoiceRefund, invoiceRefundSchema } from './invoiceRefund';
import { InvoiceSeller, invoiceSellerSchema } from './invoiceSeller';
import { InvoiceTax, invoiceTaxSchema } from './invoiceTax';
import { Status, statusSchema } from './status';

export interface Invoice {
  id?: number;
  /** Unique identifier for the invoice. It is generated automatically by Chargify and has the prefix "inv_" followed by alphanumeric characters. */
  uid?: string;
  /** ID of the site to which the invoice belongs. */
  siteId?: number;
  /** ID of the customer to which the invoice belongs. */
  customerId?: number;
  /** ID of the subscription that generated the invoice. */
  subscriptionId?: number;
  /**
   * A unique, identifying string that appears on the invoice and in places the invoice is referenced.
   * While the UID is long and not appropriate to show to customers, the number is usually shorter and consumable by the customer and the merchant alike.
   */
  number?: string;
  /** A monotonically increasing number assigned to invoices as they are created.  This number is unique within a site and can be used to sort and order invoices. */
  sequenceNumber?: number;
  transactionTime?: string;
  createdAt?: string;
  updatedAt?: string;
  /**
   * Date the invoice was issued to the customer.  This is the date that the invoice was made available for payment.
   * The format is `"YYYY-MM-DD"`.
   */
  issueDate?: string;
  /**
   * Date the invoice is due.
   * The format is `"YYYY-MM-DD"`.
   */
  dueDate?: string;
  /**
   * Date the invoice became fully paid.
   * If partial payments are applied to the invoice, this date will not be present until payment has been made in full.
   * The format is `"YYYY-MM-DD"`.
   */
  paidDate?: string | null;
  /** The current status of the invoice. See [Invoice Statuses](https://chargify.zendesk.com/hc/en-us/articles/4407737494171#line-item-breakdowns) for more. */
  status?: Status;
  role?: string;
  parentInvoiceId?: number | null;
  /** The collection method of the invoice, which is either "automatic" (tried and retried on an existing payment method by Chargify) or "remittance" (payment must be remitted by the customer or keyed in by the merchant). */
  collectionMethod?: string;
  /** A message that is printed on the invoice when it is marked for remittance collection. It is intended to describe to the customer how they may make payment, and is configured by the merchant. */
  paymentInstructions?: string;
  /** The ISO 4217 currency code (3 character string) representing the currency of invoice transaction. */
  currency?: string;
  /**
   * Consolidation level of the invoice, which is applicable to invoice consolidation.  It will hold one of the following values:
   * * "none": A normal invoice with no consolidation.
   * * "child": An invoice segment which has been combined into a consolidated invoice.
   * * "parent": A consolidated invoice, whose contents are composed of invoice segments.
   * "Parent" invoices do not have lines of their own, but they have subtotals and totals which aggregate the member invoice segments.
   * See also the [invoice consolidation documentation](https://chargify.zendesk.com/hc/en-us/articles/4407746391835).
   */
  consolidationLevel?: InvoiceConsolidationLevel;
  /** For invoices with `consolidation_level` of `child`, this specifies the UID of the parent (consolidated) invoice. */
  parentInvoiceUid?: string | null;
  subscriptionGroupId?: number | null;
  /** For invoices with `consolidation_level` of `child`, this specifies the number of the parent (consolidated) invoice. */
  parentInvoiceNumber?: number | null;
  /** For invoices with `consolidation_level` of `parent`, this specifies the ID of the subscription which was the primary subscription of the subscription group that generated the invoice. */
  groupPrimarySubscriptionId?: number | null;
  /** The name of the product subscribed when the invoice was generated. */
  productName?: string;
  /** The name of the product family subscribed when the invoice was generated. */
  productFamilyName?: string;
  /** Information about the seller (merchant) listed on the masthead of the invoice. */
  seller?: InvoiceSeller;
  /** Information about the customer who is owner or recipient the invoiced subscription. */
  customer?: InvoiceCustomer;
  payer?: InvoicePayer;
  recipientEmails?: string[];
  netTerms?: number;
  /** The memo printed on invoices of any collection type.  This message is in control of the merchant. */
  memo?: string;
  /** The invoice billing address. */
  billingAddress?: InvoiceAddress;
  /** The invoice shipping address. */
  shippingAddress?: InvoiceAddress;
  /** Subtotal of the invoice, which is the sum of all line items before discounts or taxes. */
  subtotalAmount?: string;
  /** Total discount applied to the invoice. */
  discountAmount?: string;
  /** Total tax on the invoice. */
  taxAmount?: string;
  /** The invoice total, which is `subtotal_amount - discount_amount + tax_amount`.' */
  totalAmount?: string;
  /**
   * The amount of credit (from credit notes) applied to this invoice.
   * Credits offset the amount due from the customer.
   */
  creditAmount?: string;
  refundAmount?: string;
  /** The amount paid on the invoice by the customer. */
  paidAmount?: string;
  /** Amount due on the invoice, which is `total_amount - credit_amount - paid_amount`. */
  dueAmount?: string;
  /** Line items on the invoice. */
  lineItems?: InvoiceLineItem[];
  discounts?: InvoiceDiscount[];
  taxes?: InvoiceTax[];
  credits?: InvoiceCredit[];
  refunds?: InvoiceRefund[];
  payments?: InvoicePayment[];
  customFields?: InvoiceCustomField[];
  displaySettings?: InvoiceDisplaySettings;
  /** The public URL of the invoice */
  publicUrl?: string;
  previousBalanceData?: InvoicePreviousBalance;
}

export const invoiceSchema: Schema<Invoice> = object({
  id: ['id', optional(number())],
  uid: ['uid', optional(string())],
  siteId: ['site_id', optional(number())],
  customerId: ['customer_id', optional(number())],
  subscriptionId: ['subscription_id', optional(number())],
  number: ['number', optional(string())],
  sequenceNumber: ['sequence_number', optional(number())],
  transactionTime: ['transaction_time', optional(string())],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
  issueDate: ['issue_date', optional(string())],
  dueDate: ['due_date', optional(string())],
  paidDate: ['paid_date', optional(nullable(string()))],
  status: ['status', optional(statusSchema)],
  role: ['role', optional(string())],
  parentInvoiceId: ['parent_invoice_id', optional(nullable(number()))],
  collectionMethod: ['collection_method', optional(string())],
  paymentInstructions: ['payment_instructions', optional(string())],
  currency: ['currency', optional(string())],
  consolidationLevel: [
    'consolidation_level',
    optional(invoiceConsolidationLevelSchema),
  ],
  parentInvoiceUid: ['parent_invoice_uid', optional(nullable(string()))],
  subscriptionGroupId: ['subscription_group_id', optional(nullable(number()))],
  parentInvoiceNumber: ['parent_invoice_number', optional(nullable(number()))],
  groupPrimarySubscriptionId: [
    'group_primary_subscription_id',
    optional(nullable(number())),
  ],
  productName: ['product_name', optional(string())],
  productFamilyName: ['product_family_name', optional(string())],
  seller: ['seller', optional(lazy(() => invoiceSellerSchema))],
  customer: ['customer', optional(lazy(() => invoiceCustomerSchema))],
  payer: ['payer', optional(lazy(() => invoicePayerSchema))],
  recipientEmails: ['recipient_emails', optional(array(string()))],
  netTerms: ['net_terms', optional(number())],
  memo: ['memo', optional(string())],
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
  creditAmount: ['credit_amount', optional(string())],
  refundAmount: ['refund_amount', optional(string())],
  paidAmount: ['paid_amount', optional(string())],
  dueAmount: ['due_amount', optional(string())],
  lineItems: ['line_items', optional(array(lazy(() => invoiceLineItemSchema)))],
  discounts: ['discounts', optional(array(lazy(() => invoiceDiscountSchema)))],
  taxes: ['taxes', optional(array(lazy(() => invoiceTaxSchema)))],
  credits: ['credits', optional(array(lazy(() => invoiceCreditSchema)))],
  refunds: ['refunds', optional(array(lazy(() => invoiceRefundSchema)))],
  payments: ['payments', optional(array(lazy(() => invoicePaymentSchema)))],
  customFields: [
    'custom_fields',
    optional(array(lazy(() => invoiceCustomFieldSchema))),
  ],
  displaySettings: [
    'display_settings',
    optional(lazy(() => invoiceDisplaySettingsSchema)),
  ],
  publicUrl: ['public_url', optional(string())],
  previousBalanceData: [
    'previous_balance_data',
    optional(lazy(() => invoicePreviousBalanceSchema)),
  ],
});
