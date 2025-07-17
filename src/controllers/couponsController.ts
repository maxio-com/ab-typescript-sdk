/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, commaPrefix, RequestOptions } from '../core';
import {
  CouponCurrencyRequest,
  couponCurrencyRequestSchema,
} from '../models/couponCurrencyRequest';
import {
  CouponCurrencyResponse,
  couponCurrencyResponseSchema,
} from '../models/couponCurrencyResponse';
import { CouponRequest, couponRequestSchema } from '../models/couponRequest';
import { CouponResponse, couponResponseSchema } from '../models/couponResponse';
import { CouponSubcodes, couponSubcodesSchema } from '../models/couponSubcodes';
import {
  CouponSubcodesResponse,
  couponSubcodesResponseSchema,
} from '../models/couponSubcodesResponse';
import { CouponUsage, couponUsageSchema } from '../models/couponUsage';
import {
  ListCouponsFilter,
  listCouponsFilterSchema,
} from '../models/listCouponsFilter';
import { array, boolean, number, optional, string } from '../schema';
import { BaseController } from './baseController';
import { ApiError } from '@apimatic/core';
import { ErrorListResponseError } from '../errors/errorListResponseError';
import { ErrorStringMapResponseError } from '../errors/errorStringMapResponseError';
import { SingleStringErrorResponseError } from '../errors/singleStringErrorResponseError';

