/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { anyOf, Schema, validateAndMap } from '../../schema';
import {
  ApplyCreditNoteEvent,
  applyCreditNoteEventSchema,
} from '../applyCreditNoteEvent';
import {
  ApplyDebitNoteEvent,
  applyDebitNoteEventSchema,
} from '../applyDebitNoteEvent';
import {
  ApplyPaymentEvent,
  applyPaymentEventSchema,
} from '../applyPaymentEvent';
import {
  BackportInvoiceEvent,
  backportInvoiceEventSchema,
} from '../backportInvoiceEvent';
import {
  ChangeChargebackStatusEvent,
  changeChargebackStatusEventSchema,
} from '../changeChargebackStatusEvent';
import {
  ChangeInvoiceCollectionMethodEvent,
  changeInvoiceCollectionMethodEventSchema,
} from '../changeInvoiceCollectionMethodEvent';
import {
  ChangeInvoiceStatusEvent,
  changeInvoiceStatusEventSchema,
} from '../changeInvoiceStatusEvent';
import {
  CreateCreditNoteEvent,
  createCreditNoteEventSchema,
} from '../createCreditNoteEvent';
import {
  CreateDebitNoteEvent,
  createDebitNoteEventSchema,
} from '../createDebitNoteEvent';
import {
  FailedPaymentEvent,
  failedPaymentEventSchema,
} from '../failedPaymentEvent';
import {
  IssueInvoiceEvent,
  issueInvoiceEventSchema,
} from '../issueInvoiceEvent';
import {
  RefundInvoiceEvent,
  refundInvoiceEventSchema,
} from '../refundInvoiceEvent';
import {
  RemovePaymentEvent,
  removePaymentEventSchema,
} from '../removePaymentEvent';
import { VoidInvoiceEvent, voidInvoiceEventSchema } from '../voidInvoiceEvent';
import {
  VoidRemainderEvent,
  voidRemainderEventSchema,
} from '../voidRemainderEvent';

/** This is a container type for any-of types. */
export type InvoiceEvent =
  | ApplyCreditNoteEvent
  | ApplyDebitNoteEvent
  | ApplyPaymentEvent
  | BackportInvoiceEvent
  | ChangeChargebackStatusEvent
  | ChangeInvoiceCollectionMethodEvent
  | ChangeInvoiceStatusEvent
  | CreateCreditNoteEvent
  | CreateDebitNoteEvent
  | FailedPaymentEvent
  | IssueInvoiceEvent
  | RefundInvoiceEvent
  | RemovePaymentEvent
  | VoidInvoiceEvent
  | VoidRemainderEvent;

const discriminatorMap = {
  'apply_credit_note': applyCreditNoteEventSchema,
  'apply_debit_note': applyDebitNoteEventSchema,
  'apply_payment': applyPaymentEventSchema,
  'backport_invoice': backportInvoiceEventSchema,
  'change_chargeback_status': changeChargebackStatusEventSchema,
  'change_invoice_collection_method': changeInvoiceCollectionMethodEventSchema,
  'change_invoice_status': changeInvoiceStatusEventSchema,
  'create_credit_note': createCreditNoteEventSchema,
  'create_debit_note': createDebitNoteEventSchema,
  'failed_payment': failedPaymentEventSchema,
  'issue_invoice': issueInvoiceEventSchema,
  'refund_invoice': refundInvoiceEventSchema,
  'remove_payment': removePaymentEventSchema,
  'void_invoice': voidInvoiceEventSchema,
  'void_remainder': voidRemainderEventSchema,
};

export const invoiceEventSchema: Schema<InvoiceEvent> = anyOf(
  [
    applyCreditNoteEventSchema,
    applyDebitNoteEventSchema,
    applyPaymentEventSchema,
    backportInvoiceEventSchema,
    changeChargebackStatusEventSchema,
    changeInvoiceCollectionMethodEventSchema,
    changeInvoiceStatusEventSchema,
    createCreditNoteEventSchema,
    createDebitNoteEventSchema,
    failedPaymentEventSchema,
    issueInvoiceEventSchema,
    refundInvoiceEventSchema,
    removePaymentEventSchema,
    voidInvoiceEventSchema,
    voidRemainderEventSchema,
  ],
  discriminatorMap,
  'eventType'
);

export namespace InvoiceEvent {
  /**
   * Validation method to narrow down union type to ApplyCreditNoteEvent type case.
   *
   * This is Apply Credit Note Event case.
   */
  export function isApplyCreditNoteEvent(
    value: unknown
  ): value is ApplyCreditNoteEvent {
    const validationResult = validateAndMap(value, applyCreditNoteEventSchema);
    return validationResult.errors === false;
  }

  /**
   * Validation method to narrow down union type to ApplyDebitNoteEvent type case.
   *
   * This is Apply Debit Note Event case.
   */
  export function isApplyDebitNoteEvent(
    value: unknown
  ): value is ApplyDebitNoteEvent {
    const validationResult = validateAndMap(value, applyDebitNoteEventSchema);
    return validationResult.errors === false;
  }

