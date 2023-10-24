/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';
import { BankAccountType, bankAccountTypeSchema } from './bankAccountType';
import { BankAccountVault, bankAccountVaultSchema } from './bankAccountVault';
import { HolderType, holderTypeSchema } from './holderType';

export interface SubscriptionGroupBankAccount {
  /** (Required when creating a subscription with ACH or GoCardless) The name of the bank where the customer’s account resides */
  bankName?: string;
  /** (Required when creating a subscription with ACH. Required when creating a subscription with GoCardless and bank_iban is blank) The customerʼs bank account number */
  bankAccountNumber?: string;
  /** (Required when creating a subscription with ACH. Optional when creating a subscription with GoCardless). The routing number of the bank. It becomes bank_code while passing via GoCardless API */
  bankRoutingNumber?: string;
  /** (Optional when creating a subscription with GoCardless). International Bank Account Number. Alternatively, local bank details can be provided */
  bankIban?: string;
  /** (Optional when creating a subscription with GoCardless) Branch code. Alternatively, an IBAN can be provided */
  bankBranchCode?: string;
  bankAccountType?: BankAccountType;
  bankAccountHolderType?: HolderType;
  paymentType?: string;
  billingAddress?: string;
  billingCity?: string;
  billingState?: string;
  billingZip?: string;
  billingCountry?: string;
  chargifyToken?: string;
  /** The vault that stores the payment profile with the provided vault_token. */
  currentVault?: BankAccountVault;
  gatewayHandle?: string;
}

export const subscriptionGroupBankAccountSchema: Schema<SubscriptionGroupBankAccount> = object(
  {
    bankName: ['bank_name', optional(string())],
    bankAccountNumber: ['bank_account_number', optional(string())],
    bankRoutingNumber: ['bank_routing_number', optional(string())],
    bankIban: ['bank_iban', optional(string())],
    bankBranchCode: ['bank_branch_code', optional(string())],
    bankAccountType: ['bank_account_type', optional(bankAccountTypeSchema)],
    bankAccountHolderType: [
      'bank_account_holder_type',
      optional(holderTypeSchema),
    ],
    paymentType: ['payment_type', optional(string())],
    billingAddress: ['billing_address', optional(string())],
    billingCity: ['billing_city', optional(string())],
    billingState: ['billing_state', optional(string())],
    billingZip: ['billing_zip', optional(string())],
    billingCountry: ['billing_country', optional(string())],
    chargifyToken: ['chargify_token', optional(string())],
    currentVault: ['current_vault', optional(bankAccountVaultSchema)],
    gatewayHandle: ['gateway_handle', optional(string())],
  }
);
