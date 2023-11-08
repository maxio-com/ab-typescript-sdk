/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, RequestOptions } from '../core';
import {
  CustomerErrorResponseError,
} from '../errors/customerErrorResponseError';
import { BasicDateField, basicDateFieldSchema } from '../models/basicDateField';
import {
  ListCustomersInputDirection,
  listCustomersInputDirectionSchema,
} from '../models/containers/listCustomersInputDirection';
import {
  CreateCustomerRequest,
  createCustomerRequestSchema,
} from '../models/createCustomerRequest';
import {
  CustomerResponse,
  customerResponseSchema,
} from '../models/customerResponse';
import {
  SubscriptionResponse,
  subscriptionResponseSchema,
} from '../models/subscriptionResponse';
import {
  UpdateCustomerRequest,
  updateCustomerRequestSchema,
} from '../models/updateCustomerRequest';
import { array, number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class CustomersController extends BaseController {
  /**
   * You may create a new Customer at any time, or you may create a Customer at the same time you create
   * a Subscription. The only validation restriction is that you may only create one customer for a given
   * reference value.
   *
   * If provided, the `reference` value must be unique. It represents a unique identifier for the
   * customer from your own app, i.e. the customer’s ID. This allows you to retrieve a given customer via
   * a piece of shared information. Alternatively, you may choose to leave `reference` blank, and store
   * Chargify’s unique ID for the customer, which is in the `id` attribute.
   *
   * Full documentation on how to locate, create and edit Customers in the Chargify UI can be located
   * [here](https://chargify.zendesk.com/hc/en-us/articles/4407659914267).
   *
   * ## Required Country Format
   *
   * Chargify requires that you use the ISO Standard Country codes when formatting country attribute of
   * the customer.
   *
   * Countries should be formatted as 2 characters. For more information, please see the following
   * wikipedia article on [ISO_3166-1.](http://en.wikipedia.org/wiki/ISO_3166-1#Current_codes)
   *
   * ## Required State Format
   *
   * Chargify requires that you use the ISO Standard State codes when formatting state attribute of the
   * customer.
   *
   * + US States (2 characters): [ISO_3166-2](https://en.wikipedia.org/wiki/ISO_3166-2:US)
   *
   * + States Outside the US (2-3 characters): To find the correct state codes outside of the US, please
   * go to [ISO_3166-1](http://en.wikipedia.org/wiki/ISO_3166-1#Current_codes) and click on the link in
   * the “ISO 3166-2 codes” column next to country you wish to populate.
   *
   * ## Locale
   *
   * Chargify allows you to attribute a language/region to your customer to deliver invoices in any
   * required language.
   * For more: [Customer Locale](https://chargify.zendesk.com/hc/en-us/articles/4407870384283#customer-
   * locale)
   *
   * @param body
   * @return Response from the API call
   */
  async createCustomer(
    body?: CreateCustomerRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CustomerResponse>> {
    const req = this.createRequest('POST', '/customers.json');
    const mapped = req.prepareArgs({
      body: [body, optional(createCustomerRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(422, CustomerErrorResponseError, 'Unprocessable Entity (WebDAV)');
    return req.callAsJson(customerResponseSchema, requestOptions);
  }

  /**
   * This request will by default list all customers associated with your Site.
   *
   * ## Find Customer
   *
   * Use the search feature with the `q` query parameter to retrieve an array of customers that matches
   * the search query.
   *
   * Common use cases are:
   *
   * + Search by an email
   * + Search by a Chargify ID
   * + Search by an organization
   * + Search by a reference value from your application
   * + Search by a first or last name
   *
   * To retrieve a single, exact match by reference, please use the [lookup endpoint](https://developers.
   * chargify.com/docs/api-docs/b710d8fbef104-read-customer-by-reference).
   *
   * @param direction      Direction to sort customers by time of creation
   * @param page           Result records are organized in pages. By default, the first
   *                                                      page of results is displayed. The page parameter specifies a
   *                                                      page number of results to fetch. You can start navigating
   *                                                      through the pages to consume the results. You do this by
   *                                                      passing in a page parameter. Retrieve the next page by adding
   *                                                      ?page=2 to the query string. If there are no results to
   *                                                      return, then an empty result set will be returned. Use in
   *                                                      query `page=1`.
   * @param perPage        This parameter indicates how many records to fetch in each
   *                                                      request. Default value is 50. The maximum allowed values is
   *                                                      200; any per_page value over 200 will be changed to 200. Use
   *                                                      in query `per_page=200`.
   * @param dateField      The type of filter you would like to apply to your search.
   *                                                      Use in query: `date_field=created_at`.
   * @param startDate      The start date (format YYYY-MM-DD) with which to filter the
   *                                                      date_field. Returns subscriptions with a timestamp at or
   *                                                      after midnight (12:00:00 AM) in your site’s time zone on the
   *                                                      date specified.
   * @param endDate        The end date (format YYYY-MM-DD) with which to filter the
   *                                                      date_field. Returns subscriptions with a timestamp up to and
   *                                                      including 11:59:59PM in your site’s time zone on the date
   *                                                      specified.
   * @param startDatetime  The start date and time (format YYYY-MM-DD HH:MM:SS) with
   *                                                      which to filter the date_field. Returns subscriptions with a
   *                                                      timestamp at or after exact time provided in query. You can
   *                                                      specify timezone in query - otherwise your site's time zone
   *                                                      will be used. If provided, this parameter will be used
   *                                                      instead of start_date.
   * @param endDatetime    The end date and time (format YYYY-MM-DD HH:MM:SS) with
   *                                                      which to filter the date_field. Returns subscriptions with a
   *                                                      timestamp at or before exact time provided in query. You can
   *                                                      specify timezone in query - otherwise your site's time zone
   *                                                      will be used. If provided, this parameter will be used
   *                                                      instead of end_date.
   * @param q              A search query by which to filter customers (can be an email,
   *                                                      an ID, a reference, organization)
   * @return Response from the API call
   */
  async listCustomers({
    direction,
    page,
    perPage,
    dateField,
    startDate,
    endDate,
    startDatetime,
    endDatetime,
    q,
  }: {
    direction?: ListCustomersInputDirection,
    page?: number,
    perPage?: number,
    dateField?: BasicDateField,
    startDate?: string,
    endDate?: string,
    startDatetime?: string,
    endDatetime?: string,
    q?: string,
  },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CustomerResponse[]>> {
    const req = this.createRequest('GET', '/customers.json');
    const mapped = req.prepareArgs({
      direction: [direction, optional(listCustomersInputDirectionSchema)],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      dateField: [dateField, optional(basicDateFieldSchema)],
      startDate: [startDate, optional(string())],
      endDate: [endDate, optional(string())],
      startDatetime: [startDatetime, optional(string())],
      endDatetime: [endDatetime, optional(string())],
      q: [q, optional(string())],
    });
    req.query('direction', mapped.direction);
    req.query('page', mapped.page);
    req.query('per_page', mapped.perPage);
    req.query('date_field', mapped.dateField);
    req.query('start_date', mapped.startDate);
    req.query('end_date', mapped.endDate);
    req.query('start_datetime', mapped.startDatetime);
    req.query('end_datetime', mapped.endDatetime);
    req.query('q', mapped.q);
    return req.callAsJson(array(customerResponseSchema), requestOptions);
  }

  /**
   * This method allows to retrieve the Customer properties by Chargify-generated Customer ID.
   *
   * @param id The Chargify id of the customer
   * @return Response from the API call
   */
  async readCustomer(
    id: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CustomerResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ id: [id, number()] });
    req.appendTemplatePath`/customers/${mapped.id}.json`;
    return req.callAsJson(customerResponseSchema, requestOptions);
  }

  /**
   * This method allows to update the Customer.
   *
   * @param id           The Chargify id of the customer
   * @param body
   * @return Response from the API call
   */
  async updateCustomer(
    id: number,
    body?: UpdateCustomerRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CustomerResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      id: [id, number()],
      body: [body, optional(updateCustomerRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/customers/${mapped.id}.json`;
    req.throwOn(404, ApiError, 'Not Found');
    req.throwOn(422, CustomerErrorResponseError, 'Unprocessable Entity (WebDAV)');
    return req.callAsJson(customerResponseSchema, requestOptions);
  }

  /**
   * This method allows you to delete the Customer.
   *
   * @param id The Chargify id of the customer
   * @return Response from the API call
   */
  async deleteCustomer(
    id: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ id: [id, number()] });
    req.appendTemplatePath`/customers/${mapped.id}.json`;
    return req.call(requestOptions);
  }

  /**
   * Use this method to return the customer object if you have the unique **Reference ID (Your App)**
   * value handy. It will return a single match.
   *
   * @param reference Customer reference
   * @return Response from the API call
   */
  async readCustomerByReference(
    reference: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CustomerResponse>> {
    const req = this.createRequest('GET', '/customers/lookup.json');
    const mapped = req.prepareArgs({ reference: [reference, string()] });
    req.query('reference', mapped.reference);
    return req.callAsJson(customerResponseSchema, requestOptions);
  }

  /**
   * This method lists all subscriptions that belong to a customer.
   *
   * @param customerId  The Chargify id of the customer
   * @return Response from the API call
   */
  async listCustomerSubscriptions(
    customerId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SubscriptionResponse[]>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ customerId: [customerId, number()] });
    req.appendTemplatePath`/customers/${mapped.customerId}/subscriptions.json`;
    return req.callAsJson(array(subscriptionResponseSchema), requestOptions);
  }
}
