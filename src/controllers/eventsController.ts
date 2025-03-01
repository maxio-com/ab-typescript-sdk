/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, commaPrefix, RequestOptions } from '../core';
import { CountResponse, countResponseSchema } from '../models/countResponse';
import { Direction, directionSchema } from '../models/direction';
import { EventKey, eventKeySchema } from '../models/eventKey';
import { EventResponse, eventResponseSchema } from '../models/eventResponse';
import {
  ListEventsDateField,
  listEventsDateFieldSchema,
} from '../models/listEventsDateField';
import { array, bigint, number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class EventsController extends BaseController {
  /**
   * ## Events Intro
   *
   * Advanced Billing Events include various activity that happens around a Site. This information is
   * **especially** useful to track down issues that arise when subscriptions are not created due to
   * errors.
   *
   * Within the Advanced Billing UI, "Events" are referred to as "Site Activity".  Full documentation on
   * how to record view Events / Site Activty in the Advanced Billing UI can be located [here](https:
   * //maxio.zendesk.com/hc/en-us/articles/24250671733517-Site-Activity).
   *
   * ## List Events for a Site
   *
   * This method will retrieve a list of events for a site. Use query string filters to narrow down
   * results. You may use the `key` filter as part of your query string to narrow down results.
   *
   * ### Legacy Filters
   *
   * The following keys are no longer supported.
   *
   * + `payment_failure_recreated`
   * + `payment_success_recreated`
   * + `renewal_failure_recreated`
   * + `renewal_success_recreated`
   * + `zferral_revenue_post_failure` - (Specific to the deprecated Zferral integration)
   * + `zferral_revenue_post_success` - (Specific to the deprecated Zferral integration)
   *
   * ## Event Key
   * The event type is identified by the key property. You can check supported keys
   * [here]($m/Event%20Key).
   *
   * ## Event Specific Data
   *
   * Different event types may include additional data in `event_specific_data` property.
   * While some events share the same schema for `event_specific_data`, others may not include it at all.
   * For precise mappings from key to event_specific_data, refer to [Event]($m/Event).
   *
   * ### Example
   * Here’s an example event for the `subscription_product_change` event:
   *
   * ```
   * {
   * "event": {
   * "id": 351,
   * "key": "subscription_product_change",
   * "message": "Product changed on Marky Mark's subscription from 'Basic' to 'Pro'",
   * "subscription_id": 205,
   * "event_specific_data": {
   * "new_product_id": 3,
   * "previous_product_id": 2
   * },
   * "created_at": "2012-01-30T10:43:31-05:00"
   * }
   * }
   * ```
   *
   * Here’s an example event for the `subscription_state_change` event:
   *
   * ```
   * {
   * "event": {
   * "id": 353,
   * "key": "subscription_state_change",
   * "message": "State changed on Marky Mark's subscription to Pro from trialing to active",
   * "subscription_id": 205,
   * "event_specific_data": {
   * "new_subscription_state": "active",
   * "previous_subscription_state": "trialing"
   * },
   * "created_at": "2012-01-30T10:43:33-05:00"
   * }
   * }
   * ```
   *
   * @param page           Result records are organized in pages. By default, the first page of
   *                                              results is displayed. The page parameter specifies a page number of
   *                                              results to fetch. You can start navigating through the pages to
   *                                              consume the results. You do this by passing in a page parameter.
   *                                              Retrieve the next page by adding ?page=2 to the query string. If
   *                                              there are no results to return, then an empty result set will be
   *                                              returned. Use in query `page=1`.
   * @param perPage        This parameter indicates how many records to fetch in each request.
   *                                              Default value is 20. The maximum allowed values is 200; any per_page
   *                                              value over 200 will be changed to 200. Use in query `per_page=200`.
   * @param sinceId        Returns events with an id greater than or equal to the one
   *                                              specified
   * @param maxId          Returns events with an id less than or equal to the one specified
   * @param direction      The sort direction of the returned events.
   * @param filter         You can pass multiple event keys after comma. Use in query
   *                                              `filter=signup_success,payment_success`.
   * @param dateField      The type of filter you would like to apply to your search.
   * @param startDate      The start date (format YYYY-MM-DD) with which to filter the
   *                                              date_field. Returns components with a timestamp at or after midnight
   *                                              (12:00:00 AM) in your site’s time zone on the date specified.
   * @param endDate        The end date (format YYYY-MM-DD) with which to filter the date_field.
   *                                              Returns components with a timestamp up to and including 11:59:59PM
   *                                              in your site’s time zone on the date specified.
   * @param startDatetime  The start date and time (format YYYY-MM-DD HH:MM:SS) with which to
   *                                              filter the date_field. Returns components with a timestamp at or
   *                                              after exact time provided in query. You can specify timezone in query
   *                                              - otherwise your site's time zone will be used. If provided, this
   *                                              parameter will be used instead of start_date.
   * @param endDatetime    The end date and time (format YYYY-MM-DD HH:MM:SS) with which to
   *                                              filter the date_field. Returns components with a timestamp at or
   *                                              before exact time provided in query. You can specify timezone in
   *                                              query - otherwise your site's time zone will be used. If provided,
   *                                              this parameter will be used instead of end_date.
   * @return Response from the API call
   */
  async listEvents(
    {
      page,
      perPage,
      sinceId,
      maxId,
      direction,
      filter,
      dateField,
      startDate,
      endDate,
      startDatetime,
      endDatetime,
    }: {
      page?: number;
      perPage?: number;
      sinceId?: bigint;
      maxId?: bigint;
      direction?: Direction;
      filter?: EventKey[];
      dateField?: ListEventsDateField;
      startDate?: string;
      endDate?: string;
      startDatetime?: string;
      endDatetime?: string;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<EventResponse[]>> {
    const req = this.createRequest('GET', '/events.json');
    const mapped = req.prepareArgs({
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      sinceId: [sinceId, optional(bigint())],
      maxId: [maxId, optional(bigint())],
      direction: [direction, optional(directionSchema)],
      filter: [filter, optional(array(eventKeySchema))],
      dateField: [dateField, optional(listEventsDateFieldSchema)],
      startDate: [startDate, optional(string())],
      endDate: [endDate, optional(string())],
      startDatetime: [startDatetime, optional(string())],
      endDatetime: [endDatetime, optional(string())],
    });
    req.query('page', mapped.page, commaPrefix);
    req.query('per_page', mapped.perPage, commaPrefix);
    req.query('since_id', mapped.sinceId, commaPrefix);
    req.query('max_id', mapped.maxId, commaPrefix);
    req.query('direction', mapped.direction, commaPrefix);
    req.query('filter', mapped.filter, commaPrefix);
    req.query('date_field', mapped.dateField, commaPrefix);
    req.query('start_date', mapped.startDate, commaPrefix);
    req.query('end_date', mapped.endDate, commaPrefix);
    req.query('start_datetime', mapped.startDatetime, commaPrefix);
    req.query('end_datetime', mapped.endDatetime, commaPrefix);
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(array(eventResponseSchema), requestOptions);
  }

  /**
   * The following request will return a list of events for a subscription.
   *
   * ## Event Key
   * The event type is identified by the key property. You can check supported keys
   * [here]($m/Event%20Key).
   *
   * ## Event Specific Data
   *
   * Different event types may include additional data in `event_specific_data` property.
   * While some events share the same schema for `event_specific_data`, others may not include it at all.
   * For precise mappings from key to event_specific_data, refer to [Event]($m/Event).
   *
   * @param subscriptionId  The Chargify id of the subscription
   * @param page            Result records are organized in pages. By default, the first page of results
   *                                      is displayed. The page parameter specifies a page number of results to fetch.
   *                                      You can start navigating through the pages to consume the results. You do
   *                                      this by passing in a page parameter. Retrieve the next page by adding ?page=2
   *                                      to the query string. If there are no results to return, then an empty result
   *                                      set will be returned. Use in query `page=1`.
   * @param perPage         This parameter indicates how many records to fetch in each request. Default
   *                                      value is 20. The maximum allowed values is 200; any per_page value over 200
   *                                      will be changed to 200. Use in query `per_page=200`.
   * @param sinceId         Returns events with an id greater than or equal to the one specified
   * @param maxId           Returns events with an id less than or equal to the one specified
   * @param direction       The sort direction of the returned events.
   * @param filter          You can pass multiple event keys after comma. Use in query
   *                                      `filter=signup_success,payment_success`.
   * @return Response from the API call
   */
  async listSubscriptionEvents(
    {
      subscriptionId,
      page,
      perPage,
      sinceId,
      maxId,
      direction,
      filter,
    }: {
      subscriptionId: number;
      page?: number;
      perPage?: number;
      sinceId?: bigint;
      maxId?: bigint;
      direction?: Direction;
      filter?: EventKey[];
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<EventResponse[]>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      sinceId: [sinceId, optional(bigint())],
      maxId: [maxId, optional(bigint())],
      direction: [direction, optional(directionSchema)],
      filter: [filter, optional(array(eventKeySchema))],
    });
    req.query('page', mapped.page, commaPrefix);
    req.query('per_page', mapped.perPage, commaPrefix);
    req.query('since_id', mapped.sinceId, commaPrefix);
    req.query('max_id', mapped.maxId, commaPrefix);
    req.query('direction', mapped.direction, commaPrefix);
    req.query('filter', mapped.filter, commaPrefix);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/events.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(array(eventResponseSchema), requestOptions);
  }

  /**
   * Get a count of all the events for a given site by using this method.
   *
   * @param page      Result records are organized in pages. By default, the first page of results is
   *                                displayed. The page parameter specifies a page number of results to fetch. You can
   *                                start navigating through the pages to consume the results. You do this by passing
   *                                in a page parameter. Retrieve the next page by adding ?page=2 to the query string.
   *                                If there are no results to return, then an empty result set will be returned. Use
   *                                in query `page=1`.
   * @param perPage   This parameter indicates how many records to fetch in each request. Default value
   *                                is 20. The maximum allowed values is 200; any per_page value over 200 will be
   *                                changed to 200. Use in query `per_page=200`.
   * @param sinceId   Returns events with an id greater than or equal to the one specified
   * @param maxId     Returns events with an id less than or equal to the one specified
   * @param direction The sort direction of the returned events.
   * @param filter    You can pass multiple event keys after comma. Use in query `filter=signup_success,
   *                                payment_success`.
   * @return Response from the API call
   */
  async readEventsCount(
    {
      page,
      perPage,
      sinceId,
      maxId,
      direction,
      filter,
    }: {
      page?: number;
      perPage?: number;
      sinceId?: bigint;
      maxId?: bigint;
      direction?: Direction;
      filter?: EventKey[];
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CountResponse>> {
    const req = this.createRequest('GET', '/events/count.json');
    const mapped = req.prepareArgs({
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      sinceId: [sinceId, optional(bigint())],
      maxId: [maxId, optional(bigint())],
      direction: [direction, optional(directionSchema)],
      filter: [filter, optional(array(eventKeySchema))],
    });
    req.query('page', mapped.page, commaPrefix);
    req.query('per_page', mapped.perPage, commaPrefix);
    req.query('since_id', mapped.sinceId, commaPrefix);
    req.query('max_id', mapped.maxId, commaPrefix);
    req.query('direction', mapped.direction, commaPrefix);
    req.query('filter', mapped.filter, commaPrefix);
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(countResponseSchema, requestOptions);
  }
}
