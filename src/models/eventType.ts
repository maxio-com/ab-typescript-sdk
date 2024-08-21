/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for EventType
 */
export enum EventType {
  AccountTransactionChanged = 'account_transaction_changed',
  BillingDateChange = 'billing_date_change',
  ComponentAllocationChange = 'component_allocation_change',
  CustomerUpdate = 'customer_update',
  CustomerCreate = 'customer_create',
  DunningStepReached = 'dunning_step_reached',
  ExpirationDateChange = 'expiration_date_change',
  ExpiringCard = 'expiring_card',
  MeteredUsage = 'metered_usage',
  PaymentSuccess = 'payment_success',
  PaymentSuccessRecreated = 'payment_success_recreated',
  PaymentFailure = 'payment_failure',
  PaymentFailureRecreated = 'payment_failure_recreated',
  RefundFailure = 'refund_failure',
  RefundSuccess = 'refund_success',
  RenewalSuccess = 'renewal_success',
  RenewalSuccessRecreated = 'renewal_success_recreated',
  RenewalFailure = 'renewal_failure',
  SignupSuccess = 'signup_success',
  SignupFailure = 'signup_failure',
  StatementClosed = 'statement_closed',
  StatementSettled = 'statement_settled',
  SubscriptionBankAccountUpdate = 'subscription_bank_account_update',
  SubscriptionDeletion = 'subscription_deletion',
  SubscriptionPaypalAccountUpdate = 'subscription_paypal_account_update',
  SubscriptionProductChange = 'subscription_product_change',
  SubscriptionStateChange = 'subscription_state_change',
  TrialEndNotice = 'trial_end_notice',
  UpgradeDowngradeSuccess = 'upgrade_downgrade_success',
  UpgradeDowngradeFailure = 'upgrade_downgrade_failure',
  UpcomingRenewalNotice = 'upcoming_renewal_notice',
  CustomFieldValueChange = 'custom_field_value_change',
  SubscriptionPrepaymentAccountBalanceChanged = 'subscription_prepayment_account_balance_changed',
  SubscriptionServiceCreditAccountBalanceChanged = 'subscription_service_credit_account_balance_changed',
}

/**
 * Schema for EventType
 */
export const eventTypeSchema: Schema<EventType> = stringEnum(EventType);
