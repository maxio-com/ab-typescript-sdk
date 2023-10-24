/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema, string } from '../schema';

export interface DunnerData {
  state: string;
  subscriptionId: number;
  revenueAtRiskInCents: number;
  createdAt: string;
  attempts: number;
  lastAttemptedAt: string;
}

export const dunnerDataSchema: Schema<DunnerData> = object({
  state: ['state', string()],
  subscriptionId: ['subscription_id', number()],
  revenueAtRiskInCents: ['revenue_at_risk_in_cents', number()],
  createdAt: ['created_at', string()],
  attempts: ['attempts', number()],
  lastAttemptedAt: ['last_attempted_at', string()],
});
