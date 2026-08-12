/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, commaPrefix, RequestOptions } from '../core.js';
import {
  SubscriptionNoteResponse,
  subscriptionNoteResponseSchema,
} from '../models/subscriptionNoteResponse.js';
import {
  UpdateSubscriptionNoteRequest,
  updateSubscriptionNoteRequestSchema,
} from '../models/updateSubscriptionNoteRequest.js';
import { array, number, optional } from '../schema.js';
import { BaseController } from './baseController.js';
import { ErrorListResponseError } from '../errors/errorListResponseError.js';

export class SubscriptionNotesController extends BaseController {
  /**
   * Creates a note for a subscription.
   *
   * Notes allow you to record information about a particular Subscription in a free text format.
   *
   * If you have structured data such as birth date, color, etc., consider using
   * [Metadata]($e/Custom%20Fields/createMetadata) instead.
   *
   * For more information, see [Adding Notes](https://docs.maxio.com/hc/en-us/articles/24251654953997-
   * Understanding-the-Subscription-Summary-Page#billing-portal-status:~:text=documentation%20for%20more.-
   * ,Adding%20Notes,-Notes%20are%20optional) in the product documentation.
   *
   * @param subscriptionId  The Chargify id of the subscription.
   * @param body
   * @return Response from the API call
   */
  async createSubscriptionNote(
    subscriptionId: number,
    body?: UpdateSubscriptionNoteRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SubscriptionNoteResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      body: [body, optional(updateSubscriptionNoteRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/notes.json`;
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(subscriptionNoteResponseSchema, requestOptions);
  }

  /**
   * Retrieves a list of notes associated with a subscription. The response will be an array of Notes.
   *
   * @param subscriptionId  The Chargify id of the subscription.
   * @param page            Result records are organized in pages. By default, the first page of results is
   *                                  displayed. The page parameter specifies a page number of results to fetch. You
   *                                  can start navigating through the pages to consume the results. You do this by
   *                                  passing in a page parameter. Retrieve the next page by adding ?page=2 to the
   *                                  query string. If there are no results to return, then an empty result set will be
   *                                  returned. Use in query `page=1`.
   * @param perPage         This parameter indicates how many records to fetch in each request. Default
   *                                  value is 20. The maximum allowed values is 200; any per_page value over 200 will
   *                                  be changed to 200. Use in query `per_page=200`.
   * @return Response from the API call
   */
  async listSubscriptionNotes(
    {
      subscriptionId,
      page,
      perPage,
    }: {
      subscriptionId: number;
      page?: number;
      perPage?: number;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SubscriptionNoteResponse[]>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
    });
    req.query('page', mapped.page, commaPrefix);
    req.query('per_page', mapped.perPage, commaPrefix);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/notes.json`;
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(
      array(subscriptionNoteResponseSchema),
      requestOptions
    );
  }

  /**
   * Retrieves a specific note attached to a subscription.
   *
   * @param subscriptionId  The Chargify id of the subscription.
   * @param noteId          The Advanced Billing id of the note
   * @return Response from the API call
   */
  async readSubscriptionNote(
    subscriptionId: number,
    noteId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SubscriptionNoteResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      noteId: [noteId, number()],
    });
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/notes/${mapped.noteId}.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(subscriptionNoteResponseSchema, requestOptions);
  }

  /**
   * Updates a note for a subscription.
   *
   * @param subscriptionId  The Chargify id of the subscription.
   * @param noteId          The Advanced Billing id of the note
   * @param body
   * @return Response from the API call
   */
  async updateSubscriptionNote(
    subscriptionId: number,
    noteId: number,
    body?: UpdateSubscriptionNoteRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SubscriptionNoteResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      noteId: [noteId, number()],
      body: [body, optional(updateSubscriptionNoteRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/notes/${mapped.noteId}.json`;
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(subscriptionNoteResponseSchema, requestOptions);
  }

  /**
   * Deletes a note for a Subscription.
   *
   * @param subscriptionId  The Chargify id of the subscription.
   * @param noteId          The Advanced Billing id of the note
   * @return Response from the API call
   */
  async deleteSubscriptionNote(
    subscriptionId: number,
    noteId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      noteId: [noteId, number()],
    });
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/notes/${mapped.noteId}.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.call(requestOptions);
  }
}
