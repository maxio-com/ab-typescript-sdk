/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core.js';
import { Invoice, invoiceSchema } from '../models/invoice.js';
import {
  IssueAdvanceInvoiceRequest,
  issueAdvanceInvoiceRequestSchema,
} from '../models/issueAdvanceInvoiceRequest.js';
import {
  VoidInvoiceRequest,
  voidInvoiceRequestSchema,
} from '../models/voidInvoiceRequest.js';
import { number, optional } from '../schema.js';
import { BaseController } from './baseController.js';
import { ApiError } from '@apimatic/core';
import { ErrorListResponseError } from '../errors/errorListResponseError.js';

export class AdvanceInvoiceController extends BaseController {
  /**
   * Issues an invoice in advance for a subscription's next renewal date. For the most part, advance
   * invoices function like any other invoice, except they are issued early and have special behavior
   * upon being voided. For more information on advance invoices, including eligibility for generating
   * one, see [Issue Invoice In Advance](https://maxio.zendesk.com/hc/en-us/articles/24252026404749-Issue-
   * Invoice-In-Advance).
   *
   * A subscription can only have one advance invoice per billing period. Attempting to issue an advance
   * invoice when one already exists returns an error.
   *
   * Regeneration of the invoice can be forced with the params `force: true`, which voids an advance
   * invoice if one exists and generates a new one. If no advance invoice exists, a new one is generated.
   *
   * Consider using either the create or preview endpoints for proforma invoices to preview this advance
   * invoice before using this endpoint to generate it.
   *
   * @param subscriptionId  The Chargify id of the subscription.
   * @param body
   * @return Response from the API call
   */
  async issueAdvanceInvoice(
    subscriptionId: number,
    body?: IssueAdvanceInvoiceRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Invoice>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      body: [body, optional(issueAdvanceInvoiceRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/advance_invoice/issue.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(invoiceSchema, requestOptions);
  }

  /**
   * Returns the advance invoice generated for a subscription's upcoming renewal. There can only be one
   * advance invoice per subscription per billing cycle.
   *
   * @param subscriptionId  The Chargify id of the subscription.
   * @return Response from the API call
   */
  async readAdvanceInvoice(
    subscriptionId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Invoice>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
    });
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/advance_invoice.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(invoiceSchema, requestOptions);
  }

  /**
   * Voids a subscription's existing advance invoice. Once voided, it can later be regenerated if desired.
   *
   * A `reason` is required to void, and the invoice must have an open status. Voiding causes any
   * prepayments and credits that were applied to the invoice to be returned to the subscription.
   *
   * For a full overview of the impact of voiding, see [Invoice]($m/Invoice).
   *
   * @param subscriptionId  The Chargify id of the subscription.
   * @param body
   * @return Response from the API call
   */
  async voidAdvanceInvoice(
    subscriptionId: number,
    body?: VoidInvoiceRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Invoice>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      body: [body, optional(voidInvoiceRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/advance_invoice/void.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(invoiceSchema, requestOptions);
  }
}
