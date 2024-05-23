/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  bigint,
  boolean,
  expandoObject,
  lazy,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import {
  BankAccountPaymentProfile,
  bankAccountPaymentProfileSchema,
} from './bankAccountPaymentProfile';
import {
  CancellationMethod,
  cancellationMethodSchema,
} from './cancellationMethod';
import { CollectionMethod, collectionMethodSchema } from './collectionMethod';
import {
  CreditCardPaymentProfile,
  creditCardPaymentProfileSchema,
} from './creditCardPaymentProfile';
import { Customer1, customer1Schema } from './customer1';
import {
  NestedSubscriptionGroup,
  nestedSubscriptionGroupSchema,
} from './nestedSubscriptionGroup';
import {
  PrepaidConfiguration,
  prepaidConfigurationSchema,
} from './prepaidConfiguration';
import { PricePointType, pricePointTypeSchema } from './pricePointType';
import { Product, productSchema } from './product';
import {
  SubscriptionIncludedCoupon,
  subscriptionIncludedCouponSchema,
} from './subscriptionIncludedCoupon';
import { SubscriptionState, subscriptionStateSchema } from './subscriptionState';

export interface Subscription {
  /** The subscription unique id within Chargify. */
  id?: number;
  /**
   * The state of a subscription.
   * * **Live States**
   *     * `active` - A normal, active subscription. It is not in a trial and is paid and up to date.
   *     * `assessing` - An internal (transient) state that indicates a subscription is in the middle of periodic assessment. Do not base any access decisions in your app on this state, as it may not always be exposed.
   *     * `pending` - An internal (transient) state that indicates a subscription is in the creation process. Do not base any access decisions in your app on this state, as it may not always be exposed.
   *     * `trialing` - A subscription in trialing state has a valid trial subscription. This type of subscription may transition to active once payment is received when the trial has ended. Otherwise, it may go to a Problem or End of Life state.
   *     * `paused` - An internal state that indicates that your account with Advanced Billing is in arrears.
   * * **Problem States**
   *     * `past_due` - Indicates that the most recent payment has failed, and payment is past due for this subscription. If you have enabled our automated dunning, this subscription will be in the dunning process (additional status and callbacks from the dunning process will be available in the future). If you are handling dunning and payment updates yourself, you will want to use this state to initiate a payment update from your customers.
   *     * `soft_failure` - Indicates that normal assessment/processing of the subscription has failed for a reason that cannot be fixed by the Customer. For example, a Soft Fail may result from a timeout at the gateway or incorrect credentials on your part. The subscriptions should be retried automatically. An interface is being built for you to review problems resulting from these events to take manual action when needed.
   *     * `unpaid` - Indicates an unpaid subscription. A subscription is marked unpaid if the retry period expires and you have configured your [Dunning](https://maxio-chargify.zendesk.com/hc/en-us/articles/5405505141005) settings to have a Final Action of `mark the subscription unpaid`.
   * * **End of Life States**
   *     * `canceled` - Indicates a canceled subscription. This may happen at your request (via the API or the web interface) or due to the expiration of the [Dunning](https://maxio-chargify.zendesk.com/hc/en-us/articles/5405505141005) process without payment. See the [Reactivation](https://maxio-chargify.zendesk.com/hc/en-us/articles/5404559291021) documentation for info on how to restart a canceled subscription.
   *     While a subscription is canceled, its period will not advance, it will not accrue any new charges, and Advanced Billing will not attempt to collect the overdue balance.
   *     * `expired` - Indicates a subscription that has expired due to running its normal life cycle. Some products may be configured to have an expiration period. An expired subscription then is one that stayed active until it fulfilled its full period.
   *     * `failed_to_create` - Indicates that signup has failed. (You may see this state in a signup_failure webhook.)
   *     * `on_hold` - Indicates that a subscription’s billing has been temporarily stopped. While it is expected that the subscription will resume and return to active status, this is still treated as an “End of Life” state because the customer is not paying for services during this time.
   *     * `suspended` - Indicates that a prepaid subscription has used up all their prepayment balance. If a prepayment is applied, it will return to an active state.
   *     * `trial_ended` - A subscription in a trial_ended state is a subscription that completed a no-obligation trial and did not have a card on file at the expiration of the trial period. See [Product Pricing – No Obligation Trials](https://maxio-chargify.zendesk.com/hc/en-us/articles/5405246782221) for more details.
   * See [Subscription States](https://maxio-chargify.zendesk.com/hc/en-us/articles/5404222005773) for more info about subscription states and state transitions.
   */
  state?: SubscriptionState;
  /** Gives the current outstanding subscription balance in the number of cents. */
  balanceInCents?: bigint;
  /** Gives the total revenue from the subscription in the number of cents. */
  totalRevenueInCents?: bigint;
  /** (Added Nov 5 2013) The recurring amount of the product (and version),currently subscribed. NOTE: this may differ from the current price of,the product, if you’ve changed the price of the product but haven’t,moved this subscription to a newer version. */
  productPriceInCents?: bigint;
  /** The version of the product for the subscription. Note that this is a deprecated field kept for backwards-compatibility. */
  productVersionNumber?: number;
  /** Timestamp relating to the end of the current (recurring) period (i.e.,when the next regularly scheduled attempted charge will occur) */
  currentPeriodEndsAt?: string | null;
  /** Timestamp that indicates when capture of payment will be tried or,retried. This value will usually track the current_period_ends_at, but,will diverge if a renewal payment fails and must be retried. In that,case, the current_period_ends_at will advance to the end of the next,period (time doesn’t stop because a payment was missed) but the,next_assessment_at will be scheduled for the auto-retry time (i.e. 24,hours in the future, in some cases) */
  nextAssessmentAt?: string | null;
  /** Timestamp for when the trial period (if any) began */
  trialStartedAt?: string | null;
  /** Timestamp for when the trial period (if any) ended */
  trialEndedAt?: string | null;
  /** Timestamp for when the subscription began (i.e. when it came out of trial, or when it began in the case of no trial) */
  activatedAt?: string | null;
  /** Timestamp giving the expiration date of this subscription (if any) */
  expiresAt?: string | null;
  /** The creation date for this subscription */
  createdAt?: string;
  /** The date of last update for this subscription */
  updatedAt?: string;
  /** Seller-provided reason for, or note about, the cancellation. */
  cancellationMessage?: string | null;
  /** The process used to cancel the subscription, if the subscription has been canceled. It is nil if the subscription's state is not canceled. */
  cancellationMethod?: CancellationMethod | null;
  /** Whether or not the subscription will (or has) canceled at the end of the period. */
  cancelAtEndOfPeriod?: boolean | null;
  /** The timestamp of the most recent cancellation */
  canceledAt?: string | null;
  /** Timestamp relating to the start of the current (recurring) period */
  currentPeriodStartedAt?: string | null;
  /** Only valid for webhook payloads The previous state for webhooks that have indicated a change in state. For normal API calls, this will always be the same as the state (current state) */
  previousState?: SubscriptionState;
  /** The ID of the transaction that generated the revenue */
  signupPaymentId?: number;
  /** The revenue, formatted as a string of decimal separated dollars and,cents, from the subscription signup ($50.00 would be formatted as,50.00) */
  signupRevenue?: string;
  /** Timestamp for when the subscription is currently set to cancel. */
  delayedCancelAt?: string | null;
  /** (deprecated) The coupon code of the single coupon currently applied to the subscription. See coupon_codes instead as subscriptions can now have more than one coupon. */
  couponCode?: string | null;
  /** The day of the month that the subscription will charge according to calendar billing rules, if used. */
  snapDay?: string | null;
  /** The type of payment collection to be used in the subscription. For legacy Statements Architecture valid options are - `invoice`, `automatic`. For current Relationship Invoicing Architecture valid options are - `remittance`, `automatic`, `prepaid`. */
  paymentCollectionMethod?: CollectionMethod;
  customer?: Customer1;
  product?: Product;
  creditCard?: CreditCardPaymentProfile;
  group?: NestedSubscriptionGroup | null;
  bankAccount?: BankAccountPaymentProfile;
  /** The payment profile type for the active profile on file. */
  paymentType?: string | null;
  /** The subscription's unique code that can be given to referrals. */
  referralCode?: string | null;
  /** If a delayed product change is scheduled, the ID of the product that the subscription will be changed to at the next renewal. */
  nextProductId?: number | null;
  /** If a delayed product change is scheduled, the handle of the product that the subscription will be changed to at the next renewal. */
  nextProductHandle?: string | null;
  /** (deprecated) How many times the subscription's single coupon has been used. This field has no replacement for multiple coupons. */
  couponUseCount?: number | null;
  /** (deprecated) How many times the subscription's single coupon may be used. This field has no replacement for multiple coupons. */
  couponUsesAllowed?: number | null;
  /** If the subscription is canceled, this is their churn code. */
  reasonCode?: string | null;
  /** The date the subscription is scheduled to automatically resume from the on_hold state. */
  automaticallyResumeAt?: string | null;
  /** An array for all the coupons attached to the subscription. */
  couponCodes?: string[];
  /** The ID of the offer associated with the subscription. */
  offerId?: number | null;
  /** On Relationship Invoicing, the ID of the individual paying for the subscription. Defaults to the Customer ID unless the 'Customer Hierarchies & WhoPays' feature is enabled. */
  payerId?: number | null;
  /** The balance in cents plus the estimated renewal amount in cents. Returned ONLY for readSubscription operation as it's compute intensive operation. */
  currentBillingAmountInCents?: bigint;
  /** The product price point currently subscribed to. */
  productPricePointId?: number;
  /**
   * Price point type. We expose the following types:
   * 1. **default**: a price point that is marked as a default price for a certain product.
   * 2. **custom**: a custom price point.
   * 3. **catalog**: a price point that is **not** marked as a default price for a certain product and is **not** a custom one.
   */
  productPricePointType?: PricePointType;
  /** If a delayed product change is scheduled, the ID of the product price point that the subscription will be changed to at the next renewal. */
  nextProductPricePointId?: number | null;
  /** On Relationship Invoicing, the number of days before a renewal invoice is due. */
  netTerms?: number | null;
  /** For European sites subject to PSD2 and using 3D Secure, this can be used to reference a previous transaction for the customer. This will ensure the card will be charged successfully at renewal. */
  storedCredentialTransactionId?: number | null;
  /** The reference value (provided by your app) for the subscription itelf. */
  reference?: string | null;
  /** The timestamp of the most recent on hold action. */
  onHoldAt?: string | null;
  /** Boolean representing whether the subscription is prepaid and currently in dunning. Only returned for Relationship Invoicing sites with the feature enabled */
  prepaidDunning?: boolean;
  /**
   * Additional coupon data. To use this data you also have to include the following param in the request`include[]=coupons`.
   * Only in Read Subscription Endpoint.
   */
  coupons?: SubscriptionIncludedCoupon[];
  /** Enable Communication Delay feature, making sure no communication (email or SMS) is sent to the Customer between 9PM and 8AM in time zone set by the `dunning_communication_delay_time_zone` attribute. */
  dunningCommunicationDelayEnabled?: boolean;
  /** Time zone for the Dunning Communication Delay feature. */
  dunningCommunicationDelayTimeZone?: string | null;
  receivesInvoiceEmails?: boolean | null;
  locale?: string | null;
  currency?: string;
  scheduledCancellationAt?: string | null;
  creditBalanceInCents?: bigint;
  prepaymentBalanceInCents?: bigint;
  prepaidConfiguration?: PrepaidConfiguration | null;
  /** Returned only for list/read Subscription operation when `include[]=self_service_page_token` parameter is provided. */
  selfServicePageToken?: string;
  [key: string]: unknown;
}

