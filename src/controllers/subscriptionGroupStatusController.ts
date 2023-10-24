/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { ErrorListResponseError } from '../errors/errorListResponseError';
import {
  CancelGroupedSubscriptionsRequest,
  cancelGroupedSubscriptionsRequestSchema,
} from '../models/cancelGroupedSubscriptionsRequest';
import {
  ReactivateSubscriptionGroupRequest,
  reactivateSubscriptionGroupRequestSchema,
} from '../models/reactivateSubscriptionGroupRequest';
import {
  ReactivateSubscriptionGroupResponse,
  reactivateSubscriptionGroupResponseSchema,
} from '../models/reactivateSubscriptionGroupResponse';
import { optional, string } from '../schema';
import { BaseController } from './baseController';

export class SubscriptionGroupStatusController extends BaseController {
  /**
   * This endpoint will immediately cancel all subscriptions within the specified group. The group is
   * identified by it's `uid` passed in the URL. To successfully cancel the group, the primary
   * subscription must be on automatic billing. The group members as well must be on automatic billing or
   * they must be prepaid.
   *
   * In order to cancel a subscription group while also charging for any unbilled usage on metered or
   * prepaid components, the `charge_unbilled_usage=true` parameter must be included in the request.
   *
   * @param uid          The uid of the subscription group
   * @param body
   * @return Response from the API call
   */
  async cancelSubscriptionsInGroup(
    uid: string,
    body?: CancelGroupedSubscriptionsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      uid: [uid, string()],
      body: [body, optional(cancelGroupedSubscriptionsRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscription_groups/${mapped.uid}/cancel.json`;
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
    return req.call(requestOptions);
  }

  /**
   * This endpoint will schedule all subscriptions within the specified group to be canceled at the end
   * of their billing period. The group is identified by it's uid passed in the URL.
   *
   * All subscriptions in the group must be on automatic billing in order to successfully cancel them,
   * and the group must not be in a "past_due" state.
   *
   * @param uid The uid of the subscription group
   * @return Response from the API call
   */
  async initiateDelayedCancellationForGroup(
    uid: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({ uid: [uid, string()] });
    req.appendTemplatePath`/subscription_groups/${mapped.uid}/delayed_cancel.json`;
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
    return req.call(requestOptions);
  }

  /**
   * Removing the delayed cancellation on a subscription group will ensure that the subscriptions do not
   * get canceled at the end of the period. The request will reset the `cancel_at_end_of_period` flag to
   * false on each member in the group.
   *
   * @param uid The uid of the subscription group
   * @return Response from the API call
   */
  async stopDelayedCancellationForGroup(
    uid: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ uid: [uid, string()] });
    req.appendTemplatePath`/subscription_groups/${mapped.uid}/delayed_cancel.json`;
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
    return req.call(requestOptions);
  }

  /**
   * This endpoint will attempt to reactivate or resume a cancelled subscription group. Upon reactivation,
   * any canceled invoices created after the beginning of the primary subscription's billing period will
   * be reopened and payment will be attempted on them. If the subscription group is being reactivated
   * (as opposed to resumed), new charges will also be assessed for the new billing period.
   *
   * Whether a subscription group is reactivated (a new billing period is created) or resumed (the
   * current billing period is respected) will depend on the parameters that are sent with the request as
   * well as the date of the request relative to the primary subscription's period.
   *
   * ## Reactivating within the current period
   *
   * If a subscription group is cancelled and reactivated within the primary subscription's current
   * period, we can choose to either start a new billing period or maintain the existing one. If we want
   * to maintain the existing billing period the `resume=true` option must be passed in request
   * parameters.
   *
   * An exception to the above are subscriptions that are on calendar billing. These subscriptions cannot
   * be reactivated within the current period. If the `resume=true` option is not passed the request will
   * return an error.
   *
   * The `resume_members` option is ignored in this case. All eligible group members will be
   * automatically resumed.
   *
   *
   * ## Reactivating beyond the current period
   *
   * In this case, a subscription group can only be reactivated with a new billing period. If the
   * `resume=true` option is passed it will be ignored.
   *
   * Member subscriptions can have billing periods that are longer than the primary (e.g. a monthly
   * primary with annual group members). If the primary subscription in a group cannot be reactivated
   * within the current period, but other group members can be, passing `resume_members=true` will resume
   * the existing billing period for eligible group members. The primary subscription will begin a new
   * billing period.
   *
   * For calendar billing subscriptions, the new billing period created will be a partial one, spanning
   * from the date of reactivation to the next corresponding calendar renewal date.
   *
   * @param uid          The uid of the subscription group
   * @param body
   * @return Response from the API call
   */
  async reactivateSubscriptionGroup(
    uid: string,
    body?: ReactivateSubscriptionGroupRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ReactivateSubscriptionGroupResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      uid: [uid, string()],
      body: [body, optional(reactivateSubscriptionGroupRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscription_groups/${mapped.uid}/reactivate.json`;
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
    return req.callAsJson(
      reactivateSubscriptionGroupResponseSchema,
      requestOptions
    );
  }
}
