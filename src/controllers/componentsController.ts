/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, commaPrefix, RequestOptions } from '../core';
import { ErrorListResponseError } from '../errors/errorListResponseError';
import { BasicDateField, basicDateFieldSchema } from '../models/basicDateField';
import {
  ComponentKindPath,
  componentKindPathSchema,
} from '../models/componentKindPath';
import {
  ComponentPricePointResponse,
  componentPricePointResponseSchema,
} from '../models/componentPricePointResponse';
import {
  ComponentPricePointsResponse,
  componentPricePointsResponseSchema,
} from '../models/componentPricePointsResponse';
import {
  ComponentResponse,
  componentResponseSchema,
} from '../models/componentResponse';
import {
  CreateComponentBody,
  createComponentBodySchema,
} from '../models/containers/createComponentBody';
import {
  ListAllComponentPricePointsInputDirection,
  listAllComponentPricePointsInputDirectionSchema,
} from '../models/containers/listAllComponentPricePointsInputDirection';
import {
  CreateComponentPricePointRequest,
  createComponentPricePointRequestSchema,
} from '../models/createComponentPricePointRequest';
import {
  CreateComponentPricePointsRequest,
  createComponentPricePointsRequestSchema,
} from '../models/createComponentPricePointsRequest';
import {
  CreateCurrencyPricesRequest,
  createCurrencyPricesRequestSchema,
} from '../models/createCurrencyPricesRequest';
import { CurrencyPrice, currencyPriceSchema } from '../models/currencyPrice';
import { IncludeNotNull, includeNotNullSchema } from '../models/includeNotNull';
import {
  ListComponentsPricePointsInclude,
  listComponentsPricePointsIncludeSchema,
} from '../models/listComponentsPricePointsInclude';
import {
  ListComponentsPricePointsResponse,
  listComponentsPricePointsResponseSchema,
} from '../models/listComponentsPricePointsResponse';
import { PricePointType, pricePointTypeSchema } from '../models/pricePointType';
import {
  UpdateComponentPricePointRequest,
  updateComponentPricePointRequestSchema,
} from '../models/updateComponentPricePointRequest';
import {
  UpdateComponentRequest,
  updateComponentRequestSchema,
} from '../models/updateComponentRequest';
import {
  UpdateCurrencyPricesRequest,
  updateCurrencyPricesRequestSchema,
} from '../models/updateCurrencyPricesRequest';
import { array, boolean, number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class ComponentsController extends BaseController {
  /**
   * This request will create a component definition under the specified product family. These component
   * definitions determine what components are named, how they are measured, and how much they cost.
   *
   * Components can then be added and “allocated” for each subscription to a product in the product
   * family. These component line-items affect how much a subscription will be charged, depending on the
   * current allocations (i.e. 4 IP Addresses, or SSL “enabled”)
   *
   * This documentation covers both component definitions and component line-items. Please understand the
   * difference.
   *
   * Please note that you may not edit components via API. To do so, please log into the application.
   *
   * ### Component Documentation
   *
   * For more information on components, please see our documentation [here](https://maxio-chargify.
   * zendesk.com/hc/en-us/articles/5405020625677).
   *
   * For information on how to record component usage against a subscription, please see the following
   * resources:
   *
   * + [Proration and Component Allocations](https://maxio-chargify.zendesk.com/hc/en-
   * us/articles/5405020625677#applying-proration-and-recording-components)
   * + [Recording component usage against a subscription](https://maxio-chargify.zendesk.com/hc/en-
   * us/articles/5404606587917#recording-component-usage)
   *
   * @param productFamilyId   The Chargify id of the product family to which the component
   *                                                 belongs
   * @param componentKind     The component kind
   * @param body
   * @return Response from the API call
   */
  async createComponent(
    productFamilyId: number,
    componentKind: ComponentKindPath,
    body?: CreateComponentBody,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ComponentResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      productFamilyId: [productFamilyId, number()],
      componentKind: [componentKind, componentKindPathSchema],
      body: [body, optional(createComponentBodySchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/product_families/${mapped.productFamilyId}/${mapped.componentKind}.json`;
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
    return req.callAsJson(componentResponseSchema, requestOptions);
  }

  /**
   * This request will return information regarding a component having the handle you provide. You can
   * identify your components with a handle so you don't have to save or reference the IDs we generate.
   *
   * @param handle The handle of the component to find
   * @return Response from the API call
   */
  async readComponentByHandle(
    handle: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ComponentResponse>> {
    const req = this.createRequest('GET', '/components/lookup.json');
    const mapped = req.prepareArgs({ handle: [handle, string()] });
    req.query('handle', mapped.handle);
    return req.callAsJson(componentResponseSchema, requestOptions);
  }

  /**
   * This request will return information regarding a component from a specific product family.
   *
   * You may read the component by either the component's id or handle. When using the handle, it must be
   * prefixed with `handle:`.
   *
   * @param productFamilyId   The Chargify id of the product family to which the component belongs
   * @param componentId       Either the Chargify id of the component or the handle for the component
   *                                    prefixed with `handle:`
   * @return Response from the API call
   */
  async readComponentById(
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
    return req.callAsJson(componentResponseSchema, requestOptions);
  }

  /**
   * This request will update a component from a specific product family.
   *
   * You may read the component by either the component's id or handle. When using the handle, it must be
   * prefixed with `handle:`.
   *
   * @param productFamilyId   The Chargify id of the product family to which the
   *                                                           component belongs
   * @param componentId       Either the Chargify id of the component or the handle
   *                                                           for the component prefixed with `handle:`
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
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
    return req.callAsJson(componentResponseSchema, requestOptions);
  }

  /**
   * Sending a DELETE request to this endpoint will archive the component. All current subscribers will
   * be unffected; their subscription/purchase will continue to be charged as usual.
   *
   * @param productFamilyId   The Chargify id of the product family to which the component belongs
   * @param componentId       Either the Chargify id of the component or the handle for the component
   *                                    prefixed with `handle:`
   * @return Response from the API call
   */
  async archiveComponent(
    productFamilyId: number,
    componentId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ComponentResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      productFamilyId: [productFamilyId, number()],
      componentId: [componentId, string()],
    });
    req.appendTemplatePath`/product_families/${mapped.productFamilyId}/components/${mapped.componentId}.json`;
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
    return req.callAsJson(componentResponseSchema, requestOptions);
  }

  /**
   * This request will return a list of components for a site.
   *
   * @param dateField                      The type of filter you would like to apply to your search.
   * @param startDate                      The start date (format YYYY-MM-DD) with which to filter
   *                                                         the date_field. Returns components with a timestamp at or
   *                                                         after midnight (12:00:00 AM) in your site’s time zone on
   *                                                         the date specified.
   * @param endDate                        The end date (format YYYY-MM-DD) with which to filter the
   *                                                         date_field. Returns components with a timestamp up to and
   *                                                         including 11:59:59PM in your site’s time zone on the date
   *                                                         specified.
   * @param startDatetime                  The start date and time (format YYYY-MM-DD HH:MM:SS) with
   *                                                         which to filter the date_field. Returns components with a
   *                                                         timestamp at or after exact time provided in query. You
   *                                                         can specify timezone in query - otherwise your site's time
   *                                                         zone will be used. If provided, this parameter will be
   *                                                         used instead of start_date.
   * @param endDatetime                    The end date and time (format YYYY-MM-DD HH:MM:SS) with
   *                                                         which to filter the date_field. Returns components with a
   *                                                         timestamp at or before exact time provided in query. You
   *                                                         can specify timezone in query - otherwise your site's time
   *                                                         zone will be used. If provided, this parameter will be
   *                                                         used instead of end_date.  optional
   * @param includeArchived                Include archived items
   * @param page                           Result records are organized in pages. By default, the
   *                                                         first page of results is displayed. The page parameter
   *                                                         specifies a page number of results to fetch. You can start
   *                                                         navigating through the pages to consume the results. You
   *                                                         do this by passing in a page parameter. Retrieve the next
   *                                                         page by adding ?page=2 to the query string. If there are
   *                                                         no results to return, then an empty result set will be
   *                                                         returned. Use in query `page=1`.
   * @param perPage                        This parameter indicates how many records to fetch in
   *                                                         each request. Default value is 20. The maximum allowed
   *                                                         values is 200; any per_page value over 200 will be changed
   *                                                         to 200. Use in query `per_page=200`.
   * @param filterIds                      Allows fetching components with matching id based on
   *                                                         provided value. Use in query `filter[ids]=1,2,3`.
   * @param filterUseSiteExchangeRate      Allows fetching components with matching
   *                                                         use_site_exchange_rate based on provided value (refers to
   *                                                         default price point). Use in query
   *                                                         `filter[use_site_exchange_rate]=true`.
   * @return Response from the API call
   */
  async listComponents({
    dateField,
    startDate,
    endDate,
    startDatetime,
    endDatetime,
    includeArchived,
    page,
    perPage,
    filterIds,
    filterUseSiteExchangeRate,
  }: {
    dateField?: BasicDateField,
    startDate?: string,
    endDate?: string,
    startDatetime?: string,
    endDatetime?: string,
    includeArchived?: boolean,
    page?: number,
    perPage?: number,
    filterIds?: string[],
    filterUseSiteExchangeRate?: boolean,
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
      filterIds: [filterIds, optional(array(string()))],
      filterUseSiteExchangeRate: [
        filterUseSiteExchangeRate,
        optional(boolean()),
      ],
    });
    req.query('date_field', mapped.dateField);
    req.query('start_date', mapped.startDate);
    req.query('end_date', mapped.endDate);
    req.query('start_datetime', mapped.startDatetime);
    req.query('end_datetime', mapped.endDatetime);
    req.query('include_archived', mapped.includeArchived);
    req.query('page', mapped.page);
    req.query('per_page', mapped.perPage);
    req.query('filter[ids]', mapped.filterIds, commaPrefix);
    req.query('filter[use_site_exchange_rate]', mapped.filterUseSiteExchangeRate);
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
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      componentId: [componentId, string()],
      body: [body, optional(updateComponentRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/components/${mapped.componentId}.json`;
    return req.call(requestOptions);
  }

  /**
   * Sets a new default price point for the component. This new default will apply to all new
   * subscriptions going forward - existing subscriptions will remain on their current price point.
   *
   * See [Price Points Documentation](https://chargify.zendesk.com/hc/en-us/articles/4407755865883#price-
   * points) for more information on price points and moving subscriptions between price points.
   *
   * Note: Custom price points are not able to be set as the default for a component.
   *
   * @param componentId    The Chargify id of the component to which the price point belongs
   * @param pricePointId   The Chargify id of the price point
   * @return Response from the API call
   */
  async updateDefaultPricePointForComponent(
    componentId: number,
    pricePointId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      componentId: [componentId, number()],
      pricePointId: [pricePointId, number()],
    });
    req.appendTemplatePath`/components/${mapped.componentId}/price_points/${mapped.pricePointId}/default.json`;
    return req.call(requestOptions);
  }

  /**
   * This request will return a list of components for a particular product family.
   *
   * @param productFamilyId                The Chargify id of the product family
   * @param includeArchived                Include archived items.
   * @param filterIds                      Allows fetching components with matching id based on
   *                                                         provided value. Use in query `filter[ids]=1,2`.
   * @param page                           Result records are organized in pages. By default, the
   *                                                         first page of results is displayed. The page parameter
   *                                                         specifies a page number of results to fetch. You can start
   *                                                         navigating through the pages to consume the results. You
   *                                                         do this by passing in a page parameter. Retrieve the next
   *                                                         page by adding ?page=2 to the query string. If there are
   *                                                         no results to return, then an empty result set will be
   *                                                         returned. Use in query `page=1`.
   * @param perPage                        This parameter indicates how many records to fetch in
   *                                                         each request. Default value is 20. The maximum allowed
   *                                                         values is 200; any per_page value over 200 will be changed
   *                                                         to 200. Use in query `per_page=200`.
   * @param dateField                      The type of filter you would like to apply to your search.
   *                                                         Use in query `date_field=created_at`.
   * @param endDate                        The end date (format YYYY-MM-DD) with which to filter the
   *                                                         date_field. Returns components with a timestamp up to and
   *                                                         including 11:59:59PM in your site’s time zone on the date
   *                                                         specified.
   * @param endDatetime                    The end date and time (format YYYY-MM-DD HH:MM:SS) with
   *                                                         which to filter the date_field. Returns components with a
   *                                                         timestamp at or before exact time provided in query. You
   *                                                         can specify timezone in query - otherwise your site's time
   *                                                         zone will be used. If provided, this parameter will be
   *                                                         used instead of end_date. optional.
   * @param startDate                      The start date (format YYYY-MM-DD) with which to filter
   *                                                         the date_field. Returns components with a timestamp at or
   *                                                         after midnight (12:00:00 AM) in your site’s time zone on
   *                                                         the date specified.
   * @param startDatetime                  The start date and time (format YYYY-MM-DD HH:MM:SS) with
   *                                                         which to filter the date_field. Returns components with a
   *                                                         timestamp at or after exact time provided in query. You
   *                                                         can specify timezone in query - otherwise your site's time
   *                                                         zone will be used. If provided, this parameter will be
   *                                                         used instead of start_date.
   * @param filterUseSiteExchangeRate      Allows fetching components with matching
   *                                                         use_site_exchange_rate based on provided value (refers to
   *                                                         default price point). Use in query
   *                                                         `filter[use_site_exchange_rate]=true`.
   * @return Response from the API call
   */
  async listComponentsForProductFamily({
    productFamilyId,
    includeArchived,
    filterIds,
    page,
    perPage,
    dateField,
    endDate,
    endDatetime,
    startDate,
    startDatetime,
    filterUseSiteExchangeRate,
  }: {
    productFamilyId: number,
    includeArchived?: boolean,
    filterIds?: number[],
    page?: number,
    perPage?: number,
    dateField?: BasicDateField,
    endDate?: string,
    endDatetime?: string,
    startDate?: string,
    startDatetime?: string,
    filterUseSiteExchangeRate?: boolean,
  },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ComponentResponse[]>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      productFamilyId: [productFamilyId, number()],
      includeArchived: [includeArchived, optional(boolean())],
      filterIds: [filterIds, optional(array(number()))],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      dateField: [dateField, optional(basicDateFieldSchema)],
      endDate: [endDate, optional(string())],
      endDatetime: [endDatetime, optional(string())],
      startDate: [startDate, optional(string())],
      startDatetime: [startDatetime, optional(string())],
      filterUseSiteExchangeRate: [
        filterUseSiteExchangeRate,
        optional(boolean()),
      ],
    });
    req.query('include_archived', mapped.includeArchived);
    req.query('filter[ids]', mapped.filterIds, commaPrefix);
    req.query('page', mapped.page);
    req.query('per_page', mapped.perPage);
    req.query('date_field', mapped.dateField);
    req.query('end_date', mapped.endDate);
    req.query('end_datetime', mapped.endDatetime);
    req.query('start_date', mapped.startDate);
    req.query('start_datetime', mapped.startDatetime);
    req.query('filter[use_site_exchange_rate]', mapped.filterUseSiteExchangeRate);
    req.appendTemplatePath`/product_families/${mapped.productFamilyId}/components.json`;
    return req.callAsJson(array(componentResponseSchema), requestOptions);
  }

  /**
   * This endpoint can be used to create a new price point for an existing component.
   *
   * @param componentId  The Chargify id of the component
   * @param body
   * @return Response from the API call
   */
  async createComponentPricePoint(
    componentId: number,
    body?: CreateComponentPricePointRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ComponentPricePointResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      componentId: [componentId, number()],
      body: [body, optional(createComponentPricePointRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/components/${mapped.componentId}/price_points.json`;
    return req.callAsJson(componentPricePointResponseSchema, requestOptions);
  }

  /**
   * Use this endpoint to read current price points that are associated with a component.
   *
   * You may specify the component by using either the numeric id or the `handle:gold` syntax.
   *
   * When fetching a component's price points, if you have defined multiple currencies at the site level,
   * you can optionally pass the `?currency_prices=true` query param to include an array of currency
   * price data in the response.
   *
   * If the price point is set to `use_site_exchange_rate: true`, it will return pricing based on the
   * current exchange rate. If the flag is set to false, it will return all of the defined prices for
   * each currency.
   *
   * @param componentId     The Chargify id of the component
   * @param currencyPrices  Include an array of currency price data
   * @param page            Result records are organized in pages. By default, the first page of
   *                                            results is displayed. The page parameter specifies a page number of
   *                                            results to fetch. You can start navigating through the pages to consume
   *                                            the results. You do this by passing in a page parameter. Retrieve the
   *                                            next page by adding ?page=2 to the query string. If there are no
   *                                            results to return, then an empty result set will be returned. Use in
   *                                            query `page=1`.
   * @param perPage         This parameter indicates how many records to fetch in each request.
   *                                            Default value is 20. The maximum allowed values is 200; any per_page
   *                                            value over 200 will be changed to 200. Use in query `per_page=200`.
   * @param filterType      Use in query: `filter[type]=catalog,default`.
   * @return Response from the API call
   */
  async listComponentPricePoints({
    componentId,
    currencyPrices,
    page,
    perPage,
    filterType,
  }: {
    componentId: number,
    currencyPrices?: boolean,
    page?: number,
    perPage?: number,
    filterType?: PricePointType[],
  },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ComponentPricePointsResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      componentId: [componentId, number()],
      currencyPrices: [currencyPrices, optional(boolean())],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      filterType: [filterType, optional(array(pricePointTypeSchema))],
    });
    req.query('currency_prices', mapped.currencyPrices);
    req.query('page', mapped.page);
    req.query('per_page', mapped.perPage);
    req.query('filter[type]', mapped.filterType, commaPrefix);
    req.appendTemplatePath`/components/${mapped.componentId}/price_points.json`;
    return req.callAsJson(componentPricePointsResponseSchema, requestOptions);
  }

  /**
   * Use this endpoint to create multiple component price points in one request.
   *
   * @param componentId  The Chargify id of the component for which you
   *                                                                 want to fetch price points.
   * @param body
   * @return Response from the API call
   */
  async createComponentPricePoints(
    componentId: string,
    body?: CreateComponentPricePointsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ComponentPricePointsResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      componentId: [componentId, string()],
      body: [body, optional(createComponentPricePointsRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/components/${mapped.componentId}/price_points/bulk.json`;
    return req.callAsJson(componentPricePointsResponseSchema, requestOptions);
  }

  /**
   * When updating a price point, it's prices can be updated as well by creating new prices or editing /
   * removing existing ones.
   *
   * Passing in a price bracket without an `id` will attempt to create a new price.
   *
   * Including an `id` will update the corresponding price, and including the `_destroy` flag set to true
   * along with the `id` will remove that price.
   *
   * Note: Custom price points cannot be updated directly. They must be edited through the Subscription.
   *
   * @param componentId    The Chargify id of the component to which the
   *                                                                  price point belongs
   * @param pricePointId   The Chargify id of the price point
   * @param body
   * @return Response from the API call
   */
  async updateComponentPricePoint(
    componentId: number,
    pricePointId: number,
    body?: UpdateComponentPricePointRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ComponentPricePointResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      componentId: [componentId, number()],
      pricePointId: [pricePointId, number()],
      body: [body, optional(updateComponentPricePointRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/components/${mapped.componentId}/price_points/${mapped.pricePointId}.json`;
    return req.callAsJson(componentPricePointResponseSchema, requestOptions);
  }

  /**
   * A price point can be archived at any time. Subscriptions using a price point that has been archived
   * will continue using it until they're moved to another price point.
   *
   * @param componentId    The Chargify id of the component to which the price point belongs
   * @param pricePointId   The Chargify id of the price point
   * @return Response from the API call
   */
  async archiveComponentPricePoint(
    componentId: number,
    pricePointId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ComponentPricePointResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      componentId: [componentId, number()],
      pricePointId: [pricePointId, number()],
    });
    req.appendTemplatePath`/components/${mapped.componentId}/price_points/${mapped.pricePointId}.json`;
    return req.callAsJson(componentPricePointResponseSchema, requestOptions);
  }

  /**
   * Use this endpoint to unarchive a component price point.
   *
   * @param componentId    The Chargify id of the component to which the price point belongs
   * @param pricePointId   The Chargify id of the price point
   * @return Response from the API call
   */
  async unarchiveComponentPricePoint(
    componentId: number,
    pricePointId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ComponentPricePointResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      componentId: [componentId, number()],
      pricePointId: [pricePointId, number()],
    });
    req.appendTemplatePath`/components/${mapped.componentId}/price_points/${mapped.pricePointId}/unarchive.json`;
    return req.callAsJson(componentPricePointResponseSchema, requestOptions);
  }

  /**
   * This endpoint allows you to create currency prices for a given currency that has been defined on the
   * site level in your settings.
   *
   * When creating currency prices, they need to mirror the structure of your primary pricing. For each
   * price level defined on the component price point, there should be a matching price level created in
   * the given currency.
   *
   * Note: Currency Prices are not able to be created for custom price points.
   *
   * @param pricePointId   The Chargify id of the price point
   * @param body
   * @return Response from the API call
   */
  async createCurrencyPrices(
    pricePointId: number,
    body?: CreateCurrencyPricesRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CurrencyPrice[]>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      pricePointId: [pricePointId, number()],
      body: [body, optional(createCurrencyPricesRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/price_points/${mapped.pricePointId}/currency_prices.json`;
    return req.callAsJson(array(currencyPriceSchema), requestOptions);
  }

  /**
   * This endpoint allows you to update currency prices for a given currency that has been defined on the
   * site level in your settings.
   *
   * Note: Currency Prices are not able to be updated for custom price points.
   *
   * @param pricePointId   The Chargify id of the price point
   * @param body
   * @return Response from the API call
   */
  async updateCurrencyPrices(
    pricePointId: number,
    body?: UpdateCurrencyPricesRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CurrencyPrice[]>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      pricePointId: [pricePointId, number()],
      body: [body, optional(updateCurrencyPricesRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/price_points/${mapped.pricePointId}/currency_prices.json`;
    return req.callAsJson(array(currencyPriceSchema), requestOptions);
  }

  /**
   * This method allows to retrieve a list of Components Price Points belonging to a Site.
   *
   * @param filterDateField        The type of filter you would like to
   *                                                                            apply to your search. Use in query:
   *                                                                            `filter[date_field]=created_at`.
   * @param filterEndDate          The end date (format YYYY-MM-DD) with
   *                                                                            which to filter the date_field. Returns
   *                                                                            price points with a timestamp up to and
   *                                                                            including 11:59:59PM in your site’s
   *                                                                            time zone on the date specified.
   * @param filterEndDatetime      The end date and time (format YYYY-MM-
   *                                                                            DD HH:MM:SS) with which to filter the
   *                                                                            date_field. Returns price points with a
   *                                                                            timestamp at or before exact time
   *                                                                            provided in query. You can specify
   *                                                                            timezone in query - otherwise your
   *                                                                            site's time zone will be used. If
   *                                                                            provided, this parameter will be used
   *                                                                            instead of end_date.
   * @param include                Allows including additional data in
   *                                                                            the response. Use in query:
   *                                                                            `include=currency_prices`.
   * @param page                   Result records are organized in pages.
   *                                                                            By default, the first page of results
   *                                                                            is displayed. The page parameter
   *                                                                            specifies a page number of results to
   *                                                                            fetch. You can start navigating through
   *                                                                            the pages to consume the results. You
   *                                                                            do this by passing in a page parameter.
   *                                                                            Retrieve the next page by adding ?
   *                                                                            page=2 to the query string. If there
   *                                                                            are no results to return, then an empty
   *                                                                            result set will be returned. Use in
   *                                                                            query `page=1`.
   * @param perPage                This parameter indicates how many
   *                                                                            records to fetch in each request.
   *                                                                            Default value is 20. The maximum
   *                                                                            allowed values is 200; any per_page
   *                                                                            value over 200 will be changed to 200.
   *                                                                            Use in query `per_page=200`.
   * @param filterStartDate        The start date (format YYYY-MM-DD)
   *                                                                            with which to filter the date_field.
   *                                                                            Returns price points with a timestamp
   *                                                                            at or after midnight (12:00:00 AM) in
   *                                                                            your site’s time zone on the date
   *                                                                            specified.
   * @param filterStartDatetime    The start date and time (format YYYY-
   *                                                                            MM-DD HH:MM:SS) with which to filter
   *                                                                            the date_field. Returns price points
   *                                                                            with a timestamp at or after exact time
   *                                                                            provided in query. You can specify
   *                                                                            timezone in query - otherwise your
   *                                                                            site's time zone will be used. If
   *                                                                            provided, this parameter will be used
   *                                                                            instead of start_date.
   * @param filterType             Allows fetching price points with
   *                                                                            matching type. Use in query:
   *                                                                            `filter[type]=custom,catalog`.
   * @param direction              Controls the order in which results
   *                                                                            are returned. Use in query
   *                                                                            `direction=asc`.
   * @param filterIds              Allows fetching price points with
   *                                                                            matching id based on provided values.
   *                                                                            Use in query: `filter[ids]=1,2,3`.
   * @param filterArchivedAt       Allows fetching price points only if
   *                                                                            archived_at is present or not. Use in
   *                                                                            query: `filter[archived_at]=not_null`.
   * @return Response from the API call
   */
  async listAllComponentPricePoints({
    filterDateField,
    filterEndDate,
    filterEndDatetime,
    include,
    page,
    perPage,
    filterStartDate,
    filterStartDatetime,
    filterType,
    direction,
    filterIds,
    filterArchivedAt,
  }: {
    filterDateField?: BasicDateField,
    filterEndDate?: string,
    filterEndDatetime?: string,
    include?: ListComponentsPricePointsInclude,
    page?: number,
    perPage?: number,
    filterStartDate?: string,
    filterStartDatetime?: string,
    filterType?: PricePointType,
    direction?: ListAllComponentPricePointsInputDirection,
    filterIds?: number[],
    filterArchivedAt?: IncludeNotNull,
  },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListComponentsPricePointsResponse>> {
    const req = this.createRequest('GET', '/components_price_points.json');
    const mapped = req.prepareArgs({
      filterDateField: [filterDateField, optional(basicDateFieldSchema)],
      filterEndDate: [filterEndDate, optional(string())],
      filterEndDatetime: [filterEndDatetime, optional(string())],
      include: [include, optional(listComponentsPricePointsIncludeSchema)],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      filterStartDate: [filterStartDate, optional(string())],
      filterStartDatetime: [filterStartDatetime, optional(string())],
      filterType: [filterType, optional(pricePointTypeSchema)],
      direction: [
        direction,
        optional(listAllComponentPricePointsInputDirectionSchema),
      ],
      filterIds: [filterIds, optional(array(number()))],
      filterArchivedAt: [filterArchivedAt, optional(includeNotNullSchema)],
    });
    req.query('filter[date_field]', mapped.filterDateField);
    req.query('filter[end_date]', mapped.filterEndDate);
    req.query('filter[end_datetime]', mapped.filterEndDatetime);
    req.query('include', mapped.include);
    req.query('page', mapped.page);
    req.query('per_page', mapped.perPage);
    req.query('filter[start_date]', mapped.filterStartDate);
    req.query('filter[start_datetime]', mapped.filterStartDatetime);
    req.query('filter[type]', mapped.filterType);
    req.query('direction', mapped.direction);
    req.query('filter[ids]', mapped.filterIds, commaPrefix);
    req.query('filter[archived_at]', mapped.filterArchivedAt);
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
    return req.callAsJson(
      listComponentsPricePointsResponseSchema,
      requestOptions
    );
  }
}
