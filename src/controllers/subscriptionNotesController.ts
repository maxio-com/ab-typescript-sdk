/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, RequestOptions } from '../core';
import {
  SubscriptionNoteResponse,
  subscriptionNoteResponseSchema,
} from '../models/subscriptionNoteResponse';
import {
  UpdateSubscriptionNoteRequest,
  updateSubscriptionNoteRequestSchema,
} from '../models/updateSubscriptionNoteRequest';
import { array, number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class SubscriptionNotesController extends BaseController {
  /**
   * Use the following method to create a note for a subscription.
   *
   * ## How to Use Subscription Notes
   *
   * Notes allow you to record information about a particular Subscription in a free text format.
   *
   * If you have structured data such as birth date, color, etc., consider using Metadata instead.
   *
   * Full documentation on how to use Notes in the Chargify UI can be located [here](https://maxio-
   * chargify.zendesk.com/hc/en-us/articles/5404434903181-Subscription-Summary#notes).
   *
   * @param subscriptionId  The Chargify id of the subscription
   * @param body
   * @return Response from the API call
   */
  async createSubscriptionNote(
    subscriptionId: string,
    body?: UpdateSubscriptionNoteRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SubscriptionNoteResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      body: [body, optional(updateSubscriptionNoteRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/notes.json`;
    return req.callAsJson(subscriptionNoteResponseSchema, requestOptions);
  }

  /**
   * Use the following method to delete a note for a Subscription.
   *
   * @param subscriptionId  The Chargify id of the subscription
   * @return Response from the API call
   */
  async deleteSubscriptionNote(
    subscriptionId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
    });
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/notes.json`;
    req.throwOn(422, ApiError, 'Unprocessable Entity (WebDAV)');
    return req.call(requestOptions);
  }

  /**
   * Use this method to retrieve a list of Notes associated with a Subscription. The response will be an
   * array of Notes.
   *
   * @param subscriptionId  The Chargify id of the subscription
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
  async listSubscriptionNotes({
    subscriptionId,
    page,
    perPage,
  }: {
    subscriptionId: string,
    page?: number,
    perPage?: number,
  },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SubscriptionNoteResponse[]>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
    });
    req.query('page', mapped.page);
    req.query('per_page', mapped.perPage);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/notes.json`;
    return req.callAsJson(
      array(subscriptionNoteResponseSchema),
      requestOptions
    );
  }

  /**
   * Once you have obtained the ID of the note you wish to read, use this method to show a particular
   * note attached to a subscription.
   *
   * @param subscriptionId  The Chargify id of the subscription
   * @param noteId          The Chargify id of the note
   * @return Response from the API call
   */
  async readSubscriptionNote(
    subscriptionId: string,
    noteId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SubscriptionNoteResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      noteId: [noteId, string()],
    });
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/notes/${mapped.noteId}.json`;
    return req.callAsJson(subscriptionNoteResponseSchema, requestOptions);
  }

  /**
   * Use the following method to update a note for a Subscription.
   *
   * @param subscriptionId  The Chargify id of the subscription
   * @param noteId          The Chargify id of the note
   * @param body
   * @return Response from the API call
   */
  async updateSubscriptionNote(
    subscriptionId: string,
    noteId: string,
    body?: UpdateSubscriptionNoteRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SubscriptionNoteResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      noteId: [noteId, string()],
      body: [body, optional(updateSubscriptionNoteRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/notes/${mapped.noteId}.json`;
    return req.callAsJson(subscriptionNoteResponseSchema, requestOptions);
  }
}