  /**
   * Validation method to narrow down union type to ApplyPaymentEvent type case.
   *
   * This is Apply Payment Event case.
   */
  export function isApplyPaymentEvent(
    value: unknown
  ): value is ApplyPaymentEvent {
    const validationResult = validateAndMap(value, applyPaymentEventSchema);
    return validationResult.errors === false;
  }

  /**
   * Validation method to narrow down union type to BackportInvoiceEvent type case.
   *
   * This is Backport Invoice Event case.
   */
  export function isBackportInvoiceEvent(
    value: unknown
  ): value is BackportInvoiceEvent {
    const validationResult = validateAndMap(value, backportInvoiceEventSchema);
    return validationResult.errors === false;
  }

  /**
   * Validation method to narrow down union type to ChangeChargebackStatusEvent type case.
   *
   * This is Change Chargeback Status Event case.
   */
  export function isChangeChargebackStatusEvent(
    value: unknown
  ): value is ChangeChargebackStatusEvent {
    const validationResult = validateAndMap(
      value,
      changeChargebackStatusEventSchema
    );
    return validationResult.errors === false;
  }

  /**
   * Validation method to narrow down union type to ChangeInvoiceCollectionMethodEvent type case.
   *
   * This is Change Invoice Collection Method Event case.
   */
  export function isChangeInvoiceCollectionMethodEvent(
    value: unknown
  ): value is ChangeInvoiceCollectionMethodEvent {
    const validationResult = validateAndMap(
      value,
      changeInvoiceCollectionMethodEventSchema
    );
    return validationResult.errors === false;
  }

  /**
   * Validation method to narrow down union type to ChangeInvoiceStatusEvent type case.
   *
   * This is Change Invoice Status Event case.
   */
  export function isChangeInvoiceStatusEvent(
    value: unknown
  ): value is ChangeInvoiceStatusEvent {
    const validationResult = validateAndMap(
      value,
      changeInvoiceStatusEventSchema
    );
    return validationResult.errors === false;
  }

  /**
   * Validation method to narrow down union type to CreateCreditNoteEvent type case.
   *
   * This is Create Credit Note Event case.
   */
  export function isCreateCreditNoteEvent(
    value: unknown
  ): value is CreateCreditNoteEvent {
    const validationResult = validateAndMap(value, createCreditNoteEventSchema);
    return validationResult.errors === false;
  }

  /**
   * Validation method to narrow down union type to CreateDebitNoteEvent type case.
   *
   * This is Create Debit Note Event case.
   */
  export function isCreateDebitNoteEvent(
    value: unknown
  ): value is CreateDebitNoteEvent {
    const validationResult = validateAndMap(value, createDebitNoteEventSchema);
    return validationResult.errors === false;
  }

  /**
   * Validation method to narrow down union type to FailedPaymentEvent type case.
   *
   * This is Failed Payment Event case.
   */
  export function isFailedPaymentEvent(
    value: unknown
  ): value is FailedPaymentEvent {
    const validationResult = validateAndMap(value, failedPaymentEventSchema);
    return validationResult.errors === false;
  }

  /**
   * Validation method to narrow down union type to IssueInvoiceEvent type case.
   *
   * This is Issue Invoice Event case.
   */
  export function isIssueInvoiceEvent(
    value: unknown
  ): value is IssueInvoiceEvent {
    const validationResult = validateAndMap(value, issueInvoiceEventSchema);
    return validationResult.errors === false;
  }

  /**
   * Validation method to narrow down union type to RefundInvoiceEvent type case.
   *
   * This is Refund Invoice Event case.
   */
  export function isRefundInvoiceEvent(
    value: unknown
  ): value is RefundInvoiceEvent {
    const validationResult = validateAndMap(value, refundInvoiceEventSchema);
    return validationResult.errors === false;
  }

  /**
   * Validation method to narrow down union type to RemovePaymentEvent type case.
   *
   * This is Remove Payment Event case.
   */
  export function isRemovePaymentEvent(
    value: unknown
  ): value is RemovePaymentEvent {
    const validationResult = validateAndMap(value, removePaymentEventSchema);
    return validationResult.errors === false;
  }

  /**
   * Validation method to narrow down union type to VoidInvoiceEvent type case.
   *
   * This is Void Invoice Event case.
   */
  export function isVoidInvoiceEvent(
    value: unknown
  ): value is VoidInvoiceEvent {
    const validationResult = validateAndMap(value, voidInvoiceEventSchema);
    return validationResult.errors === false;
  }

  /**
   * Validation method to narrow down union type to VoidRemainderEvent type case.
   *
   * This is Void Remainder Event case.
   */
  export function isVoidRemainderEvent(
    value: unknown
  ): value is VoidRemainderEvent {
    const validationResult = validateAndMap(value, voidRemainderEventSchema);
    return validationResult.errors === false;
  }
}
