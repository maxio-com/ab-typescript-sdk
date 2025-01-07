/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, commaPrefix, RequestOptions } from '../core';
import {
  ComponentCurrencyPricesResponse,
  componentCurrencyPricesResponseSchema,
} from '../models/componentCurrencyPricesResponse';
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
  ArchiveComponentPricePointComponentId,
  archiveComponentPricePointComponentIdSchema,
} from '../models/containers/archiveComponentPricePointComponentId';
import {
  ArchiveComponentPricePointPricePointId,
  archiveComponentPricePointPricePointIdSchema,
} from '../models/containers/archiveComponentPricePointPricePointId';
import {
  ReadComponentPricePointComponentId,
  readComponentPricePointComponentIdSchema,
} from '../models/containers/readComponentPricePointComponentId';
import {
  ReadComponentPricePointPricePointId,
  readComponentPricePointPricePointIdSchema,
} from '../models/containers/readComponentPricePointPricePointId';
import {
  UpdateComponentPricePointComponentId,
  updateComponentPricePointComponentIdSchema,
} from '../models/containers/updateComponentPricePointComponentId';
import {
  UpdateComponentPricePointPricePointId,
  updateComponentPricePointPricePointIdSchema,
} from '../models/containers/updateComponentPricePointPricePointId';
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
import {
  ListComponentsPricePointsInclude,
  listComponentsPricePointsIncludeSchema,
} from '../models/listComponentsPricePointsInclude';
import {
  ListComponentsPricePointsResponse,
  listComponentsPricePointsResponseSchema,
} from '../models/listComponentsPricePointsResponse';
import {
  ListPricePointsFilter,
  listPricePointsFilterSchema,
} from '../models/listPricePointsFilter';
import { PricePointType, pricePointTypeSchema } from '../models/pricePointType';
import {
  SortingDirection,
  sortingDirectionSchema,
} from '../models/sortingDirection';
import {
  UpdateComponentPricePointRequest,
  updateComponentPricePointRequestSchema,
} from '../models/updateComponentPricePointRequest';
import {
  UpdateCurrencyPricesRequest,
  updateCurrencyPricesRequestSchema,
} from '../models/updateCurrencyPricesRequest';
import { array, boolean, number, optional, string } from '../schema';
import { BaseController } from './baseController';
import { ErrorArrayMapResponseError } from '../errors/errorArrayMapResponseError';
import { ErrorListResponseError } from '../errors/errorListResponseError';

