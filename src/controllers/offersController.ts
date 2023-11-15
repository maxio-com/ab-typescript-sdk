/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, RequestOptions } from '../core';
import { ErrorMapResponseError } from '../errors/errorMapResponseError';
import {
  CreateOfferRequest,
  createOfferRequestSchema,
} from '../models/createOfferRequest';
import {
  ListOffersResponse,
  listOffersResponseSchema,
} from '../models/listOffersResponse';
import { OfferResponse, offerResponseSchema } from '../models/offerResponse';
import { boolean, number, optional } from '../schema';
import { BaseController } from './baseController';

export class OffersController extends BaseController {
  /**
   * Create an offer within your Chargify site by sending a POST request.
   *
   * ## Documentation
   *
   * Offers allow you to package complicated combinations of products, components and coupons into a
   * convenient package which can then be subscribed to just like products.
   *
   * Once an offer is defined it can be used as an alternative to the product when creating subscriptions.
   *
   * Full documentation on how to use offers in the Chargify UI can be located [here](https://chargify.
   * zendesk.com/hc/en-us/articles/4407753852059).
   *
   * ## Using a Product Price Point
   *
   * You can optionally pass in a `product_price_point_id` that corresponds with the `product_id` and the
   * offer will use that price point. If a `product_price_point_id` is not passed in, the product's
   * default price point will be used.
   *
   * @param body
   * @return Response from the API call
   */
  async createOffer(
    body?: CreateOfferRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<OfferResponse>> {
    const req = this.createRequest('POST', '/offers.json');
    const mapped = req.prepareArgs({
      body: [body, optional(createOfferRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(422, ErrorMapResponseError, 'Unprocessable Entity (WebDAV)');
    return req.callAsJson(offerResponseSchema, requestOptions);
  }

  /**
   * This endpoint will list offers for a site.
   *
   * @param page             Result records are organized in pages. By default, the first page of results
   *                                    is displayed. The page parameter specifies a page number of results to fetch.
   *                                    You can start navigating through the pages to consume the results. You do this
   *                                    by passing in a page parameter. Retrieve the next page by adding ?page=2 to the
   *                                    query string. If there are no results to return, then an empty result set will
   *                                    be returned. Use in query `page=1`.
   * @param perPage          This parameter indicates how many records to fetch in each request. Default
   *                                    value is 20. The maximum allowed values is 200; any per_page value over 200
   *                                    will be changed to 200. Use in query `per_page=200`.
   * @param includeArchived  Include archived products. Use in query: `include_archived=true`.
   * @return Response from the API call
   */
  async listOffers({
    page,
    perPage,
    includeArchived,
  }: {
    page?: number,
    perPage?: number,
    includeArchived?: boolean,
  },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListOffersResponse>> {
    const req = this.createRequest('GET', '/offers.json');
    const mapped = req.prepareArgs({
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      includeArchived: [includeArchived, optional(boolean())],
    });
    req.query('page', mapped.page);
    req.query('per_page', mapped.perPage);
    req.query('include_archived', mapped.includeArchived);
    return req.callAsJson(listOffersResponseSchema, requestOptions);
  }

  /**
   * This method allows you to list a specific offer's attributes. This is different than list all offers
   * for a site, as it requires an `offer_id`.
   *
   * @param offerId  The Chargify id of the offer
   * @return Response from the API call
   */
  async readOffers(
    offerId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<OfferResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ offerId: [offerId, number()] });
    req.appendTemplatePath`/offers/${mapped.offerId}.json`;
    req.throwOn(401, ApiError, 'Unauthorized');
    return req.callAsJson(offerResponseSchema, requestOptions);
  }

  /**
   * Archive an existing offer. Please provide an `offer_id` in order to archive the correct item.
   *
   * @param offerId  The Chargify id of the offer
   * @return Response from the API call
   */
  async archiveOffer(
    offerId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({ offerId: [offerId, number()] });
    req.appendTemplatePath`/offers/${mapped.offerId}/archive.json`;
    req.throwOn(401, ApiError, 'Unauthorized');
    return req.call(requestOptions);
  }

  /**
   * Unarchive a previously archived offer. Please provide an `offer_id` in order to un-archive the
   * correct item.
   *
   * @param offerId  The Chargify id of the offer
   * @return Response from the API call
   */
  async unarchiveOffer(
    offerId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({ offerId: [offerId, number()] });
    req.appendTemplatePath`/offers/${mapped.offerId}/unarchive.json`;
    req.throwOn(401, ApiError, 'Unauthorized');
    return req.call(requestOptions);
  }
}
