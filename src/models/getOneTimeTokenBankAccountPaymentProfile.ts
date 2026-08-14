/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  expandoObject,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema.js';
import {
  BankAccountHolderType,
  bankAccountHolderTypeSchema,
} from './bankAccountHolderType.js';
import { BankAccountType, bankAccountTypeSchema } from './bankAccountType.js';
import {
  BankAccountVault,
  bankAccountVaultSchema,
} from './bankAccountVault.js';

export interface GetOneTimeTokenBankAccountPaymentProfile {
  id?: string | null;
  firstName: string;
  lastName: string;
  customerId?: string | null;
  /** The vault that stores the payment profile with the provided vault_token. Use `bogus` for testing. */
  currentVault: BankAccountVault;
  vaultToken: string;
  billingAddress: string;
  billingAddress2?: string;
  billingCity: string;
  billingCountry: string;
  billingState: string;
  billingZip: string;
  bankName: string;
  maskedBankRoutingNumber: string;
  maskedBankAccountNumber: string;
  /** Defaults to checking */
  bankAccountType: BankAccountType;
  /** Defaults to personal */
  bankAccountHolderType: BankAccountHolderType;
  paymentType: string;
  disabled: boolean;
  siteGatewaySettingId: number;
  customerVaultToken?: string | null;
  gatewayHandle?: string | null;
  verified?: boolean | null;
  [key: string]: unknown;
}

export const getOneTimeTokenBankAccountPaymentProfileSchema: Schema<GetOneTimeTokenBankAccountPaymentProfile> = expandoObject(
  {
    id: ['id', optional(nullable(string()))],
    firstName: ['first_name', string()],
    lastName: ['last_name', string()],
    customerId: ['customer_id', optional(nullable(string()))],
    currentVault: ['current_vault', bankAccountVaultSchema],
    vaultToken: ['vault_token', string()],
    billingAddress: ['billing_address', string()],
    billingAddress2: ['billing_address_2', optional(string())],
    billingCity: ['billing_city', string()],
    billingCountry: ['billing_country', string()],
    billingState: ['billing_state', string()],
    billingZip: ['billing_zip', string()],
    bankName: ['bank_name', string()],
    maskedBankRoutingNumber: ['masked_bank_routing_number', string()],
    maskedBankAccountNumber: ['masked_bank_account_number', string()],
    bankAccountType: ['bank_account_type', bankAccountTypeSchema],
    bankAccountHolderType: [
      'bank_account_holder_type',
      bankAccountHolderTypeSchema,
    ],
    paymentType: ['payment_type', string()],
    disabled: ['disabled', boolean()],
    siteGatewaySettingId: ['site_gateway_setting_id', number()],
    customerVaultToken: ['customer_vault_token', optional(nullable(string()))],
    gatewayHandle: ['gateway_handle', optional(nullable(string()))],
    verified: ['verified', optional(nullable(boolean()))],
  }
);
