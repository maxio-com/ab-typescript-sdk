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
} from '../core.js';
import {
  BasicDateField,
  basicDateFieldSchema,
} from '../models/basicDateField.js';
import {
  CreateMetadataRequest,
  createMetadataRequestSchema,
} from '../models/createMetadataRequest.js';
import {
  CreateMetafieldsRequest,
  createMetafieldsRequestSchema,
} from '../models/createMetafieldsRequest.js';
import {
  ListMetafieldsResponse,
  listMetafieldsResponseSchema,
} from '../models/listMetafieldsResponse.js';
import { Metadata, metadataSchema } from '../models/metadata.js';
import { Metafield, metafieldSchema } from '../models/metafield.js';
import {
  PaginatedMetadata,
  paginatedMetadataSchema,
} from '../models/paginatedMetadata.js';
import { ResourceType, resourceTypeSchema } from '../models/resourceType.js';
import {
  SortingDirection,
  sortingDirectionSchema,
} from '../models/sortingDirection.js';
import {
  UpdateMetadataRequest,
  updateMetadataRequestSchema,
} from '../models/updateMetadataRequest.js';
import {
  UpdateMetafieldsRequest,
  updateMetafieldsRequestSchema,
} from '../models/updateMetafieldsRequest.js';
import { array, boolean, number, optional, string } from '../schema.js';
import { BaseController } from './baseController.js';
import { ApiError } from '@apimatic/core';
import { SingleErrorResponseError } from '../errors/singleErrorResponseError.js';

export class CustomFieldsController extends BaseController {
  /**
   * Creates metafields on a Site for either the Subscriptions or Customers resource.
   *
   * Metafields and their metadata are created in the Custom Fields configuration page on your Site.
   * Metafields can be populated with metadata when you create them or later with the [Update
   * Metafield]($e/Custom%20Fields/updateMetafield), [Create Metadata]($e/Custom%20Fields/createMetadata),
   * or [Update Metadata]($e/Custom%20Fields/updateMetadata) endpoints. The Create Metadata and Update
   * Metadata endpoints allow you to add metafields and metadata values to a specific subscription or
   * customer.
   *
   * Each site is limited to 100 unique metafields per resource. This means you can have 100 metafields
   * for Subscriptions and another 100 for Customers.
   *
   * > Note: After creating a metafield, the resource type cannot be modified.
   *
   * In the UI and product documentation, metafields and metadata are called Custom Fields.
   *
   * - Metafield is the custom field
   * - Metadata is the data populating the custom field.
   *
   * See [Custom Fields Reference](https://docs.maxio.com/hc/en-us/articles/24266140850573-Custom-Fields-
   * Reference) and [Custom Fields Tab](https://maxio.zendesk.com/hc/en-us/articles/24251701302925-
   * Subscription-Summary-Custom-Fields-Tab) for information on using Custom Fields in the Advanced
   * Billing UI.
   *
   * @param resourceType  The resource type to which the metafields belong.
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
   * Lists the metafields and their associated details for a Site and resource type. You can filter the
   * request to a specific metafield.
   *
   * @param resourceType  The resource type to which the metafields belong.
   * @param name          Filter by the name of the metafield.
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
   * Updates metafields on your Site for a resource type.  Depending on the request structure, you can
   * update or add metafields and metadata to the Subscriptions or Customers resource.
   *
   * With this endpoint, you can:
   *
   * - Add metafields. If the metafield specified in current_name does not exist, a new metafield is
   * added.
   * >Note: Each site is limited to 100 unique metafields per resource. This means you can have 100
   * metafields for Subscriptions and another 100 for Customers.
   *
   * - Change the name of a metafield.
   * >Note: To keep the metafield name the same and only update the metadata for the metafield, you
   * must use the current metafield name in both the `current_name` and `name` parameters.
   *
   * - Change the input type for the metafield. For example, you can change a metafield input type from
   * text to a dropdown. If you change the input type from text to a dropdown or radio, you must update
   * the specific subscriptions or customers where the metafield was used to reflect the updated
   * metafield and metadata.
   *
   * - Add metadata values to the existing metadata for a dropdown or radio metafield.
   * >Note: Updates to metadata overwrite. To add one or more values, you must specify all metadata
   * values including the new value you want to add.
   *
   * - Add new metadata to a dropdown or radio for a metafield that was created without metadata.
   *
   * - Remove  metadata for a dropdown or radio for a metafield.
   * >Note: Updates to metadata overwrite existing values. To remove one or more values, specify all
   * metadata values except those you want to remove.
   *
   * - Add or update scope settings for a metafield.
   * >Note: Scope changes overwrite existing settings. You must specify the complete scope, including
   * the changes you want to make.
   *
   * @param resourceType  The resource type to which the metafields belong.
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
   * Deletes a metafield from your Site. Removes the metafield and associated metadata from all
   * Subscriptions or Customers resources on the Site.
   *
   * @param resourceType  The resource type to which the metafields belong.
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
   * Creates metadata and metafields for a specific subscription or customer, or updates metadata values
   * of existing metafields for a subscription or customer. Metadata values are limited to 2 KB in size.
   *
   * If you create metadata on a subscription or customer with a metafield that does not already exist,
   * the metafield is created with the metadata you specify and it is always added as a text field. You
   * can update the input_type for the metafield with the [Update
   * Metafield]($e/Custom%20Fields/updateMetafield) endpoint.
   *
   * >Note: Each site is limited to 100 unique metafields per resource. This means you can have 100
   * metafields for Subscriptions and another 100 for Customers.
   *
   * @param resourceType  The resource type to which the metafields belong.
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
   * Lists metadata and metafields for a specific customer or subscription.
   *
   * @param resourceType  The resource type to which the metafields belong.
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
   * Updates metadata and metafields on the Site and the customer or subscription specified, and updates
   * the metadata value on a subscription or customer.
   *
   * If you update metadata on a subscription or customer with a metafield that does not already exist,
   * the metafield is created with the metadata you specify and it is always added as a text field to the
   * Site and to the subscription or customer you specify. You can update the input_type for the
   * metafield with the Update Metafield endpoint.
   *
   * Each site is limited to 100 unique metafields per resource. This means you can have 100 metafields
   * for Subscription and another 100 for Customer.
   *
   * @param resourceType  The resource type to which the metafields belong.
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
   * Deletes one or more metafields (and associated metadata) from the specified subscription or customer.
   *
   * @param resourceType  The resource type to which the metafields belong.
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
   * Lists  metadata for a specified array of subscriptions or customers.
   *
   * @param resourceType   The resource type to which the metafields belong.
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
