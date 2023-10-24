/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, number, object, optional, Schema, string } from '../schema';
import { CurrentVault, currentVaultSchema } from './currentVault';

export interface UpdatedPaymentProfile {
  id?: number;
  firstName?: string;
  lastName?: string;
  cardType?: string;
  expirationMonth?: number;
  expirationYear?: number;
  customerId?: number;
  /** The vault that stores the payment profile with the provided `vault_token`. Use `bogus` for testing. */
  currentVault?: CurrentVault;
  vaultToken?: string;
  billingAddress?: string;
  billingAddress2?: string;
  billingCity?: string;
  billingState?: string;
  billingZip?: string;
  billingCountry?: string;
  paymentType?: string;
  siteGatewaySettingId?: number;
  gatewayHandle?: string | null;
  maskedCardNumber?: string;
  customerVaultToken?: string | null;
}

export const updatedPaymentProfileSchema: Schema<UpdatedPaymentProfile> = object(
  {
    id: ['id', optional(number())],
    firstName: ['first_name', optional(string())],
    lastName: ['last_name', optional(string())],
    cardType: ['card_type', optional(string())],
    expirationMonth: ['expiration_month', optional(number())],
    expirationYear: ['expiration_year', optional(number())],
    customerId: ['customer_id', optional(number())],
    currentVault: ['current_vault', optional(currentVaultSchema)],
    vaultToken: ['vault_token', optional(string())],
    billingAddress: ['billing_address', optional(string())],
    billingAddress2: ['billing_address_2', optional(string())],
    billingCity: ['billing_city', optional(string())],
    billingState: ['billing_state', optional(string())],
    billingZip: ['billing_zip', optional(string())],
    billingCountry: ['billing_country', optional(string())],
    paymentType: ['payment_type', optional(string())],
    siteGatewaySettingId: ['site_gateway_setting_id', optional(number())],
    gatewayHandle: ['gateway_handle', optional(nullable(string()))],
    maskedCardNumber: ['masked_card_number', optional(string())],
    customerVaultToken: ['customer_vault_token', optional(nullable(string()))],
  }
);
