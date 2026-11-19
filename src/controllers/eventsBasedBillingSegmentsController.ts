/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, commaPrefix, RequestOptions } from '../core.js';
import {
  BulkCreateSegments,
  bulkCreateSegmentsSchema,
} from '../models/bulkCreateSegments.js';
import {
  BulkUpdateSegments,
  bulkUpdateSegmentsSchema,
} from '../models/bulkUpdateSegments.js';
import {
  CreateSegmentRequest,
  createSegmentRequestSchema,
} from '../models/createSegmentRequest.js';
import {
  ListSegmentsFilter,
  listSegmentsFilterSchema,
} from '../models/listSegmentsFilter.js';
import {
  ListSegmentsResponse,
  listSegmentsResponseSchema,
} from '../models/listSegmentsResponse.js';
import {
  SegmentResponse,
  segmentResponseSchema,
} from '../models/segmentResponse.js';
import {
  UpdateSegmentRequest,
  updateSegmentRequestSchema,
} from '../models/updateSegmentRequest.js';
import { boolean, number, optional, string } from '../schema.js';
import { BaseController } from './baseController.js';
import { ApiError } from '@apimatic/core';
import { EventBasedBillingListSegmentsErrorsError } from '../errors/eventBasedBillingListSegmentsErrorsError.js';
import { EventBasedBillingSegmentWriteErrorResponseError } from '../errors/eventBasedBillingSegmentWriteErrorResponseError.js';
import { SegmentPricePointErrorsError } from '../errors/segmentPricePointErrorsError.js';

