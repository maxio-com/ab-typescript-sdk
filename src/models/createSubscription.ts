/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  dict,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { ACHAgreement, aCHAgreementSchema } from './aCHAgreement';
import {
  AgreementAcceptance,
  agreementAcceptanceSchema,
} from './agreementAcceptance';
import {
  BankAccountAttributes,
  bankAccountAttributesSchema,
} from './bankAccountAttributes';
import { CalendarBilling, calendarBillingSchema } from './calendarBilling';
import {
  CreateSubscriptionComponents,
  createSubscriptionComponentsSchema,
} from './containers/createSubscriptionComponents';
import {
  CreateSubscriptionGroup2,
  createSubscriptionGroup2Schema,
} from './containers/createSubscriptionGroup2';
import {
  CreateSubscriptionOfferId,
  createSubscriptionOfferIdSchema,
} from './containers/createSubscriptionOfferId';
import {
  CustomerAttributes,
  customerAttributesSchema,
} from './customerAttributes';
import {
  CustomPriceUsedForSubscriptionCreateUpdate,
  customPriceUsedForSubscriptionCreateUpdateSchema,
} from './customPriceUsedForSubscriptionCreateUpdate';
import {
  PaymentCollectionMethod,
  paymentCollectionMethodSchema,
} from './paymentCollectionMethod';
import {
  PaymentProfileAttributes,
  paymentProfileAttributesSchema,
} from './paymentProfileAttributes';
import {
  UpsertPrepaidConfiguration,
  upsertPrepaidConfigurationSchema,
} from './upsertPrepaidConfiguration';

