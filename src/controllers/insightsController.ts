/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, commaPrefix, RequestOptions } from '../core';
import { Direction, directionSchema } from '../models/direction';
import { ListMrrFilter, listMrrFilterSchema } from '../models/listMrrFilter';
import {
  ListMRRResponse,
  listMRRResponseSchema,
} from '../models/listMRRResponse';
import { MRRResponse, mRRResponseSchema } from '../models/mRRResponse';
import { SiteSummary, siteSummarySchema } from '../models/siteSummary';
import {
  SortingDirection,
  sortingDirectionSchema,
} from '../models/sortingDirection';
import {
  SubscriptionMRRResponse,
  subscriptionMRRResponseSchema,
} from '../models/subscriptionMRRResponse';
import { number, optional, string } from '../schema';
import { BaseController } from './baseController';
import { SubscriptionsMrrErrorResponseError } from '../errors/subscriptionsMrrErrorResponseError';

export class InsightsController extends BaseController {
  /**
   * The Stats API is a very basic view of some Site-level stats. This API call only answers with JSON
   * responses. An XML version is not provided.
   *
   * ## Stats Documentation
   *
   * There currently is not a complimentary matching set of documentation that compliments this endpoint.
   * However, each Site's dashboard will reflect the summary of information provided in the Stats
   * response.
   *
   * ```
   * https://subdomain.chargify.com/dashboard
   * ```
   *
   * @return Response from the API call
   */
  async readSiteStats(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SiteSummary>> {
    const req = this.createRequest('GET', '/stats.json');
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(siteSummarySchema, requestOptions);
  }

  /**
   * This endpoint returns your site's current MRR, including plan and usage breakouts.
   *
   * @param atTime          submit a timestamp in ISO8601 format to request MRR for a historic time
   * @param subscriptionId  submit the id of a subscription in order to limit results
   * @return Response from the API call
   * @deprecated
   */
  async readMrr(
    atTime?: string,
    subscriptionId?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<MRRResponse>> {
    const req = this.createRequest('GET', '/mrr.json');
    const mapped = req.prepareArgs({
      atTime: [atTime, optional(string())],
      subscriptionId: [subscriptionId, optional(number())],
    });
    req.query('at_time', mapped.atTime, commaPrefix);
    req.query('subscription_id', mapped.subscriptionId, commaPrefix);
    req.deprecated('InsightsController.readMrr');
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(mRRResponseSchema, requestOptions);
  }

  /**
   * This endpoint returns your site's MRR movements.
   *
   * ## Understanding MRR movements
   *
   * This endpoint will aid in accessing your site's [MRR Report](https://maxio.zendesk.com/hc/en-
   * us/articles/24285894587021-MRR-Analytics) data.
   *
   * Whenever a subscription event occurs that causes your site's MRR to change (such as a signup or
   * upgrade), we record an MRR movement. These records are accessible via the MRR Movements endpoint.
   *
   * Each MRR Movement belongs to a subscription and contains a timestamp, category, and an amount.
   * `line_items` represent the subscription's product configuration at the time of the movement.
   *
   * ### Plan & Usage Breakouts
   *
   * In the MRR Report UI, we support a setting to [include or exclude](https://maxio.zendesk.com/hc/en-
   * us/articles/24285894587021-MRR-Analytics#displaying-component-based-metered-usage-in-mrr) usage
   * revenue. In the MRR APIs, responses include `plan` and `usage` breakouts.
   *
   * Plan includes revenue from:
   * * Products
   * * Quantity-Based Components
   * * On/Off Components
   *
   * Usage includes revenue from:
   * * Metered Components
   * * Prepaid Usage Components
   *
   * @param subscriptionId  optionally filter results by subscription
   * @param page            Result records are organized in pages. By default, the first page of
   *                                            results is displayed. The page parameter specifies a page number of
   *                                            results to fetch. You can start navigating through the pages to consume
   *                                            the results. You do this by passing in a page parameter. Retrieve the
   *                                            next page by adding ?page=2 to the query string. If there are no
   *                                            results to return, then an empty result set will be returned. Use in
   *                                            query `page=1`.
   * @param perPage         This parameter indicates how many records to fetch in each request.
   *                                            Default value is 10. The maximum allowed values is 50; any per_page
   *                                            value over 50 will be changed to 50. Use in query `per_page=20`.
   * @param direction       Controls the order in which results are returned. Use in query
   *                                            `direction=asc`.
   * @return Response from the API call
   * @deprecated
   */
  async listMrrMovements(
    {
      subscriptionId,
      page,
      perPage,
      direction,
    }: {
      subscriptionId?: number;
      page?: number;
      perPage?: number;
      direction?: SortingDirection;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListMRRResponse>> {
    const req = this.createRequest('GET', '/mrr_movements.json');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, optional(number())],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      direction: [direction, optional(sortingDirectionSchema)],
    });
    req.query('subscription_id', mapped.subscriptionId, commaPrefix);
    req.query('page', mapped.page, commaPrefix);
    req.query('per_page', mapped.perPage, commaPrefix);
    req.query('direction', mapped.direction, commaPrefix);
    req.deprecated('InsightsController.listMrrMovements');
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(listMRRResponseSchema, requestOptions);
  }

  /**
   * This endpoint returns your site's current MRR, including plan and usage breakouts split per
   * subscription.
   *
   * @param filter    Filter to use for List MRR per subscription operation
   * @param atTime    Submit a timestamp in ISO8601 format to request MRR for a historic time.
   *                                          Use in query: `at_time=2022-01-10T10:00:00-05:00`.
   * @param page      Result records are organized in pages. By default, the first page of
   *                                          results is displayed. The page parameter specifies a page number of
   *                                          results to fetch. You can start navigating through the pages to consume
   *                                          the results. You do this by passing in a page parameter. Retrieve the
   *                                          next page by adding ?page=2 to the query string. If there are no results
   *                                          to return, then an empty result set will be returned. Use in query
   *                                          `page=1`.
   * @param perPage   This parameter indicates how many records to fetch in each request.
   *                                          Default value is 20. The maximum allowed values is 200; any per_page
   *                                          value over 200 will be changed to 200. Use in query `per_page=200`.
   * @param direction Controls the order in which results are returned. Records are ordered by
   *                                          subscription_id in ascending order by default. Use in query
   *                                          `direction=desc`.
   * @return Response from the API call
   * @deprecated
   */
  async listMrrPerSubscription(
    {
      filter,
      atTime,
      page,
      perPage,
      direction,
    }: {
      filter?: ListMrrFilter;
      atTime?: string;
      page?: number;
      perPage?: number;
      direction?: Direction;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SubscriptionMRRResponse>> {
    const req = this.createRequest('GET', '/subscriptions_mrr.json');
    const mapped = req.prepareArgs({
      filter: [filter, optional(listMrrFilterSchema)],
      atTime: [atTime, optional(string())],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      direction: [direction, optional(directionSchema)],
    });
    req.query('filter', mapped.filter, commaPrefix);
    req.query('at_time', mapped.atTime, commaPrefix);
    req.query('page', mapped.page, commaPrefix);
    req.query('per_page', mapped.perPage, commaPrefix);
    req.query('direction', mapped.direction, commaPrefix);
    req.deprecated('InsightsController.listMrrPerSubscription');
    req.throwOn(
      400,
      SubscriptionsMrrErrorResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(subscriptionMRRResponseSchema, requestOptions);
  }
}
