/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, number, object, optional, Schema, string } from '../schema';
import { CardType, cardTypeSchema } from './cardType';
import {
  CreatePaymentProfileExpirationMonth,
  createPaymentProfileExpirationMonthSchema,
} from './containers/createPaymentProfileExpirationMonth';
import {
  CreatePaymentProfileExpirationYear,
  createPaymentProfileExpirationYearSchema,
} from './containers/createPaymentProfileExpirationYear';
import { CurrentVault, currentVaultSchema } from './currentVault';
import { PaymentType, paymentTypeSchema } from './paymentType';

export interface CreatePaymentProfile {
  /** Token received after sending billing informations using chargify.js. */
  chargifyToken?: string;
  id?: number;
  paymentType?: PaymentType;
  /** First name on card or bank account. If omitted, the first_name from customer attributes will be used. */
  firstName?: string;
  /** Last name on card or bank account. If omitted, the last_name from customer attributes will be used. */
  lastName?: string;
  maskedCardNumber?: string;
  /** The full credit card number */
  fullNumber?: string;
  /** The type of card used. */
  cardType?: CardType;
  /** (Optional when performing an Import via vault_token, required otherwise) The 1- or 2-digit credit card expiration month, as an integer or string, i.e. 5 */
  expirationMonth?: CreatePaymentProfileExpirationMonth;
  /** (Optional when performing a Import via vault_token, required otherwise) The 4-digit credit card expiration year, as an integer or string, i.e. 2012 */
  expirationYear?: CreatePaymentProfileExpirationYear;
  /** The credit card or bank account billing street address (i.e. 123 Main St.). This value is merely passed through to the payment gateway. */
  billingAddress?: string;
  /** Second line of the customer’s billing address i.e. Apt. 100 */
  billingAddress2?: string | null;
  /** The credit card or bank account billing address city (i.e. “Boston”). This value is merely passed through to the payment gateway. */
  billingCity?: string;
  /** The credit card or bank account billing address state (i.e. MA). This value is merely passed through to the payment gateway. This must conform to the [ISO_3166-1](https://en.wikipedia.org/wiki/ISO_3166-1#Current_codes) in order to be valid for tax locale purposes. */
  billingState?: string;
  /** The credit card or bank account billing address country, required in [ISO_3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format (i.e. “US”). This value is merely passed through to the payment gateway. Some gateways require country codes in a specific format. Please check your gateway’s documentation. If creating an ACH subscription, only US is supported at this time. */
  billingCountry?: string;
  /** The credit card or bank account billing address zip code (i.e. 12345). This value is merely passed through to the payment gateway. */
  billingZip?: string;
  /** The vault that stores the payment profile with the provided `vault_token`. Use `bogus` for testing. */
  currentVault?: CurrentVault;
  /** The “token” provided by your vault storage for an already stored payment profile */
  vaultToken?: string;
  /** (only for Authorize.Net CIM storage or Square) The customerProfileId for the owner of the customerPaymentProfileId provided as the vault_token */
  customerVaultToken?: string;
  /** (Required when creating a new payment profile) The Chargify customer id. */
  customerId?: number;
  /** used by merchants that implemented BraintreeBlue javaScript libraries on their own. We recommend using Chargify.js instead. */
  paypalEmail?: string;
  /** used by merchants that implemented BraintreeBlue javaScript libraries on their own. We recommend using Chargify.js instead. */
  paymentMethodNonce?: string;
  /** This attribute is only available if MultiGateway feature is enabled for your Site. This feature is in the Private Beta currently. gateway_handle is used to directly select a gateway where a payment profile will be stored in. Every connected gateway must have a unique gateway handle specified. Read [Multigateway description](https://chargify.zendesk.com/hc/en-us/articles/4407761759643#connecting-with-multiple-gateways) to learn more about new concepts that MultiGateway introduces and the default behavior when this attribute is not passed. */
  gatewayHandle?: string;
  /** The 3- or 4-digit Card Verification Value. This value is merely passed through to the payment gateway. */
  cvv?: string;
  /** (Required when creating with ACH or GoCardless, optional with Stripe Direct Debit). The name of the bank where the customerʼs account resides */
  bankName?: string;
  /** (Optional when creating with GoCardless, required with Stripe Direct Debit). International Bank Account Number. Alternatively, local bank details can be provided */
  bankIban?: string;
  /** (Required when creating with ACH. Optional when creating a subscription with GoCardless). The routing number of the bank. It becomes bank_code while passing via GoCardless API */
  bankRoutingNumber?: string;
  /** (Required when creating with ACH, GoCardless, Stripe BECS Direct Debit and bank_iban is blank) The customerʼs bank account number */
  bankAccountNumber?: string;
  /** (Optional when creating with GoCardless, required with Stripe BECS Direct Debit) Branch code. Alternatively, an IBAN can be provided */
  bankBranchCode?: string;
  bankAccountType?: string;
  bankAccountHolderType?: string;
  /** (Optional) Used for creating subscription with payment profile imported using vault_token, for proper display in Advanced Billing UI */
  lastFour?: string;
}

export const createPaymentProfileSchema: Schema<CreatePaymentProfile> = object({
  chargifyToken: ['chargify_token', optional(string())],
  id: ['id', optional(number())],
  paymentType: ['payment_type', optional(paymentTypeSchema)],
  firstName: ['first_name', optional(string())],
  lastName: ['last_name', optional(string())],
  maskedCardNumber: ['masked_card_number', optional(string())],
  fullNumber: ['full_number', optional(string())],
  cardType: ['card_type', optional(cardTypeSchema)],
  expirationMonth: [
    'expiration_month',
    optional(createPaymentProfileExpirationMonthSchema),
  ],
  expirationYear: [
    'expiration_year',
    optional(createPaymentProfileExpirationYearSchema),
  ],
  billingAddress: ['billing_address', optional(string())],
  billingAddress2: ['billing_address_2', optional(nullable(string()))],
  billingCity: ['billing_city', optional(string())],
  billingState: ['billing_state', optional(string())],
  billingCountry: ['billing_country', optional(string())],
  billingZip: ['billing_zip', optional(string())],
  currentVault: ['current_vault', optional(currentVaultSchema)],
  vaultToken: ['vault_token', optional(string())],
  customerVaultToken: ['customer_vault_token', optional(string())],
  customerId: ['customer_id', optional(number())],
  paypalEmail: ['paypal_email', optional(string())],
  paymentMethodNonce: ['payment_method_nonce', optional(string())],
  gatewayHandle: ['gateway_handle', optional(string())],
  cvv: ['cvv', optional(string())],
  bankName: ['bank_name', optional(string())],
  bankIban: ['bank_iban', optional(string())],
  bankRoutingNumber: ['bank_routing_number', optional(string())],
  bankAccountNumber: ['bank_account_number', optional(string())],
  bankBranchCode: ['bank_branch_code', optional(string())],
  bankAccountType: ['bank_account_type', optional(string())],
  bankAccountHolderType: ['bank_account_holder_type', optional(string())],
  lastFour: ['last_four', optional(string())],
});
