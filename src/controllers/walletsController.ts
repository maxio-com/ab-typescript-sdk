/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, commaPrefix, RequestOptions } from '../core.js';
import {
  CreateWalletRequest,
  createWalletRequestSchema,
} from '../models/createWalletRequest.js';
import { Status2, status2Schema } from '../models/status2.js';
import {
  UpdateWalletRequest,
  updateWalletRequestSchema,
} from '../models/updateWalletRequest.js';
import {
  WalletResponse,
  walletResponseSchema,
} from '../models/walletResponse.js';
import {
  WalletsListResponse,
  walletsListResponseSchema,
} from '../models/walletsListResponse.js';
import { number, optional, string } from '../schema.js';
import { BaseController } from './baseController.js';
import { ApiError } from '@apimatic/core';
import { WalletErrorResponseError } from '../errors/walletErrorResponseError.js';

export class WalletsController extends BaseController {
  /**
   * Lists the wallets on your site, in creation order, paginated. Without `subscription_id`, returns
   * every wallet on the site. The API key is the tenancy boundary; `subscription_id` only narrows the
   * result set further. Archived wallets are included unless you filter them out with `status=active`.
   *
   * @param page            Result records are organized in pages. By default, the first page of results is
   *                                   displayed. The page parameter specifies a page number of results to fetch. You
   *                                   can start navigating through the pages to consume the results. You do this by
   *                                   passing in a page parameter. Retrieve the next page by adding ?page=2 to the
   *                                   query string. If there are no results to return, then an empty result set will
   *                                   be returned. Use in query `page=1`.
   * @param perPage         This parameter indicates how many records to fetch in each request. Default
   *                                   value is 20. The maximum allowed values is 200; any per_page value over 200 will
   *                                   be changed to 200. Use in query `per_page=200`.
   * @param subscriptionId  Restricts the result to wallets owned by this subscription.
   * @param status          Restricts the result by wallet status. An unrecognized value returns `422`
   *                                   rather than being silently ignored.
   * @return Response from the API call
   */
  async listWallets(
    page?: number,
    perPage?: number,
    subscriptionId?: number,
    status?: Status2,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<WalletsListResponse>> {
    const req = this.createRequest('GET', '/wallets.json');
    const mapped = req.prepareArgs({
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      subscriptionId: [subscriptionId, optional(number())],
      status: [status, optional(status2Schema)],
    });
    req.query('page', mapped.page, commaPrefix);
    req.query('per_page', mapped.perPage, commaPrefix);
    req.query('subscription_id', mapped.subscriptionId, commaPrefix);
    req.query('status', mapped.status, commaPrefix);
    req.throwOn(
      403,
      ApiError,
      "Forbidden. The response body is plain text (`403 Forbidden`), not JSON. Returned when the Wallets feature isn't enabled for the site."
    );
    req.throwOn(422, WalletErrorResponseError, 'Unprocessable Entity (WebDAV)');
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(walletsListResponseSchema, requestOptions);
  }

  /**
   * Creates a wallet owned by a subscription and denominated by a [Wallet
   * Product]($e/Wallet%20Products/createWalletProduct): only a Wallet Product can denominate a wallet,
   * not an ordinary component. The Wallet Product must be active; it never belongs to a product family,
   * so there's no family check against the subscription. It's **immutable for the life of the wallet**;
   * there's no way to repoint an existing wallet at a different one.
   *
   * This endpoint always creates a `manual` wallet. To provision a wallet automatically from a usage-
   * limit entitlement instead, configure `wallet_behavior` on the Feature behind that entitlement (see
   * [the Wallets concept guide](page:introduction/basic-concepts/wallets#provisioning-a-wallet-from-a-
   * feature)) rather than sending `entitlement_id` here.
   *
   * @param idempotencyKey  A key you generate, such as a UUID, that makes retrying this
   *                                                      request safe. 1 to 255 printable ASCII characters;
   *                                                      surrounding double quotes are ignored. Keys are scoped to
   *                                                      your site and kept for at least 24 hours.  The first request
   *                                                      with a key runs normally. A retry with the same key, method,
   *                                                      path and query string, and a byte-identical body returns the
   *                                                      stored status and body of that first request without running
   *                                                      it again. The same key with a different request returns `422`
   *                                                      (`idempotency_key_mismatch`). A retry that arrives while the
   *                                                      first request is still running waits for it to finish, and
   *                                                      returns `409` (`idempotency_request_in_progress`) only if
   *                                                      that wait times out; on Create Wallet Purchase the `409` is
   *                                                      immediate. Only successful responses are stored, so a failed
   *                                                      request can be retried with the same key. When this header is
   *                                                      sent, `uniqueness_token` is not checked.  See [Idempotent
   *                                                      retries](page:introduction/basic-concepts/wallets#idempotent-
   *                                                      retries) for the details, including how wallet purchases
   *                                                      differ.
   * @param body
   * @return Response from the API call
   */
  async createWallet(
    idempotencyKey?: string,
    body?: CreateWalletRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<WalletResponse>> {
    const req = this.createRequest('POST', '/wallets.json');
    const mapped = req.prepareArgs({
      idempotencyKey: [idempotencyKey, optional(string())],
      body: [body, optional(createWalletRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('Idempotency-Key', mapped.idempotencyKey);
    req.json(mapped.body);
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
    req.throwOn(
      404,
      WalletErrorResponseError,
      "Unknown or cross-site subscription or meter, or a `wallet_product_id` that doesn't resolve to a Wallet Product on this site."
    );
    req.throwOn(
      409,
      WalletErrorResponseError,
      "A request with the same `Idempotency-Key` was still being processed when this retry's wait for it timed out (`idempotency_request_in_progress`). Nothing is written; retry with the same key once it finishes."
    );
    req.throwOn(
      422,
      WalletErrorResponseError,
      "Validation failure, or an `Idempotency-Key` reused with a different request (`idempotency_key_mismatch`). Validation failures include a missing or archived `wallet_product_id`; a `price_point_id` that's missing, archived, a subscription-specific custom price point, or doesn't belong to the Wallet Product; an invalid `depletion_policy` or `hard_stop_overflow` value; a meter that isn't a `sum` or `count` meter; an invalid `conversion_rate`; a subscription with no reference, when pairing a meter whose stream bills by subscription reference; and the `initial_balance` / `initial_balance_expires_at` error cases described on those fields. Also returned for `entitlement_id`: this endpoint never accepts it, and rejects it with the message shown below rather than silently ignoring it. Also returned when `subscription_id` names a prepaid subscription: a wallet would double-meter a balance the subscription already tracks on its own, so the two are mutually exclusive."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(walletResponseSchema, requestOptions);
  }

  /**
   * Returns the wallet's balance and grant breakdown. For an active, metered wallet on a site with
   * metered consumption enabled, this is the only operation that computes a live balance from meter
   * usage; see the wallet resource's `metered_*` fields. It is also the only operation where `balance`
   * can differ from `posted_balance`, and a grant's `remaining` from its `posted_remaining`: the pending
   * usage is drawn from the grants in drain order, so the grants' `remaining` add up to `balance`.
   * Readable regardless of status. Archiving a wallet doesn't affect reads.
   *
   * @param id The Advanced Billing id of the wallet.
   * @return Response from the API call
   */
  async readWallet(
    id: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<WalletResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ id: [id, number()] });
    req.appendTemplatePath`/wallets/${mapped.id}.json`;
    req.throwOn(
      403,
      ApiError,
      "Forbidden. The response body is plain text (`403 Forbidden`), not JSON. Returned when the Wallets feature isn't enabled for the site."
    );
    req.throwOn(404, WalletErrorResponseError, 'Not Found');
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(walletResponseSchema, requestOptions);
  }

  /**
   * Archives the wallet: blocks further grants, debits, adjustments, and purchases (each returns `422`),
   * stops any metered drawdown, and stops recurring funding (its schedule is deactivated with reason
   * `wallet_archived`, not removed), while reads and the ledger stay available. Nothing already on the
   * wallet is destroyed or clawed back, but nothing on it can be spent either, by any path, once
   * archived. Idempotent: archiving an already-archived wallet returns the same `200`. There is no
   * restore endpoint.
   *
   * @param id The Advanced Billing id of the wallet.
   * @return Response from the API call
   */
  async archiveWallet(
    id: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<WalletResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ id: [id, number()] });
    req.appendTemplatePath`/wallets/${mapped.id}.json`;
    req.throwOn(
      403,
      ApiError,
      "Forbidden. The response body is plain text (`403 Forbidden`), not JSON. Returned when the Wallets feature isn't enabled for the site."
    );
    req.throwOn(404, WalletErrorResponseError, 'Not Found');
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(walletResponseSchema, requestOptions);
  }

  /**
   * Updates the wallet's editable attributes. Only `name` is editable; any other attribute in the body
   * is ignored. Send only the attributes to change.
   *
   * @param id           The Advanced Billing id of the wallet.
   * @param body
   * @return Response from the API call
   */
  async updateWallet(
    id: number,
    body?: UpdateWalletRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<WalletResponse>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      id: [id, number()],
      body: [body, optional(updateWalletRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/wallets/${mapped.id}.json`;
    req.throwOn(
      403,
      ApiError,
      "Forbidden. The response body is plain text (`403 Forbidden`), not JSON. Returned when the Wallets feature isn't enabled for the site."
    );
    req.throwOn(404, WalletErrorResponseError, 'Not Found');
    req.throwOn(
      422,
      WalletErrorResponseError,
      'Validation failure. Includes a body with no editable attribute (`parameter_missing`), a `name` over 255 characters (`validation_failed`), and an archived wallet (`wallet_archived`).'
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(walletResponseSchema, requestOptions);
  }
}
