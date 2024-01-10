/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, RequestOptions } from '../core';
import { ErrorListResponseError } from '../errors/errorListResponseError';
import {
  DeductServiceCreditRequest,
  deductServiceCreditRequestSchema,
} from '../models/deductServiceCreditRequest';
import {
  IssueServiceCreditRequest,
  issueServiceCreditRequestSchema,
} from '../models/issueServiceCreditRequest';
import {
  ListSubscriptionGroupPrepaymentDateField,
  listSubscriptionGroupPrepaymentDateFieldSchema,
} from '../models/listSubscriptionGroupPrepaymentDateField';
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
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(
      subscriptionGroupPrepaymentResponseSchema,
      requestOptions
    );
  }

  /**
   * This request will list a subscription group's prepayments.
   *
   * @param uid                The uid of the subscription group
   * @param filterDateField    The type of filter you would like to apply
   *                                                                       to your search. Use in query:
   *                                                                       `filter[date_field]=created_at`.
   * @param filterEndDate      The end date (format YYYY-MM-DD) with which
   *                                                                       to filter the date_field. Returns
   *                                                                       prepayments with a timestamp up to and
   *                                                                       including 11:59:59PM in your site's time
   *                                                                       zone on the date specified. Use in query:
   *                                                                       `filter[end_date]=2011-12-15`.
   * @param filterStartDate    The start date (format YYYY-MM-DD) with
   *                                                                       which to filter the date_field. Returns
   *                                                                       prepayments with a timestamp at or after
   *                                                                       midnight (12:00:00 AM) in your site's time
   *                                                                       zone on the date specified. Use in query:
   *                                                                       `filter[start_date]=2011-12-15`.
   * @param page               Result records are organized in pages. By
   *                                                                       default, the first page of results is
   *                                                                       displayed. The page parameter specifies a
   *                                                                       page number of results to fetch. You can
   *                                                                       start navigating through the pages to
   *                                                                       consume the results. You do this by passing
   *                                                                       in a page parameter. Retrieve the next page
   *                                                                       by adding ?page=2 to the query string. If
   *                                                                       there are no results to return, then an
   *                                                                       empty result set will be returned. Use in
   *                                                                       query `page=1`.
   * @param perPage            This parameter indicates how many records
   *                                                                       to fetch in each request. Default value is
   *                                                                       20. The maximum allowed values is 200; any
   *                                                                       per_page value over 200 will be changed to
   *                                                                       200. Use in query `per_page=200`.
   * @return Response from the API call
   */
  async listPrepaymentsForSubscriptionGroup({
    uid,
    filterDateField,
    filterEndDate,
    filterStartDate,
    page,
    perPage,
  }: {
    uid: string,
    filterDateField?: ListSubscriptionGroupPrepaymentDateField,
    filterEndDate?: string,
    filterStartDate?: string,
    page?: number,
    perPage?: number,
  },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListSubscriptionGroupPrepaymentResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      uid: [uid, string()],
      filterDateField: [
        filterDateField,
        optional(listSubscriptionGroupPrepaymentDateFieldSchema),
      ],
      filterEndDate: [filterEndDate, optional(string())],
      filterStartDate: [filterStartDate, optional(string())],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
    });
    req.query('filter[date_field]', mapped.filterDateField);
    req.query('filter[end_date]', mapped.filterEndDate);
    req.query('filter[start_date]', mapped.filterStartDate);
    req.query('page', mapped.page);
    req.query('per_page', mapped.perPage);
    req.appendTemplatePath`/subscription_groups/${mapped.uid}/prepayments.json`;
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(403, ApiError, 'Forbidden');
    req.throwOn(404, ApiError, 'Not Found');
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
  async issueSubscriptionGroupServiceCredits(
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
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
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
  async deductSubscriptionGroupServiceCredits(
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
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(serviceCreditSchema, requestOptions);
  }
}