export const subscriptionSchema: Schema<Subscription> = expandoObject({
  id: ['id', optional(number())],
  state: ['state', optional(subscriptionStateSchema)],
  balanceInCents: ['balance_in_cents', optional(bigint())],
  totalRevenueInCents: ['total_revenue_in_cents', optional(bigint())],
  productPriceInCents: ['product_price_in_cents', optional(bigint())],
  productVersionNumber: ['product_version_number', optional(number())],
  currentPeriodEndsAt: ['current_period_ends_at', optional(nullable(string()))],
  nextAssessmentAt: ['next_assessment_at', optional(nullable(string()))],
  trialStartedAt: ['trial_started_at', optional(nullable(string()))],
  trialEndedAt: ['trial_ended_at', optional(nullable(string()))],
  activatedAt: ['activated_at', optional(nullable(string()))],
  expiresAt: ['expires_at', optional(nullable(string()))],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
  cancellationMessage: ['cancellation_message', optional(nullable(string()))],
  cancellationMethod: [
    'cancellation_method',
    optional(nullable(cancellationMethodSchema)),
  ],
  cancelAtEndOfPeriod: [
    'cancel_at_end_of_period',
    optional(nullable(boolean())),
  ],
  canceledAt: ['canceled_at', optional(nullable(string()))],
  currentPeriodStartedAt: [
    'current_period_started_at',
    optional(nullable(string())),
  ],
  previousState: ['previous_state', optional(subscriptionStateSchema)],
  signupPaymentId: ['signup_payment_id', optional(number())],
  signupRevenue: ['signup_revenue', optional(string())],
  delayedCancelAt: ['delayed_cancel_at', optional(nullable(string()))],
  couponCode: ['coupon_code', optional(nullable(string()))],
  snapDay: ['snap_day', optional(nullable(string()))],
  paymentCollectionMethod: [
    'payment_collection_method',
    optional(collectionMethodSchema),
  ],
  customer: ['customer', optional(lazy(() => customer1Schema))],
  product: ['product', optional(lazy(() => productSchema))],
  creditCard: [
    'credit_card',
    optional(lazy(() => creditCardPaymentProfileSchema)),
  ],
  group: [
    'group',
    optional(nullable(lazy(() => nestedSubscriptionGroupSchema))),
  ],
  bankAccount: [
    'bank_account',
    optional(lazy(() => bankAccountPaymentProfileSchema)),
  ],
  paymentType: ['payment_type', optional(nullable(string()))],
  referralCode: ['referral_code', optional(nullable(string()))],
  nextProductId: ['next_product_id', optional(nullable(number()))],
  nextProductHandle: ['next_product_handle', optional(nullable(string()))],
  couponUseCount: ['coupon_use_count', optional(nullable(number()))],
  couponUsesAllowed: ['coupon_uses_allowed', optional(nullable(number()))],
  reasonCode: ['reason_code', optional(nullable(string()))],
  automaticallyResumeAt: [
    'automatically_resume_at',
    optional(nullable(string())),
  ],
  couponCodes: ['coupon_codes', optional(array(string()))],
  offerId: ['offer_id', optional(nullable(number()))],
  payerId: ['payer_id', optional(nullable(number()))],
  currentBillingAmountInCents: [
    'current_billing_amount_in_cents',
    optional(bigint()),
  ],
  productPricePointId: ['product_price_point_id', optional(number())],
  productPricePointType: [
    'product_price_point_type',
    optional(pricePointTypeSchema),
  ],
  nextProductPricePointId: [
    'next_product_price_point_id',
    optional(nullable(number())),
  ],
  netTerms: ['net_terms', optional(nullable(number()))],
  storedCredentialTransactionId: [
    'stored_credential_transaction_id',
    optional(nullable(number())),
  ],
  reference: ['reference', optional(nullable(string()))],
  onHoldAt: ['on_hold_at', optional(nullable(string()))],
  prepaidDunning: ['prepaid_dunning', optional(boolean())],
  coupons: [
    'coupons',
    optional(array(lazy(() => subscriptionIncludedCouponSchema))),
  ],
  dunningCommunicationDelayEnabled: [
    'dunning_communication_delay_enabled',
    optional(boolean()),
  ],
  dunningCommunicationDelayTimeZone: [
    'dunning_communication_delay_time_zone',
    optional(nullable(string())),
  ],
  receivesInvoiceEmails: [
    'receives_invoice_emails',
    optional(nullable(boolean())),
  ],
  locale: ['locale', optional(nullable(string()))],
  currency: ['currency', optional(string())],
  scheduledCancellationAt: [
    'scheduled_cancellation_at',
    optional(nullable(string())),
  ],
  creditBalanceInCents: ['credit_balance_in_cents', optional(bigint())],
  prepaymentBalanceInCents: ['prepayment_balance_in_cents', optional(bigint())],
  prepaidConfiguration: [
    'prepaid_configuration',
    optional(nullable(lazy(() => prepaidConfigurationSchema))),
  ],
  selfServicePageToken: ['self_service_page_token', optional(string())],
});
