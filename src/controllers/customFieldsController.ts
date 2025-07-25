/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  ApiResponse,
  commaPrefix,
  RequestOptions,
  unindexedPrefix,
} from '../core';
import { BasicDateField, basicDateFieldSchema } from '../models/basicDateField';
import {
  CreateMetadataRequest,
  createMetadataRequestSchema,
} from '../models/createMetadataRequest';
import {
  CreateMetafieldsRequest,
  createMetafieldsRequestSchema,
} from '../models/createMetafieldsRequest';
import {
  ListMetafieldsResponse,
  listMetafieldsResponseSchema,
} from '../models/listMetafieldsResponse';
import { Metadata, metadataSchema } from '../models/metadata';
import { Metafield, metafieldSchema } from '../models/metafield';
import {
  PaginatedMetadata,
  paginatedMetadataSchema,
} from '../models/paginatedMetadata';
import { ResourceType, resourceTypeSchema } from '../models/resourceType';
import {
  SortingDirection,
  sortingDirectionSchema,
} from '../models/sortingDirection';
import {
  UpdateMetadataRequest,
  updateMetadataRequestSchema,
} from '../models/updateMetadataRequest';
import {
  UpdateMetafieldsRequest,
  updateMetafieldsRequestSchema,
} from '../models/updateMetafieldsRequest';
import { array, boolean, number, optional, string } from '../schema';
import { BaseController } from './baseController';
import { ApiError } from '@apimatic/core';
import { SingleErrorResponseError } from '../errors/singleErrorResponseError';