export class EventsBasedBillingSegmentsController extends BaseController {
  /**
   * Creates a new segment for a component with a segmented metric. It allows you to specify properties
   * to bill upon and prices for each Segment. You can only pass as many "property_values" as the related
   * Metric has segmenting properties defined.
   *
   * You may specify component and/or price point by using either the numeric ID or the `handle:gold`
   * syntax.
   *
   * ## Custom Price Points
   *
   * This endpoint changes segments on catalog price points only. If the price point is a subscription's
   * custom price point, the request returns `422 Unprocessable Entity` with a `price_point` error such
   * as "Segments on a subscription's custom price point can't be changed here. Set them with
   * custom_price on the subscription or component endpoints.", and nothing is saved. To change a
   * subscription's segment rates, send `custom_price.segments` to [Update
   * Subscription]($e/Subscriptions/updateSubscription).
   *
   * @param componentId    ID or Handle for the Component
   * @param pricePointId   ID or Handle for the Price Point belonging to the Component
   * @param body
   * @return Response from the API call
   */
  async createSegment(
    componentId: string,
    pricePointId: string,
    body?: CreateSegmentRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SegmentResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      componentId: [componentId, string()],
      pricePointId: [pricePointId, string()],
      body: [body, optional(createSegmentRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/components/${mapped.componentId}/price_points/${mapped.pricePointId}/segments.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.throwOn(
      422,
      EventBasedBillingSegmentWriteErrorResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(segmentResponseSchema, requestOptions);
  }

  /**
   * Lists segments created for a given price point, in order of creation.
   *
   * You can pass `page` and `per_page` parameters in order to access all of the segments. By default it
   * will return `30` records. You can set `per_page` to `200` at most.
   *
   * You may specify component and/or price point by using either the numeric ID or the `handle:gold`
   * syntax.
   *
   * ## Subscription Segment Rates
   *
   * This endpoint also returns the segments of a subscription's custom price point, including segment
   * rates set through `custom_price.segments` on [Create
   * Subscription]($e/Subscriptions/createSubscription) or [Update
   * Subscription]($e/Subscriptions/updateSubscription). Use the subscription component's
   * `price_point_id`, available from [Read Subscription
   * Component]($e/Subscription%20Components/readSubscriptionComponent).
   *
   * @param componentId     ID or Handle for the Component
   * @param pricePointId    ID or Handle for the Price Point belonging to the Component
   * @param page            Result records are organized in pages. By default, the first
   *                                                     page of results is displayed. The page parameter specifies a
   *                                                     page number of results to fetch. You can start navigating
   *                                                     through the pages to consume the results. You do this by
   *                                                     passing in a page parameter. Retrieve the next page by adding ?
   *                                                     page=2 to the query string. If there are no results to return,
   *                                                     then an empty result set will be returned. Use in query
   *                                                     `page=1`.
   * @param perPage         This parameter indicates how many records to fetch in each
   *                                                     request. Default value is 30. The maximum allowed values is
   *                                                     200; any per_page value over 200 will be changed to 200. Use
   *                                                     in query `per_page=200`.
   * @param filter          Filter to use for List Segments for a Price Point operation
   * @param currencyPrices  (Optional) If you have defined multiple currencies at the
   *                                                     site level, pass `true` to include each segment's
   *                                                     `currency_prices` in the response. Use in query:
   *                                                     `currency_prices=true`.
   * @return Response from the API call
   */
  async listSegmentsForPricePoint(
    {
      componentId,
      pricePointId,
      page,
      perPage,
      filter,
      currencyPrices,
    }: {
      componentId: string;
      pricePointId: string;
      page?: number;
      perPage?: number;
      filter?: ListSegmentsFilter;
      currencyPrices?: boolean;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListSegmentsResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      componentId: [componentId, string()],
      pricePointId: [pricePointId, string()],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      filter: [filter, optional(listSegmentsFilterSchema)],
      currencyPrices: [currencyPrices, optional(boolean())],
    });
    req.query('page', mapped.page, commaPrefix);
    req.query('per_page', mapped.perPage, commaPrefix);
    req.query('filter', mapped.filter, commaPrefix);
    req.query('currency_prices', mapped.currencyPrices, commaPrefix);
    req.appendTemplatePath`/components/${mapped.componentId}/price_points/${mapped.pricePointId}/segments.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.throwOn(
      422,
      EventBasedBillingListSegmentsErrorsError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(listSegmentsResponseSchema, requestOptions);
  }

  /**
   * Updates a single segment for a component with a segmented metric. You can also update the pricing
   * for the segment.
   *
   * You can specify component and/or price point by using either the numeric ID or the `handle:gold`
   * syntax.
   *
   * ## Custom Price Points
   *
   * This endpoint changes segments on catalog price points only. If the segment belongs to a
   * subscription's custom price point, or the `price_point_id` in the URL names one, the request returns
   * `422 Unprocessable Entity` with a `price_point` error such as "Segments on a subscription's custom
   * price point can't be changed here. Set them with custom_price on the subscription or component
   * endpoints.", and nothing is saved. To change a subscription's segment rates, send `custom_price.
   * segments` to [Update Subscription]($e/Subscriptions/updateSubscription).
   *
   * @param componentId    ID or Handle of the Component
   * @param pricePointId   ID or Handle of the Price Point belonging to the Component
   * @param id             The ID of the Segment
   * @param body
   * @return Response from the API call
   */
  async updateSegment(
    componentId: string,
    pricePointId: string,
    id: number,
    body?: UpdateSegmentRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SegmentResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      componentId: [componentId, string()],
      pricePointId: [pricePointId, string()],
      id: [id, number()],
      body: [body, optional(updateSegmentRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/components/${mapped.componentId}/price_points/${mapped.pricePointId}/segments/${mapped.id}.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.throwOn(
      422,
      ApiError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(segmentResponseSchema, requestOptions);
  }

  /**
   * Deletes a segment with the specified ID.
   *
   * You may specify component and/or price point by using either the numeric ID or the `handle:gold`
   * syntax.
   *
   * ## Custom Price Points
   *
   * This endpoint changes segments on catalog price points only. If the segment belongs to a
   * subscription's custom price point, the request returns `422 Unprocessable Entity` with a
   * `price_point` error such as "Segments on a subscription's custom price point can't be changed here.
   * Set them with custom_price on the subscription or component endpoints.", and nothing is saved. The
   * check uses the segment's own price point, whichever `price_point_id` the URL names. To change a
   * subscription's segment rates, send `custom_price.segments` to [Update
   * Subscription]($e/Subscriptions/updateSubscription).
   *
   * @param componentId    ID or Handle of the Component
   * @param pricePointId   ID or Handle of the Price Point belonging to the Component
   * @param id             The ID of the Segment
   * @return Response from the API call
   */
  async deleteSegment(
    componentId: string,
    pricePointId: string,
    id: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      componentId: [componentId, string()],
      pricePointId: [pricePointId, string()],
      id: [id, number()],
    });
    req.appendTemplatePath`/components/${mapped.componentId}/price_points/${mapped.pricePointId}/segments/${mapped.id}.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.throwOn(
      422,
      SegmentPricePointErrorsError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.call(requestOptions);
  }

  /**
   * Creates multiple segments in one request. The array of segments can contain up to `2000` records.
   *
   * If any of the records contain an error the whole request would fail and none of the requested
   * segments get created. The error response contains a message for only the one segment that failed
   * validation, with the corresponding index in the array.
   *
   * You may specify component and/or price point by using either the numeric ID or the `handle:gold`
   * syntax.
   *
   * ## Custom Price Points
   *
   * This endpoint changes segments on catalog price points only. If the price point is a subscription's
   * custom price point, the request returns `422 Unprocessable Entity` with a `price_point` error such
   * as "Segments on a subscription's custom price point can't be changed here. Set them with
   * custom_price on the subscription or component endpoints.", and nothing is saved. To change a
   * subscription's segment rates, send `custom_price.segments` to [Update
   * Subscription]($e/Subscriptions/updateSubscription).
   *
   * @param componentId    ID or Handle for the Component
   * @param pricePointId   ID or Handle for the Price Point belonging to the Component
   * @param body
   * @return Response from the API call
   */
  async bulkCreateSegments(
    componentId: string,
    pricePointId: string,
    body?: BulkCreateSegments,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListSegmentsResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      componentId: [componentId, string()],
      pricePointId: [pricePointId, string()],
      body: [body, optional(bulkCreateSegmentsSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/components/${mapped.componentId}/price_points/${mapped.pricePointId}/segments/bulk.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.throwOn(
      422,
      ApiError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(listSegmentsResponseSchema, requestOptions);
  }

  /**
   * Updates multiple segments in one request. The array of segments can contain up to `1000` records.
   *
   * If any of the records contain an error the whole request would fail and none of the requested
   * segments get updated. The error response contains a message for only the one segment that failed
   * validation, with the corresponding index in the array.
   *
   * You may specify component and/or price point by using either the numeric ID or the `handle:gold`
   * syntax.
   *
   * ## Custom Price Points
   *
   * This endpoint changes segments on catalog price points only. If the price point is a subscription's
   * custom price point, the request returns `422 Unprocessable Entity` with a `price_point` error such
   * as "Segments on a subscription's custom price point can't be changed here. Set them with
   * custom_price on the subscription or component endpoints.", and nothing is saved. To change a
   * subscription's segment rates, send `custom_price.segments` to [Update
   * Subscription]($e/Subscriptions/updateSubscription).
   *
   * @param componentId    ID or Handle for the Component
   * @param pricePointId   ID or Handle for the Price Point belonging to the Component
   * @param body
   * @return Response from the API call
   */
  async bulkUpdateSegments(
    componentId: string,
    pricePointId: string,
    body?: BulkUpdateSegments,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListSegmentsResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      componentId: [componentId, string()],
      pricePointId: [pricePointId, string()],
      body: [body, optional(bulkUpdateSegmentsSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/components/${mapped.componentId}/price_points/${mapped.pricePointId}/segments/bulk.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.throwOn(
      422,
      ApiError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(listSegmentsResponseSchema, requestOptions);
  }
}
