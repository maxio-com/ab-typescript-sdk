/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';
import { BankAccountVault, bankAccountVaultSchema } from './bankAccountVault';

export interface SubscriptionBankAccount {
  /** Defaults to personal */
  bankAccountHolderType?: string;
  /** Defaults to checking */
  bankAccountType?: string;
  /** The bank where the account resides */
  bankName?: string;
  /** The current billing street address for the bank account */
  billingAddress?: string;
  /** The current billing street address, second line, for the bank account */
  billingAddress2?: string;
  /** The current billing address city for the bank account */
  billingCity?: string;
  /** The current billing address state for the bank account */
  billingState?: string;
  /** The current billing address zip code for the bank account */
  billingZip?: string;
  /** The current billing address country for the bank account */
  billingCountry?: string;
  /** The vault that stores the payment profile with the provided vault_token. */
  currentVault?: BankAccountVault;
  /** The Chargify-assigned id for the customer record to which the bank account belongs */
  customerId?: number;
  /** (only for Authorize.Net CIM storage): the customerProfileId for the owner of the customerPaymentProfileId provided as the vault_token */
  customerVaultToken?: string;
  /** The first name of the bank account holder */
  firstName?: string;
  /** The last name of the bank account holder */
  lastName?: string;
  /** The Chargify-assigned ID of the stored bank account. This value can be used as an input to payment_profile_id when creating a subscription, in order to re-use a stored payment profile for the same customer */
  id?: number;
  /** A string representation of the stored bank account number with all but the last 4 digits marked with X’s (i.e. ‘XXXXXXX1111’) */
  maskedBankAccountNumber?: string;
  /** A string representation of the stored bank routing number with all but the last 4 digits marked with X’s (i.e. ‘XXXXXXX1111’). payment_type will be bank_account */
  maskedBankRoutingNumber?: string;
  /** The “token” provided by your vault storage for an already stored payment profile */
  vaultToken?: string;
  /** Token received after sending billing informations using chargify.js. This token will only be received if passed as a sole attribute of credit_card_attributes (i.e. tok_9g6hw85pnpt6knmskpwp4ttt) */
  chargifyToken?: string;
  siteGatewaySettingId?: number;
  gatewayHandle?: string;
}

export const subscriptionBankAccountSchema: Schema<SubscriptionBankAccount> = object(
  {
    bankAccountHolderType: ['bank_account_holder_type', optional(string())],
    bankAccountType: ['bank_account_type', optional(string())],
    bankName: ['bank_name', optional(string())],
    billingAddress: ['billing_address', optional(string())],
    billingAddress2: ['billing_address_2', optional(string())],
    billingCity: ['billing_city', optional(string())],
    billingState: ['billing_state', optional(string())],
    billingZip: ['billing_zip', optional(string())],
    billingCountry: ['billing_country', optional(string())],
    currentVault: ['current_vault', optional(bankAccountVaultSchema)],
    customerId: ['customer_id', optional(number())],
    customerVaultToken: ['customer_vault_token', optional(string())],
    firstName: ['first_name', optional(string())],
    lastName: ['last_name', optional(string())],
    id: ['id', optional(number())],
    maskedBankAccountNumber: ['masked_bank_account_number', optional(string())],
    maskedBankRoutingNumber: ['masked_bank_routing_number', optional(string())],
    vaultToken: ['vault_token', optional(string())],
    chargifyToken: ['chargify_token', optional(string())],
    siteGatewaySettingId: ['site_gateway_setting_id', optional(number())],
    gatewayHandle: ['gateway_handle', optional(string())],
  }
);
