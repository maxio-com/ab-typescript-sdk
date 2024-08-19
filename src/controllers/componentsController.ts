/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { BasicDateField, basicDateFieldSchema } from '../models/basicDateField';
import { Component, componentSchema } from '../models/component';
import {
  ComponentResponse,
  componentResponseSchema,
} from '../models/componentResponse';
import {
  CreateEBBComponent,
  createEBBComponentSchema,
} from '../models/createEBBComponent';
import {
  CreateMeteredComponent,
  createMeteredComponentSchema,
} from '../models/createMeteredComponent';
import {
  CreateOnOffComponent,
  createOnOffComponentSchema,
} from '../models/createOnOffComponent';
import {
  CreatePrepaidComponent,
  createPrepaidComponentSchema,
} from '../models/createPrepaidComponent';
import {
  CreateQuantityBasedComponent,
  createQuantityBasedComponentSchema,
} from '../models/createQuantityBasedComponent';
import {
  ListComponentsFilter,
  listComponentsFilterSchema,
} from '../models/listComponentsFilter';
import {
  UpdateComponentRequest,
  updateComponentRequestSchema,
} from '../models/updateComponentRequest';
import { array, boolean, number, optional, string } from '../schema';
import { BaseController } from './baseController';
import { ApiError } from '@apimatic/core';
import { ErrorListResponseError } from '../errors/errorListResponseError';

