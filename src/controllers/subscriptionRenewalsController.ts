/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, commaPrefix, RequestOptions } from '../core.js';
import {
  ScheduledRenewalConfigurationItemRequest,
  scheduledRenewalConfigurationItemRequestSchema,
} from '../models/scheduledRenewalConfigurationItemRequest.js';
import {
  ScheduledRenewalConfigurationItemResponse,
  scheduledRenewalConfigurationItemResponseSchema,
} from '../models/scheduledRenewalConfigurationItemResponse.js';
import {
  ScheduledRenewalConfigurationRequest,
  scheduledRenewalConfigurationRequestSchema,
} from '../models/scheduledRenewalConfigurationRequest.js';
import {
  ScheduledRenewalConfigurationResponse,
  scheduledRenewalConfigurationResponseSchema,
} from '../models/scheduledRenewalConfigurationResponse.js';
import {
  ScheduledRenewalConfigurationsResponse,
  scheduledRenewalConfigurationsResponseSchema,
} from '../models/scheduledRenewalConfigurationsResponse.js';
import {
  ScheduledRenewalLockInRequest,
  scheduledRenewalLockInRequestSchema,
} from '../models/scheduledRenewalLockInRequest.js';
import {
  ScheduledRenewalUpdateRequest,
  scheduledRenewalUpdateRequestSchema,
} from '../models/scheduledRenewalUpdateRequest.js';
import { Status, statusSchema } from '../models/status.js';
import { number, optional } from '../schema.js';
import { BaseController } from './baseController.js';
import { ErrorListResponseError } from '../errors/errorListResponseError.js';

