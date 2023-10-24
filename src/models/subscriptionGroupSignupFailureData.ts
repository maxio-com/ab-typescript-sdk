/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { PayerAttributes, payerAttributesSchema } from './payerAttributes';
import {
  SubscriptionGroupBankAccount,
  subscriptionGroupBankAccountSchema,
} from './subscriptionGroupBankAccount';
import {
  SubscriptionGroupCreditCard,
  subscriptionGroupCreditCardSchema,
} from './subscriptionGroupCreditCard';
import {
  SubscriptionGroupSignupItem,
  subscriptionGroupSignupItemSchema,
} from './subscriptionGroupSignupItem';

export interface SubscriptionGroupSignupFailureData {
  payerId?: number;
  payerReference?: string;
  paymentProfileId?: number;
  paymentCollectionMethod?: string;
  payerAttributes?: PayerAttributes;
  creditCardAttributes?: SubscriptionGroupCreditCard;
  bankAccountAttributes?: SubscriptionGroupBankAccount;
  subscriptions?: SubscriptionGroupSignupItem[];
}

export const subscriptionGroupSignupFailureDataSchema: Schema<SubscriptionGroupSignupFailureData> = object(
  {
    payerId: ['payer_id', optional(number())],
    payerReference: ['payer_reference', optional(string())],
    paymentProfileId: ['payment_profile_id', optional(number())],
    paymentCollectionMethod: ['payment_collection_method', optional(string())],
    payerAttributes: [
      'payer_attributes',
      optional(lazy(() => payerAttributesSchema)),
    ],
    creditCardAttributes: [
      'credit_card_attributes',
      optional(lazy(() => subscriptionGroupCreditCardSchema)),
    ],
    bankAccountAttributes: [
      'bank_account_attributes',
      optional(lazy(() => subscriptionGroupBankAccountSchema)),
    ],
    subscriptions: [
      'subscriptions',
      optional(array(lazy(() => subscriptionGroupSignupItemSchema))),
    ],
  }
);
