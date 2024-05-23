/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  bigint,
  boolean,
  expandoObject,
  lazy,
  nullable,
  number,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';
import {
  AppliedCreditNoteData,
  appliedCreditNoteDataSchema,
} from './appliedCreditNoteData';
import { BillingAddress, billingAddressSchema } from './billingAddress';
import { ChargebackStatus, chargebackStatusSchema } from './chargebackStatus';
import { CollectionMethod, collectionMethodSchema } from './collectionMethod';
import {
  ApplyCreditNoteEventData1PaymentMethod,
  applyCreditNoteEventData1PaymentMethodSchema,
} from './containers/applyCreditNoteEventData1PaymentMethod';
import { CreditNote1, creditNote1Schema } from './creditNote1';
import {
  CreditNoteApplication,
  creditNoteApplicationSchema,
} from './creditNoteApplication';
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
import { InvoiceLineItem2, invoiceLineItem2Schema } from './invoiceLineItem2';
import { InvoicePayer, invoicePayerSchema } from './invoicePayer';
import { InvoicePayment, invoicePaymentSchema } from './invoicePayment';
import {
  InvoicePreviousBalance,
  invoicePreviousBalanceSchema,
} from './invoicePreviousBalance';
import { InvoiceRefund, invoiceRefundSchema } from './invoiceRefund';
import { InvoiceRole2, invoiceRole2Schema } from './invoiceRole2';
import { InvoiceSeller, invoiceSellerSchema } from './invoiceSeller';
import { InvoiceStatus, invoiceStatusSchema } from './invoiceStatus';
import { InvoiceTax, invoiceTaxSchema } from './invoiceTax';
import { OriginInvoice, originInvoiceSchema } from './originInvoice';
import { ShippingAddress, shippingAddressSchema } from './shippingAddress';