export interface CreateSubscription {
  /** The API Handle of the product for which you are creating a subscription. Required, unless a `product_id` is given instead. */
  productHandle?: string;
  /** The Product ID of the product for which you are creating a subscription. The product ID is not currently published, so we recommend using the API Handle instead. */
  productId?: string;
  /** The user-friendly API handle of a product's particular price point. */
  productPricePointHandle?: string;
  /** The ID of the particular price point on the product. */
  productPricePointId?: string;
  /** (Optional) Used in place of `product_price_point_id` to define a custom price point unique to the subscription */
  customPrice?: CustomPriceUsedForSubscriptionCreateUpdate;
  /** (deprecated) The coupon code of the single coupon currently applied to the subscription. See coupon_codes instead as subscriptions can now have more than one coupon. */
  couponCode?: string;
  /** An array for all the coupons attached to the subscription. */
  couponCodes?: string[];
  /** The type of payment collection to be used in the subscription. For legacy Statements Architecture valid options are - `invoice`, `automatic`. For current Relationship Invoicing Architecture valid options are - `remittance`, `automatic`, `prepaid`. */
  paymentCollectionMethod?: PaymentCollectionMethod;
  /** (Optional) Default: True - Whether or not this subscription is set to receive emails related to this subscription. */
  receivesInvoiceEmails?: string;
  /** (Optional) Default: null The number of days after renewal (on invoice billing) that a subscription is due. A value between 0 (due immediately) and 180. */
  netTerms?: string;
  /** The ID of an existing customer within Chargify. Required, unless a `customer_reference` or a set of `customer_attributes` is given. */
  customerId?: number;
  /** (Optional) Set this attribute to a future date/time to sync imported subscriptions to your existing renewal schedule. See the notes on “Date/Time Format” in our [subscription import documentation](https://maxio-chargify.zendesk.com/hc/en-us/articles/5404863655821#date-format). If you provide a next_billing_at timestamp that is in the future, no trial or initial charges will be applied when you create the subscription. In fact, no payment will be captured at all. The first payment will be captured, according to the prices defined by the product, near the time specified by next_billing_at. If you do not provide a value for next_billing_at, any trial and/or initial charges will be assessed and charged at the time of subscription creation. If the card cannot be successfully charged, the subscription will not be created. See further notes in the section on Importing Subscriptions. */
  nextBillingAt?: string;
  /** (Optional) Set this attribute to a future date/time to create a subscription in the "Awaiting Signup" state, rather than "Active" or "Trialing". See the notes on “Date/Time Format” in our [subscription import documentation](https://maxio-chargify.zendesk.com/hc/en-us/articles/5404863655821#date-format). In the "Awaiting Signup" state, a subscription behaves like any other. It can be canceled, allocated to, had its billing date changed. etc. When the initial_billing_at date hits, the subscription will transition to the expected state. If the product has a trial, the subscription will enter a trial, otherwise it will go active. Setup fees will be respected either before or after the trial, as configured on the price point. If the payment is due at the initial_billing_at and it fails the subscription will be immediately canceled. See further notes in the section on Delayed Signups. */
  initialBillingAt?: string;
  /** For European sites subject to PSD2 and using 3D Secure, this can be used to reference a previous transaction for the customer. This will ensure the card will be charged successfully at renewal. */
  storedCredentialTransactionId?: number;
  salesRepId?: number;
  /** The Payment Profile ID of an existing card or bank account, which belongs to an existing customer to use for payment for this subscription. If the card, bank account, or customer does not exist already, or if you want to use a new (unstored) card or bank account for the subscription, use `payment_profile_attributes` instead to create a new payment profile along with the subscription. (This value is available on an existing subscription via the API as `credit_card` > id or `bank_account` > id) */
  paymentProfileId?: number;
  /** The reference value (provided by your app) for the subscription itelf. */
  reference?: string;
  customerAttributes?: CustomerAttributes;
  /** alias to credit_card_attributes */
  paymentProfileAttributes?: PaymentProfileAttributes;
  /** Credit Card data to create a new Subscription. Interchangeable with `payment_profile_attributes` property. */
  creditCardAttributes?: PaymentProfileAttributes;
  bankAccountAttributes?: BankAccountAttributes;
  /** (Optional) An array of component ids and quantities to be added to the subscription. See [Components](https://maxio-chargify.zendesk.com/hc/en-us/articles/5405020625677) for more information. */
  components?: CreateSubscriptionComponents[];
  /** (Optional). Cannot be used when also specifying next_billing_at */
  calendarBilling?: CalendarBilling;
  /** (Optional) A set of key/value pairs representing custom fields and their values. Metafields will be created “on-the-fly” in your site for a given key, if they have not been created yet. */
  metafields?: Record<string, string>;
  /** The reference value (provided by your app) of an existing customer within Chargify. Required, unless a `customer_id` or a set of `customer_attributes` is given. */
  customerReference?: string;
  group?: CreateSubscriptionGroup2;
  /** A valid referral code. (optional, see [Referrals](https://maxio-chargify.zendesk.com/hc/en-us/articles/5405420204045-Referrals-Reference#how-to-obtain-referral-codes) for more details). If supplied, must be valid, or else subscription creation will fail. */
  ref?: string;
  /** (Optional) Can be used when canceling a subscription (via the HTTP DELETE method) to make a note about the reason for cancellation. */
  cancellationMessage?: string;
  /** (Optional) Can be used when canceling a subscription (via the HTTP DELETE method) to make a note about how the subscription was canceled. */
  cancellationMethod?: string;
  /** (Optional) If Multi-Currency is enabled and the currency is configured in Chargify, pass it at signup to create a subscription on a non-default currency. Note that you cannot update the currency of an existing subscription. */
  currency?: string;
  /** Timestamp giving the expiration date of this subscription (if any). You may manually change the expiration date at any point during a subscription period. */
  expiresAt?: string;
  /** (Optional, default false) When set to true, and when next_billing_at is present, if the subscription expires, the expires_at will be shifted by the same amount of time as the difference between the old and new “next billing” dates. */
  expirationTracksNextBillingChange?: string;
  /** (Optional) The ACH authorization agreement terms. If enabled, an email will be sent to the customer with a copy of the terms. */
  agreementTerms?: string;
  /** (Optional) The first name of the person authorizing the ACH agreement. */
  authorizerFirstName?: string;
  /** (Optional) The last name of the person authorizing the ACH agreement. */
  authorizerLastName?: string;
  /** (Optional) One of “prorated” (the default – the prorated product price will be charged immediately), “immediate” (the full product price will be charged immediately), or “delayed” (the full product price will be charged with the first scheduled renewal). */
  calendarBillingFirstCharge?: string;
  /** (Optional) Can be used when canceling a subscription (via the HTTP DELETE method) to indicate why a subscription was canceled. */
  reasonCode?: string;
  /** (Optional, used only for Delayed Product Change When set to true, indicates that a changed value for product_handle should schedule the product change to the next subscription renewal. */
  productChangeDelayed?: boolean;
  /** Use in place of passing product and component information to set up the subscription with an existing offer. May be either the Chargify id of the offer or its handle prefixed with `handle:`.er */
  offerId?: CreateSubscriptionOfferId;
  prepaidSubscriptionConfiguration?: UpsertPrepaidConfiguration;
  /** Providing a previous_billing_at that is in the past will set the current_period_starts_at when the subscription is created. It will also set activated_at if not explicitly passed during the subscription import. Can only be used if next_billing_at is also passed. Using this option will allow you to set the period start for the subscription so mid period component allocations have the correct prorated amount. */
  previousBillingAt?: string;
  /** Setting this attribute to true will cause the subscription's MRR to be added to your MRR analytics immediately. For this value to be honored, a next_billing_at must be present and set to a future date. This key/value will not be returned in the subscription response body. */
  importMrr?: boolean;
  canceledAt?: string;
  activatedAt?: string;
  /** Required when creating a subscription with Maxio Payments. */
  agreementAcceptance?: AgreementAcceptance;
  /** (Optional) If passed, the proof of the authorized ACH agreement terms will be persisted. */
  achAgreement?: ACHAgreement;
  /** Enable Communication Delay feature, making sure no communication (email or SMS) is sent to the Customer between 9PM and 8AM in time zone set by the `dunning_communication_delay_time_zone` attribute. */
  dunningCommunicationDelayEnabled?: boolean | null;
  /** Time zone for the Dunning Communication Delay feature. */
  dunningCommunicationDelayTimeZone?: string | null;
  /** Valid only for the Subscription Preview endpoint. When set to `true` it skips calculating taxes for the current and next billing manifests. */
  skipBillingManifestTaxes?: boolean;
}

