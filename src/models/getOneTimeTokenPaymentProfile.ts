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

export interface GetOneTimeTokenPaymentProfile {
  id?: string | null;
  firstName: string;
  lastName: string;
  maskedCardNumber: string;
  cardType: string;
  expirationMonth: number;
  expirationYear: number;
  customerId?: string | null;
  /** The vault that stores the payment profile with the provided `vault_token`. Use `bogus` for testing. */
  currentVault: CurrentVault;
  vaultToken: string;
  billingAddress: string;
  billingAddress2?: string;
  billingCity: string;
  billingCountry: string;
  billingState: string;
  billingZip: string;
  paymentType: string;
  disabled: boolean;
  siteGatewaySettingId: number;
  customerVaultToken?: string | null;
  gatewayHandle?: string | null;
}

export const getOneTimeTokenPaymentProfileSchema: Schema<GetOneTimeTokenPaymentProfile> = object(
  {
    id: ['id', optional(nullable(string()))],
    firstName: ['first_name', string()],
    lastName: ['last_name', string()],
    maskedCardNumber: ['masked_card_number', string()],
    cardType: ['card_type', string()],
    expirationMonth: ['expiration_month', number()],
    expirationYear: ['expiration_year', number()],
    customerId: ['customer_id', optional(nullable(string()))],
    currentVault: ['current_vault', currentVaultSchema],
    vaultToken: ['vault_token', string()],
    billingAddress: ['billing_address', string()],
    billingAddress2: ['billing_address_2', optional(string())],
    billingCity: ['billing_city', string()],
    billingCountry: ['billing_country', string()],
    billingState: ['billing_state', string()],
    billingZip: ['billing_zip', string()],
    paymentType: ['payment_type', string()],
    disabled: ['disabled', boolean()],
    siteGatewaySettingId: ['site_gateway_setting_id', number()],
    customerVaultToken: ['customer_vault_token', optional(nullable(string()))],
    gatewayHandle: ['gateway_handle', optional(nullable(string()))],
  }
);
