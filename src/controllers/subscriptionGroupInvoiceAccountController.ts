/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, commaPrefix, RequestOptions } from '../core';
import {
  DeductServiceCreditRequest,
  deductServiceCreditRequestSchema,
} from '../models/deductServiceCreditRequest';
import {
  IssueServiceCreditRequest,
  issueServiceCreditRequestSchema,
} from '../models/issueServiceCreditRequest';
import {
  ListPrepaymentsFilter,
  listPrepaymentsFilterSchema,
} from '../models/listPrepaymentsFilter';
import {
  ListSubscriptionGroupPrepaymentResponse,
  listSubscriptionGroupPrepaymentResponseSchema,
} from '../models/listSubscriptionGroupPrepaymentResponse';
import { ServiceCredit, serviceCreditSchema } from '../models/serviceCredit';
import {
  ServiceCreditResponse,
  serviceCreditResponseSchema,
} from '../models/serviceCreditResponse';
import {
  SubscriptionGroupPrepaymentRequest,
  subscriptionGroupPrepaymentRequestSchema,
} from '../models/subscriptionGroupPrepaymentRequest';
import {
  SubscriptionGroupPrepaymentResponse,
  subscriptionGroupPrepaymentResponseSchema,
} from '../models/subscriptionGroupPrepaymentResponse';
import { number, optional, string } from '../schema';
import { BaseController } from './baseController';
import { ApiError } from '@apimatic/core';
import { ErrorListResponseError } from '../errors/errorListResponseError';

export class SubscriptionGroupInvoiceAccountController extends BaseController {
  /**
   * A prepayment can be added for a subscription group identified by the group's `uid`. This endpoint
   * requires a `amount`, `details`, `method`, and `memo`. On success, the prepayment will be added to
   * the group's prepayment balance.
   *
   * @param uid          The uid of the subscription group
   * @param body
   * @return Response from the API call
   */
  async createSubscriptionGroupPrepayment(
    uid: string,
    body?: SubscriptionGroupPrepaymentRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SubscriptionGroupPrepaymentResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      uid: [uid, string()],
      body: [body, optional(subscriptionGroupPrepaymentRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscription_groups/${mapped.uid}/prepayments.json`;
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(
      subscriptionGroupPrepaymentResponseSchema,
      requestOptions
    );
  }

  /**
   * This request will list a subscription group's prepayments.
   *
   * @param uid      The uid of the subscription group
   * @param page     Result records are organized in pages. By default, the first page
   *                                                 of results is displayed. The page parameter specifies a page
   *                                                 number of results to fetch. You can start navigating through the
   *                                                 pages to consume the results. You do this by passing in a page
   *                                                 parameter. Retrieve the next page by adding ?page=2 to the query
   *                                                 string. If there are no results to return, then an empty result
   *                                                 set will be returned. Use in query `page=1`.
   * @param perPage  This parameter indicates how many records to fetch in each
   *                                                 request. Default value is 20. The maximum allowed values is 200;
   *                                                 any per_page value over 200 will be changed to 200. Use in query
   *                                                 `per_page=200`.
   * @param filter   Filter to use for List Prepayments operations
   * @return Response from the API call
   */
  async listPrepaymentsForSubscriptionGroup(
    {
      uid,
      page,
      perPage,
      filter,
    }: {
      uid: string;
      page?: number;
      perPage?: number;
      filter?: ListPrepaymentsFilter;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListSubscriptionGroupPrepaymentResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      uid: [uid, string()],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      filter: [filter, optional(listPrepaymentsFilterSchema)],
    });
    req.query('page', mapped.page, commaPrefix);
    req.query('per_page', mapped.perPage, commaPrefix);
    req.query('filter', mapped.filter, commaPrefix);
    req.appendTemplatePath`/subscription_groups/${mapped.uid}/prepayments.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(
      listSubscriptionGroupPrepaymentResponseSchema,
      requestOptions
    );
  }

  /**
   * Credit can be issued for a subscription group identified by the group's `uid`. Credit will be added
   * to the group in the amount specified in the request body. The credit will be applied to group member
   * invoices as they are generated.
   *
   * @param uid          The uid of the subscription group
   * @param body
   * @return Response from the API call
   */
  async issueSubscriptionGroupServiceCredit(
    uid: string,
    body?: IssueServiceCreditRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ServiceCreditResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      uid: [uid, string()],
      body: [body, optional(issueServiceCreditRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscription_groups/${mapped.uid}/service_credits.json`;
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(serviceCreditResponseSchema, requestOptions);
  }

  /**
   * Credit can be deducted for a subscription group identified by the group's `uid`. Credit will be
   * deducted from the group in the amount specified in the request body.
   *
   * @param uid          The uid of the subscription group
   * @param body
   * @return Response from the API call
   */
  async deductSubscriptionGroupServiceCredit(
    uid: string,
    body?: DeductServiceCreditRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ServiceCredit>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      uid: [uid, string()],
      body: [body, optional(deductServiceCreditRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscription_groups/${mapped.uid}/service_credit_deductions.json`;
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(serviceCreditSchema, requestOptions);
  }
}
