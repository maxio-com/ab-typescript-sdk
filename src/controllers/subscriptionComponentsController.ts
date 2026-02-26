/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, commaPrefix, RequestOptions } from '../core.js';
import {
  ActivateEventBasedComponent,
  activateEventBasedComponentSchema,
} from '../models/activateEventBasedComponent.js';
import {
  AllocateComponents,
  allocateComponentsSchema,
} from '../models/allocateComponents.js';
import {
  AllocationPreviewResponse,
  allocationPreviewResponseSchema,
} from '../models/allocationPreviewResponse.js';
import {
  AllocationResponse,
  allocationResponseSchema,
} from '../models/allocationResponse.js';
import {
  BulkComponentsPricePointAssignment,
  bulkComponentsPricePointAssignmentSchema,
} from '../models/bulkComponentsPricePointAssignment.js';
import {
  CreateUsageComponentId,
  createUsageComponentIdSchema,
} from '../models/containers/createUsageComponentId.js';
import {
  CreateUsageSubscriptionIdOrReference,
  createUsageSubscriptionIdOrReferenceSchema,
} from '../models/containers/createUsageSubscriptionIdOrReference.js';
import {
  ListUsagesInputComponentId,
  listUsagesInputComponentIdSchema,
} from '../models/containers/listUsagesInputComponentId.js';
import {
  ListUsagesInputSubscriptionIdOrReference,
  listUsagesInputSubscriptionIdOrReferenceSchema,
} from '../models/containers/listUsagesInputSubscriptionIdOrReference.js';
import {
  CreateAllocationRequest,
  createAllocationRequestSchema,
} from '../models/createAllocationRequest.js';
import {
  CreateUsageRequest,
  createUsageRequestSchema,
} from '../models/createUsageRequest.js';
import {
  CreditSchemeRequest,
  creditSchemeRequestSchema,
} from '../models/creditSchemeRequest.js';
import { EBBEvent, eBBEventSchema } from '../models/eBBEvent.js';
import {
  IncludeNotNull,
  includeNotNullSchema,
} from '../models/includeNotNull.js';
import {
  ListSubscriptionComponentsFilter,
  listSubscriptionComponentsFilterSchema,
} from '../models/listSubscriptionComponentsFilter.js';
import {
  ListSubscriptionComponentsForSiteFilter,
  listSubscriptionComponentsForSiteFilterSchema,
} from '../models/listSubscriptionComponentsForSiteFilter.js';
import {
  ListSubscriptionComponentsInclude,
  listSubscriptionComponentsIncludeSchema,
} from '../models/listSubscriptionComponentsInclude.js';
import {
  ListSubscriptionComponentsResponse,
  listSubscriptionComponentsResponseSchema,
} from '../models/listSubscriptionComponentsResponse.js';
import {
  ListSubscriptionComponentsSort,
  listSubscriptionComponentsSortSchema,
} from '../models/listSubscriptionComponentsSort.js';
import {
  PreviewAllocationsRequest,
  previewAllocationsRequestSchema,
} from '../models/previewAllocationsRequest.js';
import {
  SortingDirection,
  sortingDirectionSchema,
} from '../models/sortingDirection.js';
import {
  SubscriptionComponentResponse,
  subscriptionComponentResponseSchema,
} from '../models/subscriptionComponentResponse.js';
import {
  SubscriptionListDateField,
  subscriptionListDateFieldSchema,
} from '../models/subscriptionListDateField.js';
import {
  SubscriptionResponse,
  subscriptionResponseSchema,
} from '../models/subscriptionResponse.js';
import {
  UpdateAllocationExpirationDate,
  updateAllocationExpirationDateSchema,
} from '../models/updateAllocationExpirationDate.js';
import { UsageResponse, usageResponseSchema } from '../models/usageResponse.js';
import { array, bigint, boolean, number, optional, string } from '../schema.js';
import { BaseController } from './baseController.js';
import { ApiError } from '@apimatic/core';
import { ComponentAllocationError } from '../errors/componentAllocationError.js';
import { ComponentPricePointError } from '../errors/componentPricePointError.js';
import { ErrorListResponseError } from '../errors/errorListResponseError.js';
import { SubscriptionComponentAllocationError } from '../errors/subscriptionComponentAllocationError.js';

