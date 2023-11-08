/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, RequestOptions } from '../core';
import { ErrorListResponseError } from '../errors/errorListResponseError';
import {
  EnableWebhooksRequest,
  enableWebhooksRequestSchema,
} from '../models/enableWebhooksRequest';
import {
  EnableWebhooksResponse,
  enableWebhooksResponseSchema,
} from '../models/enableWebhooksResponse';
import { Endpoint, endpointSchema } from '../models/endpoint';
import {
  EndpointResponse,
  endpointResponseSchema,
} from '../models/endpointResponse';
import {
  ReplayWebhooksRequest,
  replayWebhooksRequestSchema,
} from '../models/replayWebhooksRequest';
import {
  ReplayWebhooksResponse,
  replayWebhooksResponseSchema,
} from '../models/replayWebhooksResponse';
import {
  UpdateEndpointRequest,
  updateEndpointRequestSchema,
} from '../models/updateEndpointRequest';
import { WebhookOrder, webhookOrderSchema } from '../models/webhookOrder';
import {
  WebhookResponse,
  webhookResponseSchema,
} from '../models/webhookResponse';
import { WebhookStatus, webhookStatusSchema } from '../models/webhookStatus';
import { array, number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class WebhooksController extends BaseController {
  /**
   * ## Webhooks Intro
   *
   * The Webhooks API allows you to view a list of all webhooks and to selectively resend individual or
   * groups of webhooks. Webhooks will be sent on endpoints specified by you. Endpoints can be added via
   * API or Web UI. There is also an option to enable / disable webhooks via API request.
   *
   * We recommend that you review Chargify's webhook documentation located in our help site. The
   * following resources will help guide you on how to use webhooks in Chargify, in addition to these
   * webhook endpoints:
   *
   * + [Adding/editing new webhooks](https://maxio-chargify.zendesk.com/hc/en-
   * us/articles/5404448450317#configure-webhook-url)
   * + [Webhooks introduction and delivery information](https://maxio-chargify.zendesk.com/hc/en-
   * us/articles/5405568068365#webhooks-introduction-0-0)
   * + [Main webhook overview](https://maxio-chargify.zendesk.com/hc/en-us/articles/5405357509645-
   * Webhooks-Reference#webhooks-reference-0-0)
   * + [Available webhooks and payloads](https://maxio-chargify.zendesk.com/hc/en-
   * us/articles/5405357509645-Webhooks-Reference#events)
   *
   * ## List Webhooks for a Site
   *
   * This method allows you to fetch data about webhooks. You can pass query parameters if you want to
   * filter webhooks.
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
   * @param subscription The Chargify id of a subscription you'd like to filter for
   * @return Response from the API call
   */
  async listWebhooks({
    status,
    sinceDate,
    untilDate,
    page,
    perPage,
    order,
    subscription,
  }: {
    status?: WebhookStatus,
    sinceDate?: string,
    untilDate?: string,
    page?: number,
    perPage?: number,
    order?: WebhookOrder,
    subscription?: number,
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
    req.query('status', mapped.status);
    req.query('since_date', mapped.sinceDate);
    req.query('until_date', mapped.untilDate);
    req.query('page', mapped.page);
    req.query('per_page', mapped.perPage);
    req.query('order', mapped.order);
    req.query('subscription', mapped.subscription);
    return req.callAsJson(array(webhookResponseSchema), requestOptions);
  }

  /**
   * This method allows you to enable webhooks via API for your site
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
    return req.callAsJson(enableWebhooksResponseSchema, requestOptions);
  }

  /**
   * Posting to the replay endpoint does not immediately resend the webhooks. They are added to a queue
   * and will be sent as soon as possible, depending on available system resources.
   *
   * You may submit an array of up to 1000 webhook IDs to replay in the request.
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
    return req.callAsJson(replayWebhooksResponseSchema, requestOptions);
  }

  /**
   * The Chargify API allows you to create an endpoint and assign a list of webhooks subscriptions
   * (events) to it.
   *
   * You can check available events here.
   * [Event keys](https://maxio-chargify.zendesk.com/hc/en-us/articles/5405357509645-Webhooks-
   * Reference#example-payloads)
   *
   * @param body
   * @return Response from the API call
   */
  async createEndpoint(
    body?: UpdateEndpointRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<EndpointResponse>> {
    const req = this.createRequest('POST', '/endpoints.json');
    const mapped = req.prepareArgs({
      body: [body, optional(updateEndpointRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
    return req.callAsJson(endpointResponseSchema, requestOptions);
  }

  /**
   * This method returns created endpoints for site.
   *
   * @return Response from the API call
   */
  async listEndpoints(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Endpoint[]>> {
    const req = this.createRequest('GET', '/endpoints.json');
    return req.callAsJson(array(endpointSchema), requestOptions);
  }

  /**
   * You can update an Endpoint via the API with a PUT request to the resource endpoint.
   *
   * You can change the `url` of your endpoint which consumes webhooks or list of `webhook_subscriptions`.
   * Check available [Event keys](https://maxio-chargify.zendesk.com/hc/en-us/articles/5404448450317-
   * Webhooks#configure-webhook-url).
   *
   * Always send a complete list of events which you want subscribe/watch.
   * Sending an PUT request for existing endpoint with empty list of `webhook_subscriptions` will end
   * with unsubscribe from all events.
   *
   * If you want unsubscribe from specific event, just send a list of `webhook_subscriptions` without the
   * specific event key.
   *
   * @param endpointId   The Chargify id for the endpoint that should be updated
   * @param body
   * @return Response from the API call
   */
  async updateEndpoint(
    endpointId: number,
    body?: UpdateEndpointRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<EndpointResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      endpointId: [endpointId, number()],
      body: [body, optional(updateEndpointRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/endpoints/${mapped.endpointId}.json`;
    req.throwOn(404, ApiError, 'Not Found');
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
    return req.callAsJson(endpointResponseSchema, requestOptions);
  }
}
