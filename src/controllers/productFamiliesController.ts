/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, RequestOptions } from '../core';
import { BasicDateField, basicDateFieldSchema } from '../models/basicDateField';
import {
  CreateProductFamilyRequest,
  createProductFamilyRequestSchema,
} from '../models/createProductFamilyRequest';
import { IncludeNotNull, includeNotNullSchema } from '../models/includeNotNull';
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

export class ProductFamiliesController extends BaseController {
  /**
   * This method allows to retrieve a list of Products belonging to a Product Family.
   *
   * @param productFamilyId                                             The Chargify id of the
   *                                                                                           product family to which
   *                                                                                           the product belongs
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
   * @param dateField                                                   The type of filter you
   *                                                                                           would like to apply to
   *                                                                                           your search. Use in
   *                                                                                           query:
   *                                                                                           `date_field=created_at`.
   * @param startDate                                                   The start date (format
   *                                                                                           YYYY-MM-DD) with which
   *                                                                                           to filter the date_field.
   *                                                                                           Returns products with a
   *                                                                                           timestamp at or after
   *                                                                                           midnight (12:00:00 AM)
   *                                                                                           in your site’s time zone
   *                                                                                           on the date specified.
   * @param endDate                                                     The end date (format
   *                                                                                           YYYY-MM-DD) with which
   *                                                                                           to filter the date_field.
   *                                                                                           Returns products with a
   *                                                                                           timestamp up to and
   *                                                                                           including 11:59:59PM in
   *                                                                                           your site’s time zone on
   *                                                                                           the date specified.
   * @param startDatetime                                               The start date and time
   *                                                                                           (format YYYY-MM-DD HH:MM:
   *                                                                                           SS) with which to filter
   *                                                                                           the date_field. Returns
   *                                                                                           products with a
   *                                                                                           timestamp at or after
   *                                                                                           exact time provided in
   *                                                                                           query. You can specify
   *                                                                                           timezone in query -
   *                                                                                           otherwise your site's
   *                                                                                           time zone will be used.
   *                                                                                           If provided, this
   *                                                                                           parameter will be used
   *                                                                                           instead of start_date.
   * @param endDatetime                                                 The end date and time
   *                                                                                           (format YYYY-MM-DD HH:MM:
   *                                                                                           SS) with which to filter
   *                                                                                           the date_field. Returns
   *                                                                                           products with a
   *                                                                                           timestamp at or before
   *                                                                                           exact time provided in
   *                                                                                           query. You can specify
   *                                                                                           timezone in query -
   *                                                                                           otherwise your site's
   *                                                                                           time zone will be used.
   *                                                                                           If provided, this
   *                                                                                           parameter will be used
   *                                                                                           instead of end_date.
   * @param includeArchived                                             Include archived
   *                                                                                           products
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
  async listProductsForProductFamily({
    productFamilyId,
    page,
    perPage,
    dateField,
    startDate,
    endDate,
    startDatetime,
    endDatetime,
    includeArchived,
    include,
    filterPrepaidProductPricePointProductPricePointId,
    filterUseSiteExchangeRate,
  }: {
    productFamilyId: number,
    page?: number,
    perPage?: number,
    dateField?: BasicDateField,
    startDate?: string,
    endDate?: string,
    startDatetime?: string,
    endDatetime?: string,
    includeArchived?: boolean,
    include?: ListProductsInclude,
    filterPrepaidProductPricePointProductPricePointId?: IncludeNotNull,
    filterUseSiteExchangeRate?: boolean,
  },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProductResponse[]>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      productFamilyId: [productFamilyId, number()],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      dateField: [dateField, optional(basicDateFieldSchema)],
      startDate: [startDate, optional(string())],
      endDate: [endDate, optional(string())],
      startDatetime: [startDatetime, optional(string())],
      endDatetime: [endDatetime, optional(string())],
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
    req.query('page', mapped.page);
    req.query('per_page', mapped.perPage);
    req.query('date_field', mapped.dateField);
    req.query('start_date', mapped.startDate);
    req.query('end_date', mapped.endDate);
    req.query('start_datetime', mapped.startDatetime);
    req.query('end_datetime', mapped.endDatetime);
    req.query('include_archived', mapped.includeArchived);
    req.query('include', mapped.include);
    req.query('filter[prepaid_product_price_point][product_price_point_id]', mapped.filterPrepaidProductPricePointProductPricePointId);
    req.query('filter[use_site_exchange_rate]', mapped.filterUseSiteExchangeRate);
    req.appendTemplatePath`/product_families/${mapped.productFamilyId}/products.json`;
    req.throwOn(404, ApiError, 'Not Found');
    return req.callAsJson(array(productResponseSchema), requestOptions);
  }

  /**
   * This method will create a Product Family within your Chargify site. Create a Product Family to act
   * as a container for your products, components and coupons.
   *
   * Full documentation on how Product Families operate within the Chargify UI can be located
   * [here](https://maxio-chargify.zendesk.com/hc/en-us/articles/5405369633421).
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
  async listProductFamilies({
    dateField,
    startDate,
    endDate,
    startDatetime,
    endDatetime,
  }: {
    dateField?: BasicDateField,
    startDate?: string,
    endDate?: string,
    startDatetime?: string,
    endDatetime?: string,
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
    req.query('date_field', mapped.dateField);
    req.query('start_date', mapped.startDate);
    req.query('end_date', mapped.endDate);
    req.query('start_datetime', mapped.startDatetime);
    req.query('end_datetime', mapped.endDatetime);
    return req.callAsJson(array(productFamilyResponseSchema), requestOptions);
  }

  /**
   * This method allows to retrieve a Product Family via the `product_family_id`. The response will
   * contain a Product Family object.
   *
   * The product family can be specified either with the id number, or with the `handle:my-family` format.
   *
   * @param id The Chargify id of the product family
   * @return Response from the API call
   */
  async readProductFamily(
    id: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProductFamilyResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ id: [id, number()] });
    req.appendTemplatePath`/product_families/${mapped.id}.json`;
    return req.callAsJson(productFamilyResponseSchema, requestOptions);
  }
}