export const createSubscriptionSchema: Schema<CreateSubscription> = object({
  productHandle: ['product_handle', optional(string())],
  productId: ['product_id', optional(string())],
  productPricePointHandle: ['product_price_point_handle', optional(string())],
  productPricePointId: ['product_price_point_id', optional(string())],
  customPrice: [
    'custom_price',
    optional(lazy(() => customPriceUsedForSubscriptionCreateUpdateSchema)),
  ],
  couponCode: ['coupon_code', optional(string())],
  couponCodes: ['coupon_codes', optional(array(string()))],
  paymentCollectionMethod: [
    'payment_collection_method',
    optional(paymentCollectionMethodSchema),
  ],
  receivesInvoiceEmails: ['receives_invoice_emails', optional(string())],
  netTerms: ['net_terms', optional(string())],
  customerId: ['customer_id', optional(number())],
  nextBillingAt: ['next_billing_at', optional(string())],
  initialBillingAt: ['initial_billing_at', optional(string())],
  storedCredentialTransactionId: [
    'stored_credential_transaction_id',
    optional(number()),
  ],
  salesRepId: ['sales_rep_id', optional(number())],
  paymentProfileId: ['payment_profile_id', optional(number())],
  reference: ['reference', optional(string())],
  customerAttributes: [
    'customer_attributes',
    optional(lazy(() => customerAttributesSchema)),
  ],
  paymentProfileAttributes: [
    'payment_profile_attributes',
    optional(lazy(() => paymentProfileAttributesSchema)),
  ],
  creditCardAttributes: [
    'credit_card_attributes',
    optional(lazy(() => paymentProfileAttributesSchema)),
  ],
  bankAccountAttributes: [
    'bank_account_attributes',
    optional(lazy(() => bankAccountAttributesSchema)),
  ],
  components: [
    'components',
    optional(array(lazy(() => createSubscriptionComponentsSchema))),
  ],
  calendarBilling: [
    'calendar_billing',
    optional(lazy(() => calendarBillingSchema)),
  ],
  metafields: ['metafields', optional(dict(string()))],
  customerReference: ['customer_reference', optional(string())],
  group: ['group', optional(createSubscriptionGroup2Schema)],
  ref: ['ref', optional(string())],
  cancellationMessage: ['cancellation_message', optional(string())],
  cancellationMethod: ['cancellation_method', optional(string())],
  currency: ['currency', optional(string())],
  expiresAt: ['expires_at', optional(string())],
  expirationTracksNextBillingChange: [
    'expiration_tracks_next_billing_change',
    optional(string()),
  ],
  agreementTerms: ['agreement_terms', optional(string())],
  authorizerFirstName: ['authorizer_first_name', optional(string())],
  authorizerLastName: ['authorizer_last_name', optional(string())],
  calendarBillingFirstCharge: [
    'calendar_billing_first_charge',
    optional(string()),
  ],
  reasonCode: ['reason_code', optional(string())],
  productChangeDelayed: ['product_change_delayed', optional(boolean())],
  offerId: ['offer_id', optional(createSubscriptionOfferIdSchema)],
  prepaidSubscriptionConfiguration: [
    'prepaid_subscription_configuration',
    optional(lazy(() => upsertPrepaidConfigurationSchema)),
  ],
  previousBillingAt: ['previous_billing_at', optional(string())],
  importMrr: ['import_mrr', optional(boolean())],
  canceledAt: ['canceled_at', optional(string())],
  activatedAt: ['activated_at', optional(string())],
  agreementAcceptance: [
    'agreement_acceptance',
    optional(lazy(() => agreementAcceptanceSchema)),
  ],
  achAgreement: ['ach_agreement', optional(lazy(() => aCHAgreementSchema))],
  dunningCommunicationDelayEnabled: [
    'dunning_communication_delay_enabled',
    optional(nullable(boolean())),
  ],
  dunningCommunicationDelayTimeZone: [
    'dunning_communication_delay_time_zone',
    optional(nullable(string())),
  ],
  skipBillingManifestTaxes: [
    'skip_billing_manifest_taxes',
    optional(boolean()),
  ],
});
