/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { BankAccountVault, bankAccountVaultSchema } from './bankAccountVault';

export interface BankAccount {
  id?: number;
  firstName?: string;
  lastName?: string;
  customerId?: number;
  /** The vault that stores the payment profile with the provided vault_token. */
  currentVault?: BankAccountVault;
  vaultToken?: string;
  billingAddress?: string;
  billingCity?: string;
  billingState?: string;
  billingZip?: string;
  billingCountry?: string;
  customerVaultToken?: string | null;
  billingAddress2?: string;
  bankName?: string;
  maskedBankRoutingNumber?: string;
  maskedBankAccountNumber?: string;
  bankAccountType?: string;
  bankAccountHolderType?: string;
  paymentType?: string;
  /** denotes whether a bank account has been verified by providing the amounts of two small deposits made into the account */
  verified?: boolean;
  siteGatewaySettingId?: number;
  gatewayHandle?: string;
}

export const bankAccountSchema: Schema<BankAccount> = object({
  id: ['id', optional(number())],
  firstName: ['first_name', optional(string())],
  lastName: ['last_name', optional(string())],
  customerId: ['customer_id', optional(number())],
  currentVault: ['current_vault', optional(bankAccountVaultSchema)],
  vaultToken: ['vault_token', optional(string())],
  billingAddress: ['billing_address', optional(string())],
  billingCity: ['billing_city', optional(string())],
  billingState: ['billing_state', optional(string())],
  billingZip: ['billing_zip', optional(string())],
  billingCountry: ['billing_country', optional(string())],
  customerVaultToken: ['customer_vault_token', optional(nullable(string()))],
  billingAddress2: ['billing_address_2', optional(string())],
  bankName: ['bank_name', optional(string())],
  maskedBankRoutingNumber: ['masked_bank_routing_number', optional(string())],
  maskedBankAccountNumber: ['masked_bank_account_number', optional(string())],
  bankAccountType: ['bank_account_type', optional(string())],
  bankAccountHolderType: ['bank_account_holder_type', optional(string())],
  paymentType: ['payment_type', optional(string())],
  verified: ['verified', optional(boolean())],
  siteGatewaySettingId: ['site_gateway_setting_id', optional(number())],
  gatewayHandle: ['gateway_handle', optional(string())],
});