export class SubscriptionComponentsController extends BaseController {
  /**
   * This request will list information regarding a specific component owned by a subscription.
   *
   * @param subscriptionId  The Chargify id of the subscription.
   * @param componentId     The Advanced Billing id of the component. Alternatively, the component's handle
   *                                  prefixed by `handle:`
   * @return Response from the API call
   */
  async readSubscriptionComponent(
    subscriptionId: number,
    componentId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SubscriptionComponentResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      componentId: [componentId, number()],
    });
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/components/${mapped.componentId}.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(subscriptionComponentResponseSchema, requestOptions);
  }

  /**
   * This request will list a subscription's applied components.
   *
   * ## Archived Components
   *
   * When requesting to list components for a given subscription, if the subscription contains
   * **archived** components they will be listed in the server response.
   *
   * @param subscriptionId     The Chargify id of the subscription.
   * @param dateField          The type of filter you'd like to apply to
   *                                                                      your search. Use in query
   *                                                                      `date_field=updated_at`.
   * @param direction          Controls the order in which results are
   *                                                                      returned. Use in query `direction=asc`.
   * @param filter             Filter to use for List Subscription
   *                                                                      Components operation
   * @param endDate            The end date (format YYYY-MM-DD) with which
   *                                                                      to filter the date_field. Returns components
   *                                                                      with a timestamp up to and including 11:59:
   *                                                                      59PM in your site’s time zone on the date
   *                                                                      specified.
   * @param endDatetime        The end date and time (format YYYY-MM-DD HH:
   *                                                                      MM:SS) with which to filter the date_field.
   *                                                                      Returns components with a timestamp at or
   *                                                                      before exact time provided in query. You can
   *                                                                      specify timezone in query - otherwise your
   *                                                                      site''s time zone will be used. If provided,
   *                                                                      this parameter will be used instead of
   *                                                                      end_date.
   * @param pricePointIds      Allows fetching components allocation only
   *                                                                      if price point id is present. Use in query
   *                                                                      `price_point_ids=not_null`.
   * @param productFamilyIds   Allows fetching components allocation with
   *                                                                      matching product family id based on provided
   *                                                                      ids. Use in query `product_family_ids=1,2,3`.
   * @param sort               The attribute by which to sort. Use in query
   *                                                                      `sort=updated_at`.
   * @param startDate          The start date (format YYYY-MM-DD) with
   *                                                                      which to filter the date_field. Returns
   *                                                                      components with a timestamp at or after
   *                                                                      midnight (12:00:00 AM) in your site’s time
   *                                                                      zone on the date specified.
   * @param startDatetime      The start date and time (format YYYY-MM-DD
   *                                                                      HH:MM:SS) with which to filter the date_field.
   *                                                                      Returns components with a timestamp at or
   *                                                                      after exact time provided in query. You can
   *                                                                      specify timezone in query - otherwise your
   *                                                                      site''s time zone will be used. If provided,
   *                                                                      this parameter will be used instead of
   *                                                                      start_date.
   * @param include            Allows including additional data in the
   *                                                                      response. Use in query `include=subscription,
   *                                                                      historic_usages`.
   * @param inUse              If in_use is set to true, it returns only
   *                                                                      components that are currently in use. However,
   *                                                                      if it's set to false or not provided, it
   *                                                                      returns all components connected with the
   *                                                                      subscription.
   * @return Response from the API call
   */
  async listSubscriptionComponents(
    {
      subscriptionId,
      dateField,
      direction,
      filter,
      endDate,
      endDatetime,
      pricePointIds,
      productFamilyIds,
      sort,
      startDate,
      startDatetime,
      include,
      inUse,
    }: {
      subscriptionId: number;
      dateField?: SubscriptionListDateField;
      direction?: SortingDirection;
      filter?: ListSubscriptionComponentsFilter;
      endDate?: string;
      endDatetime?: string;
      pricePointIds?: IncludeNotNull;
      productFamilyIds?: number[];
      sort?: ListSubscriptionComponentsSort;
      startDate?: string;
      startDatetime?: string;
      include?: ListSubscriptionComponentsInclude[];
      inUse?: boolean;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SubscriptionComponentResponse[]>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      dateField: [dateField, optional(subscriptionListDateFieldSchema)],
      direction: [direction, optional(sortingDirectionSchema)],
      filter: [filter, optional(listSubscriptionComponentsFilterSchema)],
      endDate: [endDate, optional(string())],
      endDatetime: [endDatetime, optional(string())],
      pricePointIds: [pricePointIds, optional(includeNotNullSchema)],
      productFamilyIds: [productFamilyIds, optional(array(number()))],
      sort: [sort, optional(listSubscriptionComponentsSortSchema)],
      startDate: [startDate, optional(string())],
      startDatetime: [startDatetime, optional(string())],
      include: [
        include,
        optional(array(listSubscriptionComponentsIncludeSchema)),
      ],
      inUse: [inUse, optional(boolean())],
    });
    req.query('date_field', mapped.dateField, commaPrefix);
    req.query('direction', mapped.direction, commaPrefix);
    req.query('filter', mapped.filter, commaPrefix);
    req.query('end_date', mapped.endDate, commaPrefix);
    req.query('end_datetime', mapped.endDatetime, commaPrefix);
    req.query('price_point_ids', mapped.pricePointIds, commaPrefix);
    req.query('product_family_ids', mapped.productFamilyIds, commaPrefix);
    req.query('sort', mapped.sort, commaPrefix);
    req.query('start_date', mapped.startDate, commaPrefix);
    req.query('start_datetime', mapped.startDatetime, commaPrefix);
    req.query('include', mapped.include, commaPrefix);
    req.query('in_use', mapped.inUse, commaPrefix);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/components.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(
      array(subscriptionComponentResponseSchema),
      requestOptions
    );
  }

  /**
   * Updates the price points on one or more of a subscription's components.
   *
   * The `price_point` key can take either a:
   * 1. Price point id (integer)
   * 2. Price point handle (string)
   * 3. `"_default"` string, which will reset the price point to the component's current default price
   * point.
   *
   * @param subscriptionId  The Chargify id of the subscription.
   * @param body
   * @return Response from the API call
   */
  async bulkUpdateSubscriptionComponentsPricePoints(
    subscriptionId: number,
    body?: BulkComponentsPricePointAssignment,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BulkComponentsPricePointAssignment>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      body: [body, optional(bulkComponentsPricePointAssignmentSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/price_points.json`;
    req.throwOn(
      422,
      ComponentPricePointError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(
      bulkComponentsPricePointAssignmentSchema,
      requestOptions
    );
  }

  /**
   * Resets all of a subscription's components to use the current default.
   *
   * **Note**: this will update the price point for all of the subscription's components, even ones that
   * have not been allocated yet.
   *
   * @param subscriptionId  The Chargify id of the subscription.
   * @return Response from the API call
   */
  async bulkResetSubscriptionComponentsPricePoints(
    subscriptionId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SubscriptionResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
    });
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/price_points/reset.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(subscriptionResponseSchema, requestOptions);
  }

  /**
   * Creates an allocation, sets the current allocated quantity for the component, and records a memo.
   * Allocations can only be updated for Quantity, On/Off, and Prepaid Components.
   *
   * When creating an allocation via the API, you can pass the `upgrade_charge`, `downgrade_credit`, and
   * `accrue_charge` to be applied.
   *
   * > **Note:** These proration and accural fields are ignored for Prepaid Components since this
   * component type always generate charges immediately without proration.
   *
   * For information on prorated components and upgrade/downgrade schemes, see [Setting Component
   * Allocations.](https://maxio.zendesk.com/hc/en-us/articles/24251906165133-Component-Allocations-
   * Proration)
   *
   * ### Order of Resolution for upgrade_charge and downgrade_credit
   *
   * 1. Per allocation in API call (within a single allocation of the `allocations` array)
   * 2. [Component-level default value](https://maxio.zendesk.com/hc/en-us/articles/24251883961485-
   * Component-Allocations-Overview)
   * 3. Allocation API call top level (outside of the `allocations` array)
   * 4. [Site-level default value](https://maxio.zendesk.com/hc/en-us/articles/24251906165133-Component-
   * Allocations-Proration#proration-schemes)
   *
   * ### Order of Resolution for accrue charge
   *
   * 1. Allocation API call top level (outside of the `allocations` array)
   * 2. [Site-level default value](https://maxio.zendesk.com/hc/en-us/articles/24251906165133-Component-
   * Allocations-Proration#proration-schemes)
   *
   * > **Note:** Proration uses the current price of the component as well as the current tax rates.
   * Changes to either may cause the prorated charge/credit to be wrong.
   *
   * For more informaiton see the [Component Allocations](https://maxio.zendesk.com/hc/en-
   * us/articles/24251883961485-Component-Allocations-Overview) product Documentation.
   *
   * @param subscriptionId  The Chargify id of the subscription.
   * @param componentId     The Advanced Billing id of the component
   * @param body
   * @return Response from the API call
   */
  async allocateComponent(
    subscriptionId: number,
    componentId: number,
    body?: CreateAllocationRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AllocationResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      componentId: [componentId, number()],
      body: [body, optional(createAllocationRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/components/${mapped.componentId}/allocations.json`;
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(allocationResponseSchema, requestOptions);
  }

  /**
   * This endpoint returns the 50 most recent Allocations, ordered by most recent first.
   *
   * ## On/Off Components
   *
   * When a subscription's on/off component has been toggled to on (`1`) or off (`0`), usage will be
   * logged in this response.
   *
   * @param subscriptionId  The Chargify id of the subscription.
   * @param componentId     The Advanced Billing id of the component
   * @param page            Result records are organized in pages. By default, the first page of results is
   *                                  displayed. The page parameter specifies a page number of results to fetch. You
   *                                  can start navigating through the pages to consume the results. You do this by
   *                                  passing in a page parameter. Retrieve the next page by adding ?page=2 to the
   *                                  query string. If there are no results to return, then an empty result set will be
   *                                  returned. Use in query `page=1`.
   * @return Response from the API call
   */
  async listAllocations(
    subscriptionId: number,
    componentId: number,
    page?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AllocationResponse[]>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      componentId: [componentId, number()],
      page: [page, optional(number())],
    });
    req.query('page', mapped.page, commaPrefix);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/components/${mapped.componentId}/allocations.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(array(allocationResponseSchema), requestOptions);
  }

  /**
   * Creates multiple allocations, sets the current allocated quantity for each of the components, and
   * recording a memo.   A `component_id` is required for each allocation.
   *
   * The charges and/or credits that are created will be rolled up into a single total which is used to
   * determine whether this is an upgrade or a downgrade.
   *
   * ### Order of Resolution for upgrade_charge and downgrade_credit
   *
   * 1. Per allocation in API call (within a single allocation of the `allocations` array)
   * 2. [Component-level default value](https://maxio.zendesk.com/hc/en-us/articles/24251883961485-
   * Component-Allocations-Overview)
   * 3. Allocation API call top level (outside of the `allocations` array)
   * 4. [Site-level default value](https://maxio.zendesk.com/hc/en-us/articles/24251906165133-Component-
   * Allocations-Proration#proration-schemes)
   *
   * ### Order of Resolution for accrue charge
   *
   * 1. Allocation API call top level (outside of the `allocations` array)
   * 2. [Site-level default value](https://maxio.zendesk.com/hc/en-us/articles/24251906165133-Component-
   * Allocations-Proration#proration-schemes)
   *
   * > **Note:** Proration uses the current price of the component as well as the current tax rates.
   * Changes to either may cause the prorated charge/credit to be wrong.
   *
   * For more informaiton see the [Component Allocations](https://maxio.zendesk.com/hc/en-
   * us/articles/24251883961485-Component-Allocations-Overview) product Documentation.
   *
   * @param subscriptionId  The Chargify id of the subscription.
   * @param body
   * @return Response from the API call
   */
  async allocateComponents(
    subscriptionId: number,
    body?: AllocateComponents,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AllocationResponse[]>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      body: [body, optional(allocateComponentsSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/allocations.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(array(allocationResponseSchema), requestOptions);
  }

  /**
   * Advanced Billing offers the ability to preview a potential subscription's **quantity-based** or
   * **on/off** component allocation in the middle of the current billing period.  This is useful if you
   * want users to be able to see the effect of a component operation before actually doing it.
   *
   * ## Fine-grained Component Control: Use with multiple `upgrade_charge`s or `downgrade_credits`
   *
   * When the allocation uses multiple different types of `upgrade_charge`s or `downgrade_credit`s, the
   * Allocation is viewed as an Allocation which uses "Fine-Grained Component Control". As a result, the
   * response will not include `direction` and `proration` within the `allocation_preview`, but at the
   * `line_items` and `allocations` level respectfully.
   *
   * See example below for Fine-Grained Component Control response.
   *
   * @param subscriptionId  The Chargify id of the subscription.
   * @param body
   * @return Response from the API call
   */
  async previewAllocations(
    subscriptionId: number,
    body?: PreviewAllocationsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AllocationPreviewResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      body: [body, optional(previewAllocationsRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/allocations/preview.json`;
    req.throwOn(
      422,
      ComponentAllocationError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(allocationPreviewResponseSchema, requestOptions);
  }

  /**
   * When the expiration interval options are selected on a prepaid usage component price point, all
   * allocations will be created with an expiration date. This expiration date can be changed after the
   * fact to allow for extending or shortening the allocation's active window.
   *
   * In order to change a prepaid usage allocation's expiration date, a PUT call must be made to the
   * allocation's endpoint with a new expiration date.
   *
   * ## Limitations
   *
   * A few limitations exist when changing an allocation's expiration date:
   *
   * - An expiration date can only be changed for an allocation that belongs to a price point with
   * expiration interval options explicitly set.
   * - An expiration date can be changed towards the future with no limitations.
   * - An expiration date can be changed towards the past (essentially expiring it) up to the
   * subscription's current period beginning date.
   *
   * @param subscriptionId  The Chargify id of the subscription.
   * @param componentId     The Advanced Billing id of the component
   * @param allocationId    The Advanced Billing id of the allocation
   * @param body
   * @return Response from the API call
   */
  async updatePrepaidUsageAllocationExpirationDate(
    subscriptionId: number,
    componentId: number,
    allocationId: number,
    body?: UpdateAllocationExpirationDate,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      componentId: [componentId, number()],
      allocationId: [allocationId, number()],
      body: [body, optional(updateAllocationExpirationDateSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/components/${mapped.componentId}/allocations/${mapped.allocationId}.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.throwOn(
      422,
      SubscriptionComponentAllocationError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.call(requestOptions);
  }

  /**
   * Prepaid Usage components are unique in that their allocations are always additive. In order to
   * reduce a subscription's allocated quantity for a prepaid usage component each allocation must be
   * destroyed individually via this endpoint.
   *
   * ## Credit Scheme
   *
   * By default, destroying an allocation will generate a service credit on the subscription. This
   * behavior can be modified with the optional `credit_scheme` parameter on this endpoint. The accepted
   * values are:
   *
   * 1. `none`: The allocation will be destroyed and the balances will be updated but no service credit
   * or refund will be created.
   * 2. `credit`: The allocation will be destroyed and the balances will be updated and a service credit
   * will be generated. This is also the default behavior if the `credit_scheme` param is not passed.
   * 3. `refund`: The allocation will be destroyed and the balances will be updated and a refund will be
   * issued along with a Credit Note.
   *
   * @param subscriptionId  The Chargify id of the subscription.
   * @param componentId     The Advanced Billing id of the component
   * @param allocationId    The Advanced Billing id of the allocation
   * @param body
   * @return Response from the API call
   */
  async deletePrepaidUsageAllocation(
    subscriptionId: number,
    componentId: number,
    allocationId: number,
    body?: CreditSchemeRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      componentId: [componentId, number()],
      allocationId: [allocationId, number()],
      body: [body, optional(creditSchemeRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/components/${mapped.componentId}/allocations/${mapped.allocationId}.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.throwOn(
      422,
      SubscriptionComponentAllocationError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.call(requestOptions);
  }

  /**
   * Records an instance of metered or prepaid usage for a subscription.
   *
   * You can report metered or prepaid usage to Advanced Billing as often as you wish. You can report
   * usage as it happens or periodically, such as each night or once per billing period.
   *
   * Full documentation on how to create Components in the Advanced Billing UI can be located
   * [here](https://maxio.zendesk.com/hc/en-us/articles/24261149711501-Create-Edit-and-Archive-
   * Components). Additionally, for information on how to record component usage against a subscription,
   * see the following resources:
   *
   * It is not possible to record metered usage for more than one component at a time Usage should be
   * reported as one API call per component on a single subscription. For example, to record that a
   * subscriber has sent both an SMS Message and an Email, send an API call for each.
   *
   * See the following product documention articles for more information:
   *
   * - [Create and Manage Components](https://maxio.zendesk.com/hc/en-us/articles/24261149711501-Create-
   * Edit-and-Archive-Components). A
   * - [Recording Metered Component Usage](https://maxio.zendesk.com/hc/en-us/articles/24251890500109-
   * Reporting-Component-Allocations#reporting-metered-component-usage)
   * - [Reporting Prepaid Component Status](https://maxio.zendesk.com/hc/en-us/articles/24251890500109-
   * Reporting-Component-Allocations#reporting-prepaid-component-status)
   *
   * The `quantity` from usage for each component is accumulated to the `unit_balance` on the [Component
   * Line Item]($e/Subscription%20Components/readSubscriptionComponent) for the subscription.
   *
   * ## Price Point ID usage
   *
   * If you are using price points, for metered and prepaid usage components Advanced Billing gives you
   * the option to specify a price point in your request.
   *
   * You do not need to specify a price point ID. If a price point is not included, the default price
   * point for the component will be used when the usage is recorded.
   *
   * ## Deducting Usage
   *
   * If you need to reverse a previous usage report or otherwise deduct from the current usage balance,
   * you can provide a negative quantity.
   *
   * Example:
   *
   * Previously recorded quantity was 5000:
   *
   * ```json
   * {
   * "usage": {
   * "quantity": 5000,
   * "memo": "Recording 5000 units"
   * }
   * }
   * ```
   *
   * To reduce the quantity to `0`, POST the following payload:
   *
   * ```json
   * {
   * "usage": {
   * "quantity": -5000,
   * "memo": "Deducting 5000 units"
   * }
   * }
   * ```
   * The `unit_balance` has a floor of `0`; negative unit balances are never allowed. For example, if the
   * usage balance is 100 and you deduct 200 units, the unit balance would then be `0`, not `-100`.
   *
   * @param subscriptionIdOrReference    Either the Advanced Billing
   *                                                                             subscription ID (integer) or the
   *                                                                             subscription reference (string).
   *                                                                             Important: In cases where a numeric
   *                                                                             string value matches both an existing
   *                                                                             subscription ID and an existing
   *                                                                             subscription reference, the system
   *                                                                             will prioritize the subscription ID
   *                                                                             lookup. For example, if both
   *                                                                             subscription ID 123 and subscription
   *                                                                             reference "123" exist, passing "123"
   *                                                                             will return the subscription with ID
   *                                                                             123.
   * @param componentId                  Either the Advanced Billing id for
   *                                                                             the component or the component's
   *                                                                             handle prefixed by `handle:`
   * @param body
   * @return Response from the API call
   */
  async createUsage(
    subscriptionIdOrReference: CreateUsageSubscriptionIdOrReference,
    componentId: CreateUsageComponentId,
    body?: CreateUsageRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UsageResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionIdOrReference: [
        subscriptionIdOrReference,
        createUsageSubscriptionIdOrReferenceSchema,
      ],
      componentId: [componentId, createUsageComponentIdSchema],
      body: [body, optional(createUsageRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionIdOrReference}/components/${mapped.componentId}/usages.json`;
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(usageResponseSchema, requestOptions);
  }

  /**
   * This request will return a list of the usages associated with a subscription for a particular
   * metered component. This will display the previously recorded components for a subscription.
   *
   * This endpoint is not compatible with quantity-based components.
   *
   * ## Since Date and Until Date Usage
   *
   * Note: The `since_date` and `until_date` attributes each default to midnight on the date specified.
   * For example, in order to list usages for January 20th, you would need to append the following to the
   * URL.
   *
   * ```
   * ?since_date=2016-01-20&until_date=2016-01-21
   * ```
   *
   * ## Read Usage by Handle
   *
   * Use this endpoint to read the previously recorded components for a subscription.  You can now
   * specify either the component id (integer) or the component handle prefixed by "handle:" to specify
   * the unique identifier for the component you are working with.
   *
   * @param subscriptionIdOrReference    Either the Advanced Billing
   *                                                                                 subscription ID (integer) or the
   *                                                                                 subscription reference (string).
   *                                                                                 Important: In cases where a
   *                                                                                 numeric string value matches both
   *                                                                                 an existing subscription ID and an
   *                                                                                 existing subscription reference,
   *                                                                                 the system will prioritize the
   *                                                                                 subscription ID lookup. For
   *                                                                                 example, if both subscription ID
   *                                                                                 123 and subscription reference
   *                                                                                 "123" exist, passing "123" will
   *                                                                                 return the subscription with ID
   *                                                                                 123.
   * @param componentId                  Either the Advanced Billing id
   *                                                                                 for the component or the
   *                                                                                 component's handle prefixed by
   *                                                                                 `handle:`
   * @param sinceId                      Returns usages with an id greater
   *                                                                                 than or equal to the one
   *                                                                                 specified
   * @param maxId                        Returns usages with an id less
   *                                                                                 than or equal to the one
   *                                                                                 specified
   * @param sinceDate                    Returns usages with a created_at
   *                                                                                 date greater than or equal to
   *                                                                                 midnight (12:00 AM) on the date
   *                                                                                 specified.
   * @param untilDate                    Returns usages with a created_at
   *                                                                                 date less than or equal to
   *                                                                                 midnight (12:00 AM) on the date
   *                                                                                 specified.
   * @param page                         Result records are organized in
   *                                                                                 pages. By default, the first page
   *                                                                                 of results is displayed. The page
   *                                                                                 parameter specifies a page number
   *                                                                                 of results to fetch. You can start
   *                                                                                 navigating through the pages to
   *                                                                                 consume the results. You do this
   *                                                                                 by passing in a page parameter.
   *                                                                                 Retrieve the next page by adding ?
   *                                                                                 page=2 to the query string. If
   *                                                                                 there are no results to return,
   *                                                                                 then an empty result set will be
   *                                                                                 returned. Use in query `page=1`.
   * @param perPage                      This parameter indicates how many
   *                                                                                 records to fetch in each request.
   *                                                                                 Default value is 20. The maximum
   *                                                                                 allowed values is 200; any
   *                                                                                 per_page value over 200 will be
   *                                                                                 changed to 200. Use in query
   *                                                                                 `per_page=200`.
   * @return Response from the API call
   */
  async listUsages(
    {
      subscriptionIdOrReference,
      componentId,
      sinceId,
      maxId,
      sinceDate,
      untilDate,
      page,
      perPage,
    }: {
      subscriptionIdOrReference: ListUsagesInputSubscriptionIdOrReference;
      componentId: ListUsagesInputComponentId;
      sinceId?: bigint;
      maxId?: bigint;
      sinceDate?: string;
      untilDate?: string;
      page?: number;
      perPage?: number;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UsageResponse[]>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      subscriptionIdOrReference: [
        subscriptionIdOrReference,
        listUsagesInputSubscriptionIdOrReferenceSchema,
      ],
      componentId: [componentId, listUsagesInputComponentIdSchema],
      sinceId: [sinceId, optional(bigint())],
      maxId: [maxId, optional(bigint())],
      sinceDate: [sinceDate, optional(string())],
      untilDate: [untilDate, optional(string())],
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
    });
    req.query('since_id', mapped.sinceId, commaPrefix);
    req.query('max_id', mapped.maxId, commaPrefix);
    req.query('since_date', mapped.sinceDate, commaPrefix);
    req.query('until_date', mapped.untilDate, commaPrefix);
    req.query('page', mapped.page, commaPrefix);
    req.query('per_page', mapped.perPage, commaPrefix);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionIdOrReference}/components/${mapped.componentId}/usages.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(array(usageResponseSchema), requestOptions);
  }

  /**
   * In order to bill your subscribers on your Events data under the Events-Based Billing feature, the
   * components must be activated for the subscriber.
   *
   * Learn more about the role of activation in the [Events-Based Billing docs](https://maxio.zendesk.
   * com/hc/en-us/articles/24260323329805-Events-Based-Billing-Overview).
   *
   * Use this endpoint to activate an event-based component for a single subscription. Activating an
   * event-based component causes Advanced Billing to bill for events when the subscription is renewed.
   *
   * *Note: it is possible to stream events for a subscription at any time, regardless of component
   * activation status. The activation status only determines if the subscription should be billed for
   * event-based component usage at renewal.*
   *
   * @param subscriptionId  The Advanced Billing id of the subscription
   * @param componentId     The Advanced Billing id of the component
   * @param body
   * @return Response from the API call
   */
  async activateEventBasedComponent(
    subscriptionId: number,
    componentId: number,
    body?: ActivateEventBasedComponent,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      componentId: [componentId, number()],
      body: [body, optional(activateEventBasedComponentSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/event_based_billing/subscriptions/${mapped.subscriptionId}/components/${mapped.componentId}/activate.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.call(requestOptions);
  }

  /**
   * Use this endpoint to deactivate an event-based component for a single subscription. Deactivating the
   * event-based component causes Advanced Billing to ignore related events at subscription renewal.
   *
   * @param subscriptionId  The Advanced Billing id of the subscription
   * @param componentId     The Advanced Billing id of the component
   * @return Response from the API call
   */
  async deactivateEventBasedComponent(
    subscriptionId: number,
    componentId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      componentId: [componentId, number()],
    });
    req.appendTemplatePath`/event_based_billing/subscriptions/${mapped.subscriptionId}/components/${mapped.componentId}/deactivate.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.call(requestOptions);
  }

  /**
   * ## Documentation
   *
   * Events-Based Billing is an evolved form of metered billing that is based on data-rich events
   * streamed in real-time from your system to Advanced Billing.
   *
   * These events can then be transformed, enriched, or analyzed to form the computed totals of usage
   * charges billed to your customers.
   *
   * This API allows you to stream events into the Advanced Billing data ingestion engine.
   *
   * Learn more about the feature in general in the [Events-Based Billing help docs](https://maxio.
   * zendesk.com/hc/en-us/articles/24260323329805-Events-Based-Billing-Overview).
   *
   * ## Record Event
   *
   * Use this endpoint to record a single event.
   *
   * *Note: this endpoint differs from the standard Chargify API endpoints in that the URL subdomain will
   * be `events` and your site subdomain will be included in the URL path. For example:*
   *
   * ```
   * https://events.chargify.com/my-site-subdomain/events/my-stream-api-handle
   * ```
   *
   * @param apiHandle    Identifies the Stream for which the event should be published.
   * @param storeUid     If you've attached your own Keen project as an Advanced Billing event data-
   *                                        store, use this parameter to indicate the data-store.
   * @param body
   * @return Response from the API call
   */
  async recordEvent(
    apiHandle: string,
    storeUid?: string,
    body?: EBBEvent,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST');
    req.baseUrl('ebb');
    const mapped = req.prepareArgs({
      apiHandle: [apiHandle, string()],
      storeUid: [storeUid, optional(string())],
      body: [body, optional(eBBEventSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.query('store_uid', mapped.storeUid, commaPrefix);
    req.json(mapped.body);
    req.appendTemplatePath`/events/${mapped.apiHandle}.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.call(requestOptions);
  }

  /**
   * Use this endpoint to record a collection of events.
   *
   * *Note: this endpoint differs from the standard Chargify API endpoints in that the subdomain will be
   * `events` and your site subdomain will be included in the URL path.*
   *
   * A maximum of 1000 events can be published in a single request. A 422 will be returned if this limit
   * is exceeded.
   *
   * @param apiHandle    Identifies the Stream for which the events should be published.
   * @param storeUid     If you've attached your own Keen project as an Advanced Billing event data-
   *                                   store, use this parameter to indicate the data-store.
   * @param body
   * @return Response from the API call
   */
  async bulkRecordEvents(
    apiHandle: string,
    storeUid?: string,
    body?: EBBEvent[],
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST');
    req.baseUrl('ebb');
    const mapped = req.prepareArgs({
      apiHandle: [apiHandle, string()],
      storeUid: [storeUid, optional(string())],
      body: [body, optional(array(eBBEventSchema))],
    });
    req.header('Content-Type', 'application/json');
    req.query('store_uid', mapped.storeUid, commaPrefix);
    req.json(mapped.body);
    req.appendTemplatePath`/events/${mapped.apiHandle}/bulk.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.call(requestOptions);
  }

  /**
   * This request will list components applied to each subscription.
   *
   * @param page               Result records are organized in pages.
   *                                                                             By default, the first page of results
   *                                                                             is displayed. The page parameter
   *                                                                             specifies a page number of results to
   *                                                                             fetch. You can start navigating
   *                                                                             through the pages to consume the
   *                                                                             results. You do this by passing in a
   *                                                                             page parameter. Retrieve the next page
   *                                                                             by adding ?page=2 to the query string.
   *                                                                             If there are no results to return,
   *                                                                             then an empty result set will be
   *                                                                             returned. Use in query `page=1`.
   * @param perPage            This parameter indicates how many
   *                                                                             records to fetch in each request.
   *                                                                             Default value is 20. The maximum
   *                                                                             allowed values is 200; any per_page
   *                                                                             value over 200 will be changed to 200.
   *                                                                             Use in query `per_page=200`.
   * @param sort               The attribute by which to sort. Use
   *                                                                             in query: `sort=updated_at`.
   * @param direction          Controls the order in which results
   *                                                                             are returned. Use in query
   *                                                                             `direction=asc`.
   * @param filter             Filter to use for List Subscription
   *                                                                             Components For Site operation
   * @param dateField          The type of filter you'd like to
   *                                                                             apply to your search. Use in query:
   *                                                                             `date_field=updated_at`.
   * @param startDate          The start date (format YYYY-MM-DD)
   *                                                                             with which to filter the date_field.
   *                                                                             Returns components with a timestamp at
   *                                                                             or after midnight (12:00:00 AM) in
   *                                                                             your site’s time zone on the date
   *                                                                             specified. Use in query
   *                                                                             `start_date=2011-12-15`.
   * @param startDatetime      The start date and time (format YYYY-
   *                                                                             MM-DD HH:MM:SS) with which to filter
   *                                                                             the date_field. Returns components
   *                                                                             with a timestamp at or after exact
   *                                                                             time provided in query. You can
   *                                                                             specify timezone in query - otherwise
   *                                                                             your site''s time zone will be used.
   *                                                                             If provided, this parameter will be
   *                                                                             used instead of start_date. Use in
   *                                                                             query `start_datetime=2022-07-01 09:00:
   *                                                                             05`.
   * @param endDate            The end date (format YYYY-MM-DD) with
   *                                                                             which to filter the date_field.
   *                                                                             Returns components with a timestamp up
   *                                                                             to and including 11:59:59PM in your
   *                                                                             site’s time zone on the date specified.
   *                                                                             Use in query `end_date=2011-12-16`.
   * @param endDatetime        The end date and time (format YYYY-MM-
   *                                                                             DD HH:MM:SS) with which to filter the
   *                                                                             date_field. Returns components with a
   *                                                                             timestamp at or before exact time
   *                                                                             provided in query. You can specify
   *                                                                             timezone in query - otherwise your
   *                                                                             site''s time zone will be used. If
   *                                                                             provided, this parameter will be used
   *                                                                             instead of end_date. Use in query
   *                                                                             `end_datetime=2022-07-01 09:00:05`.
   * @param subscriptionIds    Allows fetching components allocation
   *                                                                             with matching subscription id based on
   *                                                                             provided ids. Use in query
   *                                                                             `subscription_ids=1,2,3`.
   * @param pricePointIds      Allows fetching components allocation
   *                                                                             only if price point id is present. Use
   *                                                                             in query `price_point_ids=not_null`.
   * @param productFamilyIds   Allows fetching components allocation
   *                                                                             with matching product family id based
   *                                                                             on provided ids. Use in query
   *                                                                             `product_family_ids=1,2,3`.
   * @param include            Allows including additional data in
   *                                                                             the response. Use in query
   *                                                                             `include=subscription,historic_usages`.
   * @return Response from the API call
   */
  async listSubscriptionComponentsForSite(
    {
      page,
      perPage,
      sort,
      direction,
      filter,
      dateField,
      startDate,
      startDatetime,
      endDate,
      endDatetime,
      subscriptionIds,
      pricePointIds,
      productFamilyIds,
      include,
    }: {
      page?: number;
      perPage?: number;
      sort?: ListSubscriptionComponentsSort;
      direction?: SortingDirection;
      filter?: ListSubscriptionComponentsForSiteFilter;
      dateField?: SubscriptionListDateField;
      startDate?: string;
      startDatetime?: string;
      endDate?: string;
      endDatetime?: string;
      subscriptionIds?: number[];
      pricePointIds?: IncludeNotNull;
      productFamilyIds?: number[];
      include?: ListSubscriptionComponentsInclude;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListSubscriptionComponentsResponse>> {
    const req = this.createRequest('GET', '/subscriptions_components.json');
    const mapped = req.prepareArgs({
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      sort: [sort, optional(listSubscriptionComponentsSortSchema)],
      direction: [direction, optional(sortingDirectionSchema)],
      filter: [filter, optional(listSubscriptionComponentsForSiteFilterSchema)],
      dateField: [dateField, optional(subscriptionListDateFieldSchema)],
      startDate: [startDate, optional(string())],
      startDatetime: [startDatetime, optional(string())],
      endDate: [endDate, optional(string())],
      endDatetime: [endDatetime, optional(string())],
      subscriptionIds: [subscriptionIds, optional(array(number()))],
      pricePointIds: [pricePointIds, optional(includeNotNullSchema)],
      productFamilyIds: [productFamilyIds, optional(array(number()))],
      include: [include, optional(listSubscriptionComponentsIncludeSchema)],
    });
    req.query('page', mapped.page, commaPrefix);
    req.query('per_page', mapped.perPage, commaPrefix);
    req.query('sort', mapped.sort, commaPrefix);
    req.query('direction', mapped.direction, commaPrefix);
    req.query('filter', mapped.filter, commaPrefix);
    req.query('date_field', mapped.dateField, commaPrefix);
    req.query('start_date', mapped.startDate, commaPrefix);
    req.query('start_datetime', mapped.startDatetime, commaPrefix);
    req.query('end_date', mapped.endDate, commaPrefix);
    req.query('end_datetime', mapped.endDatetime, commaPrefix);
    req.query('subscription_ids', mapped.subscriptionIds, commaPrefix);
    req.query('price_point_ids', mapped.pricePointIds, commaPrefix);
    req.query('product_family_ids', mapped.productFamilyIds, commaPrefix);
    req.query('include', mapped.include, commaPrefix);
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(
      listSubscriptionComponentsResponseSchema,
      requestOptions
    );
  }
}
