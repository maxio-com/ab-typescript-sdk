/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, commaPrefix, RequestOptions } from '../core';
import {
  BulkCreateProductPricePointsRequest,
  bulkCreateProductPricePointsRequestSchema,
} from '../models/bulkCreateProductPricePointsRequest';
import {
  BulkCreateProductPricePointsResponse,
  bulkCreateProductPricePointsResponseSchema,
} from '../models/bulkCreateProductPricePointsResponse';
import {
  ArchiveProductPricePointPricePointId,
  archiveProductPricePointPricePointIdSchema,
} from '../models/containers/archiveProductPricePointPricePointId';
import {
  ArchiveProductPricePointProductId,
  archiveProductPricePointProductIdSchema,
} from '../models/containers/archiveProductPricePointProductId';
import {
  CreateProductPricePointProductId,
  createProductPricePointProductIdSchema,
} from '../models/containers/createProductPricePointProductId';
import {
  ListProductPricePointsInputProductId,
  listProductPricePointsInputProductIdSchema,
} from '../models/containers/listProductPricePointsInputProductId';
import {
  ReadProductPricePointPricePointId,
  readProductPricePointPricePointIdSchema,
} from '../models/containers/readProductPricePointPricePointId';
import {
  ReadProductPricePointProductId,
  readProductPricePointProductIdSchema,
} from '../models/containers/readProductPricePointProductId';
import {
  UpdateProductPricePointPricePointId,
  updateProductPricePointPricePointIdSchema,
} from '../models/containers/updateProductPricePointPricePointId';
import {
  UpdateProductPricePointProductId,
  updateProductPricePointProductIdSchema,
} from '../models/containers/updateProductPricePointProductId';
import {
  CreateProductCurrencyPricesRequest,
  createProductCurrencyPricesRequestSchema,
} from '../models/createProductCurrencyPricesRequest';
import {
  CreateProductPricePointRequest,
  createProductPricePointRequestSchema,
} from '../models/createProductPricePointRequest';
import {
  CurrencyPricesResponse,
  currencyPricesResponseSchema,
} from '../models/currencyPricesResponse';
import {
  ListPricePointsFilter,
  listPricePointsFilterSchema,
} from '../models/listPricePointsFilter';
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
  ProductPricePointResponse,
  productPricePointResponseSchema,
} from '../models/productPricePointResponse';
import {
  ProductResponse,
  productResponseSchema,
} from '../models/productResponse';
import {
  SortingDirection,
  sortingDirectionSchema,
} from '../models/sortingDirection';
import {
  UpdateCurrencyPricesRequest,
  updateCurrencyPricesRequestSchema,
} from '../models/updateCurrencyPricesRequest';
import {
  UpdateProductPricePointRequest,
  updateProductPricePointRequestSchema,
} from '../models/updateProductPricePointRequest';
import { array, boolean, number, optional } from '../schema';
import { BaseController } from './baseController';
import { ApiError } from '@apimatic/core';
import { ErrorArrayMapResponseError } from '../errors/errorArrayMapResponseError';
import { ErrorListResponseError } from '../errors/errorListResponseError';
import { ProductPricePointErrorResponseError } from '../errors/productPricePointErrorResponseError';

