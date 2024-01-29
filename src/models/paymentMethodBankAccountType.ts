/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface PaymentMethodBankAccountType {
  maskedAccountNumber: string;
  maskedRoutingNumber: string;
  type: string;
}

export const paymentMethodBankAccountTypeSchema: Schema<PaymentMethodBankAccountType> = object(
  {
    maskedAccountNumber: ['masked_account_number', string()],
    maskedRoutingNumber: ['masked_routing_number', string()],
    type: ['type', string()],
  }
);
