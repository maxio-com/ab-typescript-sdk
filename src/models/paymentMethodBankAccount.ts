/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';
import {
  InvoiceEventPaymentMethod,
  invoiceEventPaymentMethodSchema,
} from './invoiceEventPaymentMethod';

export interface PaymentMethodBankAccount {
  maskedAccountNumber: string;
  maskedRoutingNumber: string;
  type: InvoiceEventPaymentMethod;
  [key: string]: unknown;
}

export const paymentMethodBankAccountSchema: Schema<PaymentMethodBankAccount> = expandoObject(
  {
    maskedAccountNumber: ['masked_account_number', string()],
    maskedRoutingNumber: ['masked_routing_number', string()],
    type: ['type', invoiceEventPaymentMethodSchema],
  }
);
