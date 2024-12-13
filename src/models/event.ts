/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  bigint,
  expandoObject,
  nullable,
  number,
  Schema,
  string,
} from '../schema';
import {
  EventEventSpecificData,
  eventEventSpecificDataSchema,
} from './containers/eventEventSpecificData';
import { EventKey, eventKeySchema } from './eventKey';

export interface Event {
  id: bigint;
  key: EventKey;
  message: string;
  subscriptionId: number | null;
  customerId: number | null;
  createdAt: string;
  /**
   * The schema varies based on the event key. The key-to-event data mapping is as follows:
   * * `subscription_product_change` - SubscriptionProductChange
   * * `subscription_state_change` - SubscriptionStateChange
   * * `signup_success`, `delayed_signup_creation_success`, `payment_success`, `payment_failure`, `renewal_success`, `renewal_failure`, `chargeback_lost`, `chargeback_accepted`, `chargeback_closed` - PaymentRelatedEvents
   * * `refund_success` - RefundSuccess
   * * `component_allocation_change` - ComponentAllocationChange
   * * `metered_usage` - MeteredUsage
   * * `prepaid_usage` - PrepaidUsage
   * * `dunning_step_reached` - DunningStepReached
   * * `invoice_issued` - InvoiceIssued
   * * `pending_cancellation_change` - PendingCancellationChange
   * * `prepaid_subscription_balance_changed` - PrepaidSubscriptionBalanceChanged
   * * `subscription_group_signup_success` and `subscription_group_signup_failure` - SubscriptionGroupSignupEventData
   * * `proforma_invoice_issued` - ProformaInvoiceIssued
   * * `subscription_prepayment_account_balance_changed` - PrepaymentAccountBalanceChanged
   * * `payment_collection_method_changed` - PaymentCollectionMethodChanged
   * * `subscription_service_credit_account_balance_changed` - CreditAccountBalanceChanged
   * * `item_price_point_changed` - ItemPricePointChanged
   * * `custom_field_value_change` - CustomFieldValueChange
   * * The rest, that is `delayed_signup_creation_failure`, `billing_date_change`, `expiration_date_change`, `expiring_card`,
   * `customer_update`, `customer_create`, `customer_delete`, `upgrade_downgrade_success`, `upgrade_downgrade_failure`,
   * `statement_closed`, `statement_settled`, `subscription_card_update`, `subscription_group_card_update`,
   * `subscription_bank_account_update`, `refund_failure`, `upcoming_renewal_notice`, `trial_end_notice`,
   * `direct_debit_payment_paid_out`, `direct_debit_payment_rejected`, `direct_debit_payment_pending`, `pending_payment_created`,
   * `pending_payment_failed`, `pending_payment_completed`,  don't have event_specific_data defined,
   * `renewal_success_recreated`, `renewal_failure_recreated`, `payment_success_recreated`, `payment_failure_recreated`,
   * `subscription_deletion`, `subscription_group_bank_account_update`, `subscription_paypal_account_update`, `subscription_group_paypal_account_update`,
   * `subscription_customer_change`, `account_transaction_changed`, `go_cardless_payment_paid_out`, `go_cardless_payment_rejected`,
   * `go_cardless_payment_pending`, `stripe_direct_debit_payment_paid_out`, `stripe_direct_debit_payment_rejected`, `stripe_direct_debit_payment_pending`,
   * `maxio_payments_direct_debit_payment_paid_out`, `maxio_payments_direct_debit_payment_rejected`, `maxio_payments_direct_debit_payment_pending`,
   * `invoice_in_collections_canceled`, `subscription_added_to_group`, `subscription_removed_from_group`, `chargeback_opened`, `chargeback_lost`,
   * `chargeback_accepted`, `chargeback_closed`, `chargeback_won`, `payment_collection_method_changed`, `component_billing_date_changed`,
   * `subscription_term_renewal_scheduled`, `subscription_term_renewal_pending`, `subscription_term_renewal_activated`, `subscription_term_renewal_removed`
   * they map to `null` instead.
   */
  eventSpecificData: EventEventSpecificData | null;
  [key: string]: unknown;
}

export const eventSchema: Schema<Event> = expandoObject({
  id: ['id', bigint()],
  key: ['key', eventKeySchema],
  message: ['message', string()],
  subscriptionId: ['subscription_id', nullable(number())],
  customerId: ['customer_id', nullable(number())],
  createdAt: ['created_at', string()],
  eventSpecificData: [
    'event_specific_data',
    nullable(eventEventSpecificDataSchema),
  ],
});
