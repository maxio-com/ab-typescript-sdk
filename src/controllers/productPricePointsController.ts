/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, commaPrefix, RequestOptions } from '../core';
import { ErrorListResponseError } from '../errors/errorListResponseError';
import { ErrorMapResponseError } from '../errors/errorMapResponseError';
import { BasicDateField, basicDateFieldSchema } from '../models/basicDateField';
import {
  BulkCreateProductPricePointsRequest,
  bulkCreateProductPricePointsRequestSchema,
} from '../models/bulkCreateProductPricePointsRequest';
import {
  BulkCreateProductPricePointsResponse,
  bulkCreateProductPricePointsResponseSchema,
} from '../models/bulkCreateProductPricePointsResponse';
import {
  ListAllProductPricePointsInputDirection,
  listAllProductPricePointsInputDirectionSchema,
} from '../models/containers/listAllProductPricePointsInputDirection';
import {
  CreateProductCurrencyPricesRequest,
  createProductCurrencyPricesRequestSchema,
} from '../models/createProductCurrencyPricesRequest';
import {
  CreateProductPricePointRequest,
  createProductPricePointRequestSchema,
} from '../models/createProductPricePointRequest';
import { IncludeNotNull, includeNotNullSchema } from '../models/includeNotNull';
import {
  ListProductPricePointsResponse,
  listProductPricePointsResponseSchema,
} from '../models/listProductPricePointsResponse';
import {
  ListProductsPricePointsInclude,
  listProductsPricePointsIncludeSchema,
} from '../models/listProductsPricePointsInclude';
import { PricePointType, pricePointTypeSchema } from '../models/pricePointType';
import {
  ProductPricePointCurrencyPrice,
  productPricePointCurrencyPriceSchema,
} from '../models/productPricePointCurrencyPrice';
import {
  ProductPricePointResponse,
  productPricePointResponseSchema,
} from '../models/productPricePointResponse';
import {
  UpdateCurrencyPricesRequest,
  updateCurrencyPricesRequestSchema,
} from '../models/updateCurrencyPricesRequest';
import {
  UpdateProductPricePointRequest,
  updateProductPricePointRequestSchema,
} from '../models/updateProductPricePointRequest';
import { array, boolean, number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class ProductPricePointsController extends BaseController {
  /**
   * [Product Price Point Documentation](https://chargify.zendesk.com/hc/en-us/articles/4407755824155)
   *
   * @param productId    The id or handle of the product. When using the
   *                                                              handle, it must be prefixed with `handle:`
   * @param body
   * @return Response from the API call
   */
  async createProductPricePoint(
    productId: number,
    body?: CreateProductPricePointRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProductPricePointResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      productId: [productId, number()],
      body: [body, optional(createProductPricePointRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/products/${mapped.productId}/price_points.json`;
    return req.callAsJson(productPricePointResponseSchema, requestOptions);
  }

  /**
   * Use this endpoint to retrieve a list of product price points.
   *
   * @param productId       The id or handle of the product. When using the handle, it must be
   *                                            prefixed with `handle:`
   * @param page            Result records are organized in pages. By default, the first page of
   *                                            results is displayed. The page parameter specifies a page number of
   *                                            results to fetch. You can start navigating through the pages to consume
   *                                            the results. You do this by passing in a page parameter. Retrieve the
   *                                            next page by adding ?page=2 to the query string. If there are no
   *                                            results to return, then an empty result set will be returned. Use in
   *                                            query `page=1`.
   * @param perPage         This parameter indicates how many records to fetch in each request.
   *                                            Default value is 10. The maximum allowed values is 200; any per_page
   *                                            value over 200 will be changed to 200.
   * @param currencyPrices  When fetching a product's price points, if you have defined multiple
   *                                            currencies at the site level, you can optionally pass the ?
   *                                            currency_prices=true query param to include an array of currency price
   *                                            data in the response. If the product price point is set to
   *                                            use_site_exchange_rate: true, it will return pricing based on the
   *                                            current exchange rate. If the flag is set to false, it will return all
   *                                            of the defined prices for each currency.
   * @param filterType      Use in query: `filter[type]=catalog,default`.
   * @return Response from the API call
   */
  async listProductPricePoints({
    productId,
    page,
    perPage,
    currencyPrices,
    filterType,
  }: {
    productId: number,
    page?: number,
    perPage?: number,
    currencyPrices?: boolean,
    filterType?: PricePointType[],
  },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListProductPricePointsResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      productId: [productId, number()],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      currencyPrices: [currencyPrices, optional(boolean())],
      filterType: [filterType, optional(array(pricePointTypeSchema))],
    });
    req.query('page', mapped.page);
    req.query('per_page', mapped.perPage);
    req.query('currency_prices', mapped.currencyPrices);
    req.query('filter[type]', mapped.filterType, commaPrefix);
    req.appendTemplatePath`/products/${mapped.productId}/price_points.json`;
    return req.callAsJson(listProductPricePointsResponseSchema, requestOptions);
  }

  /**
   * Use this endpoint to update a product price point.
   *
   * Note: Custom product price points are not able to be updated.
   *
   * @param productId      The id or handle of the product. When using the
   *                                                                handle, it must be prefixed with `handle:`
   * @param pricePointId   The id or handle of the price point. When using
   *                                                                the handle, it must be prefixed with `handle:`
   * @param body
   * @return Response from the API call
   */
  async updateProductPricePoint(
    productId: number,
    pricePointId: number,
    body?: UpdateProductPricePointRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProductPricePointResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      productId: [productId, number()],
      pricePointId: [pricePointId, number()],
      body: [body, optional(updateProductPricePointRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/products/${mapped.productId}/price_points/${mapped.pricePointId}.json`;
    return req.callAsJson(productPricePointResponseSchema, requestOptions);
  }

  /**
   * Use this endpoint to retrieve details for a specific product price point.
   *
   * @param productId       The id or handle of the product. When using the handle, it must be prefixed
   *                                   with `handle:`
   * @param pricePointId    The id or handle of the price point. When using the handle, it must be prefixed
   *                                   with `handle:`
   * @param currencyPrices  When fetching a product's price points, if you have defined multiple currencies
   *                                   at the site level, you can optionally pass the ?currency_prices=true query param
   *                                   to include an array of currency price data in the response. If the product price
   *                                   point is set to use_site_exchange_rate: true, it will return pricing based on
   *                                   the current exchange rate. If the flag is set to false, it will return all of
   *                                   the defined prices for each currency.
   * @return Response from the API call
   */
  async readProductPricePoint(
    productId: number,
    pricePointId: number,
    currencyPrices?: boolean,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProductPricePointResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      productId: [productId, number()],
      pricePointId: [pricePointId, number()],
      currencyPrices: [currencyPrices, optional(boolean())],
    });
    req.query('currency_prices', mapped.currencyPrices);
    req.appendTemplatePath`/products/${mapped.productId}/price_points/${mapped.pricePointId}.json`;
    return req.callAsJson(productPricePointResponseSchema, requestOptions);
  }

  /**
   * Use this endpoint to archive a product price point.
   *
   * @param productId      The id or handle of the product. When using the handle, it must be prefixed with
   *                                 `handle:`
   * @param pricePointId   The id or handle of the price point. When using the handle, it must be prefixed
   *                                 with `handle:`
   * @return Response from the API call
   */
  async archiveProductPricePoint(
    productId: number,
    pricePointId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProductPricePointResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      productId: [productId, number()],
      pricePointId: [pricePointId, number()],
    });
    req.appendTemplatePath`/products/${mapped.productId}/price_points/${mapped.pricePointId}.json`;
    return req.callAsJson(productPricePointResponseSchema, requestOptions);
  }

  /**
   * Use this endpoint to unarchive an archived product price point.
   *
   * @param productId      The Chargify id of the product to which the price point belongs
   * @param pricePointId   The Chargify id of the product price point
   * @return Response from the API call
   */
  async unarchiveProductPricePoint(
    productId: number,
    pricePointId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProductPricePointResponse>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      productId: [productId, number()],
      pricePointId: [pricePointId, number()],
    });
    req.appendTemplatePath`/products/${mapped.productId}/price_points/${mapped.pricePointId}/unarchive.json`;
    return req.callAsJson(productPricePointResponseSchema, requestOptions);
  }

  /**
   * Use this endpoint to make a product price point the default for the product.
   *
   * Note: Custom product price points are not able to be set as the default for a product.
   *
   * @param productId      The Chargify id of the product to which the price point belongs
   * @param pricePointId   The Chargify id of the product price point
   * @return Response from the API call
   */
  async setDefaultPricePointForProduct(
    productId: number,
    pricePointId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProductPricePointResponse>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      productId: [productId, number()],
      pricePointId: [pricePointId, number()],
    });
    req.appendTemplatePath`/products/${mapped.productId}/price_points/${mapped.pricePointId}/default.json`;
    return req.callAsJson(productPricePointResponseSchema, requestOptions);
  }

  /**
   * Use this endpoint to create multiple product price points in one request.
   *
   * @param productId    The Chargify id of the product to which the
   *                                                                   price points belong
   * @param body
   * @return Response from the API call
   */
  async createProductPricePoints(
    productId: number,
    body?: BulkCreateProductPricePointsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BulkCreateProductPricePointsResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      productId: [productId, number()],
      body: [body, optional(bulkCreateProductPricePointsRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/products/${mapped.productId}/price_points/bulk.json`;
    return req.callAsJson(
      bulkCreateProductPricePointsResponseSchema,
      requestOptions
    );
  }

  /**
   * This endpoint allows you to create currency prices for a given currency that has been defined on the
   * site level in your settings.
   *
   * When creating currency prices, they need to mirror the structure of your primary pricing. If the
   * product price point defines a trial and/or setup fee, each currency must also define a trial and/or
   * setup fee.
   *
   * Note: Currency Prices are not able to be created for custom product price points.
   *
   * @param productPricePointId    The Chargify id of the product price
   *                                                                            point
   * @param body
   * @return Response from the API call
   */
  async createProductCurrencyPrices(
    productPricePointId: number,
    body?: CreateProductCurrencyPricesRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProductPricePointCurrencyPrice>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      productPricePointId: [productPricePointId, number()],
      body: [body, optional(createProductCurrencyPricesRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/product_price_points/${mapped.productPricePointId}/currency_prices.json`;
    req.throwOn(422, ErrorMapResponseError, 'Unprocessable Entity (WebDAV)');
    return req.callAsJson(productPricePointCurrencyPriceSchema, requestOptions);
  }

  /**
   * This endpoint allows you to update the `price`s of currency prices for a given currency that exists
   * on the product price point.
   *
   * When updating the pricing, it needs to mirror the structure of your primary pricing. If the product
   * price point defines a trial and/or setup fee, each currency must also define a trial and/or setup
   * fee.
   *
   * Note: Currency Prices are not able to be updated for custom product price points.
   *
   * @param productPricePointId    The Chargify id of the product price point
   * @param body
   * @return Response from the API call
   */
  async updateProductCurrencyPrices(
    productPricePointId: number,
    body?: UpdateCurrencyPricesRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProductPricePointCurrencyPrice[]>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      productPricePointId: [productPricePointId, number()],
      body: [body, optional(updateCurrencyPricesRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/product_price_points/${mapped.productPricePointId}/currency_prices.json`;
    return req.callAsJson(
      array(productPricePointCurrencyPriceSchema),
      requestOptions
    );
  }

  /**
   * This method allows retrieval of a list of Products Price Points belonging to a Site.
   *
   * @param direction              Controls the order in which results are
   *                                                                          returned. Use in query `direction=asc`.
   * @param filterArchivedAt       Allows fetching price points only if
   *                                                                          archived_at is present or not. Use in
   *                                                                          query: `filter[archived_at]=not_null`.
   * @param filterDateField        The type of filter you would like to
   *                                                                          apply to your search. Use in query:
   *                                                                          `filter[date_field]=created_at`.
   * @param filterEndDate          The end date (format YYYY-MM-DD) with
   *                                                                          which to filter the date_field. Returns
   *                                                                          price points with a timestamp up to and
   *                                                                          including 11:59:59PM in your site’s time
   *                                                                          zone on the date specified.
   * @param filterEndDatetime      The end date and time (format YYYY-MM-DD
   *                                                                          HH:MM:SS) with which to filter the
   *                                                                          date_field. Returns price points with a
   *                                                                          timestamp at or before exact time
   *                                                                          provided in query. You can specify
   *                                                                          timezone in query - otherwise your site's
   *                                                                          time zone will be used. If provided, this
   *                                                                          parameter will be used instead of
   *                                                                          end_date.
   * @param filterIds              Allows fetching price points with
   *                                                                          matching id based on provided values. Use
   *                                                                          in query: `filter[ids]=1,2,3`.
   * @param filterStartDate        The start date (format YYYY-MM-DD) with
   *                                                                          which to filter the date_field. Returns
   *                                                                          price points with a timestamp at or after
   *                                                                          midnight (12:00:00 AM) in your site’s
   *                                                                          time zone on the date specified.
   * @param filterStartDatetime    The start date and time (format YYYY-MM-
   *                                                                          DD HH:MM:SS) with which to filter the
   *                                                                          date_field. Returns price points with a
   *                                                                          timestamp at or after exact time provided
   *                                                                          in query. You can specify timezone in
   *                                                                          query - otherwise your site's time zone
   *                                                                          will be used. If provided, this parameter
   *                                                                          will be used instead of start_date.
   * @param filterType             Allows fetching price points with
   *                                                                          matching type. Use in query:
   *                                                                          `filter[type]=catalog,custom`.
   * @param include                Allows including additional data in the
   *                                                                          response. Use in query:
   *                                                                          `include=currency_prices`.
   * @param page                   Result records are organized in pages.
   *                                                                          By default, the first page of results is
   *                                                                          displayed. The page parameter specifies a
   *                                                                          page number of results to fetch. You can
   *                                                                          start navigating through the pages to
   *                                                                          consume the results. You do this by
   *                                                                          passing in a page parameter. Retrieve the
   *                                                                          next page by adding ?page=2 to the query
   *                                                                          string. If there are no results to return,
   *                                                                          then an empty result set will be
   *                                                                          returned. Use in query `page=1`.
   * @param perPage                This parameter indicates how many
   *                                                                          records to fetch in each request. Default
   *                                                                          value is 20. The maximum allowed values
   *                                                                          is 200; any per_page value over 200 will
   *                                                                          be changed to 200. Use in query
   *                                                                          `per_page=200`.
   * @return Response from the API call
   */
  async listAllProductPricePoints({
    direction,
    filterArchivedAt,
    filterDateField,
    filterEndDate,
    filterEndDatetime,
    filterIds,
    filterStartDate,
    filterStartDatetime,
    filterType,
    include,
    page,
    perPage,
  }: {
    direction?: ListAllProductPricePointsInputDirection,
    filterArchivedAt?: IncludeNotNull,
    filterDateField?: BasicDateField,
    filterEndDate?: string,
    filterEndDatetime?: string,
    filterIds?: number[],
    filterStartDate?: string,
    filterStartDatetime?: string,
    filterType?: PricePointType,
    include?: ListProductsPricePointsInclude,
    page?: number,
    perPage?: number,
  },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListProductPricePointsResponse>> {
    const req = this.createRequest('GET', '/products_price_points.json');
    const mapped = req.prepareArgs({
      direction: [
        direction,
        optional(listAllProductPricePointsInputDirectionSchema),
      ],
      filterArchivedAt: [filterArchivedAt, optional(includeNotNullSchema)],
      filterDateField: [filterDateField, optional(basicDateFieldSchema)],
      filterEndDate: [filterEndDate, optional(string())],
      filterEndDatetime: [filterEndDatetime, optional(string())],
      filterIds: [filterIds, optional(array(number()))],
      filterStartDate: [filterStartDate, optional(string())],
      filterStartDatetime: [filterStartDatetime, optional(string())],
      filterType: [filterType, optional(pricePointTypeSchema)],
      include: [include, optional(listProductsPricePointsIncludeSchema)],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
    });
    req.query('direction', mapped.direction);
    req.query('filter[archived_at]', mapped.filterArchivedAt);
    req.query('filter[date_field]', mapped.filterDateField);
    req.query('filter[end_date]', mapped.filterEndDate);
    req.query('filter[end_datetime]', mapped.filterEndDatetime);
    req.query('filter[ids]', mapped.filterIds, commaPrefix);
    req.query('filter[start_date]', mapped.filterStartDate);
    req.query('filter[start_datetime]', mapped.filterStartDatetime);
    req.query('filter[type]', mapped.filterType);
    req.query('include', mapped.include);
    req.query('page', mapped.page);
    req.query('per_page', mapped.perPage);
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
    return req.callAsJson(listProductPricePointsResponseSchema, requestOptions);
  }
}