/** Example schema for an `apply_credit_note` event */
export interface ApplyCreditNoteEventData1 {
  /** Unique identifier for the credit note application. It is generated automatically by Chargify and has the prefix "cdt_" followed by alphanumeric characters. */
  uid: string;
  /** A unique, identifying string that appears on the credit note and in places it is referenced. */
  creditNoteNumber: string;
  /** Unique identifier for the credit note. It is generated automatically by Chargify and has the prefix "cn_" followed by alphanumeric characters. */
  creditNoteUid: string;
  /** The full, original amount of the credit note. */
  originalAmount: string;
  /** The amount of the credit note applied to invoice. */
  appliedAmount: string;
  /** The time the credit note was applied, in ISO 8601 format, i.e. "2019-06-07T17:20:06Z" */
  transactionTime: string;
  /** The credit note memo. */
  memo: string | null;
  /** The role of the credit note (e.g. 'general') */
  role?: InvoiceRole2;
  /** Shows whether it was applied to consolidated invoice or not */
  consolidatedInvoice?: boolean;
  /** List of credit notes applied to children invoices (if consolidated invoice) */
  appliedCreditNotes?: AppliedCreditNoteData[];
  /** A unique, identifying string that appears on the debit note and in places it is referenced. */
  debitNoteNumber: string;
  /** Unique identifier for the debit note. It is generated automatically by Chargify and has the prefix "db_" followed by alphanumeric characters. */
  debitNoteUid: string;
  /**
   * Consolidation level of the invoice, which is applicable to invoice consolidation.  It will hold one of the following values:
   * * "none": A normal invoice with no consolidation.
   * * "child": An invoice segment which has been combined into a consolidated invoice.
   * * "parent": A consolidated invoice, whose contents are composed of invoice segments.
   * "Parent" invoices do not have lines of their own, but they have subtotals and totals which aggregate the member invoice segments.
   * See also the [invoice consolidation documentation](https://chargify.zendesk.com/hc/en-us/articles/4407746391835).
   */
  consolidationLevel: InvoiceConsolidationLevel;
  /** A nested data structure detailing the method of payment */
  paymentMethod: ApplyCreditNoteEventData1PaymentMethod;
  /** The Chargify id of the original payment */
  transactionId: number;
  /** For invoices with `consolidation_level` of `child`, this specifies the number of the parent (consolidated) invoice. */
  parentInvoiceNumber?: number | null;
  remainingPrepaymentAmount?: string | null;
  /** The flag that shows whether the original payment was a prepayment or not */
  prepayment: boolean;
  external?: boolean;
  id?: bigint;
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
  /** The current status of the invoice. See [Invoice Statuses](https://maxio-chargify.zendesk.com/hc/en-us/articles/5405078794253-Introduction-to-Invoices#invoice-statuses) for more. */
  status?: InvoiceStatus;
  parentInvoiceId?: number | null;
  /** The type of payment collection to be used in the subscription. For legacy Statements Architecture valid options are - `invoice`, `automatic`. For current Relationship Invoicing Architecture valid options are - `remittance`, `automatic`, `prepaid`. */
  collectionMethod?: CollectionMethod;
  /** A message that is printed on the invoice when it is marked for remittance collection. It is intended to describe to the customer how they may make payment, and is configured by the merchant. */
  paymentInstructions?: string;
  /** The ISO 4217 currency code (3 character string) representing the currency of invoice transaction. */
  currency?: string;
  /** For invoices with `consolidation_level` of `child`, this specifies the UID of the parent (consolidated) invoice. */
  parentInvoiceUid?: string | null;
  subscriptionGroupId?: number | null;
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
  billingAddress?: BillingAddress;
  shippingAddress?: ShippingAddress;
  /** Subtotal of the invoice, which is the sum of all line items before discounts or taxes. */
  subtotalAmount?: string;
  /** Total discount applied to the invoice. */
  discountAmount?: string;
  /** Total tax on the invoice. */
  taxAmount?: string;
  /** The invoice total, which is `subtotal_amount - discount_amount + tax_amount`.' */
  totalAmount: string;
  /**
   * The amount of credit (from credit notes) applied to this invoice.
   * Credits offset the amount due from the customer.
   */
  creditAmount?: string;
  /** The amount of the refund. */
  refundAmount: string;
  /** The amount paid on the invoice by the customer. */
  paidAmount?: string;
  /** Amount due on the invoice, which is `total_amount - credit_amount - paid_amount`. */
  dueAmount: string;
  /** Line items on the invoice. */
  lineItems?: InvoiceLineItem2[];
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
  chargebackStatus: ChargebackStatus;
  /** The previous collection method of the invoice. */
  fromCollectionMethod: string;
  /** The new collection method of the invoice. */
  toCollectionMethod: string;
  /** Identifier for the transaction within the payment gateway. */
  gatewayTransId?: string;
  /** The monetary value associated with the linked payment, expressed in dollars. */
  amount?: string;
  fromStatus?: unknown;
  toStatus?: unknown;
  /**
   * Credit notes are applied to invoices to offset invoiced amounts - they reduce the amount due. This field is the date the credit note became fully applied to invoices.
   * If the credit note has been partially applied, this field will not have a value until it has been fully applied.
   * The format is `"YYYY-MM-DD"`.
   */
  appliedDate?: string;
  /** The amount of the credit note remaining to be applied to invoices, which is `total_amount - applied_amount`. */
  remainingAmount?: string;
  applications?: CreditNoteApplication[];
  /** An array of origin invoices for the credit note. Learn more about [Origin Invoice from our docs](https://chargify.zendesk.com/hc/en-us/articles/4407753036699#origin-invoices) */
  originInvoices?: OriginInvoice[];
  /**
   * Unique identifier for the connected credit note. It is generated automatically by Chargify and has the prefix "cn_" followed by alphanumeric characters.
   * While the UID is long and not appropriate to show to customers, the number is usually shorter and consumable by the customer and the merchant alike.
   */
  originCreditNoteUid?: string;
  /** A unique, identifying string of the connected credit note. */
  originCreditNoteNumber?: string;
  /** The monetary value of the payment, expressed in cents. */
  amountInCents: number;
  /** If true, credit was created and applied it to the invoice. */
  applyCredit: boolean;
  creditNoteAttributes: CreditNote1;
  /** The ID of the payment transaction to be refunded. */
  paymentId: number;
  /** The ID of the refund transaction. */
  refundId: number;
  /** If true, the invoice is an advance invoice. */
  isAdvanceInvoice: boolean;
  /** The reason for the void. */
  reason: string;
  [key: string]: unknown;
}

