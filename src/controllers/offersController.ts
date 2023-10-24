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
import { number, optional } from '../schema';
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
   * @return Response from the API call
   */
  async listOffers(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListOffersResponse>> {
    const req = this.createRequest('GET', '/offers.json');
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
