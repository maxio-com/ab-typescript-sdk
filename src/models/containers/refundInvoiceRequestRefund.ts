/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  anyOf,
  isMappedValueValidForSchema,
  lazy,
  Schema,
} from '../../schema.js';
import {
  RefundConsolidatedInvoice,
  refundConsolidatedInvoiceSchema,
} from '../refundConsolidatedInvoice.js';
import { RefundInvoice, refundInvoiceSchema } from '../refundInvoice.js';

/** This is a container type for any-of types. */
export type RefundInvoiceRequestRefund =
  | RefundInvoice
  | RefundConsolidatedInvoice;

export const refundInvoiceRequestRefundSchema: Schema<RefundInvoiceRequestRefund> = lazy(
  () => anyOf([refundInvoiceSchema, refundConsolidatedInvoiceSchema])
);

export namespace RefundInvoiceRequestRefund {
  /**
   * Validation method to narrow down union type to RefundInvoice type case.
   *
   * This is Refund Invoice case.
   */
  export function isRefundInvoice(value: unknown): value is RefundInvoice {
    return isMappedValueValidForSchema(value, refundInvoiceSchema);
  }

  /**
   * Validation method to narrow down union type to RefundConsolidatedInvoice type case.
   *
   * This is Refund Consolidated Invoice case.
   */
  export function isRefundConsolidatedInvoice(
    value: unknown
  ): value is RefundConsolidatedInvoice {
    return isMappedValueValidForSchema(value, refundConsolidatedInvoiceSchema);
  }
}
