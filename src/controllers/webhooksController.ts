/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, commaPrefix, RequestOptions } from '../core.js';
import {
  CreateOrUpdateEndpointRequest,
  createOrUpdateEndpointRequestSchema,
} from '../models/createOrUpdateEndpointRequest.js';
import {
  EnableWebhooksRequest,
  enableWebhooksRequestSchema,
} from '../models/enableWebhooksRequest.js';
import {
  EnableWebhooksResponse,
  enableWebhooksResponseSchema,
} from '../models/enableWebhooksResponse.js';
import { Endpoint, endpointSchema } from '../models/endpoint.js';
import {
  EndpointResponse,
  endpointResponseSchema,
} from '../models/endpointResponse.js';
import {
  ReplayWebhooksRequest,
  replayWebhooksRequestSchema,
} from '../models/replayWebhooksRequest.js';
import {
  ReplayWebhooksResponse,
  replayWebhooksResponseSchema,
} from '../models/replayWebhooksResponse.js';
import { WebhookOrder, webhookOrderSchema } from '../models/webhookOrder.js';
import {
  WebhookResponse,
  webhookResponseSchema,
} from '../models/webhookResponse.js';
import { WebhookStatus, webhookStatusSchema } from '../models/webhookStatus.js';
import { array, number, optional, string } from '../schema.js';
import { BaseController } from './baseController.js';
import { ApiError } from '@apimatic/core';
import { ErrorListResponseError } from '../errors/errorListResponseError.js';

export class WebhooksController extends BaseController {
  /**
   * Allows you to view a list of webhooks.  You can pass query parameters if you want to filter webhooks.
   * See the [Webhooks](page:introduction/webhooks/webhooks) documentation for more information.
   *
   * @param status       Webhooks with matching status would be returned.
   * @param sinceDate    Format YYYY-MM-DD. Returns Webhooks with the created_at date greater than or
   *                                      equal to the one specified.
   * @param untilDate    Format YYYY-MM-DD. Returns Webhooks with the created_at date less than or
   *                                      equal to the one specified.
   * @param page         Result records are organized in pages. By default, the first page of results
   *                                      is displayed. The page parameter specifies a page number of results to fetch.
   *                                      You can start navigating through the pages to consume the results. You do
   *                                      this by passing in a page parameter. Retrieve the next page by adding ?page=2
   *                                      to the query string. If there are no results to return, then an empty result
   *                                      set will be returned. Use in query `page=1`.
   * @param perPage      This parameter indicates how many records to fetch in each request. Default
   *                                      value is 20. The maximum allowed values is 200; any per_page value over 200
   *                                      will be changed to 200. Use in query `per_page=200`.
   * @param order        The order in which the Webhooks are returned.
   * @param subscription The Advanced Billing id of a subscription you'd like to filter for
   * @return Response from the API call
   */
  async listWebhooks(
    {
      status,
      sinceDate,
      untilDate,
      page,
      perPage,
      order,
      subscription,
    }: {
      status?: WebhookStatus;
      sinceDate?: string;
      untilDate?: string;
      page?: number;
      perPage?: number;
      order?: WebhookOrder;
      subscription?: number;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<WebhookResponse[]>> {
    const req = this.createRequest('GET', '/webhooks.json');
    const mapped = req.prepareArgs({
      status: [status, optional(webhookStatusSchema)],
      sinceDate: [sinceDate, optional(string())],
      untilDate: [untilDate, optional(string())],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      order: [order, optional(webhookOrderSchema)],
      subscription: [subscription, optional(number())],
    });
    req.query('status', mapped.status, commaPrefix);
    req.query('since_date', mapped.sinceDate, commaPrefix);
    req.query('until_date', mapped.untilDate, commaPrefix);
    req.query('page', mapped.page, commaPrefix);
    req.query('per_page', mapped.perPage, commaPrefix);
    req.query('order', mapped.order, commaPrefix);
    req.query('subscription', mapped.subscription, commaPrefix);
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(array(webhookResponseSchema), requestOptions);
  }

  /**
   * Allows you to enable webhooks for your site
   *
   * @param body
   * @return Response from the API call
   */
  async enableWebhooks(
    body?: EnableWebhooksRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<EnableWebhooksResponse>> {
    const req = this.createRequest('PUT', '/webhooks/settings.json');
    const mapped = req.prepareArgs({
      body: [body, optional(enableWebhooksRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(enableWebhooksResponseSchema, requestOptions);
  }

  /**
   * Replays webhooks. Posting to this endpoint does not immediately resend the webhooks. They are added
   * to a queue and sent as soon as possible, depending on available system resources. You can submit an
   * array of up to 1000 webhook IDs in the replay request.
   *
   * @param body
   * @return Response from the API call
   */
  async replayWebhooks(
    body?: ReplayWebhooksRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ReplayWebhooksResponse>> {
    const req = this.createRequest('POST', '/webhooks/replay.json');
    const mapped = req.prepareArgs({
      body: [body, optional(replayWebhooksRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(replayWebhooksResponseSchema, requestOptions);
  }

  /**
   * Creates an endpoint and assigns a list of webhooks subscriptions (events) to it.
   * See the [Webhooks Reference](page:introduction/webhooks/webhooks-reference#events) page for
   * available events.
   *
   * @param body
   * @return Response from the API call
   */
  async createEndpoint(
    body?: CreateOrUpdateEndpointRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<EndpointResponse>> {
    const req = this.createRequest('POST', '/endpoints.json');
    const mapped = req.prepareArgs({
      body: [body, optional(createOrUpdateEndpointRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(endpointResponseSchema, requestOptions);
  }

  /**
   * Returns created endpoints for a site.
   *
   * @return Response from the API call
   */
  async listEndpoints(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Endpoint[]>> {
    const req = this.createRequest('GET', '/endpoints.json');
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(array(endpointSchema), requestOptions);
  }

  /**
   * Updates an Endpoint. You can change the `url` of your endpoint or the list of
   * `webhook_subscriptions` to which you are subscribed. See the [Webhooks Reference](page:
   * introduction/webhooks/webhooks-reference#events) page for available events.
   *
   * Always send a complete list of events to which you want to subscribe. Sending a PUT request for an
   * existing endpoint with an empty list of `webhook_subscriptions` will unsubscribe all events.
   *
   * If you want unsubscribe from a specific event, send a list of `webhook_subscriptions` without the
   * specific event key.
   *
   * @param endpointId   The Advanced Billing id for the endpoint that should
   *                                                             be updated
   * @param body
   * @return Response from the API call
   */
  async updateEndpoint(
    endpointId: number,
    body?: CreateOrUpdateEndpointRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<EndpointResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      endpointId: [endpointId, number()],
      body: [body, optional(createOrUpdateEndpointRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/endpoints/${mapped.endpointId}.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(endpointResponseSchema, requestOptions);
  }
}
