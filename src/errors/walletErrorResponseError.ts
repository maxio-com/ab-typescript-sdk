/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core.js';

/**
 * Creates an instance of WalletErrorResponse
 */
interface WalletErrorResponse {
  /** Human-readable messages. These may be reworded, so match on `code` instead. */
  errors: string[];
  /** A stable, machine-readable reason, for example `wallet_depleted`, `wallet_not_found`, `wallet_product_not_found`, `price_point_archived`, `kind_invalid`, or `parameter_missing`. Failures that come from record validation, such as a field that fails a model rule, report `validation_failed`. */
  code: string;
  /** Returned only by Create Wallet Purchase with `purchase_paid_but_uncredited`, `purchase_declined_invoice_open`, `purchase_invoice_left_open` and `purchase_payment_outcome_unknown`: the uid of the invoice the purchase created. Check it before buying again. */
  invoice_uid?: string;
  /** Returned alongside `invoice_uid`: the number of the invoice the purchase created. */
  invoice_number?: string;
  [key: string]: unknown;
}

export class WalletErrorResponseError extends ApiError<WalletErrorResponse> {}
