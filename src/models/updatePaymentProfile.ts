/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, object, optional, Schema, string } from '../schema';
import { CardType, cardTypeSchema } from './cardType';
import { CurrentVault, currentVaultSchema } from './currentVault';

export interface UpdatePaymentProfile {
  /** The first name of the card holder. */
  firstName?: string;
  /** The last name of the card holder. */
  lastName?: string;
  /** The full credit card number */
  fullNumber?: string;
  /** The type of card used. */
  cardType?: CardType;
  /** (Optional when performing an Import via vault_token, required otherwise) The 1- or 2-digit credit card expiration month, as an integer or string, i.e. 5 */
  expirationMonth?: string;
  /** (Optional when performing a Import via vault_token, required otherwise) The 4-digit credit card expiration year, as an integer or string, i.e. 2012 */
  expirationYear?: string;
  /** The vault that stores the payment profile with the provided `vault_token`. Use `bogus` for testing. */
  currentVault?: CurrentVault;
  /** The credit card or bank account billing street address (i.e. 123 Main St.). This value is merely passed through to the payment gateway. */
  billingAddress?: string;
  /** The credit card or bank account billing address city (i.e. “Boston”). This value is merely passed through to the payment gateway. */
  billingCity?: string;
  /** The credit card or bank account billing address state (i.e. MA). This value is merely passed through to the payment gateway. This must conform to the [ISO_3166-1](https://en.wikipedia.org/wiki/ISO_3166-1#Current_codes) in order to be valid for tax locale purposes. */
  billingState?: string;
  /** The credit card or bank account billing address zip code (i.e. 12345). This value is merely passed through to the payment gateway. */
  billingZip?: string;
  /** The credit card or bank account billing address country, required in [ISO_3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format (i.e. “US”). This value is merely passed through to the payment gateway. Some gateways require country codes in a specific format. Please check your gateway’s documentation. If creating an ACH subscription, only US is supported at this time. */
  billingCountry?: string;
  /** Second line of the customer’s billing address i.e. Apt. 100 */
  billingAddress2?: string | null;
}

export const updatePaymentProfileSchema: Schema<UpdatePaymentProfile> = object({
  firstName: ['first_name', optional(string())],
  lastName: ['last_name', optional(string())],
  fullNumber: ['full_number', optional(string())],
  cardType: ['card_type', optional(cardTypeSchema)],
  expirationMonth: ['expiration_month', optional(string())],
  expirationYear: ['expiration_year', optional(string())],
  currentVault: ['current_vault', optional(currentVaultSchema)],
  billingAddress: ['billing_address', optional(string())],
  billingCity: ['billing_city', optional(string())],
  billingState: ['billing_state', optional(string())],
  billingZip: ['billing_zip', optional(string())],
  billingCountry: ['billing_country', optional(string())],
  billingAddress2: ['billing_address_2', optional(nullable(string()))],
});
