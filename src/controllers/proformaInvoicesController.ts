/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, commaPrefix, RequestOptions } from '../core';
import {
  CreateSignupProformaPreviewInclude,
  createSignupProformaPreviewIncludeSchema,
} from '../models/createSignupProformaPreviewInclude';
import {
  CreateSubscriptionRequest,
  createSubscriptionRequestSchema,
} from '../models/createSubscriptionRequest';
import { Direction, directionSchema } from '../models/direction';
import {
  ListProformaInvoicesResponse,
  listProformaInvoicesResponseSchema,
} from '../models/listProformaInvoicesResponse';
import {
  ProformaInvoice,
  proformaInvoiceSchema,
} from '../models/proformaInvoice';
import {
  ProformaInvoiceStatus,
  proformaInvoiceStatusSchema,
} from '../models/proformaInvoiceStatus';
import {
  SignupProformaPreviewResponse,
  signupProformaPreviewResponseSchema,
} from '../models/signupProformaPreviewResponse';
import {
  VoidInvoiceRequest,
  voidInvoiceRequestSchema,
} from '../models/voidInvoiceRequest';
import { boolean, number, optional, string } from '../schema';
import { BaseController } from './baseController';
import { ApiError } from '@apimatic/core';
import { ErrorArrayMapResponseError } from '../errors/errorArrayMapResponseError';
import { ErrorListResponseError } from '../errors/errorListResponseError';
import { ProformaBadRequestErrorResponseError } from '../errors/proformaBadRequestErrorResponseError';

export class ProformaInvoicesController extends BaseController {
  /**
   * This endpoint will trigger the creation of a consolidated proforma invoice asynchronously. It will
   * return a 201 with no message, or a 422 with any errors. To find and view the new consolidated
   * proforma invoice, you may poll the subscription group listing for proforma invoices; only one
   * consolidated proforma invoice may be created per group at a time.
   *
   * If the information becomes outdated, simply void the old consolidated proforma invoice and generate
   * a new one.
   *
   * ## Restrictions
   *
   * Proforma invoices are only available on Relationship Invoicing sites. To create a proforma invoice,
   * the subscription must not be prepaid, and must be in a live state.
   *
   * @param uid The uid of the subscription group
   * @return Response from the API call
   */
  async createConsolidatedProformaInvoice(
    uid: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({ uid: [uid, string()] });
    req.appendTemplatePath`/subscription_groups/${mapped.uid}/proforma_invoices.json`;
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.call(requestOptions);
  }

