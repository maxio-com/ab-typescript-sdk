/**
 * Maxio Advanced Billing formerly Chargify APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
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

export interface BankAccountPaymentProfile {
  id?: number;
  firstName?: string;
  lastName?: string;
  customerId?: number;
  currentVault?: string;
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
  gatewayHandle?: string | null;
}

export const bankAccountPaymentProfileSchema: Schema<BankAccountPaymentProfile> = object(
  {
    id: ['id', optional(number())],
    firstName: ['first_name', optional(string())],
    lastName: ['last_name', optional(string())],
    customerId: ['customer_id', optional(number())],
    currentVault: ['current_vault', optional(string())],
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
    gatewayHandle: ['gateway_handle', optional(nullable(string()))],
  }
);
