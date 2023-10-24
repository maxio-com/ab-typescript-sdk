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
import { CardType, cardTypeSchema } from './cardType';
import { CurrentVault, currentVaultSchema } from './currentVault';
import { PaymentType, paymentTypeSchema } from './paymentType';

export interface PaymentProfile {
  /** The Chargify-assigned ID of the stored card. This value can be used as an input to payment_profile_id when creating a subscription, in order to re-use a stored payment profile for the same customer. */
  id?: number;
  /** The first name of the card holder. */
  firstName?: string;
  /** The last name of the card holder. */
  lastName?: string;
  /** A string representation of the credit card number with all but the last 4 digits masked with X’s (i.e. ‘XXXX-XXXX-XXXX-1234’). */
  maskedCardNumber?: string;
  /** The type of card used. */
  cardType?: CardType;
  /** An integer representing the expiration month of the card(1 – 12). */
  expirationMonth?: number;
  /** An integer representing the 4-digit expiration year of the card(i.e. ‘2012’). */
  expirationYear?: number;
  /** The Chargify-assigned id for the customer record to which the card belongs. */
  customerId?: number;
  /** The vault that stores the payment profile with the provided `vault_token`. Use `bogus` for testing. */
  currentVault?: CurrentVault;
  /** The “token” provided by your vault storage for an already stored payment profile. */
  vaultToken?: string | null;
  /** The current billing street address for the card. */
  billingAddress?: string | null;
  /** The current billing address city for the card. */
  billingCity?: string | null;
  /** The current billing address state for the card. */
  billingState?: string | null;
  /** The current billing address zip code for the card. */
  billingZip?: string | null;
  /** The current billing address country for the card. */
  billingCountry?: string | null;
  /** (only for Authorize.Net CIM storage): the customerProfileId for the owner of the customerPaymentProfileId provided as the vault_token. */
  customerVaultToken?: string | null;
  /** The current billing street address, second line, for the card. */
  billingAddress2?: string | null;
  paymentType?: PaymentType;
  disabled?: boolean;
  /** Token received after sending billing informations using chargify.js. */
  chargifyToken?: string;
  siteGatewaySettingId?: number;
  /** An identifier of connected gateway. */
  gatewayHandle?: string | null;
}

export const paymentProfileSchema: Schema<PaymentProfile> = object({
  id: ['id', optional(number())],
  firstName: ['first_name', optional(string())],
  lastName: ['last_name', optional(string())],
  maskedCardNumber: ['masked_card_number', optional(string())],
  cardType: ['card_type', optional(cardTypeSchema)],
  expirationMonth: ['expiration_month', optional(number())],
  expirationYear: ['expiration_year', optional(number())],
  customerId: ['customer_id', optional(number())],
  currentVault: ['current_vault', optional(currentVaultSchema)],
  vaultToken: ['vault_token', optional(nullable(string()))],
  billingAddress: ['billing_address', optional(nullable(string()))],
  billingCity: ['billing_city', optional(nullable(string()))],
  billingState: ['billing_state', optional(nullable(string()))],
  billingZip: ['billing_zip', optional(nullable(string()))],
  billingCountry: ['billing_country', optional(nullable(string()))],
  customerVaultToken: ['customer_vault_token', optional(nullable(string()))],
  billingAddress2: ['billing_address_2', optional(nullable(string()))],
  paymentType: ['payment_type', optional(paymentTypeSchema)],
  disabled: ['disabled', optional(boolean())],
  chargifyToken: ['chargify_token', optional(string())],
  siteGatewaySettingId: ['site_gateway_setting_id', optional(number())],
  gatewayHandle: ['gateway_handle', optional(nullable(string()))],
});
