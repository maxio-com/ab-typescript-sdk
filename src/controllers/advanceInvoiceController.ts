/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, RequestOptions } from '../core';
import { ErrorListResponseError } from '../errors/errorListResponseError';
import { Invoice, invoiceSchema } from '../models/invoice';
import {
  IssueAdvanceInvoiceRequest,
  issueAdvanceInvoiceRequestSchema,
} from '../models/issueAdvanceInvoiceRequest';
import {
  VoidInvoiceRequest,
  voidInvoiceRequestSchema,
} from '../models/voidInvoiceRequest';
import { optional, string } from '../schema';
import { BaseController } from './baseController';

export class AdvanceInvoiceController extends BaseController {
  /**
   * Generate an invoice in advance for a subscription's next renewal date. [Please see our
   * docs](reference/Chargify-API.v1.yaml/components/schemas/Invoice) for more information on advance
   * invoices, including eligibility on generating one; for the most part, they function like any other
   * invoice, except they are issued early and have special behavior upon being voided.
   * A subscription may only have one advance invoice per billing period. Attempting to issue an advance
   * invoice when one already exists will return an error.
   * That said, regeneration of the invoice may be forced with the params `force: true`, which will void
   * an advance invoice if one exists and generate a new one. If no advance invoice exists, a new one
   * will be generated.
   * We recommend using either the create or preview endpoints for proforma invoices to preview this
   * advance invoice before using this endpoint to generate it.
   *
   *
   * @param subscriptionId  The Chargify id of the subscription
   * @param body
   * @return Response from the API call
   */
  async issueAdvanceInvoice(
    subscriptionId: string,
    body?: IssueAdvanceInvoiceRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Invoice>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      body: [body, optional(issueAdvanceInvoiceRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/advance_invoice/issue.json`;
    req.throwOn(403, ApiError, 'Forbidden');
    req.throwOn(404, ApiError, 'Not Found');
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
    return req.callAsJson(invoiceSchema, requestOptions);
  }

  /**
   * Once an advance invoice has been generated for a subscription's upcoming renewal, it can be viewed
   * through this endpoint. There can only be one advance invoice per subscription per billing cycle.
   *
   * @param subscriptionId  The Chargify id of the subscription
   * @return Response from the API call
   */
  async readAdvanceInvoice(
    subscriptionId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Invoice>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
    });
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/advance_invoice.json`;
    req.throwOn(403, ApiError, 'Forbidden');
    req.throwOn(404, ApiError, 'Not Found');
    return req.callAsJson(invoiceSchema, requestOptions);
  }

  /**
   * Void a subscription's existing advance invoice. Once voided, it can later be regenerated if desired.
   * A `reason` is required in order to void, and the invoice must have an open status. Voiding will
   * cause any prepayments and credits that were applied to the invoice to be returned to the
   * subscription. For a full overview of the impact of voiding, please [see our help
   * docs](reference/Chargify-API.v1.yaml/components/schemas/Invoice).
   *
   * @param subscriptionId  The Chargify id of the subscription
   * @param body
   * @return Response from the API call
   */
  async voidAdvanceInvoice(
    subscriptionId: string,
    body?: VoidInvoiceRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Invoice>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      body: [body, optional(voidInvoiceRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/advance_invoice/void.json`;
    req.throwOn(403, ApiError, 'Forbidden');
    req.throwOn(404, ApiError, 'Not Found');
    return req.callAsJson(invoiceSchema, requestOptions);
  }
}
