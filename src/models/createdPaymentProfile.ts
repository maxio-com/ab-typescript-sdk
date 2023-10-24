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
import { CurrentVault, currentVaultSchema } from './currentVault';

export interface CreatedPaymentProfile {
  id?: number;
  firstName?: string;
  lastName?: string;
  maskedCardNumber?: string | null;
  cardType?: string;
  expirationMonth?: number;
  expirationYear?: number;
  customerId?: number;
  /** The vault that stores the payment profile with the provided `vault_token`. Use `bogus` for testing. */
  currentVault?: CurrentVault;
  vaultToken?: string;
  billingAddress?: string;
  billingCity?: string;
  billingState?: string;
  billingZip?: string;
  billingCountry?: string;
  customerVaultToken?: string | null;
  billingAddress2?: string | null;
  paymentType?: string;
  bankName?: string;
  maskedBankRoutingNumber?: string;
  maskedBankAccountNumber?: string;
  bankAccountType?: string;
  bankAccountHolderType?: string;
  verified?: boolean;
  siteGatewaySettingId?: number;
  gatewayHandle?: string;
}

export const createdPaymentProfileSchema: Schema<CreatedPaymentProfile> = object(
  {
    id: ['id', optional(number())],
    firstName: ['first_name', optional(string())],
    lastName: ['last_name', optional(string())],
    maskedCardNumber: ['masked_card_number', optional(nullable(string()))],
    cardType: ['card_type', optional(string())],
    expirationMonth: ['expiration_month', optional(number())],
    expirationYear: ['expiration_year', optional(number())],
    customerId: ['customer_id', optional(number())],
    currentVault: ['current_vault', optional(currentVaultSchema)],
    vaultToken: ['vault_token', optional(string())],
    billingAddress: ['billing_address', optional(string())],
    billingCity: ['billing_city', optional(string())],
    billingState: ['billing_state', optional(string())],
    billingZip: ['billing_zip', optional(string())],
    billingCountry: ['billing_country', optional(string())],
    customerVaultToken: ['customer_vault_token', optional(nullable(string()))],
    billingAddress2: ['billing_address_2', optional(nullable(string()))],
    paymentType: ['payment_type', optional(string())],
    bankName: ['bank_name', optional(string())],
    maskedBankRoutingNumber: ['masked_bank_routing_number', optional(string())],
    maskedBankAccountNumber: ['masked_bank_account_number', optional(string())],
    bankAccountType: ['bank_account_type', optional(string())],
    bankAccountHolderType: ['bank_account_holder_type', optional(string())],
    verified: ['verified', optional(boolean())],
    siteGatewaySettingId: ['site_gateway_setting_id', optional(number())],
    gatewayHandle: ['gateway_handle', optional(string())],
  }
);
