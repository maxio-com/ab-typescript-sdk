/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, validateAndMap } from '../../schema';
import {
  ComponentAllocationChange,
  componentAllocationChangeSchema,
} from '../componentAllocationChange';
import {
  CreditAccountBalanceChanged,
  creditAccountBalanceChangedSchema,
} from '../creditAccountBalanceChanged';
import {
  CustomFieldValueChange,
  customFieldValueChangeSchema,
} from '../customFieldValueChange';
import {
  DunningStepReached,
  dunningStepReachedSchema,
} from '../dunningStepReached';
import { InvoiceIssued, invoiceIssuedSchema } from '../invoiceIssued';
import {
  ItemPricePointChanged,
  itemPricePointChangedSchema,
} from '../itemPricePointChanged';
import { MeteredUsage, meteredUsageSchema } from '../meteredUsage';
import {
  PaymentCollectionMethodChanged,
  paymentCollectionMethodChangedSchema,
} from '../paymentCollectionMethodChanged';
import {
  PaymentRelatedEvents,
  paymentRelatedEventsSchema,
} from '../paymentRelatedEvents';
import {
  PendingCancellationChange,
  pendingCancellationChangeSchema,
} from '../pendingCancellationChange';
import {
  PrepaidSubscriptionBalanceChanged,
  prepaidSubscriptionBalanceChangedSchema,
} from '../prepaidSubscriptionBalanceChanged';
import { PrepaidUsage, prepaidUsageSchema } from '../prepaidUsage';
import {
  PrepaymentAccountBalanceChanged,
  prepaymentAccountBalanceChangedSchema,
} from '../prepaymentAccountBalanceChanged';
import {
  ProformaInvoiceIssued,
  proformaInvoiceIssuedSchema,
} from '../proformaInvoiceIssued';
import { RefundSuccess, refundSuccessSchema } from '../refundSuccess';
import {
  SubscriptionGroupSignupFailure,
  subscriptionGroupSignupFailureSchema,
} from '../subscriptionGroupSignupFailure';
import {
  SubscriptionGroupSignupSuccess,
  subscriptionGroupSignupSuccessSchema,
} from '../subscriptionGroupSignupSuccess';
import {
  SubscriptionProductChange,
  subscriptionProductChangeSchema,
} from '../subscriptionProductChange';
import {
  SubscriptionStateChange,
  subscriptionStateChangeSchema,
} from '../subscriptionStateChange';

/** This is a container type for one-of types. */
export type EventEventSpecificData = SubscriptionProductChange | SubscriptionStateChange | PaymentRelatedEvents | RefundSuccess | ComponentAllocationChange | MeteredUsage | PrepaidUsage | DunningStepReached | InvoiceIssued | PendingCancellationChange | PrepaidSubscriptionBalanceChanged | ProformaInvoiceIssued | SubscriptionGroupSignupSuccess | SubscriptionGroupSignupFailure | CreditAccountBalanceChanged | PrepaymentAccountBalanceChanged | PaymentCollectionMethodChanged | ItemPricePointChanged | CustomFieldValueChange;

export const eventEventSpecificDataSchema: Schema<EventEventSpecificData> = oneOf(
  [
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
    subscriptionGroupSignupSuccessSchema,
    subscriptionGroupSignupFailureSchema,
    creditAccountBalanceChangedSchema,
    prepaymentAccountBalanceChangedSchema,
    paymentCollectionMethodChangedSchema,
    itemPricePointChangedSchema,
    customFieldValueChangeSchema,
  ]
);

