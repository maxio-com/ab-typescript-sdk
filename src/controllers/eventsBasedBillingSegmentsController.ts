/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, commaPrefix, RequestOptions } from '../core';
import {
  BulkCreateSegments,
  bulkCreateSegmentsSchema,
} from '../models/bulkCreateSegments';
import {
  BulkUpdateSegments,
  bulkUpdateSegmentsSchema,
} from '../models/bulkUpdateSegments';
import {
  CreateSegmentRequest,
  createSegmentRequestSchema,
} from '../models/createSegmentRequest';
import {
  ListSegmentsFilter,
  listSegmentsFilterSchema,
} from '../models/listSegmentsFilter';
import {
  ListSegmentsResponse,
  listSegmentsResponseSchema,
} from '../models/listSegmentsResponse';
import {
  SegmentResponse,
  segmentResponseSchema,
} from '../models/segmentResponse';
import {
  UpdateSegmentRequest,
  updateSegmentRequestSchema,
} from '../models/updateSegmentRequest';
import { number, optional, string } from '../schema';
import { BaseController } from './baseController';
import { ApiError } from '@apimatic/core';
import { EventBasedBillingListSegmentsErrorsError } from '../errors/eventBasedBillingListSegmentsErrorsError';
import { EventBasedBillingSegmentError } from '../errors/eventBasedBillingSegmentError';
import { EventBasedBillingSegmentErrorsError } from '../errors/eventBasedBillingSegmentErrorsError';

export class EventsBasedBillingSegmentsController extends BaseController {
  /**
   * This endpoint creates a new Segment for a Component with segmented Metric. It allows you to specify
   * properties to bill upon and prices for each Segment. You can only pass as many "property_values" as
   * the related Metric has segmenting properties defined.
   *
   * You may specify component and/or price point by using either the numeric ID or the `handle:gold`
   * syntax.
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
      EventBasedBillingSegmentErrorsError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(segmentResponseSchema, requestOptions);
  }

  /**
   * This endpoint allows you to fetch Segments created for a given Price Point. They will be returned in
   * the order of creation.
   *
   * You can pass `page` and `per_page` parameters in order to access all of the segments. By default it
   * will return `30` records. You can set `per_page` to `200` at most.
   *
   * You may specify component and/or price point by using either the numeric ID or the `handle:gold`
   * syntax.
   *
   * @param componentId    ID or Handle for the Component
   * @param pricePointId   ID or Handle for the Price Point belonging to the Component
   * @param page           Result records are organized in pages. By default, the first
   *                                                    page of results is displayed. The page parameter specifies a
   *                                                    page number of results to fetch. You can start navigating
   *                                                    through the pages to consume the results. You do this by
   *                                                    passing in a page parameter. Retrieve the next page by adding ?
   *                                                    page=2 to the query string. If there are no results to return,
   *                                                    then an empty result set will be returned. Use in query
   *                                                    `page=1`.
   * @param perPage        This parameter indicates how many records to fetch in each
   *                                                    request. Default value is 30. The maximum allowed values is 200;
   *                                                    any per_page value over 200 will be changed to 200. Use in
   *                                                    query `per_page=200`.
   * @param filter         Filter to use for List Segments for a Price Point operation
   * @return Response from the API call
   */
  async listSegmentsForPricePoint(
    {
      componentId,
      pricePointId,
      page,
      perPage,
      filter,
    }: {
      componentId: string;
      pricePointId: string;
      page?: number;
      perPage?: number;
      filter?: ListSegmentsFilter;
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
    });
    req.query('page', mapped.page, commaPrefix);
    req.query('per_page', mapped.perPage, commaPrefix);
    req.query('filter', mapped.filter, commaPrefix);
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
   * This endpoint updates a single Segment for a Component with a segmented Metric. It allows you to
   * update the pricing for the segment.
   *
   * You may specify component and/or price point by using either the numeric ID or the `handle:gold`
   * syntax.
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
      EventBasedBillingSegmentErrorsError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(segmentResponseSchema, requestOptions);
  }

  /**
   * This endpoint allows you to delete a Segment with specified ID.
   *
   * You may specify component and/or price point by using either the numeric ID or the `handle:gold`
   * syntax.
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
      ApiError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.call(requestOptions);
  }

  /**
   * This endpoint allows you to create multiple segments in one request. The array of segments can
   * contain up to `2000` records.
   *
   * If any of the records contain an error the whole request would fail and none of the requested
   * segments get created. The error response contains a message for only the one segment that failed
   * validation, with the corresponding index in the array.
   *
   * You may specify component and/or price point by using either the numeric ID or the `handle:gold`
   * syntax.
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
      EventBasedBillingSegmentError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(listSegmentsResponseSchema, requestOptions);
  }

  /**
   * This endpoint allows you to update multiple segments in one request. The array of segments can
   * contain up to `1000` records.
   *
   * If any of the records contain an error the whole request would fail and none of the requested
   * segments get updated. The error response contains a message for only the one segment that failed
   * validation, with the corresponding index in the array.
   *
   * You may specify component and/or price point by using either the numeric ID or the `handle:gold`
   * syntax.
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
      EventBasedBillingSegmentError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(listSegmentsResponseSchema, requestOptions);
  }
}
