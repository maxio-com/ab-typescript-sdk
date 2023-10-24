/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';
import { BankAccountVault, bankAccountVaultSchema } from './bankAccountVault';

export interface BankAccountAttributes {
  chargifyToken?: string;
  /** (Required when creating a subscription with ACH or GoCardless) The name of the bank where the customer’s account resides */
  bankName?: string;
  /** (Required when creating a subscription with ACH. Optional when creating a subscription with GoCardless). The routing number of the bank. It becomes bank_code while passing via GoCardless API */
  bankRoutingNumber?: string;
  /** (Required when creating a subscription with ACH. Required when creating a subscription with GoCardless and bank_iban is blank) The customerʼs bank account number */
  bankAccountNumber?: string;
  bankAccountType?: string;
  /** (Optional when creating a subscription with GoCardless) Branch code. Alternatively, an IBAN can be provided */
  bankBranchCode?: string;
  /** (Optional when creating a subscription with GoCardless). International Bank Account Number. Alternatively, local bank details can be provided */
  bankIban?: string;
  bankAccountHolderType?: string;
  paymentType?: string;
  /** The vault that stores the payment profile with the provided vault_token. */
  currentVault?: BankAccountVault;
  vaultToken?: string;
  /** (only for Authorize.Net CIM storage or Square) The customerProfileId for the owner of the customerPaymentProfileId provided as the vault_token */
  customerVaultToken?: string;
}

export const bankAccountAttributesSchema: Schema<BankAccountAttributes> = object(
  {
    chargifyToken: ['chargify_token', optional(string())],
    bankName: ['bank_name', optional(string())],
    bankRoutingNumber: ['bank_routing_number', optional(string())],
    bankAccountNumber: ['bank_account_number', optional(string())],
    bankAccountType: ['bank_account_type', optional(string())],
    bankBranchCode: ['bank_branch_code', optional(string())],
    bankIban: ['bank_iban', optional(string())],
    bankAccountHolderType: ['bank_account_holder_type', optional(string())],
    paymentType: ['payment_type', optional(string())],
    currentVault: ['current_vault', optional(bankAccountVaultSchema)],
    vaultToken: ['vault_token', optional(string())],
    customerVaultToken: ['customer_vault_token', optional(string())],
  }
);
