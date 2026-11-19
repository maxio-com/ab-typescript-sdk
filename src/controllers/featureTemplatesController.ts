/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, commaPrefix, RequestOptions } from '../core.js';
import {
  CreateFeatureTemplateRequest,
  createFeatureTemplateRequestSchema,
} from '../models/createFeatureTemplateRequest.js';
import {
  FeatureTemplateResponse,
  featureTemplateResponseSchema,
} from '../models/featureTemplateResponse.js';
import {
  FeatureTemplatesListResponse,
  featureTemplatesListResponseSchema,
} from '../models/featureTemplatesListResponse.js';
import { Kind, kindSchema } from '../models/kind.js';
import { SortBy, sortBySchema } from '../models/sortBy.js';
import { SortDirection, sortDirectionSchema } from '../models/sortDirection.js';
import { Status1, status1Schema } from '../models/status1.js';
import {
  UpdateFeatureTemplateRequest,
  updateFeatureTemplateRequestSchema,
} from '../models/updateFeatureTemplateRequest.js';
import { boolean, number, optional, string } from '../schema.js';
import { BaseController } from './baseController.js';
import { ApiError } from '@apimatic/core';
import { ErrorListResponseError } from '../errors/errorListResponseError.js';

export class FeatureTemplatesController extends BaseController {
  /**
   * Lists the feature templates defined for your site, active (non-archived) ones by default. Pass
   * `status=archived` or `status=all` to widen the result set.
   *
   * Supply `page` or `per_page` to paginate. Without either parameter, the response includes the full
   * result set.
   *
   * @param page           Result records are organized in pages. By default, the first page of
   *                                        results is displayed. The page parameter specifies a page number of results
   *                                        to fetch. You can start navigating through the pages to consume the results.
   *                                        You do this by passing in a page parameter. Retrieve the next page by
   *                                        adding ?page=2 to the query string. If there are no results to return, then
   *                                        an empty result set will be returned. Use in query `page=1`.
   * @param perPage        This parameter indicates how many records to fetch in each request.
   *                                        Default value is 20. The maximum allowed values is 200; any per_page value
   *                                        over 200 will be changed to 200. Use in query `per_page=200`.
   * @param status         Filters by archived state. Defaults to `active` (non-archived templates
   *                                        only).
   * @param q              Filters to feature templates whose name contains this substring (case-
   *                                        insensitive).
   * @param kind           Filters by feature kind.
   * @param updatedFrom    Returns feature templates updated on or after this date.
   * @param updatedTo      Returns feature templates updated on or before this date.
   * @param sortBy         The field to sort results by.
   * @param sortDirection  The sort direction of the returned feature templates.
   * @return Response from the API call
   */
  async listFeatureTemplates(
    page?: number,
    perPage?: number,
    status?: Status1,
    q?: string,
    kind?: Kind,
    updatedFrom?: string,
    updatedTo?: string,
    sortBy?: SortBy,
    sortDirection?: SortDirection,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<FeatureTemplatesListResponse>> {
    const req = this.createRequest('GET', '/features.json');
    const mapped = req.prepareArgs({
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      status: [status, optional(status1Schema)],
      q: [q, optional(string())],
      kind: [kind, optional(kindSchema)],
      updatedFrom: [updatedFrom, optional(string())],
      updatedTo: [updatedTo, optional(string())],
      sortBy: [sortBy, optional(sortBySchema)],
      sortDirection: [sortDirection, optional(sortDirectionSchema)],
    });
    req.query('page', mapped.page, commaPrefix);
    req.query('per_page', mapped.perPage, commaPrefix);
    req.query('status', mapped.status, commaPrefix);
    req.query('q', mapped.q, commaPrefix);
    req.query('kind', mapped.kind, commaPrefix);
    req.query('updated_from', mapped.updatedFrom, commaPrefix);
    req.query('updated_to', mapped.updatedTo, commaPrefix);
    req.query('sort_by', mapped.sortBy, commaPrefix);
    req.query('sort_direction', mapped.sortDirection, commaPrefix);
    req.throwOn(403, ErrorListResponseError, 'Forbidden');
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(featureTemplatesListResponseSchema, requestOptions);
  }

  /**
   * Defines a new feature at the site level. Feature templates aren't billable on their own. Attach a
   * template to products or components to grant the feature to subscribers.
   *
   * @param body
   * @return Response from the API call
   */
  async createFeatureTemplate(
    body?: CreateFeatureTemplateRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<FeatureTemplateResponse>> {
    const req = this.createRequest('POST', '/features.json');
    const mapped = req.prepareArgs({
      body: [body, optional(createFeatureTemplateRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(403, ErrorListResponseError, 'Forbidden');
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(featureTemplateResponseSchema, requestOptions);
  }

  /**
   * Returns a single feature template. Archived feature templates are not addressable here and return
   * `404`. Restore a template first to read or update it.
   *
   * @param id The Advanced Billing id of the feature template.
   * @return Response from the API call
   */
  async readFeatureTemplate(
    id: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<FeatureTemplateResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ id: [id, number()] });
    req.appendTemplatePath`/features/${mapped.id}.json`;
    req.throwOn(403, ErrorListResponseError, 'Forbidden');
    req.throwOn(404, ApiError, 'Not Found');
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(featureTemplateResponseSchema, requestOptions);
  }

  /**
   * Updates the name, description, unit, value type, default value, or default periodicity of a feature
   * template. `key` is rejected on every update. `kind` is rejected once any feature catalog item has
   * been created from this template.
   *
   * Archived feature templates are not addressable here and return `404`. Restore a template first to
   * update it.
   *
   * @param id           The Advanced Billing id of the feature template.
   * @param body
   * @return Response from the API call
   */
  async updateFeatureTemplate(
    id: number,
    body?: UpdateFeatureTemplateRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<FeatureTemplateResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      id: [id, number()],
      body: [body, optional(updateFeatureTemplateRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/features/${mapped.id}.json`;
    req.throwOn(403, ErrorListResponseError, 'Forbidden');
    req.throwOn(404, ApiError, 'Not Found');
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(featureTemplateResponseSchema, requestOptions);
  }

  /**
   * Archives a feature template. Archived feature templates are not addressable via [Read Feature
   * Template]($e/Feature%20Templates/readFeatureTemplate) or [Update Feature
   * Template]($e/Feature%20Templates/updateFeatureTemplate). Both endpoints return `404` until the
   * template is restored.
   *
   * The feature template record itself is never hard-deleted, and can always be restored with [Restore
   * Feature Template]($e/Feature%20Templates/restoreFeatureTemplate). Reversibility does not extend to
   * `remove_from_catalog=true`: the feature catalog items and entitlements that parameter destroys are
   * gone permanently, and restoring the template will not bring subscriber access back.
   *
   * @param id                  The Advanced Billing id of the feature template.
   * @param removeFromCatalog   When `true`, also destroys every feature catalog item created from this
   *                                       template and cascades to their entitlements, revoking subscriber access
   *                                       immediately. When `false` (default), the feature template and its feature
   *                                       catalog items are archived, and existing entitlements are preserved.
   * @return Response from the API call
   */
  async archiveFeatureTemplate(
    id: number,
    removeFromCatalog?: boolean,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      id: [id, number()],
      removeFromCatalog: [removeFromCatalog, optional(boolean())],
    });
    req.query('remove_from_catalog', mapped.removeFromCatalog, commaPrefix);
    req.appendTemplatePath`/features/${mapped.id}.json`;
    req.throwOn(403, ErrorListResponseError, 'Forbidden');
    req.throwOn(404, ApiError, 'Not Found');
    req.authenticate([{ basicAuth: true }]);
    return req.call(requestOptions);
  }

  /**
   * Clears the feature template's archived state. Feature catalog items created from this template are
   * not automatically restored. Restore each one individually.
   *
   * @param id The Advanced Billing id of the feature template.
   * @return Response from the API call
   */
  async restoreFeatureTemplate(
    id: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<FeatureTemplateResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({ id: [id, number()] });
    req.appendTemplatePath`/features/${mapped.id}/restore.json`;
    req.throwOn(403, ErrorListResponseError, 'Forbidden');
    req.throwOn(404, ApiError, 'Not Found');
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(featureTemplateResponseSchema, requestOptions);
  }
}