export class SubscriptionRenewalsController extends BaseController {
  /**
   * Creates a scheduled renewal configuration for a subscription. The scheduled renewal is based on the
   * subscription’s current product and component setup.
   *
   * @param subscriptionId  The Chargify id of the subscription.
   * @param body
   * @return Response from the API call
   */
  async createScheduledRenewalConfiguration(
    subscriptionId: number,
    body?: ScheduledRenewalConfigurationRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ScheduledRenewalConfigurationResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      body: [body, optional(scheduledRenewalConfigurationRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/scheduled_renewals.json`;
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(
      scheduledRenewalConfigurationResponseSchema,
      requestOptions
    );
  }

  /**
   * Lists scheduled renewal configurations for the subscription and permits an optional status query
   * filter.
   *
   * @param subscriptionId  The Chargify id of the subscription.
   * @param status          (Optional) Status filter for scheduled renewal configurations.
   * @return Response from the API call
   */
  async listScheduledRenewalConfigurations(
    subscriptionId: number,
    status?: Status,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ScheduledRenewalConfigurationsResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      status: [status, optional(statusSchema)],
    });
    req.query('status', mapped.status, commaPrefix);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/scheduled_renewals.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(
      scheduledRenewalConfigurationsResponseSchema,
      requestOptions
    );
  }

  /**
   * Retrieves the configuration settings for the scheduled renewal.
   *
   * @param subscriptionId  The Chargify id of the subscription.
   * @param id              The renewal id.
   * @return Response from the API call
   */
  async readScheduledRenewalConfiguration(
    subscriptionId: number,
    id: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ScheduledRenewalConfigurationResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      id: [id, number()],
    });
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/scheduled_renewals/${mapped.id}.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(
      scheduledRenewalConfigurationResponseSchema,
      requestOptions
    );
  }

  /**
   * Updates an existing configuration.
   *
   * @param subscriptionId  The Chargify id of the subscription.
   * @param id              The renewal id.
   * @param body
   * @return Response from the API call
   */
  async updateScheduledRenewalConfiguration(
    subscriptionId: number,
    id: number,
    body?: ScheduledRenewalConfigurationRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ScheduledRenewalConfigurationResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      id: [id, number()],
      body: [body, optional(scheduledRenewalConfigurationRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/scheduled_renewals/${mapped.id}.json`;
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(
      scheduledRenewalConfigurationResponseSchema,
      requestOptions
    );
  }

  /**
   * Schedules a future lock-in date for the renewal.
   *
   * @param subscriptionId  The Chargify id of the subscription.
   * @param id              The renewal id.
   * @param body
   * @return Response from the API call
   */
  async scheduleScheduledRenewalLockIn(
    subscriptionId: number,
    id: number,
    body?: ScheduledRenewalLockInRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ScheduledRenewalConfigurationResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      id: [id, number()],
      body: [body, optional(scheduledRenewalLockInRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/scheduled_renewals/${mapped.id}/schedule_lock_in.json`;
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(
      scheduledRenewalConfigurationResponseSchema,
      requestOptions
    );
  }

  /**
   * Locks in the renewal immediately.
   *
   * @param subscriptionId  The Chargify id of the subscription.
   * @param id              The renewal id.
   * @return Response from the API call
   */
  async lockInScheduledRenewalImmediately(
    subscriptionId: number,
    id: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ScheduledRenewalConfigurationResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      id: [id, number()],
    });
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/scheduled_renewals/${mapped.id}/immediate_lock_in.json`;
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(
      scheduledRenewalConfigurationResponseSchema,
      requestOptions
    );
  }

  /**
   * Returns a scheduled renewal configuration to an editable state.
   *
   * @param subscriptionId  The Chargify id of the subscription.
   * @param id              The renewal id.
   * @return Response from the API call
   */
  async unpublishScheduledRenewalConfiguration(
    subscriptionId: number,
    id: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ScheduledRenewalConfigurationResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      id: [id, number()],
    });
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/scheduled_renewals/${mapped.id}/unpublish.json`;
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(
      scheduledRenewalConfigurationResponseSchema,
      requestOptions
    );
  }

  /**
   * Cancels a scheduled renewal configuration.
   *
   * @param subscriptionId  The Chargify id of the subscription.
   * @param id              The renewal id.
   * @return Response from the API call
   */
  async cancelScheduledRenewalConfiguration(
    subscriptionId: number,
    id: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ScheduledRenewalConfigurationResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      id: [id, number()],
    });
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/scheduled_renewals/${mapped.id}/cancel.json`;
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(
      scheduledRenewalConfigurationResponseSchema,
      requestOptions
    );
  }

  /**
   * Adds product and component line items to the scheduled renewal.
   *
   * @param subscriptionId                      The Chargify id of
   *                                                                                               the subscription.
   * @param scheduledRenewalsConfigurationId    The scheduled
   *                                                                                               renewal
   *                                                                                               configuration id.
   * @param body
   * @return Response from the API call
   */
  async createScheduledRenewalConfigurationItem(
    subscriptionId: number,
    scheduledRenewalsConfigurationId: number,
    body?: ScheduledRenewalConfigurationItemRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ScheduledRenewalConfigurationItemResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      scheduledRenewalsConfigurationId: [
        scheduledRenewalsConfigurationId,
        number(),
      ],
      body: [body, optional(scheduledRenewalConfigurationItemRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/scheduled_renewals/${mapped.scheduledRenewalsConfigurationId}/configuration_items.json`;
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(
      scheduledRenewalConfigurationItemResponseSchema,
      requestOptions
    );
  }

  /**
   * Updates an existing configuration item’s pricing and quantity.
   *
   * @param subscriptionId                      The Chargify id of the
   *                                                                                    subscription.
   * @param scheduledRenewalsConfigurationId    The scheduled renewal
   *                                                                                    configuration id.
   * @param id                                  The scheduled renewal
   *                                                                                    configuration item id.
   * @param body
   * @return Response from the API call
   */
  async updateScheduledRenewalConfigurationItem(
    subscriptionId: number,
    scheduledRenewalsConfigurationId: number,
    id: number,
    body?: ScheduledRenewalUpdateRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ScheduledRenewalConfigurationItemResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      scheduledRenewalsConfigurationId: [
        scheduledRenewalsConfigurationId,
        number(),
      ],
      id: [id, number()],
      body: [body, optional(scheduledRenewalUpdateRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/scheduled_renewals/${mapped.scheduledRenewalsConfigurationId}/configuration_items/${mapped.id}.json`;
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(
      scheduledRenewalConfigurationItemResponseSchema,
      requestOptions
    );
  }

  /**
   * Removes an item from the pending renewal configuration.
   *
   * @param subscriptionId                      The Chargify id of the subscription.
   * @param scheduledRenewalsConfigurationId    The scheduled renewal configuration id.
   * @param id                                  The scheduled renewal configuration item id.
   * @return Response from the API call
   */
  async deleteScheduledRenewalConfigurationItem(
    subscriptionId: number,
    scheduledRenewalsConfigurationId: number,
    id: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      scheduledRenewalsConfigurationId: [
        scheduledRenewalsConfigurationId,
        number(),
      ],
      id: [id, number()],
    });
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/scheduled_renewals/${mapped.scheduledRenewalsConfigurationId}/configuration_items/${mapped.id}.json`;
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
    req.authenticate([{ basicAuth: true }]);
    return req.call(requestOptions);
  }
}
