/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  isMappedValueValidForSchema,
  lazy,
  oneOf,
  Schema,
} from '../../schema.js';
import {
  ComponentAllocationChange,
  componentAllocationChangeSchema,
} from '../componentAllocationChange.js';
import {
  CreditAccountBalanceChanged,
  creditAccountBalanceChangedSchema,
} from '../creditAccountBalanceChanged.js';
import {
  CustomFieldValueChange,
  customFieldValueChangeSchema,
} from '../customFieldValueChange.js';
import {
  DunningStepReached,
  dunningStepReachedSchema,
} from '../dunningStepReached.js';
import { InvoiceIssued, invoiceIssuedSchema } from '../invoiceIssued.js';
import {
  ItemPricePointChanged,
  itemPricePointChangedSchema,
} from '../itemPricePointChanged.js';
import { MeteredUsage, meteredUsageSchema } from '../meteredUsage.js';
import {
  PaymentCollectionMethodChanged,
  paymentCollectionMethodChangedSchema,
} from '../paymentCollectionMethodChanged.js';
import {
  PaymentRelatedEvents,
  paymentRelatedEventsSchema,
} from '../paymentRelatedEvents.js';
import {
  PendingCancellationChange,
  pendingCancellationChangeSchema,
} from '../pendingCancellationChange.js';
import {
  PrepaidSubscriptionBalanceChanged,
  prepaidSubscriptionBalanceChangedSchema,
} from '../prepaidSubscriptionBalanceChanged.js';
import { PrepaidUsage, prepaidUsageSchema } from '../prepaidUsage.js';
import {
  PrepaymentAccountBalanceChanged,
  prepaymentAccountBalanceChangedSchema,
} from '../prepaymentAccountBalanceChanged.js';
import {
  ProformaInvoiceIssued,
  proformaInvoiceIssuedSchema,
} from '../proformaInvoiceIssued.js';
import { RefundSuccess, refundSuccessSchema } from '../refundSuccess.js';
import {
  SubscriptionGroupSignupEventData,
  subscriptionGroupSignupEventDataSchema,
} from '../subscriptionGroupSignupEventData.js';
import {
  SubscriptionProductChange,
  subscriptionProductChangeSchema,
} from '../subscriptionProductChange.js';
import {
  SubscriptionStateChange,
  subscriptionStateChangeSchema,
} from '../subscriptionStateChange.js';

/** This is a container type for one-of types. */
export type EventEventSpecificData =
  | SubscriptionProductChange
  | SubscriptionStateChange
  | PaymentRelatedEvents
  | RefundSuccess
  | ComponentAllocationChange
  | MeteredUsage
  | PrepaidUsage
  | DunningStepReached
  | InvoiceIssued
  | PendingCancellationChange
  | PrepaidSubscriptionBalanceChanged
  | ProformaInvoiceIssued
  | SubscriptionGroupSignupEventData
  | CreditAccountBalanceChanged
  | PrepaymentAccountBalanceChanged
  | PaymentCollectionMethodChanged
  | ItemPricePointChanged
  | CustomFieldValueChange;

export const eventEventSpecificDataSchema: Schema<EventEventSpecificData> = lazy(
  () =>
    oneOf([
      subscriptionProductChangeSchema,
      subscriptionStateChangeSchema,
      paymentRelatedEventsSchema,
      refundSuccessSchema,
      componentAllocationChangeSchema,
      meteredUsageSchema,
      prepaidUsageSchema,
      dunningStepReachedSchema,
      invoiceIssuedSchema,
      pendingCancellationChangeSchema,
      prepaidSubscriptionBalanceChangedSchema,
      proformaInvoiceIssuedSchema,
      subscriptionGroupSignupEventDataSchema,
      creditAccountBalanceChangedSchema,
      prepaymentAccountBalanceChangedSchema,
      paymentCollectionMethodChangedSchema,
      itemPricePointChangedSchema,
      customFieldValueChangeSchema,
    ])
);

export namespace EventEventSpecificData {
  /**
   * Validation method to narrow down union type to SubscriptionProductChange type case.
   *
   * This is Subscription Product Change case.
   */
  export function isSubscriptionProductChange(
    value: unknown
  ): value is SubscriptionProductChange {
    return isMappedValueValidForSchema(value, subscriptionProductChangeSchema);
  }

  /**
   * Validation method to narrow down union type to SubscriptionStateChange type case.
   *
   * This is Subscription State Change case.
   */
  export function isSubscriptionStateChange(
    value: unknown
  ): value is SubscriptionStateChange {
    return isMappedValueValidForSchema(value, subscriptionStateChangeSchema);
  }

  /**
   * Validation method to narrow down union type to PaymentRelatedEvents type case.
   *
   * This is Payment Related Events case.
   */
  export function isPaymentRelatedEvents(
    value: unknown
  ): value is PaymentRelatedEvents {
    return isMappedValueValidForSchema(value, paymentRelatedEventsSchema);
  }

