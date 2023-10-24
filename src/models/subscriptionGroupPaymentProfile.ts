/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface SubscriptionGroupPaymentProfile {
  id?: number;
  firstName?: string;
  lastName?: string;
  maskedCardNumber?: string;
}

export const subscriptionGroupPaymentProfileSchema: Schema<SubscriptionGroupPaymentProfile> = object(
  {
    id: ['id', optional(number())],
    firstName: ['first_name', optional(string())],
    lastName: ['last_name', optional(string())],
    maskedCardNumber: ['masked_card_number', optional(string())],
  }
);
