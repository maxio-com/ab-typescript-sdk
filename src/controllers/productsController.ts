/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, commaPrefix, RequestOptions } from '../core';
import { BasicDateField, basicDateFieldSchema } from '../models/basicDateField';
import {
  CreateOrUpdateProductRequest,
  createOrUpdateProductRequestSchema,
} from '../models/createOrUpdateProductRequest';
import {
  ListProductsFilter,
  listProductsFilterSchema,
} from '../models/listProductsFilter';
import {
  ListProductsInclude,
  listProductsIncludeSchema,
} from '../models/listProductsInclude';
import {
  ProductResponse,
  productResponseSchema,
} from '../models/productResponse';
import { array, boolean, number, optional, string } from '../schema';
import { BaseController } from './baseController';
import { ErrorListResponseError } from '../errors/errorListResponseError';

export class ProductsController extends BaseController {
  /**
   * Use this method to create a product within your Advanced Billing site.
   *
   * + [Products Documentation](https://maxio.zendesk.com/hc/en-us/articles/24261090117645-Products-
   * Overview)
   * + [Changing a Subscription's Product](https://maxio.zendesk.com/hc/en-us/articles/24252069837581-
   * Product-Changes-and-Migrations)
   *
   * @param productFamilyId   Either the product family's id or its handle
   *                                                                 prefixed with `handle:`
   * @param body
   * @return Response from the API call
   */
  async createProduct(
    productFamilyId: string,
    body?: CreateOrUpdateProductRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProductResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      productFamilyId: [productFamilyId, string()],
      body: [body, optional(createOrUpdateProductRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/product_families/${mapped.productFamilyId}/products.json`;
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(productResponseSchema, requestOptions);
  }

  /**
   * This endpoint allows you to read the current details of a product that you've created in Advanced
   * Billing.
   *
   * @param productId  The Advanced Billing id of the product
   * @return Response from the API call
   */
  async readProduct(
    productId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProductResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ productId: [productId, number()] });
    req.appendTemplatePath`/products/${mapped.productId}.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(productResponseSchema, requestOptions);
  }

  /**
   * Use this method to change aspects of an existing product.
   *
   * ### Input Attributes Update Notes
   *
   * + `update_return_params` The parameters we will append to your `update_return_url`. See Return URLs
   * and Parameters
   *
   * ### Product Price Point
   *
   * Updating a product using this endpoint will create a new price point and set it as the default price
   * point for this product. If you should like to update an existing product price point, that must be
   * done separately.
   *
   * @param productId    The Advanced Billing id of the product
   * @param body
   * @return Response from the API call
   */
  async updateProduct(
    productId: number,
    body?: CreateOrUpdateProductRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProductResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      productId: [productId, number()],
      body: [body, optional(createOrUpdateProductRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/products/${mapped.productId}.json`;
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(productResponseSchema, requestOptions);
  }

  /**
   * Sending a DELETE request to this endpoint will archive the product. All current subscribers will be
   * unffected; their subscription/purchase will continue to be charged monthly.
   *
   * This will restrict the option to chose the product for purchase via the Billing Portal, as well as
   * disable Public Signup Pages for the product.
   *
   * @param productId  The Advanced Billing id of the product
   * @return Response from the API call
   */
  async archiveProduct(
    productId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProductResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ productId: [productId, number()] });
    req.appendTemplatePath`/products/${mapped.productId}.json`;
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(productResponseSchema, requestOptions);
  }

  /**
   * This method allows to retrieve a Product object by its `api_handle`.
   *
   * @param apiHandle  The handle of the product
   * @return Response from the API call
   */
  async readProductByHandle(
    apiHandle: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProductResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ apiHandle: [apiHandle, string()] });
    req.appendTemplatePath`/products/handle/${mapped.apiHandle}.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(productResponseSchema, requestOptions);
  }

  /**
   * This method allows to retrieve a list of Products belonging to a Site.
   *
   * @param dateField        The type of filter you would like to apply to your search.
   *                                                      Use in query: `date_field=created_at`.
   * @param filter           Filter to use for List Products operations
   * @param endDate          The end date (format YYYY-MM-DD) with which to filter the
   *                                                      date_field. Returns products with a timestamp up to and
   *                                                      including 11:59:59PM in your site’s time zone on the date
   *                                                      specified.
   * @param endDatetime      The end date and time (format YYYY-MM-DD HH:MM:SS) with
   *                                                      which to filter the date_field. Returns products with a
   *                                                      timestamp at or before exact time provided in query. You can
   *                                                      specify timezone in query - otherwise your site''s time zone
   *                                                      will be used. If provided, this parameter will be used
   *                                                      instead of end_date.
   * @param startDate        The start date (format YYYY-MM-DD) with which to filter the
   *                                                      date_field. Returns products with a timestamp at or after
   *                                                      midnight (12:00:00 AM) in your site’s time zone on the date
   *                                                      specified.
   * @param startDatetime    The start date and time (format YYYY-MM-DD HH:MM:SS) with
   *                                                      which to filter the date_field. Returns products with a
   *                                                      timestamp at or after exact time provided in query. You can
   *                                                      specify timezone in query - otherwise your site''s time zone
   *                                                      will be used. If provided, this parameter will be used
   *                                                      instead of start_date.
   * @param page             Result records are organized in pages. By default, the first
   *                                                      page of results is displayed. The page parameter specifies a
   *                                                      page number of results to fetch. You can start navigating
   *                                                      through the pages to consume the results. You do this by
   *                                                      passing in a page parameter. Retrieve the next page by adding
   *                                                      ?page=2 to the query string. If there are no results to
   *                                                      return, then an empty result set will be returned. Use in
   *                                                      query `page=1`.
   * @param perPage          This parameter indicates how many records to fetch in each
   *                                                      request. Default value is 20. The maximum allowed values is
   *                                                      200; any per_page value over 200 will be changed to 200. Use
   *                                                      in query `per_page=200`.
   * @param includeArchived  Include archived products. Use in query:
   *                                                      `include_archived=true`.
   * @param include          Allows including additional data in the response. Use in
   *                                                      query `include=prepaid_product_price_point`.
   * @return Response from the API call
   */
  async listProducts(
    {
      dateField,
      filter,
      endDate,
      endDatetime,
      startDate,
      startDatetime,
      page,
      perPage,
      includeArchived,
      include,
    }: {
      dateField?: BasicDateField;
      filter?: ListProductsFilter;
      endDate?: string;
      endDatetime?: string;
      startDate?: string;
      startDatetime?: string;
      page?: number;
      perPage?: number;
      includeArchived?: boolean;
      include?: ListProductsInclude;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProductResponse[]>> {
    const req = this.createRequest('GET', '/products.json');
    const mapped = req.prepareArgs({
      dateField: [dateField, optional(basicDateFieldSchema)],
      filter: [filter, optional(listProductsFilterSchema)],
      endDate: [endDate, optional(string())],
      endDatetime: [endDatetime, optional(string())],
      startDate: [startDate, optional(string())],
      startDatetime: [startDatetime, optional(string())],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      includeArchived: [includeArchived, optional(boolean())],
      include: [include, optional(listProductsIncludeSchema)],
    });
    req.query('date_field', mapped.dateField, commaPrefix);
    req.query('filter', mapped.filter, commaPrefix);
    req.query('end_date', mapped.endDate, commaPrefix);
    req.query('end_datetime', mapped.endDatetime, commaPrefix);
    req.query('start_date', mapped.startDate, commaPrefix);
    req.query('start_datetime', mapped.startDatetime, commaPrefix);
    req.query('page', mapped.page, commaPrefix);
    req.query('per_page', mapped.perPage, commaPrefix);
    req.query('include_archived', mapped.includeArchived, commaPrefix);
    req.query('include', mapped.include, commaPrefix);
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(array(productResponseSchema), requestOptions);
  }
}
