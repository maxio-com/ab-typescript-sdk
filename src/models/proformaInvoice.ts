/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  lazy,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema.js';
import {
  AvailableActions,
  availableActionsSchema,
} from './availableActions.js';
import {
  CollectionMethod,
  collectionMethodSchema,
} from './collectionMethod.js';
import { InvoiceAddress, invoiceAddressSchema } from './invoiceAddress.js';
import {
  InvoiceConsolidationLevel,
  invoiceConsolidationLevelSchema,
} from './invoiceConsolidationLevel.js';
import { InvoiceCustomer, invoiceCustomerSchema } from './invoiceCustomer.js';
import {
  InvoiceCustomField,
  invoiceCustomFieldSchema,
} from './invoiceCustomField.js';
import { InvoiceLineItem, invoiceLineItemSchema } from './invoiceLineItem.js';
import { InvoiceSeller, invoiceSellerSchema } from './invoiceSeller.js';
import {
  ProformaInvoiceCredit,
  proformaInvoiceCreditSchema,
} from './proformaInvoiceCredit.js';
import {
  ProformaInvoiceDiscount,
  proformaInvoiceDiscountSchema,
} from './proformaInvoiceDiscount.js';
import {
  ProformaInvoicePayment,
  proformaInvoicePaymentSchema,
} from './proformaInvoicePayment.js';
import {
  ProformaInvoiceRole,
  proformaInvoiceRoleSchema,
} from './proformaInvoiceRole.js';
import {
  ProformaInvoiceStatus,
  proformaInvoiceStatusSchema,
} from './proformaInvoiceStatus.js';
import {
  ProformaInvoiceTax,
  proformaInvoiceTaxSchema,
} from './proformaInvoiceTax.js';

export interface ProformaInvoice {
  uid?: string;
  siteId?: number;
  customerId?: number | null;
  subscriptionId?: number | null;
  number?: number | null;
  sequenceNumber?: number | null;
  createdAt?: string;
  deliveryDate?: string;
  status?: ProformaInvoiceStatus;
  /** The type of payment collection to be used in the subscription. For legacy Statements Architecture valid options are - `invoice`, `automatic`. For current Relationship Invoicing Architecture valid options are - `remittance`, `automatic`, `prepaid`. */
  collectionMethod?: CollectionMethod;
  paymentInstructions?: string;
  currency?: string;
  /**
   * Consolidation level of the invoice, which is applicable to invoice consolidation.  It will hold one of the following values:
   * * "none": A normal invoice with no consolidation.
   * * "child": An invoice segment which has been combined into a consolidated invoice.
   * * "parent": A consolidated invoice, whose contents are composed of invoice segments.
   * "Parent" invoices do not have lines of their own, but they have subtotals and totals which aggregate the member invoice segments.
   * See also the [invoice consolidation documentation](https://maxio.zendesk.com/hc/en-us/articles/24252269909389-Invoice-Consolidation).
   */
  consolidationLevel?: InvoiceConsolidationLevel;
  productName?: string;
  productFamilyName?: string;
  /** 'proforma' value is deprecated in favor of proforma_adhoc and proforma_automatic */
  role?: ProformaInvoiceRole;
  /** Information about the seller (merchant) listed on the masthead of the invoice. */
  seller?: InvoiceSeller;
  /** Information about the customer who is owner or recipient the invoiced subscription. */
  customer?: InvoiceCustomer;
  memo?: string;
  billingAddress?: InvoiceAddress;
  shippingAddress?: InvoiceAddress;
  subtotalAmount?: string;
  discountAmount?: string;
  taxAmount?: string;
  totalAmount?: string;
  creditAmount?: string;
  paidAmount?: string;
  refundAmount?: string;
  dueAmount?: string;
  lineItems?: InvoiceLineItem[];
  discounts?: ProformaInvoiceDiscount[];
  taxes?: ProformaInvoiceTax[];
  credits?: ProformaInvoiceCredit[];
  payments?: ProformaInvoicePayment[];
  customFields?: InvoiceCustomField[];
  publicUrl?: string | null;
  availableActions?: AvailableActions;
  [key: string]: unknown;
}

export const proformaInvoiceSchema: Schema<ProformaInvoice> = lazy(() =>
  expandoObject({
    uid: ['uid', optional(string())],
    siteId: ['site_id', optional(number())],
    customerId: ['customer_id', optional(nullable(number()))],
    subscriptionId: ['subscription_id', optional(nullable(number()))],
    number: ['number', optional(nullable(number()))],
    sequenceNumber: ['sequence_number', optional(nullable(number()))],
    createdAt: ['created_at', optional(string())],
    deliveryDate: ['delivery_date', optional(string())],
    status: ['status', optional(proformaInvoiceStatusSchema)],
    collectionMethod: ['collection_method', optional(collectionMethodSchema)],
    paymentInstructions: ['payment_instructions', optional(string())],
    currency: ['currency', optional(string())],
    consolidationLevel: [
      'consolidation_level',
      optional(invoiceConsolidationLevelSchema),
    ],
    productName: ['product_name', optional(string())],
    productFamilyName: ['product_family_name', optional(string())],
    role: ['role', optional(proformaInvoiceRoleSchema)],
    seller: ['seller', optional(invoiceSellerSchema)],
    customer: ['customer', optional(invoiceCustomerSchema)],
    memo: ['memo', optional(string())],
    billingAddress: ['billing_address', optional(invoiceAddressSchema)],
    shippingAddress: ['shipping_address', optional(invoiceAddressSchema)],
    subtotalAmount: ['subtotal_amount', optional(string())],
    discountAmount: ['discount_amount', optional(string())],
    taxAmount: ['tax_amount', optional(string())],
    totalAmount: ['total_amount', optional(string())],
    creditAmount: ['credit_amount', optional(string())],
    paidAmount: ['paid_amount', optional(string())],
    refundAmount: ['refund_amount', optional(string())],
    dueAmount: ['due_amount', optional(string())],
    lineItems: ['line_items', optional(array(invoiceLineItemSchema))],
    discounts: ['discounts', optional(array(proformaInvoiceDiscountSchema))],
    taxes: ['taxes', optional(array(proformaInvoiceTaxSchema))],
    credits: ['credits', optional(array(proformaInvoiceCreditSchema))],
    payments: ['payments', optional(array(proformaInvoicePaymentSchema))],
    customFields: ['custom_fields', optional(array(invoiceCustomFieldSchema))],
    publicUrl: ['public_url', optional(nullable(string()))],
    availableActions: ['available_actions', optional(availableActionsSchema)],
  })
);