export class CustomFieldsController extends BaseController {
  /**
   * ## Custom Fields: Metafield Intro
   *
   * **Advanced Billing refers to Custom Fields in the API documentation as metafields and metadata.**
   * Within the Advanced Billing UI, metadata and metafields are grouped together under the umbrella of
   * "Custom Fields." All of our UI-based documentation that references custom fields will not cite the
   * terminology metafields or metadata.
   *
   * + **Metafield is the custom field**
   * + **Metadata is the data populating the custom field.**
   *
   * Advanced Billing Metafields are used to add meaningful attributes to subscription and customer
   * resources. Full documentation on how to create Custom Fields in the Advanced Billing UI can be
   * located [here](https://maxio.zendesk.com/hc/en-us/sections/24266118312589-Custom-Fields). For
   * additional documentation on how to record data within custom fields, please see our subscription-
   * based documentation [here](https://maxio.zendesk.com/hc/en-us/articles/24251701302925-Subscription-
   * Summary-Custom-Fields-Tab).
   *
   * Metafield are the place where you will set up your resource to accept additional data. It is scoped
   * to the site instead of a specific customer or subscription. Think of it as the key, and Metadata as
   * the value on every record.
   *
   * ## Create Metafields
   *
   * Use this endpoint to create metafields for your Site. Metafields can be populated with metadata
   * after the fact.
   *
   * Each site is limited to 100 unique Metafields (i.e. keys, or names) per resource. This means you can
   * have 100 Metafields for Subscription and another 100 for Customer.
   *
   * ### Metafields "On-the-Fly"
   *
   * It is possible to create Metafields “on the fly” when you create your Metadata – if a non-existent
   * name is passed when creating Metadata, a Metafield for that key will be automatically created. The
   * Metafield API, however, gives you more control over your “keys”.
   *
   * ### Metafield Scope Warning
   *
   * If configuring metafields in the Admin UI or via the API, be careful sending updates to metafields
   * with the scope attribute – **if a partial update is sent it will overwrite the current
   * configuration**.
   *
   * @param resourceType  the resource type to which the metafields belong
   * @param body
   * @return Response from the API call
   */
  async createMetafields(
    resourceType: ResourceType,
    body?: CreateMetafieldsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Metafield[]>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      resourceType: [resourceType, resourceTypeSchema],
      body: [body, optional(createMetafieldsRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/${mapped.resourceType}/metafields.json`;
    req.throwOn(
      422,
      SingleErrorResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(array(metafieldSchema), requestOptions);
  }

  /**
   * This endpoint lists metafields associated with a site. The metafield description and usage is
   * contained in the response.
   *
   * @param resourceType  the resource type to which the metafields belong
   * @param name          filter by the name of the metafield
   * @param page          Result records are organized in pages. By default, the first page of
   *                                          results is displayed. The page parameter specifies a page number of
   *                                          results to fetch. You can start navigating through the pages to consume
   *                                          the results. You do this by passing in a page parameter. Retrieve the
   *                                          next page by adding ?page=2 to the query string. If there are no results
   *                                          to return, then an empty result set will be returned. Use in query
   *                                          `page=1`.
   * @param perPage       This parameter indicates how many records to fetch in each request.
   *                                          Default value is 20. The maximum allowed values is 200; any per_page
   *                                          value over 200 will be changed to 200. Use in query `per_page=200`.
   * @param direction     Controls the order in which results are returned. Use in query
   *                                          `direction=asc`.
   * @return Response from the API call
   */
  async listMetafields(
    {
      resourceType,
      name,
      page,
      perPage,
      direction,
    }: {
      resourceType: ResourceType;
      name?: string;
      page?: number;
      perPage?: number;
      direction?: SortingDirection;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListMetafieldsResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      resourceType: [resourceType, resourceTypeSchema],
      name: [name, optional(string())],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      direction: [direction, optional(sortingDirectionSchema)],
    });
    req.query('name', mapped.name, commaPrefix);
    req.query('page', mapped.page, commaPrefix);
    req.query('per_page', mapped.perPage, commaPrefix);
    req.query('direction', mapped.direction, commaPrefix);
    req.appendTemplatePath`/${mapped.resourceType}/metafields.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(listMetafieldsResponseSchema, requestOptions);
  }

  /**
   * Use the following method to update metafields for your Site. Metafields can be populated with
   * metadata after the fact.
   *
   * @param resourceType  the resource type to which the metafields belong
   * @param body
   * @return Response from the API call
   */
  async updateMetafield(
    resourceType: ResourceType,
    body?: UpdateMetafieldsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Metafield[]>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      resourceType: [resourceType, resourceTypeSchema],
      body: [body, optional(updateMetafieldsRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/${mapped.resourceType}/metafields.json`;
    req.throwOn(
      422,
      SingleErrorResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(array(metafieldSchema), requestOptions);
  }

  /**
   * Use the following method to delete a metafield. This will remove the metafield from the Site.
   *
   * Additionally, this will remove the metafield and associated metadata with all Subscriptions on the
   * Site.
   *
   * @param resourceType  the resource type to which the metafields belong
   * @param name          The name of the metafield to be deleted
   * @return Response from the API call
   */
  async deleteMetafield(
    resourceType: ResourceType,
    name?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      resourceType: [resourceType, resourceTypeSchema],
      name: [name, optional(string())],
    });
    req.query('name', mapped.name, commaPrefix);
    req.appendTemplatePath`/${mapped.resourceType}/metafields.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.authenticate([{ basicAuth: true }]);
    return req.call(requestOptions);
  }

  /**
   * ## Custom Fields: Metadata Intro
   *
   * **Advanced Billing refers to Custom Fields in the API documentation as metafields and metadata.**
   * Within the Advanced Billing UI, metadata and metafields are grouped together under the umbrella of
   * "Custom Fields." All of our UI-based documentation that references custom fields will not cite the
   * terminology metafields or metadata.
   *
   * + **Metafield is the custom field**
   * + **Metadata is the data populating the custom field.**
   *
   * Advanced Billing Metafields are used to add meaningful attributes to subscription and customer
   * resources. Full documentation on how to create Custom Fields in the Advanced Billing UI can be
   * located [here](https://maxio.zendesk.com/hc/en-us/articles/24266164865677-Custom-Fields-Overview).
   * For additional documentation on how to record data within custom fields, please see our subscription-
   * based documentation [here.](https://maxio.zendesk.com/hc/en-us/articles/24251701302925-Subscription-
   * Summary-Custom-Fields-Tab)
   *
   * Metadata is associated to a customer or subscription, and corresponds to a Metafield. When creating
   * a new metadata object for a given record, **if the metafield is not present it will be created**.
   *
   * ## Metadata limits
   *
   * Metadata values are limited to 2kB in size. Additonally, there are limits on the number of unique
   * metafields available per resource.
   *
   * ## Create Metadata
   *
   * This method will create a metafield for the site on the fly if it does not already exist, and
   * populate the metadata value.
   *
   * ### Subscription or Customer Resource
   *
   * Please pay special attention to the resource you use when creating metadata.
   *
   * @param resourceType  the resource type to which the metafields belong
   * @param resourceId    The Advanced Billing id of the customer or the subscription
   *                                                      for which the metadata applies
   * @param body
   * @return Response from the API call
   */
  async createMetadata(
    resourceType: ResourceType,
    resourceId: number,
    body?: CreateMetadataRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Metadata[]>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      resourceType: [resourceType, resourceTypeSchema],
      resourceId: [resourceId, number()],
      body: [body, optional(createMetadataRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/${mapped.resourceType}/${mapped.resourceId}/metadata.json`;
    req.throwOn(
      422,
      SingleErrorResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(array(metadataSchema), requestOptions);
  }

  /**
   * This request will list all of the metadata belonging to a particular resource (ie. subscription,
   * customer) that is specified.
   *
   * ## Metadata Data
   *
   * This endpoint will also display the current stats of your metadata to use as a tool for pagination.
   *
   * @param resourceType  the resource type to which the metafields belong
   * @param resourceId    The Advanced Billing id of the customer or the subscription for which the
   *                                      metadata applies
   * @param page          Result records are organized in pages. By default, the first page of results
   *                                      is displayed. The page parameter specifies a page number of results to fetch.
   *                                      You can start navigating through the pages to consume the results. You do
   *                                      this by passing in a page parameter. Retrieve the next page by adding ?page=2
   *                                      to the query string. If there are no results to return, then an empty result
   *                                      set will be returned. Use in query `page=1`.
   * @param perPage       This parameter indicates how many records to fetch in each request. Default
   *                                      value is 20. The maximum allowed values is 200; any per_page value over 200
   *                                      will be changed to 200. Use in query `per_page=200`.
   * @return Response from the API call
   */
  async listMetadata(
    {
      resourceType,
      resourceId,
      page,
      perPage,
    }: {
      resourceType: ResourceType;
      resourceId: number;
      page?: number;
      perPage?: number;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PaginatedMetadata>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      resourceType: [resourceType, resourceTypeSchema],
      resourceId: [resourceId, number()],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
    });
    req.query('page', mapped.page, commaPrefix);
    req.query('per_page', mapped.perPage, commaPrefix);
    req.appendTemplatePath`/${mapped.resourceType}/${mapped.resourceId}/metadata.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(paginatedMetadataSchema, requestOptions);
  }

  /**
   * This method allows you to update the existing metadata associated with a subscription or customer.
   *
   * @param resourceType  the resource type to which the metafields belong
   * @param resourceId    The Advanced Billing id of the customer or the subscription
   *                                                      for which the metadata applies
   * @param body
   * @return Response from the API call
   */
  async updateMetadata(
    resourceType: ResourceType,
    resourceId: number,
    body?: UpdateMetadataRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Metadata[]>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      resourceType: [resourceType, resourceTypeSchema],
      resourceId: [resourceId, number()],
      body: [body, optional(updateMetadataRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/${mapped.resourceType}/${mapped.resourceId}/metadata.json`;
    req.throwOn(
      422,
      SingleErrorResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(array(metadataSchema), requestOptions);
  }

  /**
   * This method removes the metadata from the subscriber/customer cited.
   *
   * ## Query String Usage
   *
   * For instance if you wanted to delete the metadata for customer 99 named weight you would request:
   *
   * ```
   * https://acme.chargify.com/customers/99/metadata.json?name=weight
   * ```
   *
   * If you want to delete multiple metadata fields for a customer 99 named: `weight` and `age` you
   * wrould request:
   * ```
   * https://acme.chargify.com/customers/99/metadata.json?names[]=weight&names[]=age
   * ```
   *
   * ## Successful Response
   *
   * For a success, there will be a code `200` and the plain text response `true`.
   *
   * ## Unsuccessful Response
   *
   * When a failed response is encountered, you will receive a `404` response and the plain text response
   * of `true`.
   *
   * @param resourceType  the resource type to which the metafields belong
   * @param resourceId    The Advanced Billing id of the customer or the subscription for which the
   *                                      metadata applies
   * @param name          Name of field to be removed.
   * @param names         Names of fields to be removed. Use in query: `names[]=field1&names[]=my-
   *                                      field&names[]=another-field`.
   * @return Response from the API call
   */
  async deleteMetadata(
    resourceType: ResourceType,
    resourceId: number,
    name?: string,
    names?: string[],
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      resourceType: [resourceType, resourceTypeSchema],
      resourceId: [resourceId, number()],
      name: [name, optional(string())],
      names: [names, optional(array(string()))],
    });
    req.query('name', mapped.name, unindexedPrefix);
    req.query('names', mapped.names, unindexedPrefix);
    req.appendTemplatePath`/${mapped.resourceType}/${mapped.resourceId}/metadata.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.authenticate([{ basicAuth: true }]);
    return req.call(requestOptions);
  }

  /**
   * This method will provide you information on usage of metadata across your selected resource (ie.
   * subscriptions, customers)
   *
   * ## Metadata Data
   *
   * This endpoint will also display the current stats of your metadata to use as a tool for pagination.
   *
   * ### Metadata for multiple records
   *
   * `https://acme.chargify.com/subscriptions/metadata.json?resource_ids[]=1&resource_ids[]=2`
   *
   * ## Read Metadata for a Site
   *
   * This endpoint will list the number of pages of metadata information that are contained within a site.
   *
   * @param resourceType   the resource type to which the metafields belong
   * @param page           Result records are organized in pages. By default, the first page of
   *                                           results is displayed. The page parameter specifies a page number of
   *                                           results to fetch. You can start navigating through the pages to consume
   *                                           the results. You do this by passing in a page parameter. Retrieve the
   *                                           next page by adding ?page=2 to the query string. If there are no results
   *                                           to return, then an empty result set will be returned. Use in query
   *                                           `page=1`.
   * @param perPage        This parameter indicates how many records to fetch in each request.
   *                                           Default value is 20. The maximum allowed values is 200; any per_page
   *                                           value over 200 will be changed to 200. Use in query `per_page=200`.
   * @param dateField      The type of filter you would like to apply to your search.
   * @param startDate      The start date (format YYYY-MM-DD) with which to filter the date_field.
   *                                           Returns metadata with a timestamp at or after midnight (12:00:00 AM) in
   *                                           your site’s time zone on the date specified.
   * @param endDate        The end date (format YYYY-MM-DD) with which to filter the date_field.
   *                                           Returns metadata with a timestamp up to and including 11:59:59PM in your
   *                                           site’s time zone on the date specified.
   * @param startDatetime  The start date and time (format YYYY-MM-DD HH:MM:SS) with which to
   *                                           filter the date_field. Returns metadata with a timestamp at or after
   *                                           exact time provided in query. You can specify timezone in query -
   *                                           otherwise your site's time zone will be used. If provided, this
   *                                           parameter will be used instead of start_date.
   * @param endDatetime    The end date and time (format YYYY-MM-DD HH:MM:SS) with which to filter
   *                                           the date_field. Returns metadata with a timestamp at or before exact
   *                                           time provided in query. You can specify timezone in query - otherwise
   *                                           your site's time zone will be used. If provided, this parameter will be
   *                                           used instead of end_date.
   * @param withDeleted    Allow to fetch deleted metadata.
   * @param resourceIds    Allow to fetch metadata for multiple records based on provided ids. Use
   *                                           in query: `resource_ids[]=122&resource_ids[]=123&resource_ids[]=124`.
   * @param direction      Controls the order in which results are returned. Use in query
   *                                           `direction=asc`.
   * @return Response from the API call
   */
  async listMetadataForResourceType(
    {
      resourceType,
      page,
      perPage,
      dateField,
      startDate,
      endDate,
      startDatetime,
      endDatetime,
      withDeleted,
      resourceIds,
      direction,
    }: {
      resourceType: ResourceType;
      page?: number;
      perPage?: number;
      dateField?: BasicDateField;
      startDate?: string;
      endDate?: string;
      startDatetime?: string;
      endDatetime?: string;
      withDeleted?: boolean;
      resourceIds?: number[];
      direction?: SortingDirection;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PaginatedMetadata>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      resourceType: [resourceType, resourceTypeSchema],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      dateField: [dateField, optional(basicDateFieldSchema)],
      startDate: [startDate, optional(string())],
      endDate: [endDate, optional(string())],
      startDatetime: [startDatetime, optional(string())],
      endDatetime: [endDatetime, optional(string())],
      withDeleted: [withDeleted, optional(boolean())],
      resourceIds: [resourceIds, optional(array(number()))],
      direction: [direction, optional(sortingDirectionSchema)],
    });
    req.query('page', mapped.page, unindexedPrefix);
    req.query('per_page', mapped.perPage, unindexedPrefix);
    req.query('date_field', mapped.dateField, unindexedPrefix);
    req.query('start_date', mapped.startDate, unindexedPrefix);
    req.query('end_date', mapped.endDate, unindexedPrefix);
    req.query('start_datetime', mapped.startDatetime, unindexedPrefix);
    req.query('end_datetime', mapped.endDatetime, unindexedPrefix);
    req.query('with_deleted', mapped.withDeleted, unindexedPrefix);
    req.query('resource_ids', mapped.resourceIds, unindexedPrefix);
    req.query('direction', mapped.direction, unindexedPrefix);
    req.appendTemplatePath`/${mapped.resourceType}/metadata.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(paginatedMetadataSchema, requestOptions);
  }
}
