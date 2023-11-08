/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, commaPrefix, RequestOptions } from '../core';
import { ErrorListResponseError } from '../errors/errorListResponseError';
import { NestedErrorResponseError } from '../errors/nestedErrorResponseError';
import {
  ConsolidatedInvoice,
  consolidatedInvoiceSchema,
} from '../models/consolidatedInvoice';
import {
  CreateInvoicePaymentRequest,
  createInvoicePaymentRequestSchema,
} from '../models/createInvoicePaymentRequest';
import {
  CreateInvoiceRequest,
  createInvoiceRequestSchema,
} from '../models/createInvoiceRequest';
import {
  CreateMultiInvoicePaymentRequest,
  createMultiInvoicePaymentRequestSchema,
} from '../models/createMultiInvoicePaymentRequest';
import { CreditNote, creditNoteSchema } from '../models/creditNote';
import {
  CustomerChangesPreviewResponse,
  customerChangesPreviewResponseSchema,
} from '../models/customerChangesPreviewResponse';
import { Direction, directionSchema } from '../models/direction';
import { Invoice, invoiceSchema } from '../models/invoice';
import {
  InvoiceDateField,
  invoiceDateFieldSchema,
} from '../models/invoiceDateField';
import {
  InvoiceEventType,
  invoiceEventTypeSchema,
} from '../models/invoiceEventType';
import {
  InvoiceResponse,
  invoiceResponseSchema,
} from '../models/invoiceResponse';
import {
  InvoiceSortField,
  invoiceSortFieldSchema,
} from '../models/invoiceSortField';
import {
  IssueInvoiceRequest,
  issueInvoiceRequestSchema,
} from '../models/issueInvoiceRequest';
import {
  ListCreditNotesResponse,
  listCreditNotesResponseSchema,
} from '../models/listCreditNotesResponse';
import {
  ListInvoiceEventsResponse,
  listInvoiceEventsResponseSchema,
} from '../models/listInvoiceEventsResponse';
import {
  ListInvoicesResponse,
  listInvoicesResponseSchema,
} from '../models/listInvoicesResponse';
import {
  MultiInvoicePaymentResponse,
  multiInvoicePaymentResponseSchema,
} from '../models/multiInvoicePaymentResponse';
import {
  PaymentResponse,
  paymentResponseSchema,
} from '../models/paymentResponse';
import {
  RecordPaymentRequest,
  recordPaymentRequestSchema,
} from '../models/recordPaymentRequest';
import {
  RefundInvoiceRequest,
  refundInvoiceRequestSchema,
} from '../models/refundInvoiceRequest';
import {
  SendInvoiceRequest,
  sendInvoiceRequestSchema,
} from '../models/sendInvoiceRequest';
import { Status, statusSchema } from '../models/status';
import {
  VoidInvoiceRequest,
  voidInvoiceRequestSchema,
} from '../models/voidInvoiceRequest';
import { array, boolean, number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class InvoicesController extends BaseController {
  /**
   * Refund an invoice, segment, or consolidated invoice.
   *
   * ## Partial Refund for Consolidated Invoice
   *
   * A refund less than the total of a consolidated invoice will be split across its segments.
   *
   * A $50.00 refund on a $100.00 consolidated invoice with one $60.00 and one $40.00 segment, the
   * refunded amount will be applied as 50% of each ($30.00 and $20.00 respectively).
   *
   * @param uid          The unique identifier for the invoice, this does not refer to
   *                                                    the public facing invoice number.
   * @param body
   * @return Response from the API call
   */
  async refundInvoice(
    uid: string,
    body?: RefundInvoiceRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Invoice>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      uid: [uid, string()],
      body: [body, optional(refundInvoiceRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/invoices/${mapped.uid}/refunds.json`;
    return req.callAsJson(invoiceSchema, requestOptions);
  }

  /**
   * By default, invoices returned on the index will only include totals, not detailed breakdowns for
   * `line_items`, `discounts`, `taxes`, `credits`, `payments`, `custom_fields`, or `refunds`. To include
   * breakdowns, pass the specific field as a key in the query with a value set to `true`.
   *
   * @param startDate              The start date (format YYYY-MM-DD) with which to filter the
   *                                                   date_field. Returns invoices with a timestamp at or after
   *                                                   midnight (12:00:00 AM) in your site’s time zone on the date
   *                                                   specified.
   * @param endDate                The end date (format YYYY-MM-DD) with which to filter the
   *                                                   date_field. Returns invoices with a timestamp up to and
   *                                                   including 11:59:59PM in your site’s time zone on the date
   *                                                   specified.
   * @param status                 The current status of the invoice.  Allowed Values: draft, open,
   *                                                   paid, pending, voided
   * @param subscriptionId         The subscription's ID.
   * @param subscriptionGroupUid   The UID of the subscription group you want to fetch
   *                                                   consolidated invoices for. This will return a paginated list of
   *                                                   consolidated invoices for the specified group.
   * @param page                   Result records are organized in pages. By default, the first
   *                                                   page of results is displayed. The page parameter specifies a
   *                                                   page number of results to fetch. You can start navigating
   *                                                   through the pages to consume the results. You do this by passing
   *                                                   in a page parameter. Retrieve the next page by adding ?page=2 to
   *                                                   the query string. If there are no results to return, then an
   *                                                   empty result set will be returned. Use in query `page=1`.
   * @param perPage                This parameter indicates how many records to fetch in each
   *                                                   request. Default value is 20. The maximum allowed values is 200;
   *                                                   any per_page value over 200 will be changed to 200. Use in query
   *                                                   `per_page=200`.
   * @param direction              The sort direction of the returned invoices.
   * @param lineItems              Include line items data
   * @param discounts              Include discounts data
   * @param taxes                  Include taxes data
   * @param credits                Include credits data
   * @param payments               Include payments data
   * @param customFields           Include custom fields data
   * @param refunds                Include refunds data
   * @param dateField              The type of filter you would like to apply to your search. Use
   *                                                   in query `date_field=issue_date`.
   * @param startDatetime          The start date and time (format YYYY-MM-DD HH:MM:SS) with which
   *                                                   to filter the date_field. Returns invoices with a timestamp at
   *                                                   or after exact time provided in query. You can specify timezone
   *                                                   in query - otherwise your site's time zone will be used. If
   *                                                   provided, this parameter will be used instead of start_date.
   *                                                   Allowed to be used only along with date_field set to created_at
   *                                                   or updated_at.
   * @param endDatetime            The end date and time (format YYYY-MM-DD HH:MM:SS) with which
   *                                                   to filter the date_field. Returns invoices with a timestamp at
   *                                                   or before exact time provided in query. You can specify timezone
   *                                                   in query - otherwise your site's time zone will be used. If
   *                                                   provided, this parameter will be used instead of end_date.
   *                                                   Allowed to be used only along with date_field set to created_at
   *                                                   or updated_at.
   * @param customerIds            Allows fetching invoices with matching customer id based on
   *                                                   provided values. Use in query `customer_ids=1,2,3`.
   * @param number                 Allows fetching invoices with matching invoice number based on
   *                                                   provided values. Use in query `number=1234,1235`.
   * @param productIds             Allows fetching invoices with matching line items product ids
   *                                                   based on provided values. Use in query `product_ids=23,34`.
   * @param sort                   Allows specification of the order of the returned list. Use in
   *                                                   query `sort=total_amount`.
   * @return Response from the API call
   */
  async listInvoices({
    startDate,
    endDate,
    status,
    subscriptionId,
    subscriptionGroupUid,
    page,
    perPage,
    direction,
    lineItems,
    discounts,
    taxes,
    credits,
    payments,
    customFields,
    refunds,
    dateField,
    startDatetime,
    endDatetime,
    customerIds,
    mNumber,
    productIds,
    sort,
  }: {
    startDate?: string,
    endDate?: string,
    status?: Status,
    subscriptionId?: number,
    subscriptionGroupUid?: string,
    page?: number,
    perPage?: number,
    direction?: Direction,
    lineItems?: boolean,
    discounts?: boolean,
    taxes?: boolean,
    credits?: boolean,
    payments?: boolean,
    customFields?: boolean,
    refunds?: boolean,
    dateField?: InvoiceDateField,
    startDatetime?: string,
    endDatetime?: string,
    customerIds?: number[],
    mNumber?: string[],
    productIds?: number[],
    sort?: InvoiceSortField,
  },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListInvoicesResponse>> {
    const req = this.createRequest('GET', '/invoices.json');
    const mapped = req.prepareArgs({
      startDate: [startDate, optional(string())],
      endDate: [endDate, optional(string())],
      status: [status, optional(statusSchema)],
      subscriptionId: [subscriptionId, optional(number())],
      subscriptionGroupUid: [subscriptionGroupUid, optional(string())],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      direction: [direction, optional(directionSchema)],
      lineItems: [lineItems, optional(boolean())],
      discounts: [discounts, optional(boolean())],
      taxes: [taxes, optional(boolean())],
      credits: [credits, optional(boolean())],
      payments: [payments, optional(boolean())],
      customFields: [customFields, optional(boolean())],
      refunds: [refunds, optional(boolean())],
      dateField: [dateField, optional(invoiceDateFieldSchema)],
      startDatetime: [startDatetime, optional(string())],
      endDatetime: [endDatetime, optional(string())],
      customerIds: [customerIds, optional(array(number()))],
      mNumber: [mNumber, optional(array(string()))],
      productIds: [productIds, optional(array(number()))],
      sort: [sort, optional(invoiceSortFieldSchema)],
    });
    req.query('start_date', mapped.startDate);
    req.query('end_date', mapped.endDate);
    req.query('status', mapped.status);
    req.query('subscription_id', mapped.subscriptionId);
    req.query('subscription_group_uid', mapped.subscriptionGroupUid);
    req.query('page', mapped.page);
    req.query('per_page', mapped.perPage);
    req.query('direction', mapped.direction);
    req.query('line_items', mapped.lineItems);
    req.query('discounts', mapped.discounts);
    req.query('taxes', mapped.taxes);
    req.query('credits', mapped.credits);
    req.query('payments', mapped.payments);
    req.query('custom_fields', mapped.customFields);
    req.query('refunds', mapped.refunds);
    req.query('date_field', mapped.dateField);
    req.query('start_datetime', mapped.startDatetime);
    req.query('end_datetime', mapped.endDatetime);
    req.query('customer_ids', mapped.customerIds, commaPrefix);
    req.query('number', mapped.mNumber, commaPrefix);
    req.query('product_ids', mapped.productIds, commaPrefix);
    req.query('sort', mapped.sort);
    return req.callAsJson(listInvoicesResponseSchema, requestOptions);
  }

  /**
   * Use this endpoint to retrieve the details for an invoice.
   *
   * @param uid The unique identifier for the invoice, this does not refer to the public facing invoice
   *                      number.
   * @return Response from the API call
   */
  async readInvoice(
    uid: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Invoice>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ uid: [uid, string()] });
    req.appendTemplatePath`/invoices/${mapped.uid}.json`;
    return req.callAsJson(invoiceSchema, requestOptions);
  }

  /**
   * This endpoint returns a list of invoice events. Each event contains event "data" (such as an applied
   * payment) as well as a snapshot of the `invoice` at the time of event completion.
   *
   * Exposed event types are:
   *
   * + issue_invoice
   * + apply_credit_note
   * + apply_payment
   * + refund_invoice
   * + void_invoice
   * + void_remainder
   * + backport_invoice
   * + change_invoice_status
   * + change_invoice_collection_method
   * + remove_payment
   *
   * Invoice events are returned in ascending order.
   *
   * If both a `since_date` and `since_id` are provided in request parameters, the `since_date` will be
   * used.
   *
   * Note - invoice events that occurred prior to 09/05/2018 __will not__ contain an `invoice` snapshot.
   *
   * @param sinceDate                  The timestamp in a format `YYYY-MM-DD T HH:MM:SS Z`, or
   *                                                         `YYYY-MM-DD`(in this case, it returns data from the
   *                                                         beginning of the day). of the event from which you want to
   *                                                         start the search. All the events before the `since_date`
   *                                                         timestamp are not returned in the response.
   * @param sinceId                    The ID of the event from which you want to start the
   *                                                         search(ID is not included. e.g. if ID is set to 2, then
   *                                                         all events with ID 3 and more will be shown) This
   *                                                         parameter is not used if since_date is defined.
   * @param page                       Result records are organized in pages. By default, the
   *                                                         first page of results is displayed. The page parameter
   *                                                         specifies a page number of results to fetch. You can start
   *                                                         navigating through the pages to consume the results. You
   *                                                         do this by passing in a page parameter. Retrieve the next
   *                                                         page by adding ?page=2 to the query string. If there are
   *                                                         no results to return, then an empty result set will be
   *                                                         returned. Use in query `page=1`.
   * @param perPage                    This parameter indicates how many records to fetch in
   *                                                         each request. Default value is 100. The maximum allowed
   *                                                         values is 200; any per_page value over 200 will be changed
   *                                                         to 200.
   * @param invoiceUid                 Providing an invoice_uid allows for scoping of the
   *                                                         invoice events to a single invoice or credit note.
   * @param withChangeInvoiceStatus    Use this parameter if you want to fetch also invoice
   *                                                         events with change_invoice_status type.
   * @param eventTypes                 Filter results by event_type. Supply a comma separated
   *                                                         list of event types (listed above). Use in query:
   *                                                         `event_types=void_invoice,void_remainder`.
   * @return Response from the API call
   */
  async listInvoiceEvents({
    sinceDate,
    sinceId,
    page,
    perPage,
    invoiceUid,
    withChangeInvoiceStatus,
    eventTypes,
  }: {
    sinceDate?: string,
    sinceId?: number,
    page?: number,
    perPage?: number,
    invoiceUid?: string,
    withChangeInvoiceStatus?: string,
    eventTypes?: InvoiceEventType[],
  },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListInvoiceEventsResponse>> {
    const req = this.createRequest('GET', '/invoices/events.json');
    const mapped = req.prepareArgs({
      sinceDate: [sinceDate, optional(string())],
      sinceId: [sinceId, optional(number())],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      invoiceUid: [invoiceUid, optional(string())],
      withChangeInvoiceStatus: [withChangeInvoiceStatus, optional(string())],
      eventTypes: [eventTypes, optional(array(invoiceEventTypeSchema))],
    });
    req.query('since_date', mapped.sinceDate);
    req.query('since_id', mapped.sinceId);
    req.query('page', mapped.page);
    req.query('per_page', mapped.perPage);
    req.query('invoice_uid', mapped.invoiceUid);
    req.query('with_change_invoice_status', mapped.withChangeInvoiceStatus);
    req.query('event_types', mapped.eventTypes, commaPrefix);
    return req.callAsJson(listInvoiceEventsResponseSchema, requestOptions);
  }

  /**
   * This API call should be used when you want to record a payment of a given type against a specific
   * invoice. If you would like to apply a payment across multiple invoices, you can use the Bulk Payment
   * endpoint.
   *
   * ## Create a Payment from the existing payment profile
   *
   * In order to apply a payment to an invoice using an existing payment profile, specify `type` as
   * `payment`, the amount less than the invoice total, and the customer's `payment_profile_id`. The ID
   * of a payment profile might be retrieved via the Payment Profiles API endpoint.
   *
   * ```
   * {
   * "type": "payment",
   * "payment": {
   * "amount": 10.00,
   * "payment_profile_id": 123
   * }
   * }
   * ```
   *
   * ## Create a Payment from the Subscription's Prepayment Account
   *
   * In order apply a prepayment to an invoice, specify the `type` as `prepayment`, and also the `amount`.
   *
   * ```
   * {
   * "type": "prepayment",
   * "payment": {
   * "amount": 10.00
   * }
   * }
   * ```
   *
   * Note that the `amount` must be less than or equal to the Subscription's Prepayment account balance.
   *
   * ## Create a Payment from the Subscription's Service Credit Account
   *
   * In order to apply a service credit to an invoice, specify the `type` as `service_credit`, and also
   * the `amount`:
   *
   *
   * ```
   * {
   * "type": "service_credit",
   * "payment": {
   * "amount": 10.00
   * }
   * }
   * ```
   *
   * Note that Chargify will attempt to fully pay the invoice's `due_amount` from the Subscription's
   * Service Credit account. At this time, partial payments from a Service Credit Account are only
   * allowed for consolidated invoices (subscription groups). Therefore, for normal invoices the Service
   * Credit account balance must be greater than or equal to the invoice's `due_amount`.
   *
   * @param uid          The unique identifier for the invoice, this does not
   *                                                           refer to the public facing invoice number.
   * @param body
   * @return Response from the API call
   */
  async recordPaymentForInvoice(
    uid: string,
    body?: CreateInvoicePaymentRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Invoice>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      uid: [uid, string()],
      body: [body, optional(createInvoicePaymentRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/invoices/${mapped.uid}/payments.json`;
    return req.callAsJson(invoiceSchema, requestOptions);
  }

  /**
   * This API call should be used when you want to record an external payment against multiple invoices.
   *
   * In order apply a payment to multiple invoices, at minimum, specify the `amount` and `applications`
   * (i.e., `invoice_uid` and `amount`) details.
   *
   * ```
   * {
   * "payment": {
   * "memo": "to pay the bills",
   * "details": "check number 8675309",
   * "method": "check",
   * "amount": "250.00",
   * "applications": [
   * {
   * "invoice_uid": "inv_8gk5bwkct3gqt",
   * "amount": "100.00"
   * },
   * {
   * "invoice_uid": "inv_7bc6bwkct3lyt",
   * "amount": "150.00"
   * }
   * ]
   * }
   * }
   * ```
   *
   * Note that the invoice payment amounts must be greater than 0. Total amount must be greater or equal
   * to invoices payment amount sum.
   *
   * @param body
   * @return Response from the API call
   */
  async recordExternalPaymentForInvoices(
    body?: CreateMultiInvoicePaymentRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<MultiInvoicePaymentResponse>> {
    const req = this.createRequest('POST', '/invoices/payments.json');
    const mapped = req.prepareArgs({
      body: [body, optional(createMultiInvoicePaymentRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity');
    return req.callAsJson(multiInvoicePaymentResponseSchema, requestOptions);
  }

  /**
   * Credit Notes are like inverse invoices. They reduce the amount a customer owes.
   *
   * By default, the credit notes returned by this endpoint will exclude the arrays of `line_items`,
   * `discounts`, `taxes`, `applications`, or `refunds`. To include these arrays, pass the specific field
   * as a key in the query with a value set to `true`.
   *
   * @param subscriptionId  The subscription's Chargify id
   * @param page            Result records are organized in pages. By default, the first page of results is
   *                                   displayed. The page parameter specifies a page number of results to fetch. You
   *                                   can start navigating through the pages to consume the results. You do this by
   *                                   passing in a page parameter. Retrieve the next page by adding ?page=2 to the
   *                                   query string. If there are no results to return, then an empty result set will
   *                                   be returned. Use in query `page=1`.
   * @param perPage         This parameter indicates how many records to fetch in each request. Default
   *                                   value is 20. The maximum allowed values is 200; any per_page value over 200 will
   *                                   be changed to 200. Use in query `per_page=200`.
   * @param lineItems       Include line items data
   * @param discounts       Include discounts data
   * @param taxes           Include taxes data
   * @param refunds         Include refunds data
   * @param applications    Include applications data
   * @return Response from the API call
   */
  async listCreditNotes({
    subscriptionId,
    page,
    perPage,
    lineItems,
    discounts,
    taxes,
    refunds,
    applications,
  }: {
    subscriptionId?: number,
    page?: number,
    perPage?: number,
    lineItems?: boolean,
    discounts?: boolean,
    taxes?: boolean,
    refunds?: boolean,
    applications?: boolean,
  },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListCreditNotesResponse>> {
    const req = this.createRequest('GET', '/credit_notes.json');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, optional(number())],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      lineItems: [lineItems, optional(boolean())],
      discounts: [discounts, optional(boolean())],
      taxes: [taxes, optional(boolean())],
      refunds: [refunds, optional(boolean())],
      applications: [applications, optional(boolean())],
    });
    req.query('subscription_id', mapped.subscriptionId);
    req.query('page', mapped.page);
    req.query('per_page', mapped.perPage);
    req.query('line_items', mapped.lineItems);
    req.query('discounts', mapped.discounts);
    req.query('taxes', mapped.taxes);
    req.query('refunds', mapped.refunds);
    req.query('applications', mapped.applications);
    return req.callAsJson(listCreditNotesResponseSchema, requestOptions);
  }

  /**
   * Use this endpoint to retrieve the details for a credit note.
   *
   * @param uid The unique identifier of the credit note
   * @return Response from the API call
   */
  async readCreditNote(
    uid: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreditNote>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ uid: [uid, string()] });
    req.appendTemplatePath`/credit_notes/${mapped.uid}.json`;
    return req.callAsJson(creditNoteSchema, requestOptions);
  }

  /**
   * Record an external payment made against a subscription that will pay partially or in full one or
   * more invoices.
   *
   * Payment will be applied starting with the oldest open invoice and then next oldest, and so on until
   * the amount of the payment is fully consumed.
   *
   * Excess payment will result in the creation of a prepayment on the Invoice Account.
   *
   * Only ungrouped or primary subscriptions may be paid using the "bulk" payment request.
   *
   * @param subscriptionId  The Chargify id of the subscription
   * @param body
   * @return Response from the API call
   */
  async recordPaymentForSubscription(
    subscriptionId: string,
    body?: RecordPaymentRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PaymentResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      body: [body, optional(recordPaymentRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/payments.json`;
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
    return req.callAsJson(paymentResponseSchema, requestOptions);
  }

  /**
   * This endpoint allows you to reopen any invoice with the "canceled" status. Invoices enter "canceled"
   * status if they were open at the time the subscription was canceled (whether through dunning or an
   * intentional cancellation).
   *
   * Invoices with "canceled" status are no longer considered to be due. Once reopened, they are
   * considered due for payment. Payment may then be captured in one of the following ways:
   *
   * - Reactivating the subscription, which will capture all open invoices (See note below about
   * automatic reopening of invoices.)
   * - Recording a payment directly against the invoice
   *
   * A note about reactivations: any canceled invoices from the most recent active period are
   * automatically opened as a part of the reactivation process. Reactivating via this endpoint prior to
   * reactivation is only necessary when you wish to capture older invoices from previous periods during
   * the reactivation.
   *
   * ### Reopening Consolidated Invoices
   *
   * When reopening a consolidated invoice, all of its canceled segments will also be reopened.
   *
   * @param uid The unique identifier for the invoice, this does not refer to the public facing invoice
   *                      number.
   * @return Response from the API call
   */
  async reopenInvoice(
    uid: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Invoice>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({ uid: [uid, string()] });
    req.appendTemplatePath`/invoices/${mapped.uid}/reopen.json`;
    req.throwOn(404, ApiError, 'Not Found');
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
    return req.callAsJson(invoiceSchema, requestOptions);
  }

  /**
   * This endpoint allows you to void any invoice with the "open" or "canceled" status.  It will also
   * allow voiding of an invoice with the "pending" status if it is not a consolidated invoice.
   *
   * @param uid          The unique identifier for the invoice, this does not refer to
   *                                                  the public facing invoice number.
   * @param body
   * @return Response from the API call
   */
  async voidInvoice(
    uid: string,
    body?: VoidInvoiceRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Invoice>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      uid: [uid, string()],
      body: [body, optional(voidInvoiceRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/invoices/${mapped.uid}/void.json`;
    req.throwOn(404, ApiError, 'Not Found');
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
    return req.callAsJson(invoiceSchema, requestOptions);
  }

  /**
   * Invoice segments returned on the index will only include totals, not detailed breakdowns for
   * `line_items`, `discounts`, `taxes`, `credits`, `payments`, or `custom_fields`.
   *
   * @param invoiceUid  The unique identifier of the consolidated invoice
   * @param page        Result records are organized in pages. By default, the first page of results is
   *                                 displayed. The page parameter specifies a page number of results to fetch. You can
   *                                 start navigating through the pages to consume the results. You do this by passing
   *                                 in a page parameter. Retrieve the next page by adding ?page=2 to the query string.
   *                                 If there are no results to return, then an empty result set will be returned. Use
   *                                 in query `page=1`.
   * @param perPage     This parameter indicates how many records to fetch in each request. Default value
   *                                 is 20. The maximum allowed values is 200; any per_page value over 200 will be
   *                                 changed to 200. Use in query `per_page=200`.
   * @param direction   Sort direction of the returned segments.
   * @return Response from the API call
   */
  async listInvoiceSegments({
    invoiceUid,
    page,
    perPage,
    direction,
  }: {
    invoiceUid: string,
    page?: number,
    perPage?: number,
    direction?: Direction,
  },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ConsolidatedInvoice>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      invoiceUid: [invoiceUid, string()],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      direction: [direction, optional(directionSchema)],
    });
    req.query('page', mapped.page);
    req.query('per_page', mapped.perPage);
    req.query('direction', mapped.direction);
    req.appendTemplatePath`/invoices/${mapped.invoiceUid}/segments.json`;
    return req.callAsJson(consolidatedInvoiceSchema, requestOptions);
  }

  /**
   * This endpoint will allow you to create an ad hoc invoice.
   *
   * ### Basic Behavior
   *
   * You can create a basic invoice by sending an array of line items to this endpoint. Each line item,
   * at a minimum, must include a title, a quantity and a unit price. Example:
   *
   * ```json
   * {
   * "invoice": {
   * "line_items": [
   * {
   * "title": "A Product",
   * "quantity": 12,
   * "unit_price": "150.00"
   * }
   * ]
   * }
   * }
   * ```
   *
   * ### Catalog items
   * Instead of creating custom products like in above example, You can pass existing items like products,
   * components.
   *
   * ```json
   * {
   * "invoice": {
   * "line_items": [
   * {
   * "product_id": "handle:gold-product",
   * "quantity": 2,
   * }
   * ]
   * }
   * }
   * ```
   *
   *
   * The price for each line item will be calculated as well as a total due amount for the invoice.
   * Multiple line items can be sent.
   *
   * ### Line items types
   * When defining line item, You can choose one of 3 types for one line item:
   * #### Custom item
   * Like in basic behavior example above, You can pass `title` and `unit_price` for custom item.
   * #### Product id
   * Product handle (with handle: prefix) or id from the scope of current subscription's site can be
   * provided with `product_id`. By default `unit_price` is taken from product's default price point, but
   * can be overwritten by passing `unit_price` or `product_price_point_id`. If `product_id` is used,
   * following fields cannot be used: `title`, `component_id`.
   * #### Component id
   * Component handle (with handle: prefix) or id from the scope of current subscription's site can be
   * provided with `component_id`. If `component_id` is used, following fields cannot be used: `title`,
   * `product_id`. By default `unit_price` is taken from product's default price point, but can be
   * overwritten by passing `unit_price` or `price_point_id`. At this moment price points are supportted
   * only for quantity based, on/off and metered components. For prepaid and event based billing
   * components `unit_price` is required.
   *
   * ### Coupons
   * When creating ad hoc invoice, new discounts can be applied in following way:
   *
   * ```json
   * {
   * "invoice": {
   * "line_items": [
   * {
   * "product_id": "handle:gold-product",
   * "quantity": 1
   * }
   * ],
   * "coupons": [
   * {
   * "code": "COUPONCODE",
   * "percentage": 50.0
   * }
   * ]
   * }
   * }
   * ```
   * If You want to use existing coupon for discount creation, only `code` and optional
   * `product_family_id` is needed
   *
   * ```json
   * ...
   * "coupons": [
   * {
   * "code": "FREESETUP",
   * "product_family_id": 1
   * }
   * ]
   * ...
   * ```
   *
   * ### Coupon options
   * #### Code
   * Coupon `code` will be displayed on invoice discount section.
   * Coupon code can only contain uppercase letters, numbers, and allowed special characters.
   * Lowercase letters will be converted to uppercase. It can be used to select an existing coupon from
   * the catalog, or as an ad hoc coupon when passed with `percentage` or `amount`.
   * #### Percentage
   * Coupon `percentage` can take values from 0 to 100 and up to 4 decimal places. It cannot be used with
   * `amount`. Only for ad hoc coupons, will be ignored if `code` is used to select an existing coupon
   * from the catalog.
   * #### Amount
   * Coupon `amount` takes number value. It cannot be used with `percentage`. Used only when not matching
   * existing coupon by `code`.
   * #### Description
   * Optional `description` will be displayed with coupon `code`. Used only when not matching existing
   * coupon by `code`.
   * #### Product Family id
   * Optional `product_family_id` handle (with handle: prefix) or id is used to match existing coupon
   * within site, when codes are not unique.
   * #### Compounding Strategy
   * Optional `compounding_strategy` for percentage coupons, can take values `compound` or `full-price`.
   *
   * For amount coupons, discounts will be always calculated against the original item price, before
   * other discounts are applied.
   *
   * `compound` strategy:
   * Percentage-based discounts will be calculated against the remaining price, after prior discounts
   * have been calculated. It is set by default.
   *
   * `full-price` strategy:
   * Percentage-based discounts will always be calculated against the original item price, before other
   * discounts are applied.
   *
   * ### Line Item Options
   *
   * #### Period Date Range
   *
   * A custom period date range can be defined for each line item with the `period_range_start` and
   * `period_range_end` parameters. Dates must be sent in the `YYYY-MM-DD` format.
   * `period_range_end` must be greater or equal `period_range_start`.
   *
   * #### Taxes
   *
   * The `taxable` parameter can be sent as `true` if taxes should be calculated for a specific line item.
   * For this to work, the site should be configured to use and calculate taxes. Further, if the site
   * uses Avalara for tax calculations, a `tax_code` parameter should also be sent. For existing catalog
   * items: products/components taxes cannot be overwritten.
   *
   * #### Price Point
   * Price point handle (with handle: prefix) or id from the scope of current subscription's site can be
   * provided with `price_point_id` for components with `component_id` or `product_price_point_id` for
   * products with `product_id` parameter. If price point is passed `unit_price` cannot be used. It can
   * be used only with catalog items products and components.
   *
   * #### Description
   * Optional `description` parameter, it will overwrite default generated description for line item.
   *
   * ### Invoice Options
   *
   * #### Issue Date
   *
   * By default, invoices will be created with a issue date set to today. `issue_date` parameter can be
   * send to alter that. Only dates in the past can be send. `issue_date` should be send in `YYYY-MM-DD`
   * format.
   *
   * #### Net Terms
   *
   * By default, invoices will be created with a due date matching the date of invoice creation. If a
   * different due date is desired, the `net_terms` parameter can be sent indicating the number of days
   * in advance the due date should be.
   *
   * #### Addresses
   *
   * The seller, shipping and billing addresses can be sent to override the site's defaults. Each address
   * requires to send a `first_name` at a minimum in order to work. Please see below for the details on
   * which parameters can be sent for each address object.
   *
   * #### Memo and Payment Instructions
   *
   * A custom memo can be sent with the `memo` parameter to override the site's default. Likewise, custom
   * payment instructions can be sent with the `payment_instrucions` parameter.
   *
   * #### Status
   *
   * By default, invoices will be created with open status. Possible alternative is `draft`.
   *
   * @param subscriptionId  The Chargify id of the subscription
   * @param body
   * @return Response from the API call
   */
  async createInvoice(
    subscriptionId: string,
    body?: CreateInvoiceRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<InvoiceResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      body: [body, optional(createInvoiceRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/invoices.json`;
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(422, NestedErrorResponseError, 'Unprocessable Entity (WebDAV)');
    return req.callAsJson(invoiceResponseSchema, requestOptions);
  }

  /**
   * This endpoint allows for invoices to be programmatically delivered via email. This endpoint supports
   * the delivery of both ad-hoc and automatically generated invoices. Additionally, this endpoint
   * supports email delivery to direct recipients, carbon-copy (cc) recipients, and blind carbon-copy
   * (bcc) recipients.
   *
   * Please note that if no recipient email addresses are specified in the request, then the
   * subscription's default email configuration will be used. For example, if `recipient_emails` is left
   * blank, then the invoice will be delivered to the subscription's customer email address.
   *
   * On success, a 204 no-content response will be returned. Please note that this does not indicate that
   * email(s) have been delivered, but instead indicates that emails have been successfully queued for
   * delivery. If _any_ invalid or malformed email address is found in the request body, the entire
   * request will be rejected and a 422 response will be returned.
   *
   * @param uid          The unique identifier for the invoice, this does not refer to
   *                                                  the public facing invoice number.
   * @param body
   * @return Response from the API call
   */
  async sendInvoice(
    uid: string,
    body?: SendInvoiceRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      uid: [uid, string()],
      body: [body, optional(sendInvoiceRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/invoices/${mapped.uid}/deliveries.json`;
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
    return req.call(requestOptions);
  }

  /**
   * Customer information may change after an invoice is issued which may lead to a mismatch between
   * customer information that are present on an open invoice and actual customer information. This
   * endpoint allows to preview these differences, if any.
   *
   * The endpoint doesn't accept a request body. Customer information differences are calculated on the
   * application side.
   *
   * @param uid The unique identifier for the invoice, this does not refer to the public facing invoice
   *                      number.
   * @return Response from the API call
   */
  async previewCustomerInformationChanges(
    uid: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CustomerChangesPreviewResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({ uid: [uid, string()] });
    req.appendTemplatePath`/invoices/${mapped.uid}/customer_information/preview.json`;
    req.throwOn(404, ErrorListResponseError, 'Not Found');
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
    return req.callAsJson(customerChangesPreviewResponseSchema, requestOptions);
  }

  /**
   * This endpoint updates customer information on an open invoice and returns the updated invoice. If
   * you would like to preview changes that will be applied, use the
   * `/invoices/{uid}/customer_information/preview.json` endpoint before.
   *
   * The endpoint doesn't accept a request body. Customer information differences are calculated on the
   * application side.
   *
   * @param uid The unique identifier for the invoice, this does not refer to the public facing invoice
   *                      number.
   * @return Response from the API call
   */
  async updateCustomerInformation(
    uid: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Invoice>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({ uid: [uid, string()] });
    req.appendTemplatePath`/invoices/${mapped.uid}/customer_information.json`;
    req.throwOn(404, ErrorListResponseError, 'Not Found');
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
    return req.callAsJson(invoiceSchema, requestOptions);
  }

  /**
   * This endpoint allows you to issue an invoice that is in "pending" status. For example, you can issue
   * an invoice that was created when allocating new quantity on a component and using "accrue charges"
   * option.
   *
   * You cannot issue a pending child invoice that was created for a member subscription in a group.
   *
   * For Remittance subscriptions, the invoice will go into "open" status and payment won't be attempted.
   * The value for `on_failed_payment` would be rejected if sent. Any prepayments or service credits that
   * exist on subscription will be automatically applied. Additionally, if setting is on, an email will
   * be sent for issued invoice.
   *
   * For Automatic subscriptions, prepayments and service credits will apply to the invoice and before
   * payment is attempted. On successful payment, the invoice will go into "paid" status and email will
   * be sent to the customer (if setting applies). When payment fails, the next event depends on the
   * `on_failed_payment` value:
   * - `leave_open_invoice` - prepayments and credits applied to invoice; invoice status set to "open";
   * email sent to the customer for the issued invoice (if setting applies); payment failure recorded in
   * the invoice history. This is the default option.
   * - `rollback_to_pending` - prepayments and credits not applied; invoice remains in "pending" status;
   * no email sent to the customer; payment failure recorded in the invoice history.
   * - `initiate_dunning` - prepayments and credits applied to the invoice; invoice status set to "open";
   * email sent to the customer for the issued invoice (if setting applies); payment failure recorded in
   * the invoice history; subscription will  most likely go into "past_due" or "canceled" state
   * (depending upon net terms and dunning settings).
   *
   * @param uid          The unique identifier for the invoice, this does not refer to
   *                                                   the public facing invoice number.
   * @param body
   * @return Response from the API call
   */
  async issueInvoice(
    uid: string,
    body?: IssueInvoiceRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Invoice>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      uid: [uid, string()],
      body: [body, optional(issueInvoiceRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/invoices/${mapped.uid}/issue.json`;
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(404, ApiError, 'Not Found');
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
    return req.callAsJson(invoiceSchema, requestOptions);
  }
}
