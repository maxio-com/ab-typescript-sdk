/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, RequestOptions } from '../core';
import { ErrorListResponseError } from '../errors/errorListResponseError';
import {
  SingleStringErrorResponseError,
} from '../errors/singleStringErrorResponseError';
import {
  SubscriptionGroupSignupErrorResponseError,
} from '../errors/subscriptionGroupSignupErrorResponseError';
import {
  SubscriptionGroupUpdateErrorResponseError,
} from '../errors/subscriptionGroupUpdateErrorResponseError';
import {
  AddSubscriptionToAGroup,
  addSubscriptionToAGroupSchema,
} from '../models/addSubscriptionToAGroup';
import {
  CreateSubscriptionGroupRequest,
  createSubscriptionGroupRequestSchema,
} from '../models/createSubscriptionGroupRequest';
import {
  DeleteSubscriptionGroupResponse,
  deleteSubscriptionGroupResponseSchema,
} from '../models/deleteSubscriptionGroupResponse';
import {
  FullSubscriptionGroupResponse,
  fullSubscriptionGroupResponseSchema,
} from '../models/fullSubscriptionGroupResponse';
import {
  ListSubscriptionGroupsResponse,
  listSubscriptionGroupsResponseSchema,
} from '../models/listSubscriptionGroupsResponse';
import {
  SubscriptionGroupResponse,
  subscriptionGroupResponseSchema,
} from '../models/subscriptionGroupResponse';
import {
  SubscriptionGroupSignupRequest,
  subscriptionGroupSignupRequestSchema,
} from '../models/subscriptionGroupSignupRequest';
import {
  SubscriptionGroupSignupResponse,
  subscriptionGroupSignupResponseSchema,
} from '../models/subscriptionGroupSignupResponse';
import {
  UpdateSubscriptionGroupRequest,
  updateSubscriptionGroupRequestSchema,
} from '../models/updateSubscriptionGroupRequest';
import { number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class SubscriptionGroupsController extends BaseController {
  /**
   * Create multiple subscriptions at once under the same customer and consolidate them into a
   * subscription group.
   *
   * You must provide one and only one of the `payer_id`/`payer_reference`/`payer_attributes` for the
   * customer attached to the group.
   *
   * You must provide one and only one of the
   * `payment_profile_id`/`credit_card_attributes`/`bank_account_attributes` for the payment profile
   * attached to the group.
   *
   * Only one of the `subscriptions` can have `"primary": true` attribute set.
   *
   * When passing product to a subscription you can use either `product_id` or `product_handle` or
   * `offer_id`. You can also use `custom_price` instead.
   *
   * @param body
   * @return Response from the API call
   */
  async signupWithSubscriptionGroup(
    body?: SubscriptionGroupSignupRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SubscriptionGroupSignupResponse>> {
    const req = this.createRequest('POST', '/subscription_groups/signup.json');
    const mapped = req.prepareArgs({
      body: [body, optional(subscriptionGroupSignupRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(422, SubscriptionGroupSignupErrorResponseError, 'Unprocessable Entity (WebDAV)');
    return req.callAsJson(
      subscriptionGroupSignupResponseSchema,
      requestOptions
    );
  }

  /**
   * Creates a subscription group with given members.
   *
   * @param body
   * @return Response from the API call
   */
  async createSubscriptionGroup(
    body?: CreateSubscriptionGroupRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SubscriptionGroupResponse>> {
    const req = this.createRequest('POST', '/subscription_groups.json');
    const mapped = req.prepareArgs({
      body: [body, optional(createSubscriptionGroupRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(422, SingleStringErrorResponseError, 'Unprocessable Entity (WebDAV)');
    return req.callAsJson(subscriptionGroupResponseSchema, requestOptions);
  }

  /**
   * Returns an array of subscription groups for the site. The response is paginated and will return a
   * `meta` key with pagination information.
   *
   * #### Account Balance Information
   *
   * Account balance information for the subscription groups is not returned by default. If this
   * information is desired, the `include[]=account_balances` parameter must be provided with the request.
   *
   * @param page     Result records are organized in pages. By default, the first page of results is
   *                           displayed. The page parameter specifies a page number of results to fetch. You can start
   *                           navigating through the pages to consume the results. You do this by passing in a page
   *                           parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no
   *                           results to return, then an empty result set will be returned. Use in query `page=1`.
   * @param perPage  This parameter indicates how many records to fetch in each request. Default value is 20.
   *                           The maximum allowed values is 200; any per_page value over 200 will be changed to 200.
   *                           Use in query `per_page=200`.
   * @param include  A list of additional information to include in the response. The following values are
   *                           supported:  - `account_balances`: Account balance information for the subscription
   *                           groups. Use in query: `include[]=account_balances`
   * @return Response from the API call
   */
  async listSubscriptionGroups({
    page,
    perPage,
    include,
  }: {
    page?: number,
    perPage?: number,
    include?: string,
  },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListSubscriptionGroupsResponse>> {
    const req = this.createRequest('GET', '/subscription_groups.json');
    const mapped = req.prepareArgs({
      page: [page, optional(number())],
      perPage: [perPage, optional(number())],
      include: [include, optional(string())],
    });
    req.query('page', mapped.page);
    req.query('per_page', mapped.perPage);
    req.query('include', mapped.include);
    return req.callAsJson(listSubscriptionGroupsResponseSchema, requestOptions);
  }

  /**
   * Use this endpoint to find subscription group details.
   *
   * #### Current Billing Amount in Cents
   *
   * Current billing amount for the subscription group is not returned by default. If this information is
   * desired, the `include[]=current_billing_amount_in_cents` parameter must be provided with the request.
   *
   * @param uid The uid of the subscription group
   * @return Response from the API call
   */
  async readSubscriptionGroup(
    uid: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<FullSubscriptionGroupResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ uid: [uid, string()] });
    req.appendTemplatePath`/subscription_groups/${mapped.uid}.json`;
    return req.callAsJson(fullSubscriptionGroupResponseSchema, requestOptions);
  }

  /**
   * Use this endpoint to update subscription group members.
   * `"member_ids": []` should contain an array of both subscription IDs to set as group members and
   * subscription IDs already present in the groups. Not including them will result in removing them from
   * subscription group. To clean up members, just leave the array empty.
   *
   * @param uid          The uid of the subscription group
   * @param body
   * @return Response from the API call
   */
  async updateSubscriptionGroupMembers(
    uid: string,
    body?: UpdateSubscriptionGroupRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SubscriptionGroupResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      uid: [uid, string()],
      body: [body, optional(updateSubscriptionGroupRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscription_groups/${mapped.uid}.json`;
    req.throwOn(422, SubscriptionGroupUpdateErrorResponseError, 'Unprocessable Entity (WebDAV)');
    return req.callAsJson(subscriptionGroupResponseSchema, requestOptions);
  }

  /**
   * Use this endpoint to delete subscription group.
   * Only groups without members can be deleted
   *
   * @param uid The uid of the subscription group
   * @return Response from the API call
   */
  async deleteSubscriptionGroup(
    uid: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeleteSubscriptionGroupResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ uid: [uid, string()] });
    req.appendTemplatePath`/subscription_groups/${mapped.uid}.json`;
    req.throwOn(404, ApiError, 'Not Found');
    return req.callAsJson(
      deleteSubscriptionGroupResponseSchema,
      requestOptions
    );
  }

  /**
   * Use this endpoint to find subscription group associated with subscription.
   *
   * If the subscription is not in a group endpoint will return 404 code.
   *
   * @param subscriptionId  The Chargify id of the subscription associated with the subscription group
   * @return Response from the API call
   */
  async readSubscriptionGroupBySubscriptionId(
    subscriptionId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<FullSubscriptionGroupResponse>> {
    const req = this.createRequest('GET', '/subscription_groups/lookup.json');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
    });
    req.query('subscription_id', mapped.subscriptionId);
    req.throwOn(404, ApiError, 'Not Found');
    return req.callAsJson(fullSubscriptionGroupResponseSchema, requestOptions);
  }

  /**
   * For sites making use of the [Relationship Billing](https://chargify.zendesk.com/hc/en-
   * us/articles/4407737494171) and [Customer Hierarchy](https://chargify.zendesk.com/hc/en-
   * us/articles/4407746683291) features, it is possible to add existing subscriptions to subscription
   * groups.
   *
   * Passing `group` parameters with a `target` containing a `type` and optional `id` is all that's
   * needed. When the `target` parameter specifies a `"customer"` or `"subscription"` that is already
   * part of a hierarchy, the subscription will become a member of the customer's subscription group.  If
   * the target customer or subscription is not part of a subscription group, a new group will be created
   * and the subscription will become part of the group with the specified target customer set as the
   * responsible payer for the group's subscriptions.
   *
   * **Please Note:** In order to add an existing subscription to a subscription group, it must belong to
   * either the same customer record as the target, or be within the same customer hierarchy.
   *
   * Rather than specifying a customer, the `target` parameter could instead simply have a value of
   * * `"self"` which indicates the subscription will be paid for not by some other customer, but by the
   * subscribing customer,
   * * `"parent"` which indicates the subscription will be paid for by the subscribing customer's parent
   * within a customer hierarchy, or
   * * `"eldest"` which indicates the subscription will be paid for by the root-level customer in the
   * subscribing customer's hierarchy.
   *
   * To create a new subscription into a subscription group, please reference the following:
   * [Create Subscription in a Subscription Group](https://developers.chargify.com/docs/api-
   * docs/d571659cf0f24-create-subscription#subscription-in-a-subscription-group)
   *
   *
   * @param subscriptionId  The Chargify id of the subscription
   * @param body
   * @return Response from the API call
   */
  async createSubscriptionGroupHierarchy(
    subscriptionId: string,
    body?: AddSubscriptionToAGroup,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SubscriptionGroupResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      body: [body, optional(addSubscriptionToAGroupSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/group.json`;
    return req.callAsJson(subscriptionGroupResponseSchema, requestOptions);
  }

  /**
   * For sites making use of the [Relationship Billing](https://chargify.zendesk.com/hc/en-
   * us/articles/4407737494171) and [Customer Hierarchy](https://chargify.zendesk.com/hc/en-
   * us/articles/4407746683291) features, it is possible to remove existing subscription from
   * subscription group.
   *
   * @param subscriptionId  The Chargify id of the subscription
   * @return Response from the API call
   */
  async removeSubscriptionFromGroup(
    subscriptionId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
    });
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/group.json`;
    req.throwOn(404, ApiError, 'Not Found');
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
    return req.call(requestOptions);
  }
}