export class CouponsController extends BaseController {
  /**
   * ## Coupons Documentation
   *
   * Coupons can be administered in the Advanced Billing application or created via API. Please view our
   * section on [creating coupons](https://maxio.zendesk.com/hc/en-us/articles/24261212433165-Creating-
   * Editing-Deleting-Coupons) for more information.
   *
   * Additionally, for documentation on how to apply a coupon to a subscription within the Advanced
   * Billing UI, please see our documentation [here](https://maxio.zendesk.com/hc/en-
   * us/articles/24261259337101-Coupons-and-Subscriptions).
   *
   * ## Create Coupon
   *
   * This request will create a coupon, based on the provided information.
   *
   * You can create either a flat amount coupon, by specyfing `amount_in_cents`, or percentage coupon by
   * specyfing `percentage`.
   *
   * You can restrict a coupon to only apply to specific products / components by optionally passing in
   * `restricted_products` and/or `restricted_components` objects in the format:
   * `{ "<product_id/component_id>": boolean_value }`
   *
   * @param productFamilyId   The Advanced Billing id of the product family to which the
   *                                                  coupon belongs
   * @param body
   * @return Response from the API call
   */
  async createCoupon(
    productFamilyId: number,
    body?: CouponRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CouponResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      productFamilyId: [productFamilyId, number()],
      body: [body, optional(couponRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/product_families/${mapped.productFamilyId}/coupons.json`;
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(couponResponseSchema, requestOptions);
  }

  /**
   * List coupons for a specific Product Family in a Site.
   *
   * If the coupon is set to `use_site_exchange_rate: true`, it will return pricing based on the current
   * exchange rate. If the flag is set to false, it will return all of the defined prices for each
   * currency.
   *
   * @param productFamilyId   The Advanced Billing id of the product family to which the
   *                                                      coupon belongs
   * @param page              Result records are organized in pages. By default, the first
   *                                                      page of results is displayed. The page parameter specifies a
   *                                                      page number of results to fetch. You can start navigating
   *                                                      through the pages to consume the results. You do this by
   *                                                      passing in a page parameter. Retrieve the next page by adding
   *                                                      ?page=2 to the query string. If there are no results to
   *                                                      return, then an empty result set will be returned. Use in
   *                                                      query `page=1`.
   * @param perPage           This parameter indicates how many records to fetch in each
   *                                                      request. Default value is 30. The maximum allowed values is
   *                                                      200; any per_page value over 200 will be changed to 200. Use
   *                                                      in query `per_page=200`.
   * @param filter            Filter to use for List Coupons operations
   * @param currencyPrices    When fetching coupons, if you have defined multiple
   *                                                      currencies at the site level, you can optionally pass the `?
   *                                                      currency_prices=true` query param to include an array of
   *                                                      currency price data in the response. Use in query
   *                                                      `currency_prices=true`.
   * @return Response from the API call
   */
  async listCouponsForProductFamily(
    {
      productFamilyId,
      page,
      perPage,
      filter,
      currencyPrices,
    }: {
      productFamilyId: number;
      page?: number;
      perPage?: number;
      filter?: ListCouponsFilter;
      currencyPrices?: boolean;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CouponResponse[]>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      productFamilyId: [productFamilyId, number()],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      filter: [filter, optional(listCouponsFilterSchema)],
      currencyPrices: [currencyPrices, optional(boolean())],
    });
    req.query('page', mapped.page, commaPrefix);
    req.query('per_page', mapped.perPage, commaPrefix);
    req.query('filter', mapped.filter, commaPrefix);
    req.query('currency_prices', mapped.currencyPrices, commaPrefix);
    req.appendTemplatePath`/product_families/${mapped.productFamilyId}/coupons.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(array(couponResponseSchema), requestOptions);
  }

  /**
   * You can search for a coupon via the API with the find method. By passing a code parameter, the find
   * will attempt to locate a coupon that matches that code. If no coupon is found, a 404 is returned.
   *
   * If you have more than one product family and if the coupon you are trying to find does not belong to
   * the default product family in your site, then you will need to specify (either in the url or as a
   * query string param) the product family id.
   *
   * @param productFamilyId   The Advanced Billing id of the product family to which the coupon belongs
   * @param code              The code of the coupon
   * @param currencyPrices    When fetching coupons, if you have defined multiple currencies at the site
   *                                     level, you can optionally pass the `?currency_prices=true` query param to
   *                                     include an array of currency price data in the response.
   * @return Response from the API call
   */
  async findCoupon(
    productFamilyId?: number,
    code?: string,
    currencyPrices?: boolean,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CouponResponse>> {
    const req = this.createRequest('GET', '/coupons/find.json');
    const mapped = req.prepareArgs({
      productFamilyId: [productFamilyId, optional(number())],
      code: [code, optional(string())],
      currencyPrices: [currencyPrices, optional(boolean())],
    });
    req.query('product_family_id', mapped.productFamilyId, commaPrefix);
    req.query('code', mapped.code, commaPrefix);
    req.query('currency_prices', mapped.currencyPrices, commaPrefix);
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(couponResponseSchema, requestOptions);
  }

  /**
   * You can retrieve the Coupon via the API with the Show method. You must identify the Coupon in this
   * call by the ID parameter that Advanced Billing assigns.
   * If instead you would like to find a Coupon using a Coupon code, see the Coupon Find method.
   *
   * When fetching a coupon, if you have defined multiple currencies at the site level, you can
   * optionally pass the `?currency_prices=true` query param to include an array of currency price data
   * in the response.
   *
   * If the coupon is set to `use_site_exchange_rate: true`, it will return pricing based on the current
   * exchange rate. If the flag is set to false, it will return all of the defined prices for each
   * currency.
   *
   * @param productFamilyId   The Advanced Billing id of the product family to which the coupon belongs
   * @param couponId          The Advanced Billing id of the coupon
   * @param currencyPrices    When fetching coupons, if you have defined multiple currencies at the site
   *                                     level, you can optionally pass the `?currency_prices=true` query param to
   *                                     include an array of currency price data in the response.
   * @return Response from the API call
   */
  async readCoupon(
    productFamilyId: number,
    couponId: number,
    currencyPrices?: boolean,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CouponResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      productFamilyId: [productFamilyId, number()],
      couponId: [couponId, number()],
      currencyPrices: [currencyPrices, optional(boolean())],
    });
    req.query('currency_prices', mapped.currencyPrices, commaPrefix);
    req.appendTemplatePath`/product_families/${mapped.productFamilyId}/coupons/${mapped.couponId}.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(couponResponseSchema, requestOptions);
  }

  /**
   * ## Update Coupon
   *
   * You can update a Coupon via the API with a PUT request to the resource endpoint.
   *
   * You can restrict a coupon to only apply to specific products / components by optionally passing in
   * hashes of `restricted_products` and/or `restricted_components` in the format:
   * `{ "<product/component_id>": boolean_value }`
   *
   * @param productFamilyId   The Advanced Billing id of the product family to which the
   *                                                  coupon belongs
   * @param couponId          The Advanced Billing id of the coupon
   * @param body
   * @return Response from the API call
   */
  async updateCoupon(
    productFamilyId: number,
    couponId: number,
    body?: CouponRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CouponResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      productFamilyId: [productFamilyId, number()],
      couponId: [couponId, number()],
      body: [body, optional(couponRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/product_families/${mapped.productFamilyId}/coupons/${mapped.couponId}.json`;
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(couponResponseSchema, requestOptions);
  }

  /**
   * You can archive a Coupon via the API with the archive method.
   * Archiving makes that Coupon unavailable for future use, but allows it to remain attached and
   * functional on existing Subscriptions that are using it.
   * The `archived_at` date and time will be assigned.
   *
   * @param productFamilyId   The Advanced Billing id of the product family to which the coupon belongs
   * @param couponId          The Advanced Billing id of the coupon
   * @return Response from the API call
   */
  async archiveCoupon(
    productFamilyId: number,
    couponId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CouponResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      productFamilyId: [productFamilyId, number()],
      couponId: [couponId, number()],
    });
    req.appendTemplatePath`/product_families/${mapped.productFamilyId}/coupons/${mapped.couponId}.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(couponResponseSchema, requestOptions);
  }

  /**
   * You can retrieve a list of coupons.
   *
   * If the coupon is set to `use_site_exchange_rate: true`, it will return pricing based on the current
   * exchange rate. If the flag is set to false, it will return all of the defined prices for each
   * currency.
   *
   * @param page            Result records are organized in pages. By default, the first
   *                                                    page of results is displayed. The page parameter specifies a
   *                                                    page number of results to fetch. You can start navigating
   *                                                    through the pages to consume the results. You do this by
   *                                                    passing in a page parameter. Retrieve the next page by adding ?
   *                                                    page=2 to the query string. If there are no results to return,
   *                                                    then an empty result set will be returned. Use in query
   *                                                    `page=1`.
   * @param perPage         This parameter indicates how many records to fetch in each
   *                                                    request. Default value is 30. The maximum allowed values is 200;
   *                                                    any per_page value over 200 will be changed to 200. Use in
   *                                                    query `per_page=200`.
   * @param filter          Filter to use for List Coupons operations
   * @param currencyPrices  When fetching coupons, if you have defined multiple currencies
   *                                                    at the site level, you can optionally pass the `?
   *                                                    currency_prices=true` query param to include an array of
   *                                                    currency price data in the response. Use in query
   *                                                    `currency_prices=true`.
   * @return Response from the API call
   */
  async listCoupons(
    {
      page,
      perPage,
      filter,
      currencyPrices,
    }: {
      page?: number;
      perPage?: number;
      filter?: ListCouponsFilter;
      currencyPrices?: boolean;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CouponResponse[]>> {
    const req = this.createRequest('GET', '/coupons.json');
    const mapped = req.prepareArgs({
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      filter: [filter, optional(listCouponsFilterSchema)],
      currencyPrices: [currencyPrices, optional(boolean())],
    });
    req.query('page', mapped.page, commaPrefix);
    req.query('per_page', mapped.perPage, commaPrefix);
    req.query('filter', mapped.filter, commaPrefix);
    req.query('currency_prices', mapped.currencyPrices, commaPrefix);
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(array(couponResponseSchema), requestOptions);
  }

  /**
   * This request will provide details about the coupon usage as an array of data hashes, one per product.
   *
   * @param productFamilyId   The Advanced Billing id of the product family to which the coupon belongs
   * @param couponId          The Advanced Billing id of the coupon
   * @return Response from the API call
   */
  async readCouponUsage(
    productFamilyId: number,
    couponId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CouponUsage[]>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      productFamilyId: [productFamilyId, number()],
      couponId: [couponId, number()],
    });
    req.appendTemplatePath`/product_families/${mapped.productFamilyId}/coupons/${mapped.couponId}/usage.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(array(couponUsageSchema), requestOptions);
  }

  /**
   * You can verify if a specific coupon code is valid using the `validate` method. This method is useful
   * for validating coupon codes that are entered by a customer. If the coupon is found and is valid, the
   * coupon will be returned with a 200 status code.
   *
   * If the coupon is invalid, the status code will be 404 and the response will say why it is invalid.
   * If the coupon is valid, the status code will be 200 and the coupon will be returned. The following
   * reasons for invalidity are supported:
   *
   * + Coupon not found
   * + Coupon is invalid
   * + Coupon expired
   *
   * If you have more than one product family and if the coupon you are validating does not belong to the
   * first product family in your site, then you will need to specify the product family, either in the
   * url or as a query string param. This can be done by supplying the id or the handle in the `handle:my-
   * family` format.
   *
   * Eg.
   *
   * ```
   * https://<subdomain>.chargify.com/product_families/handle:<product_family_handle>/coupons/validate.
   * <format>?code=<coupon_code>
   * ```
   *
   * Or:
   *
   * ```
   * https://<subdomain>.chargify.com/coupons/validate.<format>?
   * code=<coupon_code>&product_family_id=<id>
   * ```
   *
   * @param code              The code of the coupon
   * @param productFamilyId   The Advanced Billing id of the product family to which the coupon belongs
   * @return Response from the API call
   */
  async validateCoupon(
    code: string,
    productFamilyId?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CouponResponse>> {
    const req = this.createRequest('GET', '/coupons/validate.json');
    const mapped = req.prepareArgs({
      code: [code, string()],
      productFamilyId: [productFamilyId, optional(number())],
    });
    req.query('code', mapped.code, commaPrefix);
    req.query('product_family_id', mapped.productFamilyId, commaPrefix);
    req.throwOn(
      404,
      SingleStringErrorResponseError,
      true,
      "Not Found: '{$response.body}'"
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(couponResponseSchema, requestOptions);
  }

  /**
   * This endpoint allows you to create and/or update currency prices for an existing coupon. Multiple
   * prices can be created or updated in a single request but each of the currencies must be defined on
   * the site level already and the coupon must be an amount-based coupon, not percentage.
   *
   * Currency pricing for coupons must mirror the setup of the primary coupon pricing - if the primary
   * coupon is percentage based, you will not be able to define pricing in non-primary currencies.
   *
   * @param couponId     The Advanced Billing id of the coupon
   * @param body
   * @return Response from the API call
   */
  async createOrUpdateCouponCurrencyPrices(
    couponId: number,
    body?: CouponCurrencyRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CouponCurrencyResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      couponId: [couponId, number()],
      body: [body, optional(couponCurrencyRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/coupons/${mapped.couponId}/currency_prices.json`;
    req.throwOn(
      422,
      ErrorStringMapResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(couponCurrencyResponseSchema, requestOptions);
  }

  /**
   * ## Coupon Subcodes Intro
   *
   * Coupon Subcodes allow you to create a set of unique codes that allow you to expand the use of one
   * coupon.
   *
   * For example:
   *
   * Master Coupon Code:
   *
   * + SPRING2020
   *
   * Coupon Subcodes:
   *
   * + SPRING90210
   * + DP80302
   * + SPRINGBALTIMORE
   *
   * Coupon subcodes can be administered in the Admin Interface or via the API.
   *
   * When creating a coupon subcode, you must specify a coupon to attach it to using the coupon_id. Valid
   * coupon subcodes are all capital letters, contain only letters and numbers, and do not have any
   * spaces. Lowercase letters will be capitalized before the subcode is created.
   *
   * ## Coupon Subcodes Documentation
   *
   * Full documentation on how to create coupon subcodes in the Advanced Billing UI can be located
   * [here](https://maxio.zendesk.com/hc/en-us/articles/24261208729229-Coupon-Codes).
   *
   * Additionally, for documentation on how to apply a coupon to a Subscription within the Advanced
   * Billing UI, please see our documentation [here](https://maxio.zendesk.com/hc/en-
   * us/articles/24261259337101-Coupons-and-Subscriptions).
   *
   * ## Create Coupon Subcode
   *
   * This request allows you to create specific subcodes underneath an existing coupon code.
   *
   * *Note*: If you are using any of the allowed special characters ("%", "@", "+", "-", "_", and "."),
   * you must encode them for use in the URL.
   *
   * % to %25
   * @ to %40
   * + to %2B
   * - to %2D
   * _ to %5F
   * . to %2E
   *
   * So, if the coupon subcode is `20%OFF`, the URL to delete this coupon subcode would be: `https:
   * //<subdomain>.chargify.com/coupons/567/codes/20%25OFF.<format>`
   *
   * @param couponId     The Advanced Billing id of the coupon
   * @param body
   * @return Response from the API call
   */
  async createCouponSubcodes(
    couponId: number,
    body?: CouponSubcodes,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CouponSubcodesResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      couponId: [couponId, number()],
      body: [body, optional(couponSubcodesSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/coupons/${mapped.couponId}/codes.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(couponSubcodesResponseSchema, requestOptions);
  }

  /**
   * This request allows you to request the subcodes that are attached to a coupon.
   *
   * @param couponId  The Advanced Billing id of the coupon
   * @param page      Result records are organized in pages. By default, the first page of results is
   *                            displayed. The page parameter specifies a page number of results to fetch. You can
   *                            start navigating through the pages to consume the results. You do this by passing in a
   *                            page parameter. Retrieve the next page by adding ?page=2 to the query string. If there
   *                            are no results to return, then an empty result set will be returned. Use in query
   *                            `page=1`.
   * @param perPage   This parameter indicates how many records to fetch in each request. Default value is
   *                            20. The maximum allowed values is 200; any per_page value over 200 will be changed to
   *                            200. Use in query `per_page=200`.
   * @return Response from the API call
   */
  async listCouponSubcodes(
    {
      couponId,
      page,
      perPage,
    }: {
      couponId: number;
      page?: number;
      perPage?: number;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CouponSubcodes>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      couponId: [couponId, number()],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
    });
    req.query('page', mapped.page, commaPrefix);
    req.query('per_page', mapped.perPage, commaPrefix);
    req.appendTemplatePath`/coupons/${mapped.couponId}/codes.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(couponSubcodesSchema, requestOptions);
  }

  /**
   * You can update the subcodes for the given Coupon via the API with a PUT request to the resource
   * endpoint.
   * Send an array of new coupon subcodes.
   *
   * **Note**: All current subcodes for that Coupon will be deleted first, and replaced with the list of
   * subcodes sent to this endpoint.
   * The response will contain:
   *
   * + The created subcodes,
   *
   * + Subcodes that were not created because they already exist,
   *
   * + Any subcodes not created because they are invalid.
   *
   * @param couponId     The Advanced Billing id of the coupon
   * @param body
   * @return Response from the API call
   */
  async updateCouponSubcodes(
    couponId: number,
    body?: CouponSubcodes,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CouponSubcodesResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      couponId: [couponId, number()],
      body: [body, optional(couponSubcodesSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/coupons/${mapped.couponId}/codes.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(couponSubcodesResponseSchema, requestOptions);
  }

  /**
   * ## Example
   *
   * Given a coupon with an ID of 567, and a coupon subcode of 20OFF, the URL to `DELETE` this coupon
   * subcode would be:
   *
   * ```
   * http://subdomain.chargify.com/coupons/567/codes/20OFF.<format>
   * ```
   *
   * Note: If you are using any of the allowed special characters (“%”, “@”, “+”, “-”, “_”, and “.”), you
   * must encode them for use in the URL.
   *
   * | Special character | Encoding |
   * |-------------------|----------|
   * | %                 | %25      |
   * | @                 | %40      |
   * | +                 | %2B      |
   * | –                 | %2D      |
   * | _                 | %5F      |
   * | .                 | %2E      |
   *
   * ## Percent Encoding Example
   *
   * Or if the coupon subcode is 20%OFF, the URL to delete this coupon subcode would be: @https:
   * //<subdomain>.chargify.com/coupons/567/codes/20%25OFF.<format>
   *
   * @param couponId  The Advanced Billing id of the coupon to which the subcode belongs
   * @param subcode   The subcode of the coupon
   * @return Response from the API call
   */
  async deleteCouponSubcode(
    couponId: number,
    subcode: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      couponId: [couponId, number()],
      subcode: [subcode, string()],
    });
    req.appendTemplatePath`/coupons/${mapped.couponId}/codes/${mapped.subcode}.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.authenticate([{ basicAuth: true }]);
    return req.call(requestOptions);
  }
}