export class ComponentPricePointsController extends BaseController {
  /**
   * Sets a new default price point for the component. This new default will apply to all new
   * subscriptions going forward - existing subscriptions will remain on their current price point.
   *
   * See [Price Points Documentation](https://maxio.zendesk.com/hc/en-us/articles/24261191737101-Price-
   * Points-Components) for more information on price points and moving subscriptions between price
   * points.
   *
   * Note: Custom price points are not able to be set as the default for a component.
   *
   * @param componentId    The Advanced Billing id of the component to which the price point belongs
   * @param pricePointId   The Advanced Billing id of the price point
   * @return Response from the API call
   */
  async promoteComponentPricePointToDefault(
    componentId: number,
    pricePointId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ComponentResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      componentId: [componentId, number()],
      pricePointId: [pricePointId, number()],
    });
    req.appendTemplatePath`/components/${mapped.componentId}/price_points/${mapped.pricePointId}/default.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(componentResponseSchema, requestOptions);
  }

  /**
   * This endpoint can be used to create a new price point for an existing component.
   *
   * @param componentId  The Advanced Billing id of the component
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
    req.throwOn(
      422,
      ErrorArrayMapResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
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
   * @param componentId     The Advanced Billing id of the component
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
  async listComponentPricePoints(
    {
      componentId,
      currencyPrices,
      page,
      perPage,
      filterType,
    }: {
      componentId: number;
      currencyPrices?: boolean;
      page?: number;
      perPage?: number;
      filterType?: PricePointType[];
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
    req.query('currency_prices', mapped.currencyPrices, commaPrefix);
    req.query('page', mapped.page, commaPrefix);
    req.query('per_page', mapped.perPage, commaPrefix);
    req.query('filter[type]', mapped.filterType, commaPrefix);
    req.appendTemplatePath`/components/${mapped.componentId}/price_points.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(componentPricePointsResponseSchema, requestOptions);
  }

  /**
   * Use this endpoint to create multiple component price points in one request.
   *
   * @param componentId  The Advanced Billing id of the component for
   *                                                                 which you want to fetch price points.
   * @param body
   * @return Response from the API call
   */
  async bulkCreateComponentPricePoints(
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
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
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
   * @param componentId    The id or handle of the component. When using
   *                                                                  the handle, it must be prefixed with `handle:`.
   *                                                                  Example: `123` for an integer ID, or `handle:
   *                                                                  example-product-handle` for a string handle.
   * @param pricePointId   The id or handle of the price point. When using
   *                                                                  the handle, it must be prefixed with `handle:`.
   *                                                                  Example: `123` for an integer ID, or `handle:
   *                                                                  example-price_point-handle` for a string handle.
   * @param body
   * @return Response from the API call
   */
  async updateComponentPricePoint(
    componentId: UpdateComponentPricePointComponentId,
    pricePointId: UpdateComponentPricePointPricePointId,
    body?: UpdateComponentPricePointRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ComponentPricePointResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      componentId: [componentId, updateComponentPricePointComponentIdSchema],
      pricePointId: [pricePointId, updateComponentPricePointPricePointIdSchema],
      body: [body, optional(updateComponentPricePointRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/components/${mapped.componentId}/price_points/${mapped.pricePointId}.json`;
    req.throwOn(
      422,
      ErrorArrayMapResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(componentPricePointResponseSchema, requestOptions);
  }

  /**
   * Use this endpoint to retrieve details for a specific component price point. You can achieve this by
   * using either the component price point ID or handle.
   *
   * @param componentId     The id or handle of the component. When using the
   *                                                               handle, it must be prefixed with `handle:`. Example:
   *                                                               `123` for an integer ID, or `handle:example-product-
   *                                                               handle` for a string handle.
   * @param pricePointId    The id or handle of the price point. When using the
   *                                                               handle, it must be prefixed with `handle:`. Example:
   *                                                               `123` for an integer ID, or `handle:example-
   *                                                               price_point-handle` for a string handle.
   * @param currencyPrices  Include an array of currency price data
   * @return Response from the API call
   */
  async readComponentPricePoint(
    componentId: ReadComponentPricePointComponentId,
    pricePointId: ReadComponentPricePointPricePointId,
    currencyPrices?: boolean,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ComponentPricePointResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      componentId: [componentId, readComponentPricePointComponentIdSchema],
      pricePointId: [pricePointId, readComponentPricePointPricePointIdSchema],
      currencyPrices: [currencyPrices, optional(boolean())],
    });
    req.query('currency_prices', mapped.currencyPrices, commaPrefix);
    req.appendTemplatePath`/components/${mapped.componentId}/price_points/${mapped.pricePointId}.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(componentPricePointResponseSchema, requestOptions);
  }

  /**
   * A price point can be archived at any time. Subscriptions using a price point that has been archived
   * will continue using it until they're moved to another price point.
   *
   * @param componentId    The id or handle of the component. When using the
   *                                                                 handle, it must be prefixed with `handle:`.
   *                                                                 Example: `123` for an integer ID, or `handle:
   *                                                                 example-product-handle` for a string handle.
   * @param pricePointId   The id or handle of the price point. When using
   *                                                                 the handle, it must be prefixed with `handle:`.
   *                                                                 Example: `123` for an integer ID, or `handle:
   *                                                                 example-price_point-handle` for a string handle.
   * @return Response from the API call
   */
  async archiveComponentPricePoint(
    componentId: ArchiveComponentPricePointComponentId,
    pricePointId: ArchiveComponentPricePointPricePointId,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ComponentPricePointResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      componentId: [componentId, archiveComponentPricePointComponentIdSchema],
      pricePointId: [
        pricePointId,
        archiveComponentPricePointPricePointIdSchema,
      ],
    });
    req.appendTemplatePath`/components/${mapped.componentId}/price_points/${mapped.pricePointId}.json`;
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(componentPricePointResponseSchema, requestOptions);
  }

  /**
   * Use this endpoint to unarchive a component price point.
   *
   * @param componentId    The Advanced Billing id of the component to which the price point belongs
   * @param pricePointId   The Advanced Billing id of the price point
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
    req.authenticate([{ basicAuth: true }]);
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
   * @param pricePointId   The Advanced Billing id of the price point
   * @param body
   * @return Response from the API call
   */
  async createCurrencyPrices(
    pricePointId: number,
    body?: CreateCurrencyPricesRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ComponentCurrencyPricesResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      pricePointId: [pricePointId, number()],
      body: [body, optional(createCurrencyPricesRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/price_points/${mapped.pricePointId}/currency_prices.json`;
    req.throwOn(
      422,
      ErrorArrayMapResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(
      componentCurrencyPricesResponseSchema,
      requestOptions
    );
  }

  /**
   * This endpoint allows you to update currency prices for a given currency that has been defined on the
   * site level in your settings.
   *
   * Note: Currency Prices are not able to be updated for custom price points.
   *
   * @param pricePointId   The Advanced Billing id of the price point
   * @param body
   * @return Response from the API call
   */
  async updateCurrencyPrices(
    pricePointId: number,
    body?: UpdateCurrencyPricesRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ComponentCurrencyPricesResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      pricePointId: [pricePointId, number()],
      body: [body, optional(updateCurrencyPricesRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/price_points/${mapped.pricePointId}/currency_prices.json`;
    req.throwOn(
      422,
      ErrorArrayMapResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(
      componentCurrencyPricesResponseSchema,
      requestOptions
    );
  }

  /**
   * This method allows to retrieve a list of Components Price Points belonging to a Site.
   *
   * @param include   Allows including additional data in the response. Use in
   *                                                      query: `include=currency_prices`.
   * @param page      Result records are organized in pages. By default, the first
   *                                                      page of results is displayed. The page parameter specifies a
   *                                                      page number of results to fetch. You can start navigating
   *                                                      through the pages to consume the results. You do this by
   *                                                      passing in a page parameter. Retrieve the next page by adding
   *                                                      ?page=2 to the query string. If there are no results to
   *                                                      return, then an empty result set will be returned. Use in
   *                                                      query `page=1`.
   * @param perPage   This parameter indicates how many records to fetch in each
   *                                                      request. Default value is 20. The maximum allowed values is
   *                                                      200; any per_page value over 200 will be changed to 200. Use
   *                                                      in query `per_page=200`.
   * @param direction Controls the order in which results are returned. Use in
   *                                                      query `direction=asc`.
   * @param filter    Filter to use for List PricePoints operations
   * @return Response from the API call
   */
  async listAllComponentPricePoints(
    {
      include,
      page,
      perPage,
      direction,
      filter,
    }: {
      include?: ListComponentsPricePointsInclude;
      page?: number;
      perPage?: number;
      direction?: SortingDirection;
      filter?: ListPricePointsFilter;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListComponentsPricePointsResponse>> {
    const req = this.createRequest('GET', '/components_price_points.json');
    const mapped = req.prepareArgs({
      include: [include, optional(listComponentsPricePointsIncludeSchema)],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      direction: [direction, optional(sortingDirectionSchema)],
      filter: [filter, optional(listPricePointsFilterSchema)],
    });
    req.query('include', mapped.include, commaPrefix);
    req.query('page', mapped.page, commaPrefix);
    req.query('per_page', mapped.perPage, commaPrefix);
    req.query('direction', mapped.direction, commaPrefix);
    req.query('filter', mapped.filter, commaPrefix);
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(
      listComponentsPricePointsResponseSchema,
      requestOptions
    );
  }
}