export class ComponentsController extends BaseController {
  /**
   * This request will create a component definition of kind **metered_component** under the specified
   * product family. Metered component can then be added and “allocated” for a subscription.
   *
   * Metered components are used to bill for any type of unit that resets to 0 at the end of the billing
   * period (think daily Google Adwords clicks or monthly cell phone minutes). This is most commonly
   * associated with usage-based billing and many other pricing schemes.
   *
   * Note that this is different from recurring quantity-based components, which DO NOT reset to zero at
   * the start of every billing period. If you want to bill for a quantity of something that does not
   * change unless you change it, then you want quantity components, instead.
   *
   * For more information on components, please see our documentation [here](https://maxio.zendesk.
   * com/hc/en-us/articles/24261141522189-Components-Overview).
   *
   * @param productFamilyId   Either the product family's id or its handle prefixed
   *                                                           with `handle:`
   * @param body
   * @return Response from the API call
   */
  async createMeteredComponent(
    productFamilyId: string,
    body?: CreateMeteredComponent,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ComponentResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      productFamilyId: [productFamilyId, string()],
      body: [body, optional(createMeteredComponentSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/product_families/${mapped.productFamilyId}/metered_components.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(componentResponseSchema, requestOptions);
  }

  /**
   * This request will create a component definition of kind **quantity_based_component** under the
   * specified product family. Quantity Based component can then be added and “allocated” for a
   * subscription.
   *
   * When defining Quantity Based component, You can choose one of 2 types:
   * #### Recurring
   * Recurring quantity-based components are used to bill for the number of some unit (think monthly
   * software user licenses or the number of pairs of socks in a box-a-month club). This is most commonly
   * associated with billing for user licenses, number of users, number of employees, etc.
   *
   * #### One-time
   * One-time quantity-based components are used to create ad hoc usage charges that do not recur. For
   * example, at the time of signup, you might want to charge your customer a one-time fee for onboarding
   * or other services.
   *
   * The allocated quantity for one-time quantity-based components immediately gets reset back to zero
   * after the allocation is made.
   *
   * For more information on components, please see our documentation [here](https://maxio.zendesk.
   * com/hc/en-us/articles/24261141522189-Components-Overview).
   *
   * @param productFamilyId   Either the product family's id or its handle
   *                                                                 prefixed with `handle:`
   * @param body
   * @return Response from the API call
   */
  async createQuantityBasedComponent(
    productFamilyId: string,
    body?: CreateQuantityBasedComponent,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ComponentResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      productFamilyId: [productFamilyId, string()],
      body: [body, optional(createQuantityBasedComponentSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/product_families/${mapped.productFamilyId}/quantity_based_components.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(componentResponseSchema, requestOptions);
  }

  /**
   * This request will create a component definition of kind **on_off_component** under the specified
   * product family. On/Off component can then be added and “allocated” for a subscription.
   *
   * On/off components are used for any flat fee, recurring add on (think $99/month for tech support or a
   * flat add on shipping fee).
   *
   * For more information on components, please see our documentation [here](https://maxio.zendesk.
   * com/hc/en-us/articles/24261141522189-Components-Overview).
   *
   * @param productFamilyId   Either the product family's id or its handle prefixed
   *                                                         with `handle:`
   * @param body
   * @return Response from the API call
   */
  async createOnOffComponent(
    productFamilyId: string,
    body?: CreateOnOffComponent,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ComponentResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      productFamilyId: [productFamilyId, string()],
      body: [body, optional(createOnOffComponentSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/product_families/${mapped.productFamilyId}/on_off_components.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(componentResponseSchema, requestOptions);
  }

  /**
   * This request will create a component definition of kind **prepaid_usage_component** under the
   * specified product family. Prepaid component can then be added and “allocated” for a subscription.
   *
   * Prepaid components allow customers to pre-purchase units that can be used up over time on their
   * subscription. In a sense, they are the mirror image of metered components; while metered components
   * charge at the end of the period for the amount of units used, prepaid components are charged for at
   * the time of purchase, and we subsequently keep track of the usage against the amount purchased.
   *
   * For more information on components, please see our documentation [here](https://maxio.zendesk.
   * com/hc/en-us/articles/24261141522189-Components-Overview).
   *
   * @param productFamilyId   Either the product family's id or its handle prefixed
   *                                                           with `handle:`
   * @param body
   * @return Response from the API call
   */
  async createPrepaidUsageComponent(
    productFamilyId: string,
    body?: CreatePrepaidComponent,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ComponentResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      productFamilyId: [productFamilyId, string()],
      body: [body, optional(createPrepaidComponentSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/product_families/${mapped.productFamilyId}/prepaid_usage_components.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(componentResponseSchema, requestOptions);
  }

  /**
   * This request will create a component definition of kind **event_based_component** under the
   * specified product family. Event-based component can then be added and “allocated” for a subscription.
   *
   * Event-based components are similar to other component types, in that you define the component
   * parameters (such as name and taxability) and the pricing. A key difference for the event-based
   * component is that it must be attached to a metric. This is because the metric provides the component
   * with the actual quantity used in computing what and how much will be billed each period for each
   * subscription.
   *
   * So, instead of reporting usage directly for each component (as you would with metered components),
   * the usage is derived from analysis of your events.
   *
   * For more information on components, please see our documentation [here](https://maxio.zendesk.
   * com/hc/en-us/articles/24261141522189-Components-Overview).
   *
   * @param productFamilyId   Either the product family's id or its handle prefixed with
   *                                                       `handle:`
   * @param body
   * @return Response from the API call
   */
  async createEventBasedComponent(
    productFamilyId: string,
    body?: CreateEBBComponent,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ComponentResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      productFamilyId: [productFamilyId, string()],
      body: [body, optional(createEBBComponentSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/product_families/${mapped.productFamilyId}/event_based_components.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(componentResponseSchema, requestOptions);
  }

  /**
   * This request will return information regarding a component having the handle you provide. You can
   * identify your components with a handle so you don't have to save or reference the IDs we generate.
   *
   * @param handle The handle of the component to find
   * @return Response from the API call
   */
  async findComponent(
    handle: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ComponentResponse>> {
    const req = this.createRequest('GET', '/components/lookup.json');
    const mapped = req.prepareArgs({ handle: [handle, string()] });
    req.query('handle', mapped.handle);
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(componentResponseSchema, requestOptions);
  }

  /**
   * This request will return information regarding a component from a specific product family.
   *
   * You may read the component by either the component's id or handle. When using the handle, it must be
   * prefixed with `handle:`.
   *
   * @param productFamilyId   The Advanced Billing id of the product family to which the component belongs
   * @param componentId       Either the Advanced Billing id of the component or the handle for the
   *                                    component prefixed with `handle:`
   * @return Response from the API call
   */
  async readComponent(
    productFamilyId: number,
    componentId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ComponentResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      productFamilyId: [productFamilyId, number()],
      componentId: [componentId, string()],
    });
    req.appendTemplatePath`/product_families/${mapped.productFamilyId}/components/${mapped.componentId}.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(componentResponseSchema, requestOptions);
  }

  /**
   * This request will update a component from a specific product family.
   *
   * You may read the component by either the component's id or handle. When using the handle, it must be
   * prefixed with `handle:`.
   *
   * @param productFamilyId   The Advanced Billing id of the product family to which
   *                                                           the component belongs
   * @param componentId       Either the Advanced Billing id of the component or the
   *                                                           handle for the component prefixed with `handle:`
   * @param body
   * @return Response from the API call
   */
  async updateProductFamilyComponent(
    productFamilyId: number,
    componentId: string,
    body?: UpdateComponentRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ComponentResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      productFamilyId: [productFamilyId, number()],
      componentId: [componentId, string()],
      body: [body, optional(updateComponentRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/product_families/${mapped.productFamilyId}/components/${mapped.componentId}.json`;
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(componentResponseSchema, requestOptions);
  }

  /**
   * Sending a DELETE request to this endpoint will archive the component. All current subscribers will
   * be unffected; their subscription/purchase will continue to be charged as usual.
   *
   * @param productFamilyId   The Advanced Billing id of the product family to which the component belongs
   * @param componentId       Either the Advanced Billing id of the component or the handle for the
   *                                    component prefixed with `handle:`
   * @return Response from the API call
   */
  async archiveComponent(
    productFamilyId: number,
    componentId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Component>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      productFamilyId: [productFamilyId, number()],
      componentId: [componentId, string()],
    });
    req.appendTemplatePath`/product_families/${mapped.productFamilyId}/components/${mapped.componentId}.json`;
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(componentSchema, requestOptions);
  }

  /**
   * This request will return a list of components for a site.
   *
   * @param dateField        The type of filter you would like to apply to your search.
   * @param startDate        The start date (format YYYY-MM-DD) with which to filter
   *                                                        the date_field. Returns components with a timestamp at or
   *                                                        after midnight (12:00:00 AM) in your site’s time zone on
   *                                                        the date specified.
   * @param endDate          The end date (format YYYY-MM-DD) with which to filter the
   *                                                        date_field. Returns components with a timestamp up to and
   *                                                        including 11:59:59PM in your site’s time zone on the date
   *                                                        specified.
   * @param startDatetime    The start date and time (format YYYY-MM-DD HH:MM:SS) with
   *                                                        which to filter the date_field. Returns components with a
   *                                                        timestamp at or after exact time provided in query. You can
   *                                                        specify timezone in query - otherwise your site's time zone
   *                                                        will be used. If provided, this parameter will be used
   *                                                        instead of start_date.
   * @param endDatetime      The end date and time (format YYYY-MM-DD HH:MM:SS) with
   *                                                        which to filter the date_field. Returns components with a
   *                                                        timestamp at or before exact time provided in query. You
   *                                                        can specify timezone in query - otherwise your site's time
   *                                                        zone will be used. If provided, this parameter will be used
   *                                                        instead of end_date.  optional
   * @param includeArchived  Include archived items
   * @param page             Result records are organized in pages. By default, the
   *                                                        first page of results is displayed. The page parameter
   *                                                        specifies a page number of results to fetch. You can start
   *                                                        navigating through the pages to consume the results. You do
   *                                                        this by passing in a page parameter. Retrieve the next page
   *                                                        by adding ?page=2 to the query string. If there are no
   *                                                        results to return, then an empty result set will be
   *                                                        returned. Use in query `page=1`.
   * @param perPage          This parameter indicates how many records to fetch in each
   *                                                        request. Default value is 20. The maximum allowed values is
   *                                                        200; any per_page value over 200 will be changed to 200.
   *                                                        Use in query `per_page=200`.
   * @param filter           Filter to use for List Components operations
   * @return Response from the API call
   */
  async listComponents(
    {
      dateField,
      startDate,
      endDate,
      startDatetime,
      endDatetime,
      includeArchived,
      page,
      perPage,
      filter,
    }: {
      dateField?: BasicDateField;
      startDate?: string;
      endDate?: string;
      startDatetime?: string;
      endDatetime?: string;
      includeArchived?: boolean;
      page?: number;
      perPage?: number;
      filter?: ListComponentsFilter;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ComponentResponse[]>> {
    const req = this.createRequest('GET', '/components.json');
    const mapped = req.prepareArgs({
      dateField: [dateField, optional(basicDateFieldSchema)],
      startDate: [startDate, optional(string())],
      endDate: [endDate, optional(string())],
      startDatetime: [startDatetime, optional(string())],
      endDatetime: [endDatetime, optional(string())],
      includeArchived: [includeArchived, optional(boolean())],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      filter: [filter, optional(listComponentsFilterSchema)],
    });
    req.query('date_field', mapped.dateField);
    req.query('start_date', mapped.startDate);
    req.query('end_date', mapped.endDate);
    req.query('start_datetime', mapped.startDatetime);
    req.query('end_datetime', mapped.endDatetime);
    req.query('include_archived', mapped.includeArchived);
    req.query('page', mapped.page);
    req.query('per_page', mapped.perPage);
    req.query('filter', mapped.filter);
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(array(componentResponseSchema), requestOptions);
  }

  /**
   * This request will update a component.
   *
   * You may read the component by either the component's id or handle. When using the handle, it must be
   * prefixed with `handle:`.
   *
   * @param componentId  The id or handle of the component
   * @param body
   * @return Response from the API call
   */
  async updateComponent(
    componentId: string,
    body?: UpdateComponentRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ComponentResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      componentId: [componentId, string()],
      body: [body, optional(updateComponentRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/components/${mapped.componentId}.json`;
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(componentResponseSchema, requestOptions);
  }

  /**
   * This request will return a list of components for a particular product family.
   *
   * @param productFamilyId   The Advanced Billing id of the product family
   * @param includeArchived   Include archived items.
   * @param page              Result records are organized in pages. By default, the
   *                                                         first page of results is displayed. The page parameter
   *                                                         specifies a page number of results to fetch. You can start
   *                                                         navigating through the pages to consume the results. You
   *                                                         do this by passing in a page parameter. Retrieve the next
   *                                                         page by adding ?page=2 to the query string. If there are
   *                                                         no results to return, then an empty result set will be
   *                                                         returned. Use in query `page=1`.
   * @param perPage           This parameter indicates how many records to fetch in
   *                                                         each request. Default value is 20. The maximum allowed
   *                                                         values is 200; any per_page value over 200 will be changed
   *                                                         to 200. Use in query `per_page=200`.
   * @param filter            Filter to use for List Components operations
   * @param dateField         The type of filter you would like to apply to your search.
   *                                                         Use in query `date_field=created_at`.
   * @param endDate           The end date (format YYYY-MM-DD) with which to filter the
   *                                                         date_field. Returns components with a timestamp up to and
   *                                                         including 11:59:59PM in your site’s time zone on the date
   *                                                         specified.
   * @param endDatetime       The end date and time (format YYYY-MM-DD HH:MM:SS) with
   *                                                         which to filter the date_field. Returns components with a
   *                                                         timestamp at or before exact time provided in query. You
   *                                                         can specify timezone in query - otherwise your site's time
   *                                                         zone will be used. If provided, this parameter will be
   *                                                         used instead of end_date. optional.
   * @param startDate         The start date (format YYYY-MM-DD) with which to filter
   *                                                         the date_field. Returns components with a timestamp at or
   *                                                         after midnight (12:00:00 AM) in your site’s time zone on
   *                                                         the date specified.
   * @param startDatetime     The start date and time (format YYYY-MM-DD HH:MM:SS) with
   *                                                         which to filter the date_field. Returns components with a
   *                                                         timestamp at or after exact time provided in query. You
   *                                                         can specify timezone in query - otherwise your site's time
   *                                                         zone will be used. If provided, this parameter will be
   *                                                         used instead of start_date.
   * @return Response from the API call
   */
  async listComponentsForProductFamily(
    {
      productFamilyId,
      includeArchived,
      page,
      perPage,
      filter,
      dateField,
      endDate,
      endDatetime,
      startDate,
      startDatetime,
    }: {
      productFamilyId: number;
      includeArchived?: boolean;
      page?: number;
      perPage?: number;
      filter?: ListComponentsFilter;
      dateField?: BasicDateField;
      endDate?: string;
      endDatetime?: string;
      startDate?: string;
      startDatetime?: string;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ComponentResponse[]>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      productFamilyId: [productFamilyId, number()],
      includeArchived: [includeArchived, optional(boolean())],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      filter: [filter, optional(listComponentsFilterSchema)],
      dateField: [dateField, optional(basicDateFieldSchema)],
      endDate: [endDate, optional(string())],
      endDatetime: [endDatetime, optional(string())],
      startDate: [startDate, optional(string())],
      startDatetime: [startDatetime, optional(string())],
    });
    req.query('include_archived', mapped.includeArchived);
    req.query('page', mapped.page);
    req.query('per_page', mapped.perPage);
    req.query('filter', mapped.filter);
    req.query('date_field', mapped.dateField);
    req.query('end_date', mapped.endDate);
    req.query('end_datetime', mapped.endDatetime);
    req.query('start_date', mapped.startDate);
    req.query('start_datetime', mapped.startDatetime);
    req.appendTemplatePath`/product_families/${mapped.productFamilyId}/components.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(array(componentResponseSchema), requestOptions);
  }
}
