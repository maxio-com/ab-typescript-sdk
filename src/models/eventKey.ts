/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for EventKey
 */
export enum EventKey {
  PaymentSuccess = 'payment_success',
  PaymentFailure = 'payment_failure',
  SignupSuccess = 'signup_success',
  SignupFailure = 'signup_failure',
  DelayedSignupCreationSuccess = 'delayed_signup_creation_success',
  DelayedSignupCreationFailure = 'delayed_signup_creation_failure',
  BillingDateChange = 'billing_date_change',
  ExpirationDateChange = 'expiration_date_change',
  RenewalSuccess = 'renewal_success',
  RenewalFailure = 'renewal_failure',
  SubscriptionStateChange = 'subscription_state_change',
  SubscriptionProductChange = 'subscription_product_change',
  PendingCancellationChange = 'pending_cancellation_change',
  ExpiringCard = 'expiring_card',
  CustomerUpdate = 'customer_update',
  CustomerCreate = 'customer_create',
  CustomerDelete = 'customer_delete',
  ComponentAllocationChange = 'component_allocation_change',
  MeteredUsage = 'metered_usage',
  PrepaidUsage = 'prepaid_usage',
  UpgradeDowngradeSuccess = 'upgrade_downgrade_success',
  UpgradeDowngradeFailure = 'upgrade_downgrade_failure',
  StatementClosed = 'statement_closed',
  StatementSettled = 'statement_settled',
  SubscriptionCardUpdate = 'subscription_card_update',
  SubscriptionGroupCardUpdate = 'subscription_group_card_update',
  SubscriptionBankAccountUpdate = 'subscription_bank_account_update',
  RefundSuccess = 'refund_success',
  RefundFailure = 'refund_failure',
  UpcomingRenewalNotice = 'upcoming_renewal_notice',
  TrialEndNotice = 'trial_end_notice',
  DunningStepReached = 'dunning_step_reached',
  InvoiceIssued = 'invoice_issued',
  PrepaidSubscriptionBalanceChanged = 'prepaid_subscription_balance_changed',
  SubscriptionGroupSignupSuccess = 'subscription_group_signup_success',
  SubscriptionGroupSignupFailure = 'subscription_group_signup_failure',
  DirectDebitPaymentPaidOut = 'direct_debit_payment_paid_out',
  DirectDebitPaymentRejected = 'direct_debit_payment_rejected',
  DirectDebitPaymentPending = 'direct_debit_payment_pending',
  PendingPaymentCreated = 'pending_payment_created',
  PendingPaymentFailed = 'pending_payment_failed',
  PendingPaymentCompleted = 'pending_payment_completed',
  ProformaInvoiceIssued = 'proforma_invoice_issued',
  SubscriptionPrepaymentAccountBalanceChanged = 'subscription_prepayment_account_balance_changed',
  SubscriptionServiceCreditAccountBalanceChanged = 'subscription_service_credit_account_balance_changed',
  CustomFieldValueChange = 'custom_field_value_change',
  ItemPricePointChanged = 'item_price_point_changed',
  RenewalSuccessRecreated = 'renewal_success_recreated',
  RenewalFailureRecreated = 'renewal_failure_recreated',
  PaymentSuccessRecreated = 'payment_success_recreated',
  PaymentFailureRecreated = 'payment_failure_recreated',
  SubscriptionDeletion = 'subscription_deletion',
  SubscriptionGroupBankAccountUpdate = 'subscription_group_bank_account_update',
  SubscriptionPaypalAccountUpdate = 'subscription_paypal_account_update',
  SubscriptionGroupPaypalAccountUpdate = 'subscription_group_paypal_account_update',
  SubscriptionCustomerChange = 'subscription_customer_change',
  AccountTransactionChanged = 'account_transaction_changed',
  GoCardlessPaymentPaidOut = 'go_cardless_payment_paid_out',
  GoCardlessPaymentRejected = 'go_cardless_payment_rejected',
  GoCardlessPaymentPending = 'go_cardless_payment_pending',
  StripeDirectDebitPaymentPaidOut = 'stripe_direct_debit_payment_paid_out',
  StripeDirectDebitPaymentRejected = 'stripe_direct_debit_payment_rejected',
  StripeDirectDebitPaymentPending = 'stripe_direct_debit_payment_pending',
  MaxioPaymentsDirectDebitPaymentPaidOut = 'maxio_payments_direct_debit_payment_paid_out',
  MaxioPaymentsDirectDebitPaymentRejected = 'maxio_payments_direct_debit_payment_rejected',
  MaxioPaymentsDirectDebitPaymentPending = 'maxio_payments_direct_debit_payment_pending',
  InvoiceInCollectionsCanceled = 'invoice_in_collections_canceled',
  SubscriptionAddedToGroup = 'subscription_added_to_group',
  SubscriptionRemovedFromGroup = 'subscription_removed_from_group',
  ChargebackOpened = 'chargeback_opened',
  ChargebackLost = 'chargeback_lost',
  ChargebackAccepted = 'chargeback_accepted',
  ChargebackClosed = 'chargeback_closed',
  ChargebackWon = 'chargeback_won',
  PaymentCollectionMethodChanged = 'payment_collection_method_changed',
  ComponentBillingDateChanged = 'component_billing_date_changed',
  SubscriptionTermRenewalScheduled = 'subscription_term_renewal_scheduled',
  SubscriptionTermRenewalPending = 'subscription_term_renewal_pending',
  SubscriptionTermRenewalActivated = 'subscription_term_renewal_activated',
  SubscriptionTermRenewalRemoved = 'subscription_term_renewal_removed',
}

/**
 * Schema for EventKey
 */
export const eventKeySchema: Schema<EventKey> = stringEnum(EventKey);