export const applyCreditNoteEventData1Schema: Schema<any> = expandoObject({
  uid: ['uid', string()],
  creditNoteNumber: ['credit_note_number', string()],
  creditNoteUid: ['credit_note_uid', string()],
  originalAmount: ['original_amount', string()],
  appliedAmount: ['applied_amount', string()],
  transactionTime: ['transaction_time', string()],
  memo: ['memo', nullable(string())],
  role: ['role', optional(invoiceRole2Schema)],
  consolidatedInvoice: ['consolidated_invoice', optional(boolean())],
  appliedCreditNotes: [
    'applied_credit_notes',
    optional(array(lazy(() => appliedCreditNoteDataSchema))),
  ],
  debitNoteNumber: ['debit_note_number', string()],
  debitNoteUid: ['debit_note_uid', string()],
  consolidationLevel: ['consolidation_level', invoiceConsolidationLevelSchema],
  paymentMethod: [
    'payment_method',
    lazy(() => applyCreditNoteEventData1PaymentMethodSchema),
  ],
  transactionId: ['transaction_id', number()],
  parentInvoiceNumber: ['parent_invoice_number', optional(nullable(number()))],
  remainingPrepaymentAmount: [
    'remaining_prepayment_amount',
    optional(nullable(string())),
  ],
  prepayment: ['prepayment', boolean()],
  external: ['external', optional(boolean())],
  id: ['id', optional(bigint())],
  siteId: ['site_id', optional(number())],
  customerId: ['customer_id', optional(number())],
  subscriptionId: ['subscription_id', optional(number())],
  number: ['number', optional(string())],
  sequenceNumber: ['sequence_number', optional(number())],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
  issueDate: ['issue_date', optional(string())],
  dueDate: ['due_date', optional(string())],
  paidDate: ['paid_date', optional(nullable(string()))],
  status: ['status', optional(invoiceStatusSchema)],
  parentInvoiceId: ['parent_invoice_id', optional(nullable(number()))],
  collectionMethod: ['collection_method', optional(collectionMethodSchema)],
  paymentInstructions: ['payment_instructions', optional(string())],
  currency: ['currency', optional(string())],
  parentInvoiceUid: ['parent_invoice_uid', optional(nullable(string()))],
  subscriptionGroupId: ['subscription_group_id', optional(nullable(number()))],
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
  billingAddress: [
    'billing_address',
    optional(lazy(() => billingAddressSchema)),
  ],
  shippingAddress: [
    'shipping_address',
    optional(lazy(() => shippingAddressSchema)),
  ],
  subtotalAmount: ['subtotal_amount', optional(string())],
  discountAmount: ['discount_amount', optional(string())],
  taxAmount: ['tax_amount', optional(string())],
  totalAmount: ['total_amount', string()],
  creditAmount: ['credit_amount', optional(string())],
  refundAmount: ['refund_amount', string()],
  paidAmount: ['paid_amount', optional(string())],
  dueAmount: ['due_amount', string()],
  lineItems: [
    'line_items',
    optional(array(lazy(() => invoiceLineItem2Schema))),
  ],
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
  chargebackStatus: ['chargeback_status', chargebackStatusSchema],
  fromCollectionMethod: ['from_collection_method', string()],
  toCollectionMethod: ['to_collection_method', string()],
  gatewayTransId: ['gateway_trans_id', optional(string())],
  amount: ['amount', optional(string())],
  fromStatus: ['from_status', optional(unknown())],
  toStatus: ['to_status', optional(unknown())],
  appliedDate: ['applied_date', optional(string())],
  remainingAmount: ['remaining_amount', optional(string())],
  applications: [
    'applications',
    optional(array(lazy(() => creditNoteApplicationSchema))),
  ],
  originInvoices: [
    'origin_invoices',
    optional(array(lazy(() => originInvoiceSchema))),
  ],
  originCreditNoteUid: ['origin_credit_note_uid', optional(string())],
  originCreditNoteNumber: ['origin_credit_note_number', optional(string())],
  amountInCents: ['amount_in_cents', number()],
  applyCredit: ['apply_credit', boolean()],
  creditNoteAttributes: [
    'credit_note_attributes',
    lazy(() => creditNote1Schema),
  ],
  paymentId: ['payment_id', number()],
  refundId: ['refund_id', number()],
  isAdvanceInvoice: ['is_advance_invoice', boolean()],
  reason: ['reason', string()],
});