  /**
   * Validation method to narrow down union type to RefundSuccess type case.
   *
   * This is Refund Success case.
   */
  export function isRefundSuccess(value: unknown): value is RefundSuccess {
    return isMappedValueValidForSchema(value, refundSuccessSchema);
  }

  /**
   * Validation method to narrow down union type to ComponentAllocationChange type case.
   *
   * This is Component Allocation Change case.
   */
  export function isComponentAllocationChange(
    value: unknown
  ): value is ComponentAllocationChange {
    return isMappedValueValidForSchema(value, componentAllocationChangeSchema);
  }

  /**
   * Validation method to narrow down union type to MeteredUsage type case.
   *
   * This is Metered Usage case.
   */
  export function isMeteredUsage(value: unknown): value is MeteredUsage {
    return isMappedValueValidForSchema(value, meteredUsageSchema);
  }

  /**
   * Validation method to narrow down union type to PrepaidUsage type case.
   *
   * This is Prepaid Usage case.
   */
  export function isPrepaidUsage(value: unknown): value is PrepaidUsage {
    return isMappedValueValidForSchema(value, prepaidUsageSchema);
  }

  /**
   * Validation method to narrow down union type to DunningStepReached type case.
   *
   * This is Dunning Step Reached case.
   */
  export function isDunningStepReached(
    value: unknown
  ): value is DunningStepReached {
    return isMappedValueValidForSchema(value, dunningStepReachedSchema);
  }

  /**
   * Validation method to narrow down union type to InvoiceIssued type case.
   *
   * This is Invoice Issued case.
   */
  export function isInvoiceIssued(value: unknown): value is InvoiceIssued {
    return isMappedValueValidForSchema(value, invoiceIssuedSchema);
  }

  /**
   * Validation method to narrow down union type to PendingCancellationChange type case.
   *
   * This is Pending Cancellation Change case.
   */
  export function isPendingCancellationChange(
    value: unknown
  ): value is PendingCancellationChange {
    return isMappedValueValidForSchema(value, pendingCancellationChangeSchema);
  }

  /**
   * Validation method to narrow down union type to PrepaidSubscriptionBalanceChanged type case.
   *
   * This is Prepaid Subscription Balance Changed case.
   */
  export function isPrepaidSubscriptionBalanceChanged(
    value: unknown
  ): value is PrepaidSubscriptionBalanceChanged {
    return isMappedValueValidForSchema(
      value,
      prepaidSubscriptionBalanceChangedSchema
    );
  }

  /**
   * Validation method to narrow down union type to ProformaInvoiceIssued type case.
   *
   * This is Proforma Invoice Issued case.
   */
  export function isProformaInvoiceIssued(
    value: unknown
  ): value is ProformaInvoiceIssued {
    return isMappedValueValidForSchema(value, proformaInvoiceIssuedSchema);
  }

  /**
   * Validation method to narrow down union type to SubscriptionGroupSignupEventData type case.
   *
   * This is Subscription Group Signup Event Data case.
   */
  export function isSubscriptionGroupSignupEventData(
    value: unknown
  ): value is SubscriptionGroupSignupEventData {
    return isMappedValueValidForSchema(
      value,
      subscriptionGroupSignupEventDataSchema
    );
  }

  /**
   * Validation method to narrow down union type to CreditAccountBalanceChanged type case.
   *
   * This is Credit Account Balance Changed case.
   */
  export function isCreditAccountBalanceChanged(
    value: unknown
  ): value is CreditAccountBalanceChanged {
    return isMappedValueValidForSchema(
      value,
      creditAccountBalanceChangedSchema
    );
  }

  /**
   * Validation method to narrow down union type to PrepaymentAccountBalanceChanged type case.
   *
   * This is Prepayment Account Balance Changed case.
   */
  export function isPrepaymentAccountBalanceChanged(
    value: unknown
  ): value is PrepaymentAccountBalanceChanged {
    return isMappedValueValidForSchema(
      value,
      prepaymentAccountBalanceChangedSchema
    );
  }

  /**
   * Validation method to narrow down union type to PaymentCollectionMethodChanged type case.
   *
   * This is Payment Collection Method Changed case.
   */
  export function isPaymentCollectionMethodChanged(
    value: unknown
  ): value is PaymentCollectionMethodChanged {
    return isMappedValueValidForSchema(
      value,
      paymentCollectionMethodChangedSchema
    );
  }

  /**
   * Validation method to narrow down union type to ItemPricePointChanged type case.
   *
   * This is Item Price Point Changed case.
   */
  export function isItemPricePointChanged(
    value: unknown
  ): value is ItemPricePointChanged {
    return isMappedValueValidForSchema(value, itemPricePointChangedSchema);
  }

  /**
   * Validation method to narrow down union type to CustomFieldValueChange type case.
   *
   * This is Custom Field Value Change case.
   */
  export function isCustomFieldValueChange(
    value: unknown
  ): value is CustomFieldValueChange {
    return isMappedValueValidForSchema(value, customFieldValueChangeSchema);
  }
}
