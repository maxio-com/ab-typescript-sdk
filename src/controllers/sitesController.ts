/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, RequestOptions } from '../core';
import { CleanupScope, cleanupScopeSchema } from '../models/cleanupScope';
import {
  ListPublicKeysResponse,
  listPublicKeysResponseSchema,
} from '../models/listPublicKeysResponse';
import { SiteResponse, siteResponseSchema } from '../models/siteResponse';
import { number, optional } from '../schema';
import { BaseController } from './baseController';

export class SitesController extends BaseController {
  /**
   * This endpoint allows you to fetch some site data.
   *
   * Full documentation on Sites in the Chargify UI can be located [here](https://chargify.zendesk.
   * com/hc/en-us/articles/4407870738587).
   *
   * Specifically, the [Clearing Site Data](https://maxio-chargify.zendesk.com/hc/en-
   * us/articles/5405428327309) section is extremely relevant to this endpoint documentation.
   *
   * #### Relationship invoicing enabled
   * If site has RI enabled then you will see more settings like:
   *
   * "customer_hierarchy_enabled": true,
   * "whopays_enabled": true,
   * "whopays_default_payer": "self"
   * You can read more about these settings here:
   * [Who Pays & Customer Hierarchy](https://chargify.zendesk.com/hc/en-us/articles/4407746683291)
   *
   * @return Response from the API call
   */
  async readSite(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SiteResponse>> {
    const req = this.createRequest('GET', '/site.json');
    return req.callAsJson(siteResponseSchema, requestOptions);
  }

  /**
   * This call is asynchronous and there may be a delay before the site data is fully deleted. If you are
   * clearing site data for an automated test, you will need to build in a delay and/or check that there
   * are no products, etc., in the site before proceeding.
   *
   * **This functionality will only work on sites in TEST mode. Attempts to perform this on sites in
   * “live” mode will result in a response of 403 FORBIDDEN.**
   *
   *
   * @param cleanupScope  `all`: Will clear all products, customers, and related subscriptions from
   *                                      the site.  `customers`: Will clear only customers and related subscriptions
   *                                      (leaving the products untouched) for the site.  Revenue will also be reset to
   *                                      0. Use in query `cleanup_scope=all`.
   * @return Response from the API call
   */
  async clearSite(
    cleanupScope?: CleanupScope,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST', '/sites/clear_data.json');
    const mapped = req.prepareArgs({
      cleanupScope: [cleanupScope, optional(cleanupScopeSchema)],
    });
    req.query('cleanup_scope', mapped.cleanupScope);
    req.throwOn(403, ApiError, 'Forbidden');
    return req.call(requestOptions);
  }

  /**
   * This endpoint returns public keys used for Chargify.js.
   *
   * @param page     Result records are organized in pages. By default, the first page of results is
   *                           displayed. The page parameter specifies a page number of results to fetch. You can start
   *                           navigating through the pages to consume the results. You do this by passing in a page
   *                           parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no
   *                           results to return, then an empty result set will be returned. Use in query `page=1`.
   * @param perPage  This parameter indicates how many records to fetch in each request. Default value is 20.
   *                           The maximum allowed values is 200; any per_page value over 200 will be changed to 200.
   *                           Use in query `per_page=200`.
   * @return Response from the API call
   */
  async listChargifyJsPublicKeys({
    page,
    perPage,
  }: {
    page?: number,
    perPage?: number,
  },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListPublicKeysResponse>> {
    const req = this.createRequest('GET', '/chargify_js_keys.json');
    const mapped = req.prepareArgs({
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
    });
    req.query('page', mapped.page);
    req.query('per_page', mapped.perPage);
    return req.callAsJson(listPublicKeysResponseSchema, requestOptions);
  }
}
