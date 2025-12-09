/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  lazy,
  number,
  optional,
  Schema,
  string,
} from '../schema.js';
import { PayerAttributes, payerAttributesSchema } from './payerAttributes.js';
import {
  SubscriptionGroupBankAccount,
  subscriptionGroupBankAccountSchema,
} from './subscriptionGroupBankAccount.js';
import {
  SubscriptionGroupCreditCard,
  subscriptionGroupCreditCardSchema,
} from './subscriptionGroupCreditCard.js';
import {
  SubscriptionGroupSignupItem,
  subscriptionGroupSignupItemSchema,
} from './subscriptionGroupSignupItem.js';

export interface SubscriptionGroupSignupFailureData {
  payerId?: number;
  payerReference?: string;
  paymentProfileId?: number;
  paymentCollectionMethod?: string;
  payerAttributes?: PayerAttributes;
  creditCardAttributes?: SubscriptionGroupCreditCard;
  bankAccountAttributes?: SubscriptionGroupBankAccount;
  subscriptions?: SubscriptionGroupSignupItem[];
  [key: string]: unknown;
}

export const subscriptionGroupSignupFailureDataSchema: Schema<SubscriptionGroupSignupFailureData> = lazy(
  () =>
    expandoObject({
      payerId: ['payer_id', optional(number())],
      payerReference: ['payer_reference', optional(string())],
      paymentProfileId: ['payment_profile_id', optional(number())],
      paymentCollectionMethod: [
        'payment_collection_method',
        optional(string()),
      ],
      payerAttributes: ['payer_attributes', optional(payerAttributesSchema)],
      creditCardAttributes: [
        'credit_card_attributes',
        optional(subscriptionGroupCreditCardSchema),
      ],
      bankAccountAttributes: [
        'bank_account_attributes',
        optional(subscriptionGroupBankAccountSchema),
      ],
      subscriptions: [
        'subscriptions',
        optional(array(subscriptionGroupSignupItemSchema)),
      ],
    })
);
