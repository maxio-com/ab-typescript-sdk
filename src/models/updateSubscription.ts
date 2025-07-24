/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
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
  UpdateSubscriptionNetTerms,
  updateSubscriptionNetTermsSchema,
} from './containers/updateSubscriptionNetTerms';
import {
  UpdateSubscriptionSnapDay,
  updateSubscriptionSnapDaySchema,
} from './containers/updateSubscriptionSnapDay';
import {
  CreditCardAttributes,
  creditCardAttributesSchema,
} from './creditCardAttributes';
import {
  SubscriptionCustomPrice,
  subscriptionCustomPriceSchema,
} from './subscriptionCustomPrice';
import {
  UpdateSubscriptionComponent,
  updateSubscriptionComponentSchema,
} from './updateSubscriptionComponent';

export interface UpdateSubscription {
  creditCardAttributes?: CreditCardAttributes;
  /** Set to the handle of a different product to change the subscription's product */
  productHandle?: string;
  /** Set to the id of a different product to change the subscription's product */
  productId?: number;
  productChangeDelayed?: boolean;
  /** Set to an empty string to cancel a delayed product change. */
  nextProductId?: string;
  nextProductPricePointId?: string;
  /** Use for subscriptions with product eligible for calendar billing only. Value can be 1-28 or 'end'. */
  snapDay?: UpdateSubscriptionSnapDay;
  /** (Optional) Set this attribute to a future date/time to update a subscription in the Awaiting Signup Date state, to Awaiting Signup. In the Awaiting Signup state, a subscription behaves like any other. It can be canceled, allocated to, or have its billing date changed. etc. When the `initial_billing_at` date hits, the subscription will transition to the expected state. If the product has a trial, the subscription will enter a trial, otherwise it will go active. Setup fees will be respected either before or after the trial, as configured on the price point. If the payment is due at the initial_billing_at and it fails the subscription will be immediately canceled. You can omit the initial_billing_at date to activate the subscription immediately. See the [subscription import](https://maxio.zendesk.com/hc/en-us/articles/24251489107213-Advanced-Billing-Subscription-Imports#date-format) documentation for more information about Date/Time formats. */
  initialBillingAt?: string;
  /** (Optional) Set this attribute to true to move the subscription from Awaiting Signup, to Awaiting Signup Date. Use this when you want to update a subscription that has an unknown initial billing date. When the first billing date is known, update a subscription to set the `initial_billing_at` date. The subscription moves to the awaiting signup with a scheduled initial billing date. You can omit the initial_billing_at date to activate the subscription immediately. See [Subscription States](https://maxio-chargify.zendesk.com/hc/en-us/articles/5404222005773-Subscription-States) for more information. */
  deferSignup?: boolean;
  nextBillingAt?: string;
  /** Timestamp giving the expiration date of this subscription (if any). You may manually change the expiration date at any point during a subscription period. */
  expiresAt?: string;
  paymentCollectionMethod?: string;
  receivesInvoiceEmails?: boolean;
  netTerms?: UpdateSubscriptionNetTerms;
  storedCredentialTransactionId?: number;
  reference?: string;
  /** (Optional) Used in place of `product_price_point_id` to define a custom price point unique to the subscription */
  customPrice?: SubscriptionCustomPrice;
  /** (Optional) An array of component ids and custom prices to be added to the subscription. */
  components?: UpdateSubscriptionComponent[];
  /** Enable Communication Delay feature, making sure no communication (email or SMS) is sent to the Customer between 9PM and 8AM in time zone set by the `dunning_communication_delay_time_zone` attribute. */
  dunningCommunicationDelayEnabled?: boolean;
  /** Time zone for the Dunning Communication Delay feature. */
  dunningCommunicationDelayTimeZone?: string | null;
  /** Set to change the current product's price point. */
  productPricePointId?: number;
  /** Set to change the current product's price point. */
  productPricePointHandle?: string;
  [key: string]: unknown;
}

export const updateSubscriptionSchema: Schema<UpdateSubscription> = expandoObject(
  {
    creditCardAttributes: [
      'credit_card_attributes',
      optional(lazy(() => creditCardAttributesSchema)),
    ],
    productHandle: ['product_handle', optional(string())],
    productId: ['product_id', optional(number())],
    productChangeDelayed: ['product_change_delayed', optional(boolean())],
    nextProductId: ['next_product_id', optional(string())],
    nextProductPricePointId: [
      'next_product_price_point_id',
      optional(string()),
    ],
    snapDay: ['snap_day', optional(updateSubscriptionSnapDaySchema)],
    initialBillingAt: ['initial_billing_at', optional(string())],
    deferSignup: ['defer_signup', optional(boolean())],
    nextBillingAt: ['next_billing_at', optional(string())],
    expiresAt: ['expires_at', optional(string())],
    paymentCollectionMethod: ['payment_collection_method', optional(string())],
    receivesInvoiceEmails: ['receives_invoice_emails', optional(boolean())],
    netTerms: ['net_terms', optional(updateSubscriptionNetTermsSchema)],
    storedCredentialTransactionId: [
      'stored_credential_transaction_id',
      optional(number()),
    ],
    reference: ['reference', optional(string())],
    customPrice: [
      'custom_price',
      optional(lazy(() => subscriptionCustomPriceSchema)),
    ],
    components: [
      'components',
      optional(array(lazy(() => updateSubscriptionComponentSchema))),
    ],
    dunningCommunicationDelayEnabled: [
      'dunning_communication_delay_enabled',
      optional(boolean()),
    ],
    dunningCommunicationDelayTimeZone: [
      'dunning_communication_delay_time_zone',
      optional(nullable(string())),
    ],
    productPricePointId: ['product_price_point_id', optional(number())],
    productPricePointHandle: ['product_price_point_handle', optional(string())],
  }
);
