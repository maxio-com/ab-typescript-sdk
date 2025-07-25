/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, commaPrefix, RequestOptions } from '../core';
import { BasicDateField, basicDateFieldSchema } from '../models/basicDateField';
import {
  CreateProductFamilyRequest,
  createProductFamilyRequestSchema,
} from '../models/createProductFamilyRequest';
import {
  ListProductsFilter,
  listProductsFilterSchema,
} from '../models/listProductsFilter';
import {
  ListProductsInclude,
  listProductsIncludeSchema,
} from '../models/listProductsInclude';
import {
  ProductFamilyResponse,
  productFamilyResponseSchema,
} from '../models/productFamilyResponse';
import {
  ProductResponse,
  productResponseSchema,
} from '../models/productResponse';
import { array, boolean, number, optional, string } from '../schema';
import { BaseController } from './baseController';
import { ApiError } from '@apimatic/core';
import { ErrorListResponseError } from '../errors/errorListResponseError';

export class ProductFamiliesController extends BaseController {
  /**
   * This method allows to retrieve a list of Products belonging to a Product Family.
   *
   * @param productFamilyId   Either the product family's id or its handle prefixed with
   *                                                       `handle:`
   * @param page              Result records are organized in pages. By default, the
   *                                                       first page of results is displayed. The page parameter
   *                                                       specifies a page number of results to fetch. You can start
   *                                                       navigating through the pages to consume the results. You do
   *                                                       this by passing in a page parameter. Retrieve the next page
   *                                                       by adding ?page=2 to the query string. If there are no
   *                                                       results to return, then an empty result set will be returned.
   *                                                       Use in query `page=1`.
   * @param perPage           This parameter indicates how many records to fetch in each
   *                                                       request. Default value is 20. The maximum allowed values is
   *                                                       200; any per_page value over 200 will be changed to 200. Use
   *                                                       in query `per_page=200`.
   * @param dateField         The type of filter you would like to apply to your search.
   *                                                       Use in query: `date_field=created_at`.
   * @param filter            Filter to use for List Products operations
   * @param startDate         The start date (format YYYY-MM-DD) with which to filter the
   *                                                       date_field. Returns products with a timestamp at or after
   *                                                       midnight (12:00:00 AM) in your site’s time zone on the date
   *                                                       specified.
   * @param endDate           The end date (format YYYY-MM-DD) with which to filter the
   *                                                       date_field. Returns products with a timestamp up to and
   *                                                       including 11:59:59PM in your site’s time zone on the date
   *                                                       specified.
   * @param startDatetime     The start date and time (format YYYY-MM-DD HH:MM:SS) with
   *                                                       which to filter the date_field. Returns products with a
   *                                                       timestamp at or after exact time provided in query. You can
   *                                                       specify timezone in query - otherwise your site's time zone
   *                                                       will be used. If provided, this parameter will be used
   *                                                       instead of start_date.
   * @param endDatetime       The end date and time (format YYYY-MM-DD HH:MM:SS) with
   *                                                       which to filter the date_field. Returns products with a
   *                                                       timestamp at or before exact time provided in query. You can
   *                                                       specify timezone in query - otherwise your site's time zone
   *                                                       will be used. If provided, this parameter will be used
   *                                                       instead of end_date.
   * @param includeArchived   Include archived products
   * @param include           Allows including additional data in the response. Use in
   *                                                       query `include=prepaid_product_price_point`.
   * @return Response from the API call
   */
  async listProductsForProductFamily(
    {
      productFamilyId,
      page,
      perPage,
      dateField,
      filter,
      startDate,
      endDate,
      startDatetime,
      endDatetime,
      includeArchived,
      include,
    }: {
      productFamilyId: string;
      page?: number;
      perPage?: number;
      dateField?: BasicDateField;
      filter?: ListProductsFilter;
      startDate?: string;
      endDate?: string;
      startDatetime?: string;
      endDatetime?: string;
      includeArchived?: boolean;
      include?: ListProductsInclude;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProductResponse[]>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      productFamilyId: [productFamilyId, string()],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      dateField: [dateField, optional(basicDateFieldSchema)],
      filter: [filter, optional(listProductsFilterSchema)],
      startDate: [startDate, optional(string())],
      endDate: [endDate, optional(string())],
      startDatetime: [startDatetime, optional(string())],
      endDatetime: [endDatetime, optional(string())],
      includeArchived: [includeArchived, optional(boolean())],
      include: [include, optional(listProductsIncludeSchema)],
    });
    req.query('page', mapped.page, commaPrefix);
    req.query('per_page', mapped.perPage, commaPrefix);
    req.query('date_field', mapped.dateField, commaPrefix);
    req.query('filter', mapped.filter, commaPrefix);
    req.query('start_date', mapped.startDate, commaPrefix);
    req.query('end_date', mapped.endDate, commaPrefix);
    req.query('start_datetime', mapped.startDatetime, commaPrefix);
    req.query('end_datetime', mapped.endDatetime, commaPrefix);
    req.query('include_archived', mapped.includeArchived, commaPrefix);
    req.query('include', mapped.include, commaPrefix);
    req.appendTemplatePath`/product_families/${mapped.productFamilyId}/products.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(array(productResponseSchema), requestOptions);
  }

  /**
   * This method will create a Product Family within your Advanced Billing site. Create a Product Family
   * to act as a container for your products, components and coupons.
   *
   * Full documentation on how Product Families operate within the Advanced Billing UI can be located
   * [here](https://maxio.zendesk.com/hc/en-us/articles/24261098936205-Product-Families).
   *
   * @param body
   * @return Response from the API call
   */
  async createProductFamily(
    body?: CreateProductFamilyRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProductFamilyResponse>> {
    const req = this.createRequest('POST', '/product_families.json');
    const mapped = req.prepareArgs({
      body: [body, optional(createProductFamilyRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(productFamilyResponseSchema, requestOptions);
  }

  /**
   * This method allows to retrieve a list of Product Families for a site.
   *
   * @param dateField      The type of filter you would like to apply to your search. Use in query:
   *                                         `date_field=created_at`.
   * @param startDate      The start date (format YYYY-MM-DD) with which to filter the date_field.
   *                                         Returns products with a timestamp at or after midnight (12:00:00 AM) in
   *                                         your site’s time zone on the date specified.
   * @param endDate        The end date (format YYYY-MM-DD) with which to filter the date_field.
   *                                         Returns products with a timestamp up to and including 11:59:59PM in your
   *                                         site’s time zone on the date specified.
   * @param startDatetime  The start date and time (format YYYY-MM-DD HH:MM:SS) with which to filter
   *                                         the date_field. Returns products with a timestamp at or after exact time
   *                                         provided in query. You can specify timezone in query - otherwise your
   *                                         site's time zone will be used. If provided, this parameter will be used
   *                                         instead of start_date.
   * @param endDatetime    The end date and time (format YYYY-MM-DD HH:MM:SS) with which to filter
   *                                         the date_field. Returns products with a timestamp at or before exact time
   *                                         provided in query. You can specify timezone in query - otherwise your
   *                                         site's time zone will be used. If provided, this parameter will be used
   *                                         instead of end_date.
   * @return Response from the API call
   */
  async listProductFamilies(
    {
      dateField,
      startDate,
      endDate,
      startDatetime,
      endDatetime,
    }: {
      dateField?: BasicDateField;
      startDate?: string;
      endDate?: string;
      startDatetime?: string;
      endDatetime?: string;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProductFamilyResponse[]>> {
    const req = this.createRequest('GET', '/product_families.json');
    const mapped = req.prepareArgs({
      dateField: [dateField, optional(basicDateFieldSchema)],
      startDate: [startDate, optional(string())],
      endDate: [endDate, optional(string())],
      startDatetime: [startDatetime, optional(string())],
      endDatetime: [endDatetime, optional(string())],
    });
    req.query('date_field', mapped.dateField, commaPrefix);
    req.query('start_date', mapped.startDate, commaPrefix);
    req.query('end_date', mapped.endDate, commaPrefix);
    req.query('start_datetime', mapped.startDatetime, commaPrefix);
    req.query('end_datetime', mapped.endDatetime, commaPrefix);
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(array(productFamilyResponseSchema), requestOptions);
  }

  /**
   * This method allows to retrieve a Product Family via the `product_family_id`. The response will
   * contain a Product Family object.
   *
   * The product family can be specified either with the id number, or with the `handle:my-family` format.
   *
   * @param id The Advanced Billing id of the product family
   * @return Response from the API call
   */
  async readProductFamily(
    id: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProductFamilyResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ id: [id, number()] });
    req.appendTemplatePath`/product_families/${mapped.id}.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(productFamilyResponseSchema, requestOptions);
  }
}
