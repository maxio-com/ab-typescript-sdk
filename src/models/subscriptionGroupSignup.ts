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
} from '../schema';
import { CollectionMethod, collectionMethodSchema } from './collectionMethod';
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

export interface SubscriptionGroupSignup {
  paymentProfileId?: number;
  payerId?: number;
  payerReference?: string;
  /** The type of payment collection to be used in the subscription. For legacy Statements Architecture valid options are - `invoice`, `automatic`. For current Relationship Invoicing Architecture valid options are - `remittance`, `automatic`, `prepaid`. */
  paymentCollectionMethod?: CollectionMethod;
  payerAttributes?: PayerAttributes;
  creditCardAttributes?: SubscriptionGroupCreditCard;
  bankAccountAttributes?: SubscriptionGroupBankAccount;
  subscriptions: SubscriptionGroupSignupItem[];
  [key: string]: unknown;
}

export const subscriptionGroupSignupSchema: Schema<SubscriptionGroupSignup> = expandoObject(
  {
    paymentProfileId: ['payment_profile_id', optional(number())],
    payerId: ['payer_id', optional(number())],
    payerReference: ['payer_reference', optional(string())],
    paymentCollectionMethod: [
      'payment_collection_method',
      optional(collectionMethodSchema),
    ],
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
      array(lazy(() => subscriptionGroupSignupItemSchema)),
    ],
  }
);
