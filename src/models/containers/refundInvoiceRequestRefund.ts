/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { anyOf, Schema, validateAndMap } from '../../schema';
import {
  RefundConsolidatedInvoice,
  refundConsolidatedInvoiceSchema,
} from '../refundConsolidatedInvoice';
import { RefundInvoice, refundInvoiceSchema } from '../refundInvoice';

/** This is a container type for any-of types. */
export type RefundInvoiceRequestRefund =
  | RefundInvoice
  | RefundConsolidatedInvoice;

export const refundInvoiceRequestRefundSchema: Schema<RefundInvoiceRequestRefund> = anyOf(
  [refundInvoiceSchema, refundConsolidatedInvoiceSchema]
);

export namespace RefundInvoiceRequestRefund {
  /**
   * Validation method to narrow down union type to RefundInvoice type case.
   *
   * This is Refund Invoice case.
   */
  export function isRefundInvoice(value: unknown): value is RefundInvoice {
    const validationResult = validateAndMap(value, refundInvoiceSchema);
    return validationResult.errors === false;
  }

  /**
   * Validation method to narrow down union type to RefundConsolidatedInvoice type case.
   *
   * This is Refund Consolidated Invoice case.
   */
  export function isRefundConsolidatedInvoice(
    value: unknown
  ): value is RefundConsolidatedInvoice {
    const validationResult = validateAndMap(
      value,
      refundConsolidatedInvoiceSchema
    );
    return validationResult.errors === false;
  }
}
