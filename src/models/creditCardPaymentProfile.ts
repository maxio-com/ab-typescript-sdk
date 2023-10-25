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
import { CardType1, cardType1Schema } from './cardType1';
import { CurrentVault, currentVaultSchema } from './currentVault';

export interface CreditCardPaymentProfile {
  id?: number;
  firstName?: string;
  lastName?: string;
  maskedCardNumber: string;
  cardType?: CardType1;
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
  billingAddress2?: string;
  paymentType?: string;
  disabled?: boolean;
  siteGatewaySettingId?: number;
  gatewayHandle?: string | null;
}

export const creditCardPaymentProfileSchema: Schema<CreditCardPaymentProfile> = object(
  {
    id: ['id', optional(number())],
    firstName: ['first_name', optional(string())],
    lastName: ['last_name', optional(string())],
    maskedCardNumber: ['masked_card_number', string()],
    cardType: ['card_type', optional(cardType1Schema)],
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
    billingAddress2: ['billing_address_2', optional(string())],
    paymentType: ['payment_type', optional(string())],
    disabled: ['disabled', optional(boolean())],
    siteGatewaySettingId: ['site_gateway_setting_id', optional(number())],
    gatewayHandle: ['gateway_handle', optional(nullable(string()))],
  }
);
