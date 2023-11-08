/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, RequestOptions } from '../core';
import { SingleErrorResponseError } from '../errors/singleErrorResponseError';
import {
  BatchJobResponse,
  batchJobResponseSchema,
} from '../models/batchJobResponse';
import { Invoice, invoiceSchema } from '../models/invoice';
import {
  ProformaInvoice,
  proformaInvoiceSchema,
} from '../models/proformaInvoice';
import { Subscription, subscriptionSchema } from '../models/subscription';
import { array, number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class APIExportsController extends BaseController {
  /**
   * This API returns an array of exported proforma invoices for a provided `batch_id`. Pay close
   * attention to pagination in order to control responses from the server.
   *
   * Example: `GET https://{subdomain}.chargify.com/api_exports/proforma_invoices/123/rows?
   * per_page=10000&page=1`.
   *
   * @param batchId  Id of a Batch Job.
   * @param perPage  This parameter indicates how many records to fetch in each request.  Default value is
   *                           100.  The maximum allowed values is 10000; any per_page value over 10000 will be changed
   *                           to 10000.
   * @param page     Result records are organized in pages. By default, the first page of results is
   *                           displayed. The page parameter specifies a page number of results to fetch. You can start
   *                           navigating through the pages to consume the results. You do this by passing in a page
   *                           parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no
   *                           results to return, then an empty result set will be returned. Use in query `page=1`.
   * @return Response from the API call
   */
  async listExportedProformaInvoices({
    batchId,
    perPage,
    page,
  }: {
    batchId: string,
    perPage?: number,
    page?: number,
  },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProformaInvoice[]>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      batchId: [batchId, string()],
      perPage: [perPage, optional(number())],
      page: [page, optional(number())],
    });
    req.query('per_page', mapped.perPage);
    req.query('page', mapped.page);
    req.appendTemplatePath`/api_exports/proforma_invoices/${mapped.batchId}/rows.json`;
    req.throwOn(404, ApiError, 'Not Found');
    return req.callAsJson(array(proformaInvoiceSchema), requestOptions);
  }

  /**
   * This API returns an array of exported invoices for a provided `batch_id`. Pay close attention to
   * pagination in order to control responses from the server.
   *
   * Example: `GET https://{subdomain}.chargify.com/api_exports/invoices/123/rows?per_page=10000&page=1`.
   *
   * @param batchId  Id of a Batch Job.
   * @param perPage  This parameter indicates how many records to fetch in each request.  Default value is
   *                           100.  The maximum allowed values is 10000; any per_page value over 10000 will be changed
   *                           to 10000.
   * @param page     Result records are organized in pages. By default, the first page of results is
   *                           displayed. The page parameter specifies a page number of results to fetch. You can start
   *                           navigating through the pages to consume the results. You do this by passing in a page
   *                           parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no
   *                           results to return, then an empty result set will be returned. Use in query `page=1`.
   * @return Response from the API call
   */
  async listExportedInvoices({
    batchId,
    perPage,
    page,
  }: {
    batchId: string,
    perPage?: number,
    page?: number,
  },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Invoice[]>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      batchId: [batchId, string()],
      perPage: [perPage, optional(number())],
      page: [page, optional(number())],
    });
    req.query('per_page', mapped.perPage);
    req.query('page', mapped.page);
    req.appendTemplatePath`/api_exports/invoices/${mapped.batchId}/rows.json`;
    req.throwOn(404, ApiError, 'Not Found');
    return req.callAsJson(array(invoiceSchema), requestOptions);
  }

  /**
   * This API returns an array of exported subscriptions for a provided `batch_id`. Pay close attention
   * to pagination in order to control responses from the server.
   *
   * Example: `GET https://{subdomain}.chargify.com/api_exports/subscriptions/123/rows?
   * per_page=200&page=1`.
   *
   * @param batchId  Id of a Batch Job.
   * @param perPage  This parameter indicates how many records to fetch in each request.  Default value is
   *                           100.  The maximum allowed values is 10000; any per_page value over 10000 will be changed
   *                           to 10000.
   * @param page     Result records are organized in pages. By default, the first page of results is
   *                           displayed. The page parameter specifies a page number of results to fetch. You can start
   *                           navigating through the pages to consume the results. You do this by passing in a page
   *                           parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no
   *                           results to return, then an empty result set will be returned. Use in query `page=1`.
   * @return Response from the API call
   */
  async listExportedSubscriptions({
    batchId,
    perPage,
    page,
  }: {
    batchId: string,
    perPage?: number,
    page?: number,
  },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Subscription[]>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      batchId: [batchId, string()],
      perPage: [perPage, optional(number())],
      page: [page, optional(number())],
    });
    req.query('per_page', mapped.perPage);
    req.query('page', mapped.page);
    req.appendTemplatePath`/api_exports/subscriptions/${mapped.batchId}/rows.json`;
    req.throwOn(404, ApiError, 'Not Found');
    return req.callAsJson(array(subscriptionSchema), requestOptions);
  }

  /**
   * This API creates a proforma invoices export and returns a batchjob object.
   *
   * It is only available for Relationship Invoicing architecture.
   *
   * @return Response from the API call
   */
  async exportProformaInvoices(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BatchJobResponse>> {
    const req = this.createRequest(
      'POST',
      '/api_exports/proforma_invoices.json'
    );
    req.throwOn(404, ApiError, 'Not Found');
    req.throwOn(409, SingleErrorResponseError, 'Conflict');
    return req.callAsJson(batchJobResponseSchema, requestOptions);
  }

  /**
   * This API creates an invoices export and returns a batchjob object.
   *
   * @return Response from the API call
   */
  async exportInvoices(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BatchJobResponse>> {
    const req = this.createRequest('POST', '/api_exports/invoices.json');
    req.throwOn(404, ApiError, 'Not Found');
    req.throwOn(409, SingleErrorResponseError, 'Conflict');
    return req.callAsJson(batchJobResponseSchema, requestOptions);
  }

  /**
   * This API creates a subscriptions export and returns a batchjob object.
   *
   * @return Response from the API call
   */
  async exportSubscriptions(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BatchJobResponse>> {
    const req = this.createRequest('POST', '/api_exports/subscriptions.json');
    req.throwOn(409, SingleErrorResponseError, 'Conflict');
    return req.callAsJson(batchJobResponseSchema, requestOptions);
  }

  /**
   * This API returns a batchjob object for proforma invoices export.
   *
   * @param batchId  Id of a Batch Job.
   * @return Response from the API call
   */
  async readProformaInvoicesExport(
    batchId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BatchJobResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ batchId: [batchId, string()] });
    req.appendTemplatePath`/api_exports/proforma_invoices/${mapped.batchId}.json`;
    req.throwOn(404, ApiError, 'Not Found');
    return req.callAsJson(batchJobResponseSchema, requestOptions);
  }

  /**
   * This API returns a batchjob object for invoices export.
   *
   * @param batchId  Id of a Batch Job.
   * @return Response from the API call
   */
  async readInvoicesExport(
    batchId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BatchJobResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ batchId: [batchId, string()] });
    req.appendTemplatePath`/api_exports/invoices/${mapped.batchId}.json`;
    req.throwOn(404, ApiError, 'Not Found');
    return req.callAsJson(batchJobResponseSchema, requestOptions);
  }

  /**
   * This API returns a batchjob object for subscriptions export.
   *
   * @param batchId  Id of a Batch Job.
   * @return Response from the API call
   */
  async readSubscriptionsExport(
    batchId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BatchJobResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ batchId: [batchId, string()] });
    req.appendTemplatePath`/api_exports/subscriptions/${mapped.batchId}.json`;
    req.throwOn(404, ApiError, 'Not Found');
    return req.callAsJson(batchJobResponseSchema, requestOptions);
  }
}
