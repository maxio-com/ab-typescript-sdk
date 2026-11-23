/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, commaPrefix, RequestOptions } from '../core.js';
import {
  CreateWalletTransactionRequest,
  createWalletTransactionRequestSchema,
} from '../models/createWalletTransactionRequest.js';
import {
  WalletTransactionResultResponse,
  walletTransactionResultResponseSchema,
} from '../models/walletTransactionResultResponse.js';
import {
  WalletTransactionsListResponse,
  walletTransactionsListResponseSchema,
} from '../models/walletTransactionsListResponse.js';
import { number, optional, string } from '../schema.js';
import { BaseController } from './baseController.js';
import { ApiError } from '@apimatic/core';
import { WalletErrorResponseError } from '../errors/walletErrorResponseError.js';

export class WalletTransactionsController extends BaseController {
  /**
   * Lists the wallet's append-only ledger, newest first, paginated.
   *
   * @param walletId  The Advanced Billing id of the wallet.
   * @param page      Result records are organized in pages. By default, the first page of results is
   *                            displayed. The page parameter specifies a page number of results to fetch. You can
   *                            start navigating through the pages to consume the results. You do this by passing in a
   *                            page parameter. Retrieve the next page by adding ?page=2 to the query string. If there
   *                            are no results to return, then an empty result set will be returned. Use in query
   *                            `page=1`.
   * @param perPage   This parameter indicates how many records to fetch in each request. Default value is
   *                            20. The maximum allowed values is 200; any per_page value over 200 will be changed to
   *                            200. Use in query `per_page=200`.
   * @return Response from the API call
   */
  async listWalletTransactions(
    walletId: number,
    page?: number,
    perPage?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<WalletTransactionsListResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      walletId: [walletId, number()],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
    });
    req.query('page', mapped.page, commaPrefix);
    req.query('per_page', mapped.perPage, commaPrefix);
    req.appendTemplatePath`/wallets/${mapped.walletId}/transactions.json`;
    req.throwOn(
      403,
      ApiError,
      "Forbidden. The response body is plain text (`403 Forbidden`), not JSON. Returned when the Wallets feature isn't enabled for the site."
    );
    req.throwOn(404, WalletErrorResponseError, 'Not Found');
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(walletTransactionsListResponseSchema, requestOptions);
  }

  /**
   * Grants units to the wallet, or debits units from it, depending on `kind`. `amount` is always sent
   * positive, and `kind` determines the direction written to the ledger.
   *
   * **`kind: grant`**: a one-time manual top-up. On a non-negative balance, this creates a grant and
   * writes one ledger row. On a negative balance, it repays the overdraft first (a `kind: grant` row
   * with `grant_id: null`, for the repaid amount), then creates the grant: its `original` is always the
   * full `amount` sent, and its `remaining` is what's left after the overdraft was repaid, which is `0`
   * if the overdraft absorbed the whole top-up. The grant row is still written, and its `amount` is that
   * `remaining`, not `original`, so the ledger rows sum to the balance change. A grant may carry
   * `expires_at`; a debit may not.
   *
   * **`kind: debit`**: direct consumption. Drains grants earliest-expiration-first, one `kind: debit`
   * row per grant touched, plus any overdue expiration rows this same call triggers first (see below):
   * - Under the wallet's default `hard_stop_overflow: discard`, the drain is capped at the available
   * balance. For a metered wallet, that cap is the live metered balance, not the stored one, so a debit
   * can drain less than its stored balance would suggest, or even drain nothing at all (`201` with
   * `drained_amount: "0.0"`) if live usage has already consumed what the ledger hadn't caught up to yet.
   * A debit against a wallet whose *stored* balance is already zero or negative (`discard` only ever
   * reaches zero) returns `422 "Wallet is depleted"`. Before that failure is returned, this call still
   * expires any grants that were already overdue, so a `422` response can still leave new `kind:
   * expiration` rows written.
   * - Under `hard_stop_overflow: allow_negative`, the full amount is deducted. The excess past the
   * wallet's grants is booked as one overdraft row with `grant_id: null`, `rejected_amount` is always
   * `"0.0"`, and the balance goes negative.
   *
   * @param walletId        The Advanced Billing id of the wallet.
   * @param idempotencyKey  A key you generate, such as a UUID, that makes
   *                                                                 retrying this request safe. 1 to 255 printable
   *                                                                 ASCII characters; surrounding double quotes are
   *                                                                 ignored. Keys are scoped to your site and kept for
   *                                                                 at least 24 hours.  The first request with a key
   *                                                                 runs normally. A retry with the same key, method,
   *                                                                 path and query string, and a byte-identical body
   *                                                                 returns the stored status and body of that first
   *                                                                 request without running it again. The same key
   *                                                                 with a different request returns `422`
   *                                                                 (`idempotency_key_mismatch`). A retry that arrives
   *                                                                 while the first request is still running waits for
   *                                                                 it to finish, and returns `409`
   *                                                                 (`idempotency_request_in_progress`) only if that
   *                                                                 wait times out; on Create Wallet Purchase the
   *                                                                 `409` is immediate. Only successful responses are
   *                                                                 stored, so a failed request can be retried with
   *                                                                 the same key. When this header is sent,
   *                                                                 `uniqueness_token` is not checked.  See
   *                                                                 [Idempotent retries](page:introduction/basic-
   *                                                                 concepts/wallets#idempotent-retries) for the
   *                                                                 details, including how wallet purchases differ.
   * @param body
   * @return Response from the API call
   */
  async createWalletTransaction(
    walletId: number,
    idempotencyKey?: string,
    body?: CreateWalletTransactionRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<WalletTransactionResultResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      walletId: [walletId, number()],
      idempotencyKey: [idempotencyKey, optional(string())],
      body: [body, optional(createWalletTransactionRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('Idempotency-Key', mapped.idempotencyKey);
    req.json(mapped.body);
    req.appendTemplatePath`/wallets/${mapped.walletId}/transactions.json`;
    req.throwOn(
      400,
      WalletErrorResponseError,
      'The `Idempotency-Key` header is empty, longer than 255 characters, or contains characters other than printable ASCII. Nothing is written.'
    );
    req.throwOn(
      403,
      ApiError,
      "Forbidden. The response body is plain text (`403 Forbidden`), not JSON. Returned when the Wallets feature isn't enabled for the site."
    );
    req.throwOn(404, WalletErrorResponseError, 'Not Found');
    req.throwOn(
      409,
      WalletErrorResponseError,
      "A request with the same `Idempotency-Key` was still being processed when this retry's wait for it timed out (`idempotency_request_in_progress`). Nothing is written; retry with the same key once it finishes."
    );
    req.throwOn(
      422,
      WalletErrorResponseError,
      'Validation failure, or an `Idempotency-Key` reused with a different request (`idempotency_key_mismatch`). Validation failures include an unrecognized `kind`, a missing `wallet_transaction` root, a malformed, non-positive, or out-of-range `amount`, a memo over 255 characters, `expires_at` sent with `kind: debit`, a malformed or past-dated `expires_at`, an archived wallet, and, for `kind: debit` only, a depleted wallet.'
    );
    req.throwOn(
      500,
      WalletErrorResponseError,
      'For a metered wallet, usage could be read but settling it against the ledger failed.'
    );
    req.throwOn(
      503,
      WalletErrorResponseError,
      'For a metered wallet, live usage could not be read in time to compute the debit. Not returned for `kind: grant`.'
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(
      walletTransactionResultResponseSchema,
      requestOptions
    );
  }
}
