/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, commaPrefix, RequestOptions } from '../core';
import {
  CancellationRequest,
  cancellationRequestSchema,
} from '../models/cancellationRequest';
import {
  DelayedCancellationResponse,
  delayedCancellationResponseSchema,
} from '../models/delayedCancellationResponse';
import { PauseRequest, pauseRequestSchema } from '../models/pauseRequest';
import {
  ReactivateSubscriptionRequest,
  reactivateSubscriptionRequestSchema,
} from '../models/reactivateSubscriptionRequest';
import {
  RenewalPreviewRequest,
  renewalPreviewRequestSchema,
} from '../models/renewalPreviewRequest';
import {
  RenewalPreviewResponse,
  renewalPreviewResponseSchema,
} from '../models/renewalPreviewResponse';
import {
  ResumptionCharge,
  resumptionChargeSchema,
} from '../models/resumptionCharge';
import {
  SubscriptionResponse,
  subscriptionResponseSchema,
} from '../models/subscriptionResponse';
import { number, optional } from '../schema';
import { BaseController } from './baseController';
import { ApiError } from '@apimatic/core';
import { ErrorListResponseError } from '../errors/errorListResponseError';

export class SubscriptionStatusController extends BaseController {
  /**
   * Advanced Billing offers the ability to retry collecting the balance due on a past due Subscription
   * without waiting for the next scheduled attempt.
   *
   * ## Successful Reactivation
   *
   * The response will be `200 OK` with the updated Subscription.
   *
   * ## Failed Reactivation
   *
   * The response will be `422 "Unprocessable Entity`.
   *
   * @param subscriptionId  The Chargify id of the subscription
   * @return Response from the API call
   */
  async retrySubscription(
    subscriptionId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SubscriptionResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
    });
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/retry.json`;
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(subscriptionResponseSchema, requestOptions);
  }

  /**
   * The DELETE action causes the cancellation of the Subscription. This means, the method sets the
   * Subscription state to "canceled".
   *
   * @param subscriptionId  The Chargify id of the subscription
   * @param body
   * @return Response from the API call
   */
  async cancelSubscription(
    subscriptionId: number,
    body?: CancellationRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SubscriptionResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      body: [body, optional(cancellationRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.throwOn(
      422,
      ApiError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(subscriptionResponseSchema, requestOptions);
  }

  /**
   * Resume a paused (on-hold) subscription. If the normal next renewal date has not passed, the
   * subscription will return to active and will renew on that date.  Otherwise, it will behave like a
   * reactivation, setting the billing date to 'now' and charging the subscriber.
   *
   * @param subscriptionId                        The Chargify id of the subscription
   * @param calendarBillingResumptionCharge       (For calendar billing subscriptions only) The
   *                                                                  way that the resumed subscription's charge should
   *                                                                  be handled
   * @return Response from the API call
   */
  async resumeSubscription(
    subscriptionId: number,
    calendarBillingResumptionCharge?: ResumptionCharge,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SubscriptionResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      calendarBillingResumptionCharge: [
        calendarBillingResumptionCharge,
        optional(resumptionChargeSchema),
      ],
    });
    req.query(
      "calendar_billing['resumption_charge']",
      mapped.calendarBillingResumptionCharge,
      commaPrefix
    );
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/resume.json`;
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(subscriptionResponseSchema, requestOptions);
  }

  /**
   * This will place the subscription in the on_hold state and it will not renew.
   *
   * ## Limitations
   *
   * You may not place a subscription on hold if the `next_billing` date is within 24 hours.
   *
   * @param subscriptionId  The Chargify id of the subscription
   * @param body
   * @return Response from the API call
   */
  async pauseSubscription(
    subscriptionId: number,
    body?: PauseRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SubscriptionResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      body: [body, optional(pauseRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/hold.json`;
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(subscriptionResponseSchema, requestOptions);
  }

  /**
   * Once a subscription has been paused / put on hold, you can update the date which was specified to
   * automatically resume the subscription.
   *
   * To update a subscription's resume date, use this method to change or update the
   * `automatically_resume_at` date.
   *
   * ### Remove the resume date
   *
   * Alternately, you can change the `automatically_resume_at` to `null` if you would like the
   * subscription to not have a resume date.
   *
   * @param subscriptionId  The Chargify id of the subscription
   * @param body
   * @return Response from the API call
   */
  async updateAutomaticSubscriptionResumption(
    subscriptionId: number,
    body?: PauseRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SubscriptionResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      body: [body, optional(pauseRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/hold.json`;
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(subscriptionResponseSchema, requestOptions);
  }

  /**
   * Advanced Billing offers the ability to reactivate a previously canceled subscription. For details on
   * how the reactivation works, and how to reactivate subscriptions through the application, see
   * [reactivation](https://maxio.zendesk.com/hc/en-us/articles/24252109503629-Reactivating-and-Resuming).
   *
   * **Please note: The term
   * "resume" is used also during another process in Advanced Billing. This occurs when an on-hold
   * subscription is "resumed". This returns the subscription to an active state.**
   *
   * + The response returns the subscription object in the `active` or `trialing` state.
   * + The `canceled_at` and `cancellation_message` fields do not have values.
   * + The method works for "Canceled" or "Trial Ended" subscriptions.
   * + It will not work for items not marked as "Canceled", "Unpaid", or "Trial Ended".
   *
   * ## Resume the current billing period for a subscription
   *
   * A subscription is considered "resumable" if you are attempting to reactivate within the billing
   * period the subscription was canceled in.
   *
   * A resumed subscription's billing date remains the same as before it was canceled. In other words, it
   * does not start a new billing period. Payment may or may not be collected for a resumed subscription,
   * depending on whether or not the subscription had a balance when it was canceled (for example, if it
   * was canceled because of dunning).
   *
   * Consider a subscription which was created on June 1st, and would renew on July 1st. The subscription
   * is then canceled on June 15.
   *
   * If a reactivation with `resume: true` were attempted _before_ what would have been the next billing
   * date of July 1st, then Advanced Billing would resume the subscription.
   *
   * If a reactivation with `resume: true` were attempted _after_ what would have been the next billing
   * date of July 1st, then Advanced Billing would not resume the subscription, and instead it would be
   * reactivated with a new billing period.
   *
   * | Canceled | Reactivation | Resumable? |
   * |---|---|---|
   * | Jun 15 | June 28 | Yes |
   * | Jun 15 | July 2 | No |
   *
   * ## Reactivation Scenarios
   *
   * ### Reactivating Canceled Subscription While Preserving Balance
   *
   * + Given you have a product that costs $20
   * + Given you have a canceled subscription to the $20 product
   * + 1 charge should exist for $20
   * + 1 payment should exist for $20
   * + When the subscription has canceled due to dunning, it retained a negative balance of $20
   *
   * #### Results
   *
   * The resulting charges upon reactivation will be:
   * + 1 charge for $20 for the new product
   * + 1 charge for $20 for the balance due
   * + Total charges = $40
   *
   * + The subscription will transition to active
   * + The subscription balance will be zero
   *
   * ### Reactivating a Canceled Subscription With Coupon
   *
   * + Given you have a canceled subscription
   * + It has no current period defined
   * + You have a coupon code "EARLYBIRD"
   * + The coupon is set to recur for 6 periods
   *
   * PUT request sent to:
   * `https://acme.chargify.com/subscriptions/{subscription_id}/reactivate.json?coupon_code=EARLYBIRD`
   *
   * #### Results
   *
   * + The subscription will transition to active
   * + The subscription should have applied a coupon with code "EARLYBIRD"
   *
   * ### Reactivating Canceled Subscription With a Trial, Without the include_trial Flag
   *
   * + Given you have a canceled subscription
   * + The product associated with the subscription has a trial
   *
   * + PUT request to
   * `https://acme.chargify.com/subscriptions/{subscription_id}/reactivate.json`
   *
   *
   * #### Results
   * + The subscription will transition to active
   *
   * ### Reactivating Canceled Subscription With Trial, With the include_trial Flag
   *
   * + Given you have a canceled subscription
   * + The product associated with the subscription has a trial
   *
   * + Send a PUT request to `https://acme.chargify.com/subscriptions/{subscription_id}/reactivate.json?
   * include_trial=1`
   *
   *
   * #### Results
   *
   * + The subscription will transition to trialing
   *
   * ### Reactivating Trial Ended Subscription
   *
   * + Given you have a trial_ended subscription
   * + Send a PUT request to `https://acme.chargify.com/subscriptions/{subscription_id}/reactivate.json`
   *
   * #### Results
   *
   * + The subscription will transition to active
   *
   * ### Resuming a Canceled Subscription
   *
   * + Given you have a `canceled` subscription and it is resumable
   * + Send a PUT request to `https://acme.chargify.com/subscriptions/{subscription_id}/reactivate.json?
   * resume=true`
   *
   * #### Results
   *
   * + The subscription will transition to active
   * + The next billing date should not have changed
   *
   * ### Attempting to resume a subscription which is not resumable
   *
   * + Given you have a `canceled` subscription, and it is not resumable
   * + Send a PUT request to `https://acme.chargify.com/subscriptions/{subscription_id}/reactivate.json?
   * resume=true`
   *
   * #### Results
   *
   * + The subscription will transition to active, with a new billing period.
   *
   * ### Attempting to resume but not reactivate a subscription which is not resumable
   *
   * + Given you have a `canceled` subscription, and it is not resumable
   * + Send a PUT request to `https://acme.chargify.com/subscriptions/{subscription_id}/reactivate.json?
   * resume[require_resume]=true`
   * + The response status should be "422 UNPROCESSABLE ENTITY"
   * + The subscription should be canceled with the following response
   * ```
   * {
   * "errors": ["Request was 'resume only', but this subscription cannot be resumed."]
   * }
   * ```
   *
   * #### Results
   *
   * + The subscription should remain `canceled`
   * + The next billing date should not have changed
   *
   * ### Resuming Subscription Which Was Trialing
   *
   * + Given you have a `trial_ended` subscription, and it is resumable
   * + And the subscription was canceled in the middle of a trial
   * + And there is still time left on the trial
   * + Send a PUT request to `https://acme.chargify.com/subscriptions/{subscription_id}/reactivate.json?
   * resume=true`
   *
   * #### Results
   *
   * + The subscription will transition to trialing
   * + The next billing date should not have changed
   *
   * ### Resuming Subscription Which Was trial_ended
   *
   * + Given you have a `trial_ended` subscription, and it is resumable
   * + Send a PUT request to `https://acme.chargify.com/subscriptions/{subscription_id}/reactivate.json?
   * resume=true`
   *
   * #### Results
   *
   * + The subscription will transition to active
   * + The next billing date should not have changed
   * + Any product-related charges should have been collected
   *
   * @param subscriptionId  The Chargify id of the subscription
   * @param body
   * @return Response from the API call
   */
  async reactivateSubscription(
    subscriptionId: number,
    body?: ReactivateSubscriptionRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SubscriptionResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      body: [body, optional(reactivateSubscriptionRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/reactivate.json`;
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(subscriptionResponseSchema, requestOptions);
  }

  /**
   * Advanced Billing offers the ability to cancel a subscription at the end of the current billing
   * period. This period is set by its current product.
   *
   * Requesting to cancel the subscription at the end of the period sets the `cancel_at_end_of_period`
   * flag to true.
   *
   * Note that you cannot set `cancel_at_end_of_period` at subscription creation, or if the subscription
   * is past due.
   *
   * @param subscriptionId  The Chargify id of the subscription
   * @param body
   * @return Response from the API call
   */
  async initiateDelayedCancellation(
    subscriptionId: number,
    body?: CancellationRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DelayedCancellationResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      body: [body, optional(cancellationRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/delayed_cancel.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(delayedCancellationResponseSchema, requestOptions);
  }

  /**
   * Removing the delayed cancellation on a subscription will ensure that it doesn't get canceled at the
   * end of the period that it is in. The request will reset the `cancel_at_end_of_period` flag to
   * `false`.
   *
   * This endpoint is idempotent. If the subscription was not set to cancel in the future, removing the
   * delayed cancellation has no effect and the call will be successful.
   *
   * @param subscriptionId  The Chargify id of the subscription
   * @return Response from the API call
   */
  async cancelDelayedCancellation(
    subscriptionId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DelayedCancellationResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
    });
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/delayed_cancel.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(delayedCancellationResponseSchema, requestOptions);
  }

  /**
   * If a subscription is currently in dunning, the subscription will be set to active and the active
   * Dunner will be resolved.
   *
   * @param subscriptionId  The Chargify id of the subscription
   * @return Response from the API call
   */
  async cancelDunning(
    subscriptionId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SubscriptionResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
    });
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/cancel_dunning.json`;
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(subscriptionResponseSchema, requestOptions);
  }

  /**
   * The Chargify API allows you to preview a renewal by posting to the renewals endpoint. Renewal
   * Preview is an object representing a subscription’s next assessment. You can retrieve it to see a
   * snapshot of how much your customer will be charged on their next renewal.
   *
   * The "Next Billing" amount and "Next Billing" date are already represented in the UI on each
   * Subscriber's Summary. For more information, please see our documentation [here](https://maxio.
   * zendesk.com/hc/en-us/articles/24252493695757-Subscriber-Interface-Overview).
   *
   * ## Optional Component Fields
   *
   * This endpoint is particularly useful due to the fact that it will return the computed billing amount
   * for the base product and the components which are in use by a subscriber.
   *
   * By default, the preview will include billing details for all components _at their **current**
   * quantities_. This means:
   *
   * * Current `allocated_quantity` for quantity-based components
   * * Current enabled/disabled status for on/off components
   * * Current metered usage `unit_balance` for metered components
   * * Current metric quantity value for events recorded thus far for events-based components
   *
   * In the above statements, "current" means the quantity or value as of the call to the renewal preview
   * endpoint. We do not predict end-of-period values for components, so metered or events-based usage
   * may be less than it will eventually be at the end of the period.
   *
   * Optionally, **you may provide your own custom quantities** for any component to see a billing
   * preview for non-current quantities. This is accomplished by sending a request body with data under
   * the `components` key. See the request body documentation below.
   *
   * ## Subscription Side Effects
   *
   * You can request a `POST` to obtain this data from the endpoint without any side effects. Plain and
   * simple, this will preview data, not log any changes against a subscription.
   *
   * @param subscriptionId  The Chargify id of the subscription
   * @param body
   * @return Response from the API call
   */
  async previewRenewal(
    subscriptionId: number,
    body?: RenewalPreviewRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RenewalPreviewResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, number()],
      body: [body, optional(renewalPreviewRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/renewals/preview.json`;
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(renewalPreviewResponseSchema, requestOptions);
  }
}
