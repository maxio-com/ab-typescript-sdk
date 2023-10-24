/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for WebhookSubscription
 */
export enum WebhookSubscription {
  BillingDateChange = 'billing_date_change',
  ComponentAllocationChange = 'component_allocation_change',
  CustomerCreate = 'customer_create',
  CustomerUpdate = 'customer_update',
  DunningStepReached = 'dunning_step_reached',
  ExpiringCard = 'expiring_card',
  ExpirationDateChange = 'expiration_date_change',
  InvoiceIssued = 'invoice_issued',
  MeteredUsage = 'metered_usage',
  PaymentFailure = 'payment_failure',
  PaymentSuccess = 'payment_success',
  DirectDebitPaymentPending = 'direct_debit_payment_pending',
  DirectDebitPaymentPaidOut = 'direct_debit_payment_paid_out',
  DirectDebitPaymentRejected = 'direct_debit_payment_rejected',
  PrepaidSubscriptionBalanceChanged = 'prepaid_subscription_balance_changed',
  PrepaidUsage = 'prepaid_usage',
  RefundFailure = 'refund_failure',
  RefundSuccess = 'refund_success',
  RenewalFailure = 'renewal_failure',
  RenewalSuccess = 'renewal_success',
  SignupFailure = 'signup_failure',
  SignupSuccess = 'signup_success',
  StatementClosed = 'statement_closed',
  StatementSettled = 'statement_settled',
  SubscriptionCardUpdate = 'subscription_card_update',
  SubscriptionGroupCardUpdate = 'subscription_group_card_update',
  SubscriptionProductChange = 'subscription_product_change',
  SubscriptionStateChange = 'subscription_state_change',
  TrialEndNotice = 'trial_end_notice',
  UpcomingRenewalNotice = 'upcoming_renewal_notice',
  UpgradeDowngradeFailure = 'upgrade_downgrade_failure',
  UpgradeDowngradeSuccess = 'upgrade_downgrade_success',
  PendingCancellationChange = 'pending_cancellation_change',
  SubscriptionPrepaymentAccountBalanceChanged = 'subscription_prepayment_account_balance_changed',
  SubscriptionServiceCreditAccountBalanceChanged = 'subscription_service_credit_account_balance_changed',
}

/**
 * Schema for WebhookSubscription
 */
export const webhookSubscriptionSchema: Schema<WebhookSubscription> = stringEnum(WebhookSubscription);
