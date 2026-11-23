/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, commaPrefix, RequestOptions } from '../core.js';
import {
  CreateWalletProductRequest,
  createWalletProductRequestSchema,
} from '../models/createWalletProductRequest.js';
import { SortBy1, sortBy1Schema } from '../models/sortBy1.js';
import { SortDirection, sortDirectionSchema } from '../models/sortDirection.js';
import { Status1, status1Schema } from '../models/status1.js';
import {
  UpdateWalletProductRequest,
  updateWalletProductRequestSchema,
} from '../models/updateWalletProductRequest.js';
import {
  WalletProductResponse,
  walletProductResponseSchema,
} from '../models/walletProductResponse.js';
import {
  WalletProductsListResponse,
  walletProductsListResponseSchema,
} from '../models/walletProductsListResponse.js';
import {
  WalletProductUsageResponse,
  walletProductUsageResponseSchema,
} from '../models/walletProductUsageResponse.js';
import { boolean, number, optional, string } from '../schema.js';
import { BaseController } from './baseController.js';
import { ApiError } from '@apimatic/core';
import { WalletErrorResponseError } from '../errors/walletErrorResponseError.js';

export class WalletProductsController extends BaseController {
  /**
   * Lists the Wallet Products on your site.
   *
   * @param includeArchived  Includes archived Wallet Products in the result. Defaults to `false`.
   *                                          Ignored when `status` is also sent.
   * @param status           Restricts the result by status, and overrides `include_archived` when
   *                                          sent. An unrecognized value falls back to `active` rather than returning
   *                                          `422`.
   * @param q                Restricts the result to Wallet Products whose name, handle, or unit name
   *                                          contains this substring (case-insensitive).
   * @param sortBy           The field to sort results by. An unrecognized value falls back to `name`.
   * @param sortDirection    The sort direction. Anything other than `desc` is treated as `asc`.
   * @param page             Result records are organized in pages. By default, the first page of
   *                                          results is displayed. The page parameter specifies a page number of
   *                                          results to fetch. You can start navigating through the pages to consume
   *                                          the results. You do this by passing in a page parameter. Retrieve the
   *                                          next page by adding ?page=2 to the query string. If there are no results
   *                                          to return, then an empty result set will be returned. Use in query
   *                                          `page=1`.
   * @param perPage          This parameter indicates how many records to fetch in each request.
   *                                          Default value is 20. The maximum allowed values is 200; any per_page
   *                                          value over 200 will be changed to 200. Use in query `per_page=200`.
   * @return Response from the API call
   */
  async listWalletProducts(
    includeArchived?: boolean,
    status?: Status1,
    q?: string,
    sortBy?: SortBy1,
    sortDirection?: SortDirection,
    page?: number,
    perPage?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<WalletProductsListResponse>> {
    const req = this.createRequest('GET', '/wallet_products.json');
    const mapped = req.prepareArgs({
      includeArchived: [includeArchived, optional(boolean())],
      status: [status, optional(status1Schema)],
      q: [q, optional(string())],
      sortBy: [sortBy, optional(sortBy1Schema)],
      sortDirection: [sortDirection, optional(sortDirectionSchema)],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
    });
    req.query('include_archived', mapped.includeArchived, commaPrefix);
    req.query('status', mapped.status, commaPrefix);
    req.query('q', mapped.q, commaPrefix);
    req.query('sort_by', mapped.sortBy, commaPrefix);
    req.query('sort_direction', mapped.sortDirection, commaPrefix);
    req.query('page', mapped.page, commaPrefix);
    req.query('per_page', mapped.perPage, commaPrefix);
    req.throwOn(
      403,
      ApiError,
      "Forbidden. The response body is plain text (`403 Forbidden`), not JSON. Returned when the Wallets feature isn't enabled for the site."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(walletProductsListResponseSchema, requestOptions);
  }

  /**
   * Creates a Wallet Product: a billing product with no product family, meant to denominate wallets and
   * to be purchased through [Create Wallet Purchase]($e/Wallet%20Purchases/createWalletPurchase). It's a
   * Component under the hood, so it returns the full Component field set, and can optionally be priced
   * with one or more price points in the same call.
   *
   * @param body
   * @return Response from the API call
   */
  async createWalletProduct(
    body?: CreateWalletProductRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<WalletProductResponse>> {
    const req = this.createRequest('POST', '/wallet_products.json');
    const mapped = req.prepareArgs({
      body: [body, optional(createWalletProductRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(
      403,
      ApiError,
      "Forbidden. The response body is plain text (`403 Forbidden`), not JSON. Returned when the Wallets feature isn't enabled for the site."
    );
    req.throwOn(
      422,
      WalletErrorResponseError,
      'Validation failure. Includes a `product_family_id` (rejected rather than ignored), and any failure validating a price point in `price_point`/`price_points`, which rolls back the whole call, including the Wallet Product itself.'
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(walletProductResponseSchema, requestOptions);
  }

  /**
   * Returns the Wallet Product.
   *
   * @param id The Advanced Billing id of the Wallet Product, or its handle prefixed with `handle:` (for
   *                     example `handle:token-pack`). A bare handle returns `404`.
   * @return Response from the API call
   */
  async readWalletProduct(
    id: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<WalletProductResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ id: [id, string()] });
    req.appendTemplatePath`/wallet_products/${mapped.id}.json`;
    req.throwOn(
      403,
      ApiError,
      "Forbidden. The response body is plain text (`403 Forbidden`), not JSON. Returned when the Wallets feature isn't enabled for the site."
    );
    req.throwOn(404, WalletErrorResponseError, 'Not Found');
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(walletProductResponseSchema, requestOptions);
  }

  /**
   * Updates the Wallet Product's catalog-facing fields. Omitted fields are left unchanged. Unlike
   * [Create Wallet Product]($e/Wallet%20Products/createWalletProduct), this does not accept `unit_name`,
   * `handle`, `price_point`, or `price_points`; see the request schema for which fields are actually
   * mutable.
   *
   * @param id           The Advanced Billing id of the Wallet Product, or its
   *                                                          handle prefixed with `handle:` (for example `handle:token-
   *                                                          pack`). A bare handle returns `404`.
   * @param body
   * @return Response from the API call
   */
  async updateWalletProduct(
    id: string,
    body?: UpdateWalletProductRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<WalletProductResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      id: [id, string()],
      body: [body, optional(updateWalletProductRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/wallet_products/${mapped.id}.json`;
    req.throwOn(
      403,
      ApiError,
      "Forbidden. The response body is plain text (`403 Forbidden`), not JSON. Returned when the Wallets feature isn't enabled for the site."
    );
    req.throwOn(404, WalletErrorResponseError, 'Not Found');
    req.throwOn(422, WalletErrorResponseError, 'Validation failure.');
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(walletProductResponseSchema, requestOptions);
  }

  /**
   * Returns everything drawing on this Wallet Product: the wallet templates billing through it, split
   * into ones using its default price point and ones overriding it, plus a sample of up to 50 of the
   * active wallets actually created from them. A wallet template can appear more than once in
   * `wallet_templates`/`price_point_overrides`, once per Feature and owning plan/component sharing it,
   * so these arrays aren't one row per template.
   *
   * @param id The Advanced Billing id of the Wallet Product, or its handle prefixed with `handle:` (for
   *                     example `handle:token-pack`). A bare handle returns `404`.
   * @return Response from the API call
   */
  async readWalletProductUsage(
    id: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<WalletProductUsageResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ id: [id, string()] });
    req.appendTemplatePath`/wallet_products/${mapped.id}/usage.json`;
    req.throwOn(
      403,
      ApiError,
      "Forbidden. The response body is plain text (`403 Forbidden`), not JSON. Returned when the Wallets feature isn't enabled for the site."
    );
    req.throwOn(404, WalletErrorResponseError, 'Not Found');
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(walletProductUsageResponseSchema, requestOptions);
  }

  /**
   * Archives the Wallet Product. Refuses when an active Feature's `wallet_behavior` still points at it,
   * or when it's used in a scheduled renewal. This protects Feature-provisioned wallets, but not a
   * wallet created manually against this product: a manual wallet can be left denominated by an archived
   * Wallet Product, and [Create Wallet Purchase]($e/Wallet%20Purchases/createWalletPurchase) doesn't
   * check whether the billing product is archived before pricing and charging a purchase against it.
   *
   * @param id The Advanced Billing id of the Wallet Product, or its handle prefixed with `handle:` (for
   *                     example `handle:token-pack`). A bare handle returns `404`.
   * @return Response from the API call
   */
  async archiveWalletProduct(
    id: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<WalletProductResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({ id: [id, string()] });
    req.appendTemplatePath`/wallet_products/${mapped.id}/archive.json`;
    req.throwOn(
      403,
      ApiError,
      "Forbidden. The response body is plain text (`403 Forbidden`), not JSON. Returned when the Wallets feature isn't enabled for the site."
    );
    req.throwOn(404, WalletErrorResponseError, 'Not Found');
    req.throwOn(
      422,
      WalletErrorResponseError,
      'The Wallet Product is already archived, is in use by one or more Features, or is in use by a scheduled renewal.'
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(walletProductResponseSchema, requestOptions);
  }

  /**
   * Restores an archived Wallet Product.
   *
   * @param id The Advanced Billing id of the Wallet Product, or its handle prefixed with `handle:` (for
   *                     example `handle:token-pack`). A bare handle returns `404`.
   * @return Response from the API call
   */
  async unarchiveWalletProduct(
    id: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<WalletProductResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({ id: [id, string()] });
    req.appendTemplatePath`/wallet_products/${mapped.id}/unarchive.json`;
    req.throwOn(
      403,
      ApiError,
      "Forbidden. The response body is plain text (`403 Forbidden`), not JSON. Returned when the Wallets feature isn't enabled for the site."
    );
    req.throwOn(404, WalletErrorResponseError, 'Not Found');
    req.throwOn(
      422,
      WalletErrorResponseError,
      'The Wallet Product is not archived.'
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(walletProductResponseSchema, requestOptions);
  }
}