export namespace EventEventSpecificData {
  /**
  * Validation method to narrow down union type to SubscriptionProductChange type case.
  *
  * This is Subscription Product Change case.
  */
  export function isSubscriptionProductChange(value: unknown): value is SubscriptionProductChange {
    const validationResult = validateAndMap(value, subscriptionProductChangeSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to SubscriptionStateChange type case.
  *
  * This is Subscription State Change case.
  */
  export function isSubscriptionStateChange(value: unknown): value is SubscriptionStateChange {
    const validationResult = validateAndMap(value, subscriptionStateChangeSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to PaymentRelatedEvents type case.
  *
  * This is Payment Related Events case.
  */
  export function isPaymentRelatedEvents(value: unknown): value is PaymentRelatedEvents {
    const validationResult = validateAndMap(value, paymentRelatedEventsSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to RefundSuccess type case.
  *
  * This is Refund Success case.
  */
  export function isRefundSuccess(value: unknown): value is RefundSuccess {
    const validationResult = validateAndMap(value, refundSuccessSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to ComponentAllocationChange type case.
  *
  * This is Component Allocation Change case.
  */
  export function isComponentAllocationChange(value: unknown): value is ComponentAllocationChange {
    const validationResult = validateAndMap(value, componentAllocationChangeSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to MeteredUsage type case.
  *
  * This is Metered Usage case.
  */
  export function isMeteredUsage(value: unknown): value is MeteredUsage {
    const validationResult = validateAndMap(value, meteredUsageSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to PrepaidUsage type case.
  *
  * This is Prepaid Usage case.
  */
  export function isPrepaidUsage(value: unknown): value is PrepaidUsage {
    const validationResult = validateAndMap(value, prepaidUsageSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to DunningStepReached type case.
  *
  * This is Dunning Step Reached case.
  */
  export function isDunningStepReached(value: unknown): value is DunningStepReached {
    const validationResult = validateAndMap(value, dunningStepReachedSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to InvoiceIssued type case.
  *
  * This is Invoice Issued case.
  */
  export function isInvoiceIssued(value: unknown): value is InvoiceIssued {
    const validationResult = validateAndMap(value, invoiceIssuedSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to PendingCancellationChange type case.
  *
  * This is Pending Cancellation Change case.
  */
  export function isPendingCancellationChange(value: unknown): value is PendingCancellationChange {
    const validationResult = validateAndMap(value, pendingCancellationChangeSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to PrepaidSubscriptionBalanceChanged type case.
  *
  * This is Prepaid Subscription Balance Changed case.
  */
  export function isPrepaidSubscriptionBalanceChanged(value: unknown): value is PrepaidSubscriptionBalanceChanged {
    const validationResult = validateAndMap(value, prepaidSubscriptionBalanceChangedSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to ProformaInvoiceIssued type case.
  *
  * This is Proforma Invoice Issued case.
  */
  export function isProformaInvoiceIssued(value: unknown): value is ProformaInvoiceIssued {
    const validationResult = validateAndMap(value, proformaInvoiceIssuedSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to SubscriptionGroupSignupSuccess type case.
  *
  * This is Subscription Group Signup Success case.
  */
  export function isSubscriptionGroupSignupSuccess(value: unknown): value is SubscriptionGroupSignupSuccess {
    const validationResult = validateAndMap(value, subscriptionGroupSignupSuccessSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to SubscriptionGroupSignupFailure type case.
  *
  * This is Subscription Group Signup Failure case.
  */
  export function isSubscriptionGroupSignupFailure(value: unknown): value is SubscriptionGroupSignupFailure {
    const validationResult = validateAndMap(value, subscriptionGroupSignupFailureSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to CreditAccountBalanceChanged type case.
  *
  * This is Credit Account Balance Changed case.
  */
  export function isCreditAccountBalanceChanged(value: unknown): value is CreditAccountBalanceChanged {
    const validationResult = validateAndMap(value, creditAccountBalanceChangedSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to PrepaymentAccountBalanceChanged type case.
  *
  * This is Prepayment Account Balance Changed case.
  */
  export function isPrepaymentAccountBalanceChanged(value: unknown): value is PrepaymentAccountBalanceChanged {
    const validationResult = validateAndMap(value, prepaymentAccountBalanceChangedSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to PaymentCollectionMethodChanged type case.
  *
  * This is Payment Collection Method Changed case.
  */
  export function isPaymentCollectionMethodChanged(value: unknown): value is PaymentCollectionMethodChanged {
    const validationResult = validateAndMap(value, paymentCollectionMethodChangedSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to ItemPricePointChanged type case.
  *
  * This is Item Price Point Changed case.
  */
  export function isItemPricePointChanged(value: unknown): value is ItemPricePointChanged {
    const validationResult = validateAndMap(value, itemPricePointChangedSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to CustomFieldValueChange type case.
  *
  * This is Custom Field Value Change case.
  */
  export function isCustomFieldValueChange(value: unknown): value is CustomFieldValueChange {
    const validationResult = validateAndMap(value, customFieldValueChangeSchema);
    return validationResult.errors === false;
  }
}