export class ProductPricePointsController extends BaseController {
  /**
   * [Product Price Point Documentation](https://maxio.zendesk.com/hc/en-us/articles/24261111947789-
   * Product-Price-Points)
   *
   * @param productId    The id or handle of the product. When using the
   *                                                              handle, it must be prefixed with `handle:`
   * @param body
   * @return Response from the API call
   */
  async createProductPricePoint(
    productId: CreateProductPricePointProductId,
    body?: CreateProductPricePointRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProductPricePointResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      productId: [productId, createProductPricePointProductIdSchema],
      body: [body, optional(createProductPricePointRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/products/${mapped.productId}/price_points.json`;
    req.throwOn(
      422,
      ProductPricePointErrorResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(productPricePointResponseSchema, requestOptions);
  }

  /**
   * Use this endpoint to retrieve a list of product price points.
   *
   * @param productId       The id or handle of the product. When using the
   *                                                                handle, it must be prefixed with `handle:`
   * @param page            Result records are organized in pages. By default,
   *                                                                the first page of results is displayed. The page
   *                                                                parameter specifies a page number of results to
   *                                                                fetch. You can start navigating through the pages
   *                                                                to consume the results. You do this by passing in a
   *                                                                page parameter. Retrieve the next page by adding ?
   *                                                                page=2 to the query string. If there are no results
   *                                                                to return, then an empty result set will be
   *                                                                returned. Use in query `page=1`.
   * @param perPage         This parameter indicates how many records to fetch
   *                                                                in each request. Default value is 10. The maximum
   *                                                                allowed values is 200; any per_page value over 200
   *                                                                will be changed to 200.
   * @param currencyPrices  When fetching a product's price points, if you
   *                                                                have defined multiple currencies at the site level,
   *                                                                you can optionally pass the ?currency_prices=true
   *                                                                query param to include an array of currency price
   *                                                                data in the response. If the product price point is
   *                                                                set to use_site_exchange_rate: true, it will return
   *                                                                pricing based on the current exchange rate. If the
   *                                                                flag is set to false, it will return all of the
   *                                                                defined prices for each currency.
   * @param filterType      Use in query: `filter[type]=catalog,default`.
   * @param archived        Set to include archived price points in the
   *                                                                response.
   * @return Response from the API call
   */
  async listProductPricePoints(
    {
      productId,
      page,
      perPage,
      currencyPrices,
      filterType,
      archived,
    }: {
      productId: ListProductPricePointsInputProductId;
      page?: number;
      perPage?: number;
      currencyPrices?: boolean;
      filterType?: PricePointType[];
      archived?: boolean;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListProductPricePointsResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      productId: [productId, listProductPricePointsInputProductIdSchema],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      currencyPrices: [currencyPrices, optional(boolean())],
      filterType: [filterType, optional(array(pricePointTypeSchema))],
      archived: [archived, optional(boolean())],
    });
    req.query('page', mapped.page, commaPrefix);
    req.query('per_page', mapped.perPage, commaPrefix);
    req.query('currency_prices', mapped.currencyPrices, commaPrefix);
    req.query('filter[type]', mapped.filterType, commaPrefix);
    req.query('archived', mapped.archived, commaPrefix);
    req.appendTemplatePath`/products/${mapped.productId}/price_points.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(listProductPricePointsResponseSchema, requestOptions);
  }

  /**
   * Use this endpoint to update a product price point.
   *
   * Note: Custom product price points are not able to be updated.
   *
   * @param productId      The id or handle of the product. When using the
   *                                                                handle, it must be prefixed with `handle:`. Example:
   *                                                                `123` for an integer ID, or `handle:example-
   *                                                                product-handle` for a string handle.
   * @param pricePointId   The id or handle of the price point. When using
   *                                                                the handle, it must be prefixed with `handle:`.
   *                                                                Example: `123` for an integer ID, or `handle:
   *                                                                example-product-price-point-handle` for a string
   *                                                                handle.
   * @param body
   * @return Response from the API call
   */
  async updateProductPricePoint(
    productId: UpdateProductPricePointProductId,
    pricePointId: UpdateProductPricePointPricePointId,
    body?: UpdateProductPricePointRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProductPricePointResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      productId: [productId, updateProductPricePointProductIdSchema],
      pricePointId: [pricePointId, updateProductPricePointPricePointIdSchema],
      body: [body, optional(updateProductPricePointRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/products/${mapped.productId}/price_points/${mapped.pricePointId}.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(productPricePointResponseSchema, requestOptions);
  }

  /**
   * Use this endpoint to retrieve details for a specific product price point. You can achieve this by
   * using either the product price point ID or handle.
   *
   * @param productId       The id or handle of the product. When using the
   *                                                             handle, it must be prefixed with `handle:`. Example:
   *                                                             `123` for an integer ID, or `handle:example-product-
   *                                                             handle` for a string handle.
   * @param pricePointId    The id or handle of the price point. When using the
   *                                                             handle, it must be prefixed with `handle:`. Example:
   *                                                             `123` for an integer ID, or `handle:example-product-
   *                                                             price-point-handle` for a string handle.
   * @param currencyPrices  When fetching a product's price points, if you have
   *                                                             defined multiple currencies at the site level, you can
   *                                                             optionally pass the ?currency_prices=true query param
   *                                                             to include an array of currency price data in the
   *                                                             response. If the product price point is set to
   *                                                             use_site_exchange_rate: true, it will return pricing
   *                                                             based on the current exchange rate. If the flag is set
   *                                                             to false, it will return all of the defined prices for
   *                                                             each currency.
   * @return Response from the API call
   */
  async readProductPricePoint(
    productId: ReadProductPricePointProductId,
    pricePointId: ReadProductPricePointPricePointId,
    currencyPrices?: boolean,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProductPricePointResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      productId: [productId, readProductPricePointProductIdSchema],
      pricePointId: [pricePointId, readProductPricePointPricePointIdSchema],
      currencyPrices: [currencyPrices, optional(boolean())],
    });
    req.query('currency_prices', mapped.currencyPrices, commaPrefix);
    req.appendTemplatePath`/products/${mapped.productId}/price_points/${mapped.pricePointId}.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(productPricePointResponseSchema, requestOptions);
  }

  /**
   * Use this endpoint to archive a product price point.
   *
   * @param productId      The id or handle of the product. When using the
   *                                                               handle, it must be prefixed with `handle:`. Example:
   *                                                               `123` for an integer ID, or `handle:example-product-
   *                                                               handle` for a string handle.
   * @param pricePointId   The id or handle of the price point. When using the
   *                                                               handle, it must be prefixed with `handle:`. Example:
   *                                                               `123` for an integer ID, or `handle:example-product-
   *                                                               price-point-handle` for a string handle.
   * @return Response from the API call
   */
  async archiveProductPricePoint(
    productId: ArchiveProductPricePointProductId,
    pricePointId: ArchiveProductPricePointPricePointId,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProductPricePointResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      productId: [productId, archiveProductPricePointProductIdSchema],
      pricePointId: [pricePointId, archiveProductPricePointPricePointIdSchema],
    });
    req.appendTemplatePath`/products/${mapped.productId}/price_points/${mapped.pricePointId}.json`;
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(productPricePointResponseSchema, requestOptions);
  }

  /**
   * Use this endpoint to unarchive an archived product price point.
   *
   * @param productId      The Advanced Billing id of the product to which the price point belongs
   * @param pricePointId   The Advanced Billing id of the product price point
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
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(productPricePointResponseSchema, requestOptions);
  }

  /**
   * Use this endpoint to make a product price point the default for the product.
   *
   * Note: Custom product price points are not able to be set as the default for a product.
   *
   * @param productId      The Advanced Billing id of the product to which the price point belongs
   * @param pricePointId   The Advanced Billing id of the product price point
   * @return Response from the API call
   */
  async promoteProductPricePointToDefault(
    productId: number,
    pricePointId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProductResponse>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      productId: [productId, number()],
      pricePointId: [pricePointId, number()],
    });
    req.appendTemplatePath`/products/${mapped.productId}/price_points/${mapped.pricePointId}/default.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(productResponseSchema, requestOptions);
  }

  /**
   * Use this endpoint to create multiple product price points in one request.
   *
   * @param productId    The Advanced Billing id of the product to which
   *                                                                   the price points belong
   * @param body
   * @return Response from the API call
   */
  async bulkCreateProductPricePoints(
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
    req.throwOn(
      422,
      ApiError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
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
   * @param productPricePointId    The Advanced Billing id of the product
   *                                                                            price point
   * @param body
   * @return Response from the API call
   */
  async createProductCurrencyPrices(
    productPricePointId: number,
    body?: CreateProductCurrencyPricesRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CurrencyPricesResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      productPricePointId: [productPricePointId, number()],
      body: [body, optional(createProductCurrencyPricesRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/product_price_points/${mapped.productPricePointId}/currency_prices.json`;
    req.throwOn(
      422,
      ErrorArrayMapResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(currencyPricesResponseSchema, requestOptions);
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
   * @param productPricePointId    The Advanced Billing id of the product price
   *                                                                     point
   * @param body
   * @return Response from the API call
   */
  async updateProductCurrencyPrices(
    productPricePointId: number,
    body?: UpdateCurrencyPricesRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CurrencyPricesResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      productPricePointId: [productPricePointId, number()],
      body: [body, optional(updateCurrencyPricesRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/product_price_points/${mapped.productPricePointId}/currency_prices.json`;
    req.throwOn(
      422,
      ErrorArrayMapResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(currencyPricesResponseSchema, requestOptions);
  }

  /**
   * This method allows retrieval of a list of Products Price Points belonging to a Site.
   *
   * @param direction Controls the order in which results are returned. Use in query
   *                                                    `direction=asc`.
   * @param filter    Filter to use for List PricePoints operations
   * @param include   Allows including additional data in the response. Use in query:
   *                                                    `include=currency_prices`.
   * @param page      Result records are organized in pages. By default, the first
   *                                                    page of results is displayed. The page parameter specifies a
   *                                                    page number of results to fetch. You can start navigating
   *                                                    through the pages to consume the results. You do this by
   *                                                    passing in a page parameter. Retrieve the next page by adding ?
   *                                                    page=2 to the query string. If there are no results to return,
   *                                                    then an empty result set will be returned. Use in query
   *                                                    `page=1`.
   * @param perPage   This parameter indicates how many records to fetch in each
   *                                                    request. Default value is 20. The maximum allowed values is 200;
   *                                                    any per_page value over 200 will be changed to 200. Use in
   *                                                    query `per_page=200`.
   * @return Response from the API call
   */
  async listAllProductPricePoints(
    {
      direction,
      filter,
      include,
      page,
      perPage,
    }: {
      direction?: SortingDirection;
      filter?: ListPricePointsFilter;
      include?: ListProductsPricePointsInclude;
      page?: number;
      perPage?: number;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListProductPricePointsResponse>> {
    const req = this.createRequest('GET', '/products_price_points.json');
    const mapped = req.prepareArgs({
      direction: [direction, optional(sortingDirectionSchema)],
      filter: [filter, optional(listPricePointsFilterSchema)],
      include: [include, optional(listProductsPricePointsIncludeSchema)],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
    });
    req.query('direction', mapped.direction, commaPrefix);
    req.query('filter', mapped.filter, commaPrefix);
    req.query('include', mapped.include, commaPrefix);
    req.query('page', mapped.page, commaPrefix);
    req.query('per_page', mapped.perPage, commaPrefix);
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(listProductPricePointsResponseSchema, requestOptions);
  }
}
