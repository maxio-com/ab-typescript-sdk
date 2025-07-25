/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, commaPrefix, RequestOptions } from '../core';
import {
  CreateReasonCodeRequest,
  createReasonCodeRequestSchema,
} from '../models/createReasonCodeRequest';
import { OkResponse, okResponseSchema } from '../models/okResponse';
import {
  ReasonCodeResponse,
  reasonCodeResponseSchema,
} from '../models/reasonCodeResponse';
import {
  UpdateReasonCodeRequest,
  updateReasonCodeRequestSchema,
} from '../models/updateReasonCodeRequest';
import { array, number, optional } from '../schema';
import { BaseController } from './baseController';
import { ApiError } from '@apimatic/core';
import { ErrorListResponseError } from '../errors/errorListResponseError';

export class ReasonCodesController extends BaseController {
  /**
   * # Reason Codes Intro
   *
   * ReasonCodes are a way to gain a high level view of why your customers are cancelling the
   * subscription to your product or service.
   *
   * Add a set of churn reason codes to be displayed in-app and/or the Maxio Billing Portal. As your
   * subscribers decide to cancel their subscription, learn why they decided to cancel.
   *
   * ## Reason Code Documentation
   *
   * Full documentation on how Reason Codes operate within Advanced Billing can be located under the
   * following links.
   *
   * [Churn Reason Codes](https://maxio.zendesk.com/hc/en-us/articles/24286647554701-Churn-Reason-Codes)
   *
   * ## Create Reason Code
   *
   * This method gives a merchant the option to create a reason codes for a given Site.
   *
   * @param body
   * @return Response from the API call
   */
  async createReasonCode(
    body?: CreateReasonCodeRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ReasonCodeResponse>> {
    const req = this.createRequest('POST', '/reason_codes.json');
    const mapped = req.prepareArgs({
      body: [body, optional(createReasonCodeRequestSchema)],
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
    return req.callAsJson(reasonCodeResponseSchema, requestOptions);
  }

  /**
   * This method gives a merchant the option to retrieve a list of all of the current churn codes for a
   * given site.
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
  async listReasonCodes(
    {
      page,
      perPage,
    }: {
      page?: number;
      perPage?: number;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ReasonCodeResponse[]>> {
    const req = this.createRequest('GET', '/reason_codes.json');
    const mapped = req.prepareArgs({
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
    });
    req.query('page', mapped.page, commaPrefix);
    req.query('per_page', mapped.perPage, commaPrefix);
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(array(reasonCodeResponseSchema), requestOptions);
  }

  /**
   * This method gives a merchant the option to retrieve a list of a particular code for a given Site by
   * providing the unique numerical ID of the code.
   *
   * @param reasonCodeId   The Advanced Billing id of the reason code
   * @return Response from the API call
   */
  async readReasonCode(
    reasonCodeId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ReasonCodeResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ reasonCodeId: [reasonCodeId, number()] });
    req.appendTemplatePath`/reason_codes/${mapped.reasonCodeId}.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(reasonCodeResponseSchema, requestOptions);
  }

  /**
   * This method gives a merchant the option to update an existing reason code for a given site.
   *
   * @param reasonCodeId   The Advanced Billing id of the reason code
   * @param body
   * @return Response from the API call
   */
  async updateReasonCode(
    reasonCodeId: number,
    body?: UpdateReasonCodeRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ReasonCodeResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      reasonCodeId: [reasonCodeId, number()],
      body: [body, optional(updateReasonCodeRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/reason_codes/${mapped.reasonCodeId}.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(reasonCodeResponseSchema, requestOptions);
  }

  /**
   * This method gives a merchant the option to delete one reason code from the Churn Reason Codes. This
   * code will be immediately removed. This action is not reversible.
   *
   * @param reasonCodeId   The Advanced Billing id of the reason code
   * @return Response from the API call
   */
  async deleteReasonCode(
    reasonCodeId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<OkResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ reasonCodeId: [reasonCodeId, number()] });
    req.appendTemplatePath`/reason_codes/${mapped.reasonCodeId}.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(okResponseSchema, requestOptions);
  }
}
