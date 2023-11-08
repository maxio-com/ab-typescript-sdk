/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { ErrorListResponseError } from '../errors/errorListResponseError';
import { BasicDateField, basicDateFieldSchema } from '../models/basicDateField';
import {
  CreateOrUpdateProductRequest,
  createOrUpdateProductRequestSchema,
} from '../models/createOrUpdateProductRequest';
import { IncludeNotNull, includeNotNullSchema } from '../models/includeNotNull';
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

export class ProductsController extends BaseController {
  /**
   * Use this method to create a product within your Chargify site.
   *
   * + [Products Documentation](https://maxio-chargify.zendesk.com/hc/en-us/articles/5405561405709)
   * + [Changing a Subscription's Product](https://maxio-chargify.zendesk.com/hc/en-
   * us/articles/5404225334669-Product-Changes-Migrations)
   *
   * @param productFamilyId   The Chargify id of the product family to which
   *                                                                 the product belongs
   * @param body
   * @return Response from the API call
   */
  async createProduct(
    productFamilyId: number,
    body?: CreateOrUpdateProductRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProductResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      productFamilyId: [productFamilyId, number()],
      body: [body, optional(createOrUpdateProductRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/product_families/${mapped.productFamilyId}/products.json`;
    return req.callAsJson(productResponseSchema, requestOptions);
  }

  /**
   * This endpoint allows you to read the current details of a product that you've created in Chargify.
   *
   * @param productId  The Chargify id of the product
   * @return Response from the API call
   */
  async readProduct(
    productId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProductResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ productId: [productId, number()] });
    req.appendTemplatePath`/products/${mapped.productId}.json`;
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
   * @param productId    The Chargify id of the product
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
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
    return req.callAsJson(productResponseSchema, requestOptions);
  }

  /**
   * Sending a DELETE request to this endpoint will archive the product. All current subscribers will be
   * unffected; their subscription/purchase will continue to be charged monthly.
   *
   * This will restrict the option to chose the product for purchase via the Billing Portal, as well as
   * disable Public Signup Pages for the product.
   *
   * @param productId  The Chargify id of the product
   * @return Response from the API call
   */
  async archiveProduct(
    productId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProductResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ productId: [productId, number()] });
    req.appendTemplatePath`/products/${mapped.productId}.json`;
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
    return req.callAsJson(productResponseSchema, requestOptions);
  }

  /**
   * This method allows to retrieve a list of Products belonging to a Site.
   *
   * @param dateField                                                   The type of filter you
   *                                                                                           would like to apply to
   *                                                                                           your search. Use in
   *                                                                                           query:
   *                                                                                           `date_field=created_at`.
   * @param endDate                                                     The end date (format
   *                                                                                           YYYY-MM-DD) with which
   *                                                                                           to filter the date_field.
   *                                                                                           Returns products with a
   *                                                                                           timestamp up to and
   *                                                                                           including 11:59:59PM in
   *                                                                                           your site’s time zone on
   *                                                                                           the date specified.
   * @param endDatetime                                                 The end date and time
   *                                                                                           (format YYYY-MM-DD HH:MM:
   *                                                                                           SS) with which to filter
   *                                                                                           the date_field. Returns
   *                                                                                           products with a
   *                                                                                           timestamp at or before
   *                                                                                           exact time provided in
   *                                                                                           query. You can specify
   *                                                                                           timezone in query -
   *                                                                                           otherwise your site''s
   *                                                                                           time zone will be used.
   *                                                                                           If provided, this
   *                                                                                           parameter will be used
   *                                                                                           instead of end_date.
   * @param startDate                                                   The start date (format
   *                                                                                           YYYY-MM-DD) with which
   *                                                                                           to filter the date_field.
   *                                                                                           Returns products with a
   *                                                                                           timestamp at or after
   *                                                                                           midnight (12:00:00 AM)
   *                                                                                           in your site’s time zone
   *                                                                                           on the date specified.
   * @param startDatetime                                               The start date and time
   *                                                                                           (format YYYY-MM-DD HH:MM:
   *                                                                                           SS) with which to filter
   *                                                                                           the date_field. Returns
   *                                                                                           products with a
   *                                                                                           timestamp at or after
   *                                                                                           exact time provided in
   *                                                                                           query. You can specify
   *                                                                                           timezone in query -
   *                                                                                           otherwise your site''s
   *                                                                                           time zone will be used.
   *                                                                                           If provided, this
   *                                                                                           parameter will be used
   *                                                                                           instead of start_date.
   * @param page                                                        Result records are
   *                                                                                           organized in pages. By
   *                                                                                           default, the first page
   *                                                                                           of results is displayed.
   *                                                                                           The page parameter
   *                                                                                           specifies a page number
   *                                                                                           of results to fetch. You
   *                                                                                           can start navigating
   *                                                                                           through the pages to
   *                                                                                           consume the results. You
   *                                                                                           do this by passing in a
   *                                                                                           page parameter. Retrieve
   *                                                                                           the next page by adding ?
   *                                                                                           page=2 to the query
   *                                                                                           string. If there are no
   *                                                                                           results to return, then
   *                                                                                           an empty result set will
   *                                                                                           be returned. Use in
   *                                                                                           query `page=1`.
   * @param perPage                                                     This parameter
   *                                                                                           indicates how many
   *                                                                                           records to fetch in each
   *                                                                                           request. Default value
   *                                                                                           is 20. The maximum
   *                                                                                           allowed values is 200;
   *                                                                                           any per_page value over
   *                                                                                           200 will be changed to
   *                                                                                           200. Use in query
   *                                                                                           `per_page=200`.
   * @param includeArchived                                             Include archived
   *                                                                                           products. Use in query:
   *                                                                                           `include_archived=true`.
   * @param include                                                     Allows including
   *                                                                                           additional data in the
   *                                                                                           response. Use in query
   *                                                                                           `include=prepaid_product
   *                                                                                           _price_point`.
   * @param filterPrepaidProductPricePointProductPricePointId           Allows fetching
   *                                                                                           products only if a
   *                                                                                           prepaid product price
   *                                                                                           point is present or not.
   *                                                                                           To use this filter you
   *                                                                                           also have to include the
   *                                                                                           following param in the
   *                                                                                           request
   *                                                                                           `include=prepaid_product
   *                                                                                           _price_point`. Use in
   *                                                                                           query
   *                                                                                           `filter[prepaid_product_
   *                                                                                           price_point][product_pri
   *                                                                                           ce_point_id]=not_null`.
   * @param filterUseSiteExchangeRate                                   Allows fetching
   *                                                                                           products with matching
   *                                                                                           use_site_exchange_rate
   *                                                                                           based on provided value
   *                                                                                           (refers to default price
   *                                                                                           point). Use in query
   *                                                                                           `filter[use_site_exchang
   *                                                                                           e_rate]=true`.
   * @return Response from the API call
   */
  async listProducts({
    dateField,
    endDate,
    endDatetime,
    startDate,
    startDatetime,
    page,
    perPage,
    includeArchived,
    include,
    filterPrepaidProductPricePointProductPricePointId,
    filterUseSiteExchangeRate,
  }: {
    dateField?: BasicDateField,
    endDate?: string,
    endDatetime?: string,
    startDate?: string,
    startDatetime?: string,
    page?: number,
    perPage?: number,
    includeArchived?: boolean,
    include?: ListProductsInclude,
    filterPrepaidProductPricePointProductPricePointId?: IncludeNotNull,
    filterUseSiteExchangeRate?: boolean,
  },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProductResponse[]>> {
    const req = this.createRequest('GET', '/products.json');
    const mapped = req.prepareArgs({
      dateField: [dateField, optional(basicDateFieldSchema)],
      endDate: [endDate, optional(string())],
      endDatetime: [endDatetime, optional(string())],
      startDate: [startDate, optional(string())],
      startDatetime: [startDatetime, optional(string())],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      includeArchived: [includeArchived, optional(boolean())],
      include: [include, optional(listProductsIncludeSchema)],
      filterPrepaidProductPricePointProductPricePointId: [
        filterPrepaidProductPricePointProductPricePointId,
        optional(includeNotNullSchema),
      ],
      filterUseSiteExchangeRate: [
        filterUseSiteExchangeRate,
        optional(boolean()),
      ],
    });
    req.query('date_field', mapped.dateField);
    req.query('end_date', mapped.endDate);
    req.query('end_datetime', mapped.endDatetime);
    req.query('start_date', mapped.startDate);
    req.query('start_datetime', mapped.startDatetime);
    req.query('page', mapped.page);
    req.query('per_page', mapped.perPage);
    req.query('include_archived', mapped.includeArchived);
    req.query('include', mapped.include);
    req.query('filter[prepaid_product_price_point][product_price_point_id]', mapped.filterPrepaidProductPricePointProductPricePointId);
    req.query('filter[use_site_exchange_rate]', mapped.filterUseSiteExchangeRate);
    return req.callAsJson(array(productResponseSchema), requestOptions);
  }
}
