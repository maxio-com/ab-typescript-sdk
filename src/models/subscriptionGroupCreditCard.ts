/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';
import { CardType, cardTypeSchema } from './cardType';
import {
  SubscriptionGroupCreditCardExpirationMonth,
  subscriptionGroupCreditCardExpirationMonthSchema,
} from './containers/subscriptionGroupCreditCardExpirationMonth';
import {
  SubscriptionGroupCreditCardExpirationYear,
  subscriptionGroupCreditCardExpirationYearSchema,
} from './containers/subscriptionGroupCreditCardExpirationYear';
import {
  SubscriptionGroupCreditCardFullNumber,
  subscriptionGroupCreditCardFullNumberSchema,
} from './containers/subscriptionGroupCreditCardFullNumber';
import { CreditCardVault, creditCardVaultSchema } from './creditCardVault';

export interface SubscriptionGroupCreditCard {
  chargifyToken?: string;
  vaultToken?: string;
  /** The vault that stores the payment profile with the provided `vault_token`. Use `bogus` for testing. */
  currentVault?: CreditCardVault;
  gatewayHandle?: string;
  firstName?: string;
  lastName?: string;
  billingAddress?: string;
  billingAddress2?: string;
  billingCity?: string;
  billingState?: string;
  billingZip?: string;
  billingCountry?: string;
  fullNumber?: SubscriptionGroupCreditCardFullNumber;
  expirationMonth?: SubscriptionGroupCreditCardExpirationMonth;
  expirationYear?: SubscriptionGroupCreditCardExpirationYear;
  lastFour?: string;
  /** The type of card used. */
  cardType?: CardType;
  customerVaultToken?: string;
  cvv?: string;
  paymentType?: string;
  [key: string]: unknown;
}

export const subscriptionGroupCreditCardSchema: Schema<SubscriptionGroupCreditCard> = expandoObject(
  {
    chargifyToken: ['chargify_token', optional(string())],
    vaultToken: ['vault_token', optional(string())],
    currentVault: ['current_vault', optional(creditCardVaultSchema)],
    gatewayHandle: ['gateway_handle', optional(string())],
    firstName: ['first_name', optional(string())],
    lastName: ['last_name', optional(string())],
    billingAddress: ['billing_address', optional(string())],
    billingAddress2: ['billing_address_2', optional(string())],
    billingCity: ['billing_city', optional(string())],
    billingState: ['billing_state', optional(string())],
    billingZip: ['billing_zip', optional(string())],
    billingCountry: ['billing_country', optional(string())],
    fullNumber: [
      'full_number',
      optional(subscriptionGroupCreditCardFullNumberSchema),
    ],
    expirationMonth: [
      'expiration_month',
      optional(subscriptionGroupCreditCardExpirationMonthSchema),
    ],
    expirationYear: [
      'expiration_year',
      optional(subscriptionGroupCreditCardExpirationYearSchema),
    ],
    lastFour: ['last_four', optional(string())],
    cardType: ['card_type', optional(cardTypeSchema)],
    customerVaultToken: ['customer_vault_token', optional(string())],
    cvv: ['cvv', optional(string())],
    paymentType: ['payment_type', optional(string())],
  }
);
