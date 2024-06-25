/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  AccountBalances,
  accountBalancesSchema,
} from '../models/accountBalances';
import {
  CreatePrepaymentRequest,
  createPrepaymentRequestSchema,
} from '../models/createPrepaymentRequest';
import {
  CreatePrepaymentResponse,
  createPrepaymentResponseSchema,
} from '../models/createPrepaymentResponse';
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
  PrepaymentResponse,
  prepaymentResponseSchema,
} from '../models/prepaymentResponse';
import {
  PrepaymentsResponse,
  prepaymentsResponseSchema,
} from '../models/prepaymentsResponse';
import {
  RefundPrepaymentRequest,
  refundPrepaymentRequestSchema,
} from '../models/refundPrepaymentRequest';
import { ServiceCredit, serviceCreditSchema } from '../models/serviceCredit';
import { bigint, number, optional } from '../schema';
import { BaseController } from './baseController';
import { ApiError } from '@apimatic/core';
import { RefundPrepaymentBaseErrorsResponseError } from '../errors/refundPrepaymentBaseErrorsResponseError';

export class SubscriptionInvoiceAccountController extends BaseController {
  /**
   * Returns the `balance_in_cents` of the Subscription's Pending Discount, Service Credit, and
   * Prepayment accounts, as well as the sum of the Subscription's open, payable invoices.
   *
   * @param subscriptionId  The Chargify id of the subscription
   * @return Response from the API call
   */
  async readAccountBalances(
    subscriptionId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AccountBalances>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
    });
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/account_balances.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(accountBalancesSchema, requestOptions);
  }

  /**
   * ## Create Prepayment
   *
   * In order to specify a prepayment made against a subscription, specify the `amount, memo, details,
   * method`.
   *
   * When the `method` specified is `"credit_card_on_file"`, the prepayment amount will be collected
   * using the default credit card payment profile and applied to the prepayment account balance.  This
   * is especially useful for manual replenishment of prepaid subscriptions.
   *
   * Please note that you **can't** pass `amount_in_cents`.
   *
   *
   * @param subscriptionId  The Chargify id of the subscription
   * @param body
   * @return Response from the API call
   */
  async createPrepayment(
    subscriptionId: number,
    body?: CreatePrepaymentRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreatePrepaymentResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      body: [body, optional(createPrepaymentRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/prepayments.json`;
    req.throwOn(
      422,
      ApiError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(createPrepaymentResponseSchema, requestOptions);
  }

  /**
   * This request will list a subscription's prepayments.
   *
   * @param subscriptionId  The Chargify id of the subscription
   * @param page            Result records are organized in pages. By default, the
   *                                                        first page of results is displayed. The page parameter
   *                                                        specifies a page number of results to fetch. You can start
   *                                                        navigating through the pages to consume the results. You do
   *                                                        this by passing in a page parameter. Retrieve the next page
   *                                                        by adding ?page=2 to the query string. If there are no
   *                                                        results to return, then an empty result set will be
   *                                                        returned. Use in query `page=1`.
   * @param perPage         This parameter indicates how many records to fetch in each
   *                                                        request. Default value is 20. The maximum allowed values is
   *                                                        200; any per_page value over 200 will be changed to 200.
   *                                                        Use in query `per_page=200`.
   * @param filter          Filter to use for List Prepayments operations
   * @return Response from the API call
   */
  async listPrepayments(
    {
      subscriptionId,
      page,
      perPage,
      filter,
    }: {
      subscriptionId: number;
      page?: number;
      perPage?: number;
      filter?: ListPrepaymentsFilter;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PrepaymentsResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      filter: [filter, optional(listPrepaymentsFilterSchema)],
    });
    req.query('page', mapped.page);
    req.query('per_page', mapped.perPage);
    req.query('filter', mapped.filter);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/prepayments.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(prepaymentsResponseSchema, requestOptions);
  }

  /**
   * Credit will be added to the subscription in the amount specified in the request body. The credit is
   * subsequently applied to the next generated invoice.
   *
   * @param subscriptionId  The Chargify id of the subscription
   * @param body
   * @return Response from the API call
   */
  async issueServiceCredit(
    subscriptionId: number,
    body?: IssueServiceCreditRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ServiceCredit>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      body: [body, optional(issueServiceCreditRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/service_credits.json`;
    req.throwOn(
      422,
      ApiError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(serviceCreditSchema, requestOptions);
  }

  /**
   * Credit will be removed from the subscription in the amount specified in the request body. The credit
   * amount being deducted must be equal to or less than the current credit balance.
   *
   * @param subscriptionId  The Chargify id of the subscription
   * @param body
   * @return Response from the API call
   */
  async deductServiceCredit(
    subscriptionId: number,
    body?: DeductServiceCreditRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      body: [body, optional(deductServiceCreditRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/service_credit_deductions.json`;
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
   * This endpoint will refund, completely or partially, a particular prepayment applied to a
   * subscription. The `prepayment_id` will be the account transaction ID of the original payment. The
   * prepayment must have some amount remaining in order to be refunded.
   *
   * The amount may be passed either as a decimal, with `amount`, or an integer in cents, with
   * `amount_in_cents`.
   *
   * @param subscriptionId  The Chargify id of the subscription
   * @param prepaymentId    id of prepayment
   * @param body
   * @return Response from the API call
   */
  async refundPrepayment(
    subscriptionId: number,
    prepaymentId: bigint,
    body?: RefundPrepaymentRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PrepaymentResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      prepaymentId: [prepaymentId, bigint()],
      body: [body, optional(refundPrepaymentRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/prepayments/${mapped.prepaymentId}/refunds.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.throwOn(
      400,
      RefundPrepaymentBaseErrorsResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.throwOn(
      422,
      ApiError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(prepaymentResponseSchema, requestOptions);
  }
}
