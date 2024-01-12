/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  ListSaleRepItem,
  listSaleRepItemSchema,
} from '../models/listSaleRepItem';
import { SaleRep, saleRepSchema } from '../models/saleRep';
import {
  SaleRepSettings,
  saleRepSettingsSchema,
} from '../models/saleRepSettings';
import { array, boolean, number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class SalesCommissionsController extends BaseController {
  /**
   * Endpoint returns subscriptions with associated sales reps
   *
   * ## Modified Authentication Process
   *
   * The Sales Commission API differs from other Chargify API endpoints. This resource is associated with
   * the seller itself. Up to now all available resources were at the level of the site, therefore
   * creating the API Key per site was a sufficient solution. To share resources at the seller level, a
   * new authentication method was introduced, which is user authentication. Creating an API Key for a
   * user is a required step to correctly use the Sales Commission API, more details [here](https:
   * //developers.chargify.com/docs/developer-docs/ZG9jOjMyNzk5NTg0-2020-04-20-new-api-authentication).
   *
   * Access to the Sales Commission API endpoints is available to users with financial access, where the
   * seller has the Advanced Analytics component enabled. For further information on getting access to
   * Advanced Analytics please contact Chargify support.
   *
   * > Note: The request is at seller level, it means `<<subdomain>>` variable will be replaced by `app`
   *
   * @param sellerId      The Chargify id of your seller account
   * @param authorization For authorization use user API key. See details [here](https://developers.
   *                                 chargify.com/docs/developer-docs/ZG9jOjMyNzk5NTg0-2020-04-20-new-api-
   *                                 authentication).
   * @param liveMode      This parameter indicates if records should be fetched from live mode sites.
   *                                 Default value is true.
   * @param page          Result records are organized in pages. By default, the first page of results is
   *                                 displayed. The page parameter specifies a page number of results to fetch. You can
   *                                 start navigating through the pages to consume the results. You do this by passing
   *                                 in a page parameter. Retrieve the next page by adding ?page=2 to the query string.
   *                                 If there are no results to return, then an empty result set will be returned. Use
   *                                 in query `page=1`.
   * @param perPage       This parameter indicates how many records to fetch in each request. Default value
   *                                 is 100.
   * @return Response from the API call
   */
  async listSalesCommissionSettings({
    sellerId,
    authorization,
    liveMode,
    page,
    perPage,
  }: {
    sellerId: string,
    authorization?: string,
    liveMode?: boolean,
    page?: number,
    perPage?: number,
  },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SaleRepSettings[]>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      sellerId: [sellerId, string()],
      authorization: [authorization, optional(string())],
      liveMode: [liveMode, optional(boolean())],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
    });
    req.header('Authorization', mapped.authorization);
    req.query('live_mode', mapped.liveMode);
    req.query('page', mapped.page);
    req.query('per_page', mapped.perPage);
    req.appendTemplatePath`/sellers/${mapped.sellerId}/sales_commission_settings.json`;
    return req.callAsJson(array(saleRepSettingsSchema), requestOptions);
  }

  /**
   * Endpoint returns sales rep list with details
   *
   * ## Modified Authentication Process
   *
   * The Sales Commission API differs from other Chargify API endpoints. This resource is associated with
   * the seller itself. Up to now all available resources were at the level of the site, therefore
   * creating the API Key per site was a sufficient solution. To share resources at the seller level, a
   * new authentication method was introduced, which is user authentication. Creating an API Key for a
   * user is a required step to correctly use the Sales Commission API, more details [here](https:
   * //developers.chargify.com/docs/developer-docs/ZG9jOjMyNzk5NTg0-2020-04-20-new-api-authentication).
   *
   * Access to the Sales Commission API endpoints is available to users with financial access, where the
   * seller has the Advanced Analytics component enabled. For further information on getting access to
   * Advanced Analytics please contact Chargify support.
   *
   * > Note: The request is at seller level, it means `<<subdomain>>` variable will be replaced by `app`
   *
   * @param sellerId      The Chargify id of your seller account
   * @param authorization For authorization use user API key. See details [here](https://developers.
   *                                 chargify.com/docs/developer-docs/ZG9jOjMyNzk5NTg0-2020-04-20-new-api-
   *                                 authentication).
   * @param liveMode      This parameter indicates if records should be fetched from live mode sites.
   *                                 Default value is true.
   * @param page          Result records are organized in pages. By default, the first page of results is
   *                                 displayed. The page parameter specifies a page number of results to fetch. You can
   *                                 start navigating through the pages to consume the results. You do this by passing
   *                                 in a page parameter. Retrieve the next page by adding ?page=2 to the query string.
   *                                 If there are no results to return, then an empty result set will be returned. Use
   *                                 in query `page=1`.
   * @param perPage       This parameter indicates how many records to fetch in each request. Default value
   *                                 is 100.
   * @return Response from the API call
   */
  async listSalesReps({
    sellerId,
    authorization,
    liveMode,
    page,
    perPage,
  }: {
    sellerId: string,
    authorization?: string,
    liveMode?: boolean,
    page?: number,
    perPage?: number,
  },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListSaleRepItem[]>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      sellerId: [sellerId, string()],
      authorization: [authorization, optional(string())],
      liveMode: [liveMode, optional(boolean())],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
    });
    req.header('Authorization', mapped.authorization);
    req.query('live_mode', mapped.liveMode);
    req.query('page', mapped.page);
    req.query('per_page', mapped.perPage);
    req.appendTemplatePath`/sellers/${mapped.sellerId}/sales_reps.json`;
    return req.callAsJson(array(listSaleRepItemSchema), requestOptions);
  }

  /**
   * Endpoint returns sales rep and attached subscriptions details.
   *
   * ## Modified Authentication Process
   *
   * The Sales Commission API differs from other Chargify API endpoints. This resource is associated with
   * the seller itself. Up to now all available resources were at the level of the site, therefore
   * creating the API Key per site was a sufficient solution. To share resources at the seller level, a
   * new authentication method was introduced, which is user authentication. Creating an API Key for a
   * user is a required step to correctly use the Sales Commission API, more details [here](https:
   * //developers.chargify.com/docs/developer-docs/ZG9jOjMyNzk5NTg0-2020-04-20-new-api-authentication).
   *
   * Access to the Sales Commission API endpoints is available to users with financial access, where the
   * seller has the Advanced Analytics component enabled. For further information on getting access to
   * Advanced Analytics please contact Chargify support.
   *
   * > Note: The request is at seller level, it means `<<subdomain>>` variable will be replaced by `app`
   *
   * @param sellerId      The Chargify id of your seller account
   * @param salesRepId    The Chargify id of sales rep.
   * @param authorization For authorization use user API key. See details [here](https://developers.
   *                                 chargify.com/docs/developer-docs/ZG9jOjMyNzk5NTg0-2020-04-20-new-api-
   *                                 authentication).
   * @param liveMode      This parameter indicates if records should be fetched from live mode sites.
   *                                 Default value is true.
   * @param page          Result records are organized in pages. By default, the first page of results is
   *                                 displayed. The page parameter specifies a page number of results to fetch. You can
   *                                 start navigating through the pages to consume the results. You do this by passing
   *                                 in a page parameter. Retrieve the next page by adding ?page=2 to the query string.
   *                                 If there are no results to return, then an empty result set will be returned. Use
   *                                 in query `page=1`.
   * @param perPage       This parameter indicates how many records to fetch in each request. Default value
   *                                 is 100.
   * @return Response from the API call
   */
  async readSalesRep(
    sellerId: string,
    salesRepId: string,
    authorization?: string,
    liveMode?: boolean,
    page?: number,
    perPage?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SaleRep>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      sellerId: [sellerId, string()],
      salesRepId: [salesRepId, string()],
      authorization: [authorization, optional(string())],
      liveMode: [liveMode, optional(boolean())],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
    });
    req.header('Authorization', mapped.authorization);
    req.query('live_mode', mapped.liveMode);
    req.query('page', mapped.page);
    req.query('per_page', mapped.perPage);
    req.appendTemplatePath`/sellers/${mapped.sellerId}/sales_reps/${mapped.salesRepId}.json`;
    return req.callAsJson(saleRepSchema, requestOptions);
  }
}
