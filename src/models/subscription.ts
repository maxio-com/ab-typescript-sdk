/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  SubscriptionCancellationMethod,
  subscriptionCancellationMethodSchema,
} from './containers/subscriptionCancellationMethod';
import {
  SubscriptionGroup2,
  subscriptionGroup2Schema,
} from './containers/subscriptionGroup2';
import {
  SubscriptionPaymentCollectionMethod,
  subscriptionPaymentCollectionMethodSchema,
} from './containers/subscriptionPaymentCollectionMethod';
import { Customer, customerSchema } from './customer';
import { PaymentProfile, paymentProfileSchema } from './paymentProfile';
import { Product, productSchema } from './product';
import {
  SubscriptionBankAccount,
  subscriptionBankAccountSchema,
} from './subscriptionBankAccount';
import {
  SubscriptionIncludedCoupon,
  subscriptionIncludedCouponSchema,
} from './subscriptionIncludedCoupon';

export interface Subscription {
  /** The subscription unique id within Chargify. */
  id?: number;
  /** The current state of the subscription. Please see the documentation for [Subscription States](https://help.chargify.com/subscriptions/subscription-states.html) */
  state?: string;
  /** Gives the current outstanding subscription balance in the number of cents. */
  balanceInCents?: number;
  /** Gives the total revenue from the subscription in the number of cents. */
  totalRevenueInCents?: number;
  /** (Added Nov 5 2013) The recurring amount of the product (and version),currently subscribed. NOTE: this may differ from the current price of,the product, if you’ve changed the price of the product but haven’t,moved this subscription to a newer version. */
  productPriceInCents?: number;
  /** The version of the product for the subscription. Note that this is a deprecated field kept for backwards-compatibility. */
  productVersionNumber?: number;
  /** Timestamp relating to the end of the current (recurring) period (i.e.,when the next regularly scheduled attempted charge will occur) */
  currentPeriodEndsAt?: string;
  /** Timestamp that indicates when capture of payment will be tried or,retried. This value will usually track the current_period_ends_at, but,will diverge if a renewal payment fails and must be retried. In that,case, the current_period_ends_at will advance to the end of the next,period (time doesn’t stop because a payment was missed) but the,next_assessment_at will be scheduled for the auto-retry time (i.e. 24,hours in the future, in some cases) */
  nextAssessmentAt?: string;
  /** Timestamp for when the trial period (if any) began */
  trialStartedAt?: string | null;
  /** Timestamp for when the trial period (if any) ended */
  trialEndedAt?: string | null;
  /** Timestamp for when the subscription began (i.e. when it came out of trial, or when it began in the case of no trial) */
  activatedAt?: string;
  /** Timestamp giving the expiration date of this subscription (if any) */
  expiresAt?: string | null;
  /** The creation date for this subscription */
  createdAt?: string;
  /** The date of last update for this subscription */
  updatedAt?: string;
  /** Seller-provided reason for, or note about, the cancellation. */
  cancellationMessage?: string | null;
  /** The process used to cancel the subscription, if the subscription has been canceled. It is nil if the subscription's state is not canceled. */
  cancellationMethod?: SubscriptionCancellationMethod | null;
  /** Whether or not the subscription will (or has) canceled at the end of the period. */
  cancelAtEndOfPeriod?: boolean | null;
  /** The timestamp of the most recent cancellation */
  canceledAt?: string | null;
  /** Timestamp relating to the start of the current (recurring) period */
  currentPeriodStartedAt?: string;
  /** Only valid for webhook payloads The previous state for webhooks that have indicated a change in state. For normal API calls, this will always be the same as the state (current state) */
  previousState?: string;
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
  paymentCollectionMethod?: SubscriptionPaymentCollectionMethod | null;
  customer?: Customer;
  product?: Product;
  creditCard?: PaymentProfile;
  group?: SubscriptionGroup2 | null;
  bankAccount?: SubscriptionBankAccount;
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
  payerId?: number;
  /** The balance in cents plus the estimated renewal amount in cents. */
  currentBillingAmountInCents?: number;
  /** The product price point currently subscribed to. */
  productPricePointId?: number;
  /** One of the following: custom, default, catalog. */
  productPricePointType?: string;
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
  creditBalanceInCents?: number;
  prepaymentBalanceInCents?: number;
}

export const subscriptionSchema: Schema<Subscription> = object({
  id: ['id', optional(number())],
  state: ['state', optional(string())],
  balanceInCents: ['balance_in_cents', optional(number())],
  totalRevenueInCents: ['total_revenue_in_cents', optional(number())],
  productPriceInCents: ['product_price_in_cents', optional(number())],
  productVersionNumber: ['product_version_number', optional(number())],
  currentPeriodEndsAt: ['current_period_ends_at', optional(string())],
  nextAssessmentAt: ['next_assessment_at', optional(string())],
  trialStartedAt: ['trial_started_at', optional(nullable(string()))],
  trialEndedAt: ['trial_ended_at', optional(nullable(string()))],
  activatedAt: ['activated_at', optional(string())],
  expiresAt: ['expires_at', optional(nullable(string()))],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
  cancellationMessage: ['cancellation_message', optional(nullable(string()))],
  cancellationMethod: [
    'cancellation_method',
    optional(nullable(subscriptionCancellationMethodSchema)),
  ],
  cancelAtEndOfPeriod: [
    'cancel_at_end_of_period',
    optional(nullable(boolean())),
  ],
  canceledAt: ['canceled_at', optional(nullable(string()))],
  currentPeriodStartedAt: ['current_period_started_at', optional(string())],
  previousState: ['previous_state', optional(string())],
  signupPaymentId: ['signup_payment_id', optional(number())],
  signupRevenue: ['signup_revenue', optional(string())],
  delayedCancelAt: ['delayed_cancel_at', optional(nullable(string()))],
  couponCode: ['coupon_code', optional(nullable(string()))],
  snapDay: ['snap_day', optional(nullable(string()))],
  paymentCollectionMethod: [
    'payment_collection_method',
    optional(nullable(subscriptionPaymentCollectionMethodSchema)),
  ],
  customer: ['customer', optional(lazy(() => customerSchema))],
  product: ['product', optional(lazy(() => productSchema))],
  creditCard: ['credit_card', optional(lazy(() => paymentProfileSchema))],
  group: ['group', optional(nullable(lazy(() => subscriptionGroup2Schema)))],
  bankAccount: [
    'bank_account',
    optional(lazy(() => subscriptionBankAccountSchema)),
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
  payerId: ['payer_id', optional(number())],
  currentBillingAmountInCents: [
    'current_billing_amount_in_cents',
    optional(number()),
  ],
  productPricePointId: ['product_price_point_id', optional(number())],
  productPricePointType: ['product_price_point_type', optional(string())],
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
  creditBalanceInCents: ['credit_balance_in_cents', optional(number())],
  prepaymentBalanceInCents: ['prepayment_balance_in_cents', optional(number())],
});
