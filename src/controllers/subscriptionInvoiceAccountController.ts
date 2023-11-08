/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, RequestOptions } from '../core';
import { ErrorListResponseError } from '../errors/errorListResponseError';
import {
  RefundPrepaymentAggregatedErrorsResponseError,
} from '../errors/refundPrepaymentAggregatedErrorsResponseError';
import {
  RefundPrepaymentBaseErrorsResponseError,
} from '../errors/refundPrepaymentBaseErrorsResponseError';
import {
  AccountBalances,
  accountBalancesSchema,
} from '../models/accountBalances';
import { BasicDateField, basicDateFieldSchema } from '../models/basicDateField';
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
import { number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class SubscriptionInvoiceAccountController extends BaseController {
  /**
   * Returns the `balance_in_cents` of the Subscription's Pending Discount, Service Credit, and
   * Prepayment accounts, as well as the sum of the Subscription's open, payable invoices.
   *
   * @param subscriptionId  The Chargify id of the subscription
   * @return Response from the API call
   */
  async readAccountBalances(
    subscriptionId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AccountBalances>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
    });
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/account_balances.json`;
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
    subscriptionId: string,
    body?: CreatePrepaymentRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreatePrepaymentResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      body: [body, optional(createPrepaymentRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/prepayments.json`;
    return req.callAsJson(createPrepaymentResponseSchema, requestOptions);
  }

  /**
   * This request will list a subscription's prepayments.
   *
   * @param subscriptionId     The Chargify id of the subscription
   * @param page               Result records are organized in pages. By default, the first page of
   *                                             results is displayed. The page parameter specifies a page number of
   *                                             results to fetch. You can start navigating through the pages to
   *                                             consume the results. You do this by passing in a page parameter.
   *                                             Retrieve the next page by adding ?page=2 to the query string. If there
   *                                             are no results to return, then an empty result set will be returned.
   *                                             Use in query `page=1`.
   * @param perPage            This parameter indicates how many records to fetch in each request.
   *                                             Default value is 20. The maximum allowed values is 200; any per_page
   *                                             value over 200 will be changed to 200. Use in query `per_page=200`.
   * @param filterDateField    The type of filter you would like to apply to your search. created_at
   *                                             - Time when prepayment was created. application_at - Time when
   *                                             prepayment was applied to invoice. Use in query
   *                                             `filter[date_field]=created_at`.
   * @param filterStartDate    The start date (format YYYY-MM-DD) with which to filter the
   *                                             date_field. Returns prepayments with a timestamp at or after midnight
   *                                             (12:00:00 AM) in your site’s time zone on the date specified. Use in
   *                                             query `filter[start_date]=2011-12-15`.
   * @param filterEndDate      The end date (format YYYY-MM-DD) with which to filter the date_field.
   *                                             Returns prepayments with a timestamp up to and including 11:59:59PM in
   *                                             your site’s time zone on the date specified. Use in query
   *                                             `filter[end_date]=2011-12-15`.
   * @return Response from the API call
   */
  async listPrepayments({
    subscriptionId,
    page,
    perPage,
    filterDateField,
    filterStartDate,
    filterEndDate,
  }: {
    subscriptionId: string,
    page?: number,
    perPage?: number,
    filterDateField?: BasicDateField,
    filterStartDate?: string,
    filterEndDate?: string,
  },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PrepaymentsResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      filterDateField: [filterDateField, optional(basicDateFieldSchema)],
      filterStartDate: [filterStartDate, optional(string())],
      filterEndDate: [filterEndDate, optional(string())],
    });
    req.query('page', mapped.page);
    req.query('per_page', mapped.perPage);
    req.query('filter[date_field]', mapped.filterDateField);
    req.query('filter[start_date]', mapped.filterStartDate);
    req.query('filter[end_date]', mapped.filterEndDate);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/prepayments.json`;
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(403, ApiError, 'Forbidden');
    req.throwOn(404, ApiError, 'Not Found');
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
    subscriptionId: string,
    body?: IssueServiceCreditRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ServiceCredit>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      body: [body, optional(issueServiceCreditRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/service_credits.json`;
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
    subscriptionId: string,
    body?: DeductServiceCreditRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      body: [body, optional(deductServiceCreditRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/service_credit_deductions.json`;
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
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
    subscriptionId: string,
    prepaymentId: string,
    body?: RefundPrepaymentRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PrepaymentResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      prepaymentId: [prepaymentId, string()],
      body: [body, optional(refundPrepaymentRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/prepayments/${mapped.prepaymentId}/refunds.json`;
    req.throwOn(400, RefundPrepaymentBaseErrorsResponseError, 'Bad Request');
    req.throwOn(404, ApiError, 'Not Found');
    req.throwOn(422, RefundPrepaymentAggregatedErrorsResponseError, 'Unprocessable Entity');
    return req.callAsJson(prepaymentResponseSchema, requestOptions);
  }
}
