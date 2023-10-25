/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { anyOf, Schema, validateAndMap } from '../../schema';
import {
  ApplyCreditNoteEventData,
  applyCreditNoteEventDataSchema,
} from '../applyCreditNoteEventData';
import {
  ApplyDebitNoteEventData,
  applyDebitNoteEventDataSchema,
} from '../applyDebitNoteEventData';
import {
  ApplyPaymentEventData,
  applyPaymentEventDataSchema,
} from '../applyPaymentEventData';
import {
  ChangeInvoiceCollectionMethodEventData,
  changeInvoiceCollectionMethodEventDataSchema,
} from '../changeInvoiceCollectionMethodEventData';
import {
  IssueInvoiceEventData,
  issueInvoiceEventDataSchema,
} from '../issueInvoiceEventData';
import {
  RefundInvoiceEventData,
  refundInvoiceEventDataSchema,
} from '../refundInvoiceEventData';
import {
  RemovePaymentEventData,
  removePaymentEventDataSchema,
} from '../removePaymentEventData';
import {
  VoidInvoiceEventData,
  voidInvoiceEventDataSchema,
} from '../voidInvoiceEventData';
import {
  VoidInvoiceEventData1,
  voidInvoiceEventData1Schema,
} from '../voidInvoiceEventData1';

/** This is a container type for any-of types. */
export type InvoiceEventEventData = ApplyCreditNoteEventData | ApplyDebitNoteEventData | ApplyPaymentEventData | ChangeInvoiceCollectionMethodEventData | IssueInvoiceEventData | RefundInvoiceEventData | RemovePaymentEventData | VoidInvoiceEventData | VoidInvoiceEventData1;

export const invoiceEventEventDataSchema: Schema<InvoiceEventEventData> = anyOf(
  [
    applyCreditNoteEventDataSchema,
    applyDebitNoteEventDataSchema,
    applyPaymentEventDataSchema,
    changeInvoiceCollectionMethodEventDataSchema,
    issueInvoiceEventDataSchema,
    refundInvoiceEventDataSchema,
    removePaymentEventDataSchema,
    voidInvoiceEventDataSchema,
    voidInvoiceEventData1Schema,
  ]
);

export namespace InvoiceEventEventData {
  /**
  * Validation method to narrow down union type to ApplyCreditNoteEventData type case.
  *
  * This is Apply Credit Note Event Data case.
  */
  export function isApplyCreditNoteEventData(value: unknown): value is ApplyCreditNoteEventData {
    const validationResult = validateAndMap(value, applyCreditNoteEventDataSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to ApplyDebitNoteEventData type case.
  *
  * This is Apply Debit Note Event Data case.
  */
  export function isApplyDebitNoteEventData(value: unknown): value is ApplyDebitNoteEventData {
    const validationResult = validateAndMap(value, applyDebitNoteEventDataSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to ApplyPaymentEventData type case.
  *
  * This is Apply Payment Event Data case.
  */
  export function isApplyPaymentEventData(value: unknown): value is ApplyPaymentEventData {
    const validationResult = validateAndMap(value, applyPaymentEventDataSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to ChangeInvoiceCollectionMethodEventData type case.
  *
  * This is Change Invoice Collection Method Event Data case.
  */
  export function isChangeInvoiceCollectionMethodEventData(value: unknown): value is ChangeInvoiceCollectionMethodEventData {
    const validationResult = validateAndMap(value, changeInvoiceCollectionMethodEventDataSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to IssueInvoiceEventData type case.
  *
  * This is Issue Invoice Event Data case.
  */
  export function isIssueInvoiceEventData(value: unknown): value is IssueInvoiceEventData {
    const validationResult = validateAndMap(value, issueInvoiceEventDataSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to RefundInvoiceEventData type case.
  *
  * This is Refund Invoice Event Data case.
  */
  export function isRefundInvoiceEventData(value: unknown): value is RefundInvoiceEventData {
    const validationResult = validateAndMap(value, refundInvoiceEventDataSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to RemovePaymentEventData type case.
  *
  * This is Remove Payment Event Data case.
  */
  export function isRemovePaymentEventData(value: unknown): value is RemovePaymentEventData {
    const validationResult = validateAndMap(value, removePaymentEventDataSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to VoidInvoiceEventData type case.
  *
  * This is Void Invoice Event Data case.
  */
  export function isVoidInvoiceEventData(value: unknown): value is VoidInvoiceEventData {
    const validationResult = validateAndMap(value, voidInvoiceEventDataSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to VoidInvoiceEventData1 type case.
  *
  * This is Void Invoice Event Data1 case.
  */
  export function isVoidInvoiceEventData1(value: unknown): value is VoidInvoiceEventData1 {
    const validationResult = validateAndMap(value, voidInvoiceEventData1Schema);
    return validationResult.errors === false;
  }
}
