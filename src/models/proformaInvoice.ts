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
import { InvoiceAddress, invoiceAddressSchema } from './invoiceAddress';
import { InvoiceCustomer, invoiceCustomerSchema } from './invoiceCustomer';
import { InvoiceLineItem, invoiceLineItemSchema } from './invoiceLineItem';
import { InvoiceSeller, invoiceSellerSchema } from './invoiceSeller';
import {
  ProformaCustomField,
  proformaCustomFieldSchema,
} from './proformaCustomField';
import {
  ProformaInvoiceCredit,
  proformaInvoiceCreditSchema,
} from './proformaInvoiceCredit';
import {
  ProformaInvoiceDiscount,
  proformaInvoiceDiscountSchema,
} from './proformaInvoiceDiscount';
import {
  ProformaInvoicePayment,
  proformaInvoicePaymentSchema,
} from './proformaInvoicePayment';
import {
  ProformaInvoiceTax,
  proformaInvoiceTaxSchema,
} from './proformaInvoiceTax';

export interface ProformaInvoice {
  uid?: string;
  siteId?: number;
  customerId?: number;
  subscriptionId?: number;
  number?: number;
  sequenceNumber?: number;
  createdAt?: string;
  deliveryDate?: string;
  status?: string;
  collectionMethod?: string;
  paymentInstructions?: string;
  currency?: string;
  consolidationLevel?: string;
  productName?: string;
  productFamilyName?: string;
  role?: string;
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
  customFields?: ProformaCustomField[];
  publicUrl?: string;
}

export const proformaInvoiceSchema: Schema<ProformaInvoice> = object({
  uid: ['uid', optional(string())],
  siteId: ['site_id', optional(number())],
  customerId: ['customer_id', optional(number())],
  subscriptionId: ['subscription_id', optional(number())],
  number: ['number', optional(number())],
  sequenceNumber: ['sequence_number', optional(number())],
  createdAt: ['created_at', optional(string())],
  deliveryDate: ['delivery_date', optional(string())],
  status: ['status', optional(string())],
  collectionMethod: ['collection_method', optional(string())],
  paymentInstructions: ['payment_instructions', optional(string())],
  currency: ['currency', optional(string())],
  consolidationLevel: ['consolidation_level', optional(string())],
  productName: ['product_name', optional(string())],
  productFamilyName: ['product_family_name', optional(string())],
  role: ['role', optional(string())],
  seller: ['seller', optional(lazy(() => invoiceSellerSchema))],
  customer: ['customer', optional(lazy(() => invoiceCustomerSchema))],
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
  paidAmount: ['paid_amount', optional(string())],
  refundAmount: ['refund_amount', optional(string())],
  dueAmount: ['due_amount', optional(string())],
  lineItems: ['line_items', optional(array(lazy(() => invoiceLineItemSchema)))],
  discounts: [
    'discounts',
    optional(array(lazy(() => proformaInvoiceDiscountSchema))),
  ],
  taxes: ['taxes', optional(array(lazy(() => proformaInvoiceTaxSchema)))],
  credits: [
    'credits',
    optional(array(lazy(() => proformaInvoiceCreditSchema))),
  ],
  payments: [
    'payments',
    optional(array(lazy(() => proformaInvoicePaymentSchema))),
  ],
  customFields: [
    'custom_fields',
    optional(array(lazy(() => proformaCustomFieldSchema))),
  ],
  publicUrl: ['public_url', optional(string())],
});
