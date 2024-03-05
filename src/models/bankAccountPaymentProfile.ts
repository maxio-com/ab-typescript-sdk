/**
 * Maxio Advanced BillingLib
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
} from '../schema';
import {
  BankAccountHolderType,
  bankAccountHolderTypeSchema,
} from './bankAccountHolderType';
import { BankAccountType, bankAccountTypeSchema } from './bankAccountType';
import { BankAccountVault, bankAccountVaultSchema } from './bankAccountVault';
import { PaymentType, paymentTypeSchema } from './paymentType';

export interface BankAccountPaymentProfile {
  /** The Chargify-assigned ID of the stored bank account. This value can be used as an input to payment_profile_id when creating a subscription, in order to re-use a stored payment profile for the same customer */
  id?: number;
  /** The first name of the bank account holder */
  firstName?: string;
  /** The last name of the bank account holder */
  lastName?: string;
  /** The Chargify-assigned id for the customer record to which the bank account belongs */
  customerId?: number;
  /** The vault that stores the payment profile with the provided vault_token. */
  currentVault?: BankAccountVault;
  /** The “token” provided by your vault storage for an already stored payment profile */
  vaultToken?: string;
  /** The current billing street address for the bank account */
  billingAddress?: string | null;
  /** The current billing address city for the bank account */
  billingCity?: string | null;
  /** The current billing address state for the bank account */
  billingState?: string | null;
  /** The current billing address zip code for the bank account */
  billingZip?: string | null;
  /** The current billing address country for the bank account */
  billingCountry?: string | null;
  /** (only for Authorize.Net CIM storage): the customerProfileId for the owner of the customerPaymentProfileId provided as the vault_token. */
  customerVaultToken?: string | null;
  /** The current billing street address, second line, for the bank account */
  billingAddress2?: string | null;
  /** The bank where the account resides */
  bankName?: string;
  /** A string representation of the stored bank routing number with all but the last 4 digits marked with X’s (i.e. ‘XXXXXXX1111’). payment_type will be bank_account */
  maskedBankRoutingNumber: string;
  /** A string representation of the stored bank account number with all but the last 4 digits marked with X’s (i.e. ‘XXXXXXX1111’) */
  maskedBankAccountNumber: string;
  /** Defaults to checking */
  bankAccountType?: BankAccountType;
  /** Defaults to personal */
  bankAccountHolderType?: BankAccountHolderType;
  paymentType?: PaymentType;
  /** denotes whether a bank account has been verified by providing the amounts of two small deposits made into the account */
  verified?: boolean;
  siteGatewaySettingId?: number | null;
  gatewayHandle?: string | null;
  [key: string]: unknown;
}

export const bankAccountPaymentProfileSchema: Schema<BankAccountPaymentProfile> = expandoObject(
  {
    id: ['id', optional(number())],
    firstName: ['first_name', optional(string())],
    lastName: ['last_name', optional(string())],
    customerId: ['customer_id', optional(number())],
    currentVault: ['current_vault', optional(bankAccountVaultSchema)],
    vaultToken: ['vault_token', optional(string())],
    billingAddress: ['billing_address', optional(nullable(string()))],
    billingCity: ['billing_city', optional(nullable(string()))],
    billingState: ['billing_state', optional(nullable(string()))],
    billingZip: ['billing_zip', optional(nullable(string()))],
    billingCountry: ['billing_country', optional(nullable(string()))],
    customerVaultToken: ['customer_vault_token', optional(nullable(string()))],
    billingAddress2: ['billing_address_2', optional(nullable(string()))],
    bankName: ['bank_name', optional(string())],
    maskedBankRoutingNumber: ['masked_bank_routing_number', string()],
    maskedBankAccountNumber: ['masked_bank_account_number', string()],
    bankAccountType: ['bank_account_type', optional(bankAccountTypeSchema)],
    bankAccountHolderType: [
      'bank_account_holder_type',
      optional(bankAccountHolderTypeSchema),
    ],
    paymentType: ['payment_type', optional(paymentTypeSchema)],
    verified: ['verified', optional(boolean())],
    siteGatewaySettingId: [
      'site_gateway_setting_id',
      optional(nullable(number())),
    ],
    gatewayHandle: ['gateway_handle', optional(nullable(string()))],
  }
);
