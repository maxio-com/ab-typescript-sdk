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
  CustomPriceUsedForSubscriptionCreateUpdate,
  customPriceUsedForSubscriptionCreateUpdateSchema,
} from './customPriceUsedForSubscriptionCreateUpdate';
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
  nextBillingAt?: string;
  paymentCollectionMethod?: string;
  receivesInvoiceEmails?: boolean;
  netTerms?: UpdateSubscriptionNetTerms;
  storedCredentialTransactionId?: number;
  reference?: string;
  /** (Optional) Used in place of `product_price_point_id` to define a custom price point unique to the subscription */
  customPrice?: CustomPriceUsedForSubscriptionCreateUpdate;
  /** (Optional) An array of component ids and custom prices to be added to the subscription. */
  components?: UpdateSubscriptionComponent[];
  /** Enable Communication Delay feature, making sure no communication (email or SMS) is sent to the Customer between 9PM and 8AM in time zone set by the `dunning_communication_delay_time_zone` attribute. */
  dunningCommunicationDelayEnabled?: boolean | null;
  /** Time zone for the Dunning Communication Delay feature. */
  dunningCommunicationDelayTimeZone?: string | null;
}

export const updateSubscriptionSchema: Schema<UpdateSubscription> = object({
  creditCardAttributes: [
    'credit_card_attributes',
    optional(lazy(() => creditCardAttributesSchema)),
  ],
  productHandle: ['product_handle', optional(string())],
  productId: ['product_id', optional(number())],
  productChangeDelayed: ['product_change_delayed', optional(boolean())],
  nextProductId: ['next_product_id', optional(string())],
  nextProductPricePointId: ['next_product_price_point_id', optional(string())],
  snapDay: ['snap_day', optional(updateSubscriptionSnapDaySchema)],
  nextBillingAt: ['next_billing_at', optional(string())],
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
    optional(lazy(() => customPriceUsedForSubscriptionCreateUpdateSchema)),
  ],
  components: [
    'components',
    optional(array(lazy(() => updateSubscriptionComponentSchema))),
  ],
  dunningCommunicationDelayEnabled: [
    'dunning_communication_delay_enabled',
    optional(nullable(boolean())),
  ],
  dunningCommunicationDelayTimeZone: [
    'dunning_communication_delay_time_zone',
    optional(nullable(string())),
  ],
});
