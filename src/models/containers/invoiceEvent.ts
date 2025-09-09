/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { anyOf, isMappedValueValidForSchema, Schema } from '../../schema.js';
import {
  ApplyCreditNoteEvent,
  applyCreditNoteEventSchema,
} from '../applyCreditNoteEvent.js';
import {
  ApplyDebitNoteEvent,
  applyDebitNoteEventSchema,
} from '../applyDebitNoteEvent.js';
import {
  ApplyPaymentEvent,
  applyPaymentEventSchema,
} from '../applyPaymentEvent.js';
import {
  BackportInvoiceEvent,
  backportInvoiceEventSchema,
} from '../backportInvoiceEvent.js';
import {
  ChangeChargebackStatusEvent,
  changeChargebackStatusEventSchema,
} from '../changeChargebackStatusEvent.js';
import {
  ChangeInvoiceCollectionMethodEvent,
  changeInvoiceCollectionMethodEventSchema,
} from '../changeInvoiceCollectionMethodEvent.js';
import {
  ChangeInvoiceStatusEvent,
  changeInvoiceStatusEventSchema,
} from '../changeInvoiceStatusEvent.js';
import {
  CreateCreditNoteEvent,
  createCreditNoteEventSchema,
} from '../createCreditNoteEvent.js';
import {
  CreateDebitNoteEvent,
  createDebitNoteEventSchema,
} from '../createDebitNoteEvent.js';
import {
  FailedPaymentEvent,
  failedPaymentEventSchema,
} from '../failedPaymentEvent.js';
import {
  IssueInvoiceEvent,
  issueInvoiceEventSchema,
} from '../issueInvoiceEvent.js';
import {
  RefundInvoiceEvent,
  refundInvoiceEventSchema,
} from '../refundInvoiceEvent.js';
import {
  RemovePaymentEvent,
  removePaymentEventSchema,
} from '../removePaymentEvent.js';
import {
  VoidInvoiceEvent,
  voidInvoiceEventSchema,
} from '../voidInvoiceEvent.js';
import {
  VoidRemainderEvent,
  voidRemainderEventSchema,
} from '../voidRemainderEvent.js';

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
  'event_type'
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
    return isMappedValueValidForSchema(value, applyCreditNoteEventSchema);
  }

  /**
   * Validation method to narrow down union type to ApplyDebitNoteEvent type case.
   *
   * This is Apply Debit Note Event case.
   */
  export function isApplyDebitNoteEvent(
    value: unknown
  ): value is ApplyDebitNoteEvent {
    return isMappedValueValidForSchema(value, applyDebitNoteEventSchema);
  }

  /**
   * Validation method to narrow down union type to ApplyPaymentEvent type case.
   *
   * This is Apply Payment Event case.
   */
  export function isApplyPaymentEvent(
    value: unknown
  ): value is ApplyPaymentEvent {
    return isMappedValueValidForSchema(value, applyPaymentEventSchema);
  }

  /**
   * Validation method to narrow down union type to BackportInvoiceEvent type case.
   *
   * This is Backport Invoice Event case.
   */
  export function isBackportInvoiceEvent(
    value: unknown
  ): value is BackportInvoiceEvent {
    return isMappedValueValidForSchema(value, backportInvoiceEventSchema);
  }

  /**
   * Validation method to narrow down union type to ChangeChargebackStatusEvent type case.
   *
   * This is Change Chargeback Status Event case.
   */
  export function isChangeChargebackStatusEvent(
    value: unknown
  ): value is ChangeChargebackStatusEvent {
    return isMappedValueValidForSchema(
      value,
      changeChargebackStatusEventSchema
    );
  }

  /**
   * Validation method to narrow down union type to ChangeInvoiceCollectionMethodEvent type case.
   *
   * This is Change Invoice Collection Method Event case.
   */
  export function isChangeInvoiceCollectionMethodEvent(
    value: unknown
  ): value is ChangeInvoiceCollectionMethodEvent {
    return isMappedValueValidForSchema(
      value,
      changeInvoiceCollectionMethodEventSchema
    );
  }

  /**
   * Validation method to narrow down union type to ChangeInvoiceStatusEvent type case.
   *
   * This is Change Invoice Status Event case.
   */
  export function isChangeInvoiceStatusEvent(
    value: unknown
  ): value is ChangeInvoiceStatusEvent {
    return isMappedValueValidForSchema(value, changeInvoiceStatusEventSchema);
  }

  /**
   * Validation method to narrow down union type to CreateCreditNoteEvent type case.
   *
   * This is Create Credit Note Event case.
   */
  export function isCreateCreditNoteEvent(
    value: unknown
  ): value is CreateCreditNoteEvent {
    return isMappedValueValidForSchema(value, createCreditNoteEventSchema);
  }

  /**
   * Validation method to narrow down union type to CreateDebitNoteEvent type case.
   *
   * This is Create Debit Note Event case.
   */
  export function isCreateDebitNoteEvent(
    value: unknown
  ): value is CreateDebitNoteEvent {
    return isMappedValueValidForSchema(value, createDebitNoteEventSchema);
  }

  /**
   * Validation method to narrow down union type to FailedPaymentEvent type case.
   *
   * This is Failed Payment Event case.
   */
  export function isFailedPaymentEvent(
    value: unknown
  ): value is FailedPaymentEvent {
    return isMappedValueValidForSchema(value, failedPaymentEventSchema);
  }

  /**
   * Validation method to narrow down union type to IssueInvoiceEvent type case.
   *
   * This is Issue Invoice Event case.
   */
  export function isIssueInvoiceEvent(
    value: unknown
  ): value is IssueInvoiceEvent {
    return isMappedValueValidForSchema(value, issueInvoiceEventSchema);
  }

  /**
   * Validation method to narrow down union type to RefundInvoiceEvent type case.
   *
   * This is Refund Invoice Event case.
   */
  export function isRefundInvoiceEvent(
    value: unknown
  ): value is RefundInvoiceEvent {
    return isMappedValueValidForSchema(value, refundInvoiceEventSchema);
  }

  /**
   * Validation method to narrow down union type to RemovePaymentEvent type case.
   *
   * This is Remove Payment Event case.
   */
  export function isRemovePaymentEvent(
    value: unknown
  ): value is RemovePaymentEvent {
    return isMappedValueValidForSchema(value, removePaymentEventSchema);
  }

  /**
   * Validation method to narrow down union type to VoidInvoiceEvent type case.
   *
   * This is Void Invoice Event case.
   */
  export function isVoidInvoiceEvent(
    value: unknown
  ): value is VoidInvoiceEvent {
    return isMappedValueValidForSchema(value, voidInvoiceEventSchema);
  }

  /**
   * Validation method to narrow down union type to VoidRemainderEvent type case.
   *
   * This is Void Remainder Event case.
   */
  export function isVoidRemainderEvent(
    value: unknown
  ): value is VoidRemainderEvent {
    return isMappedValueValidForSchema(value, voidRemainderEventSchema);
  }
}