  /**
   * Only proforma invoices with a `consolidation_level` of parent are returned.
   *
   * By default, proforma invoices returned on the index will only include totals, not detailed
   * breakdowns for `line_items`, `discounts`, `taxes`, `credits`, `payments`, `custom_fields`. To
   * include breakdowns, pass the specific field as a key in the query with a value set to true.
   *
   *
   * @param uid           The uid of the subscription group
   * @param lineItems     Include line items data
   * @param discounts     Include discounts data
   * @param taxes         Include taxes data
   * @param credits       Include credits data
   * @param payments      Include payments data
   * @param customFields  Include custom fields data
   * @return Response from the API call
   */
  async listSubscriptionGroupProformaInvoices(
    {
      uid,
      lineItems,
      discounts,
      taxes,
      credits,
      payments,
      customFields,
    }: {
      uid: string;
      lineItems?: boolean;
      discounts?: boolean;
      taxes?: boolean;
      credits?: boolean;
      payments?: boolean;
      customFields?: boolean;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListProformaInvoicesResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      uid: [uid, string()],
      lineItems: [lineItems, optional(boolean())],
      discounts: [discounts, optional(boolean())],
      taxes: [taxes, optional(boolean())],
      credits: [credits, optional(boolean())],
      payments: [payments, optional(boolean())],
      customFields: [customFields, optional(boolean())],
    });
    req.query('line_items', mapped.lineItems, commaPrefix);
    req.query('discounts', mapped.discounts, commaPrefix);
    req.query('taxes', mapped.taxes, commaPrefix);
    req.query('credits', mapped.credits, commaPrefix);
    req.query('payments', mapped.payments, commaPrefix);
    req.query('custom_fields', mapped.customFields, commaPrefix);
    req.appendTemplatePath`/subscription_groups/${mapped.uid}/proforma_invoices.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(listProformaInvoicesResponseSchema, requestOptions);
  }

  /**
   * Use this endpoint to read the details of an existing proforma invoice.
   *
   * ## Restrictions
   *
   * Proforma invoices are only available on Relationship Invoicing sites.
   *
   * @param proformaInvoiceUid   The uid of the proforma invoice
   * @return Response from the API call
   */
  async readProformaInvoice(
    proformaInvoiceUid: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProformaInvoice>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      proformaInvoiceUid: [proformaInvoiceUid, string()],
    });
    req.appendTemplatePath`/proforma_invoices/${mapped.proformaInvoiceUid}.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(proformaInvoiceSchema, requestOptions);
  }

  /**
   * This endpoint will create a proforma invoice and return it as a response. If the information becomes
   * outdated, simply void the old proforma invoice and generate a new one.
   *
   * If you would like to preview the next billing amounts without generating a full proforma invoice,
   * please use the renewal preview endpoint.
   *
   * ## Restrictions
   *
   * Proforma invoices are only available on Relationship Invoicing sites. To create a proforma invoice,
   * the subscription must not be in a group, must not be prepaid, and must be in a live state.
   *
   * @param subscriptionId  The Chargify id of the subscription
   * @return Response from the API call
   */
  async createProformaInvoice(
    subscriptionId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProformaInvoice>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
    });
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/proforma_invoices.json`;
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(proformaInvoiceSchema, requestOptions);
  }

  /**
   * By default, proforma invoices returned on the index will only include totals, not detailed
   * breakdowns for `line_items`, `discounts`, `taxes`, `credits`, `payments`, or `custom_fields`. To
   * include breakdowns, pass the specific field as a key in the query with a value set to `true`.
   *
   * @param subscriptionId  The Chargify id of the subscription
   * @param startDate       The beginning date range for the invoice's Due Date, in the YYYY-
   *                                                 MM-DD format.
   * @param endDate         The ending date range for the invoice's Due Date, in the YYYY-MM-
   *                                                 DD format.
   * @param status          The current status of the invoice.  Allowed Values: draft, open,
   *                                                 paid, pending, voided
   * @param page            Result records are organized in pages. By default, the first page
   *                                                 of results is displayed. The page parameter specifies a page
   *                                                 number of results to fetch. You can start navigating through the
   *                                                 pages to consume the results. You do this by passing in a page
   *                                                 parameter. Retrieve the next page by adding ?page=2 to the query
   *                                                 string. If there are no results to return, then an empty result
   *                                                 set will be returned. Use in query `page=1`.
   * @param perPage         This parameter indicates how many records to fetch in each
   *                                                 request. Default value is 20. The maximum allowed values is 200;
   *                                                 any per_page value over 200 will be changed to 200. Use in query
   *                                                 `per_page=200`.
   * @param direction       The sort direction of the returned invoices.
   * @param lineItems       Include line items data
   * @param discounts       Include discounts data
   * @param taxes           Include taxes data
   * @param credits         Include credits data
   * @param payments        Include payments data
   * @param customFields    Include custom fields data
   * @return Response from the API call
   */
  async listProformaInvoices(
    {
      subscriptionId,
      startDate,
      endDate,
      status,
      page,
      perPage,
      direction,
      lineItems,
      discounts,
      taxes,
      credits,
      payments,
      customFields,
    }: {
      subscriptionId: number;
      startDate?: string;
      endDate?: string;
      status?: ProformaInvoiceStatus;
      page?: number;
      perPage?: number;
      direction?: Direction;
      lineItems?: boolean;
      discounts?: boolean;
      taxes?: boolean;
      credits?: boolean;
      payments?: boolean;
      customFields?: boolean;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListProformaInvoicesResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      startDate: [startDate, optional(string())],
      endDate: [endDate, optional(string())],
      status: [status, optional(proformaInvoiceStatusSchema)],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      direction: [direction, optional(directionSchema)],
      lineItems: [lineItems, optional(boolean())],
      discounts: [discounts, optional(boolean())],
      taxes: [taxes, optional(boolean())],
      credits: [credits, optional(boolean())],
      payments: [payments, optional(boolean())],
      customFields: [customFields, optional(boolean())],
    });
    req.query('start_date', mapped.startDate, commaPrefix);
    req.query('end_date', mapped.endDate, commaPrefix);
    req.query('status', mapped.status, commaPrefix);
    req.query('page', mapped.page, commaPrefix);
    req.query('per_page', mapped.perPage, commaPrefix);
    req.query('direction', mapped.direction, commaPrefix);
    req.query('line_items', mapped.lineItems, commaPrefix);
    req.query('discounts', mapped.discounts, commaPrefix);
    req.query('taxes', mapped.taxes, commaPrefix);
    req.query('credits', mapped.credits, commaPrefix);
    req.query('payments', mapped.payments, commaPrefix);
    req.query('custom_fields', mapped.customFields, commaPrefix);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/proforma_invoices.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(listProformaInvoicesResponseSchema, requestOptions);
  }

  /**
   * This endpoint will void a proforma invoice that has the status "draft".
   *
   * ## Restrictions
   *
   * Proforma invoices are only available on Relationship Invoicing sites.
   *
   * Only proforma invoices that have the appropriate status may be reopened. If the invoice identified
   * by {uid} does not have the appropriate status, the response will have HTTP status code 422 and an
   * error message.
   *
   * A reason for the void operation is required to be included in the request body. If one is not
   * provided, the response will have HTTP status code 422 and an error message.
   *
   * @param proformaInvoiceUid   The uid of the proforma invoice
   * @param body
   * @return Response from the API call
   */
  async voidProformaInvoice(
    proformaInvoiceUid: string,
    body?: VoidInvoiceRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProformaInvoice>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      proformaInvoiceUid: [proformaInvoiceUid, string()],
      body: [body, optional(voidInvoiceRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/proforma_invoices/${mapped.proformaInvoiceUid}/void.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(proformaInvoiceSchema, requestOptions);
  }

  /**
   * Return a preview of the data that will be included on a given subscription's proforma invoice if one
   * were to be generated. It will have similar line items and totals as a renewal preview, but the
   * response will be presented in the format of a proforma invoice. Consequently it will include
   * additional information such as the name and addresses that will appear on the proforma invoice.
   *
   * The preview endpoint is subject to all the same conditions as the proforma invoice endpoint. For
   * example, previews are only available on the Relationship Invoicing architecture, and previews cannot
   * be made for end-of-life subscriptions.
   *
   * If all the data returned in the preview is as expected, you may then create a static proforma
   * invoice and send it to your customer. The data within a preview will not be saved and will not be
   * accessible after the call is made.
   *
   * Alternatively, if you have some proforma invoices already, you may make a preview call to determine
   * whether any billing information for the subscription's upcoming renewal has changed.
   *
   * @param subscriptionId  The Chargify id of the subscription
   * @return Response from the API call
   */
  async previewProformaInvoice(
    subscriptionId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProformaInvoice>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
    });
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/proforma_invoices/preview.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(proformaInvoiceSchema, requestOptions);
  }

  /**
   * This endpoint is only available for Relationship Invoicing sites. It cannot be used to create
   * consolidated proforma invoices or preview prepaid subscriptions.
   *
   * Create a proforma invoice to preview costs before a subscription's signup. Like other proforma
   * invoices, it can be emailed to the customer, voided, and publicly viewed on the chargifypay domain.
   *
   * Pass a payload that resembles a subscription create or signup preview request. For example, you can
   * specify components, coupons/a referral, offers, custom pricing, and an existing customer or payment
   * profile to populate a shipping or billing address.
   *
   * A product and customer first name, last name, and email are the minimum requirements. We recommend
   * associating the proforma invoice with a customer_id to easily find their proforma invoices, since
   * the subscription_id will always be blank.
   *
   * @param body
   * @return Response from the API call
   */
  async createSignupProformaInvoice(
    body?: CreateSubscriptionRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProformaInvoice>> {
    const req = this.createRequest(
      'POST',
      '/subscriptions/proforma_invoices.json'
    );
    const mapped = req.prepareArgs({
      body: [body, optional(createSubscriptionRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(
      400,
      ProformaBadRequestErrorResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.throwOn(
      422,
      ErrorArrayMapResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(proformaInvoiceSchema, requestOptions);
  }

  /**
   * This endpoint is only available for Relationship Invoicing sites. It cannot be used to create
   * consolidated proforma invoice previews or preview prepaid subscriptions.
   *
   * Create a signup preview in the format of a proforma invoice to preview costs before a subscription's
   * signup. You have the option of optionally previewing the first renewal's costs as well. The proforma
   * invoice preview will not be persisted.
   *
   * Pass a payload that resembles a subscription create or signup preview request. For example, you can
   * specify components, coupons/a referral, offers, custom pricing, and an existing customer or payment
   * profile to populate a shipping or billing address.
   *
   * A product and customer first name, last name, and email are the minimum requirements.
   *
   * @param include      Choose to include a proforma invoice preview for the
   *                                                           first renewal. Use in query
   *                                                           `include=next_proforma_invoice`.
   * @param body
   * @return Response from the API call
   */
  async previewSignupProformaInvoice(
    include?: CreateSignupProformaPreviewInclude,
    body?: CreateSubscriptionRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SignupProformaPreviewResponse>> {
    const req = this.createRequest(
      'POST',
      '/subscriptions/proforma_invoices/preview.json'
    );
    const mapped = req.prepareArgs({
      include: [include, optional(createSignupProformaPreviewIncludeSchema)],
      body: [body, optional(createSubscriptionRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.query('include', mapped.include, commaPrefix);
    req.json(mapped.body);
    req.throwOn(
      400,
      ProformaBadRequestErrorResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.throwOn(
      422,
      ErrorArrayMapResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(signupProformaPreviewResponseSchema, requestOptions);
  }
}
