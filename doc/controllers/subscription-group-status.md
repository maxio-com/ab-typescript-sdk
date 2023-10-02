# Subscription Group Status

```ts
const subscriptionGroupStatusController = new SubscriptionGroupStatusController(client);
```

## Class Name

`SubscriptionGroupStatusController`

## Methods

* [Cancel Subscriptions in Group](../../doc/controllers/subscription-group-status.md#cancel-subscriptions-in-group)
* [Initiate Delayed Cancellation for Group](../../doc/controllers/subscription-group-status.md#initiate-delayed-cancellation-for-group)
* [Stop Delayed Cancellation for Group](../../doc/controllers/subscription-group-status.md#stop-delayed-cancellation-for-group)
* [Reactivate Subscription Group](../../doc/controllers/subscription-group-status.md#reactivate-subscription-group)


# Cancel Subscriptions in Group

This endpoint will immediately cancel all subscriptions within the specified group. The group is identified by it's `uid` passed in the URL. To successfully cancel the group, the primary subscription must be on automatic billing. The group members as well must be on automatic billing or they must be prepaid.

In order to cancel a subscription group while also charging for any unbilled usage on metered or prepaid components, the `charge_unbilled_usage=true` parameter must be included in the request.

```ts
async cancelSubscriptionsInGroup(
  uid: string,
  body?: CancelGroupedSubscriptionsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string` | Template, Required | The uid of the subscription group |
| `body` | [`CancelGroupedSubscriptionsRequest \| undefined`](../../doc/models/cancel-grouped-subscriptions-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const uid = 'uid0';

const body: CancelGroupedSubscriptionsRequest = {
  chargeUnbilledUsage: true,
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await subscriptionGroupStatusController.cancelSubscriptionsInGroup(
  uid,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |


# Initiate Delayed Cancellation for Group

This endpoint will schedule all subscriptions within the specified group to be canceled at the end of their billing period. The group is identified by it's uid passed in the URL.

All subscriptions in the group must be on automatic billing in order to successfully cancel them, and the group must not be in a "past_due" state.

```ts
async initiateDelayedCancellationForGroup(
  uid: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string` | Template, Required | The uid of the subscription group |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const uid = 'uid0';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await subscriptionGroupStatusController.initiateDelayedCancellationForGroup(uid);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |


# Stop Delayed Cancellation for Group

Removing the delayed cancellation on a subscription group will ensure that the subscriptions do not get canceled at the end of the period. The request will reset the `cancel_at_end_of_period` flag to false on each member in the group.

```ts
async stopDelayedCancellationForGroup(
  uid: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string` | Template, Required | The uid of the subscription group |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const uid = 'uid0';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await subscriptionGroupStatusController.stopDelayedCancellationForGroup(uid);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |


# Reactivate Subscription Group

This endpoint will attempt to reactivate or resume a cancelled subscription group. Upon reactivation, any canceled invoices created after the beginning of the primary subscription's billing period will be reopened and payment will be attempted on them. If the subscription group is being reactivated (as opposed to resumed), new charges will also be assessed for the new billing period.

Whether a subscription group is reactivated (a new billing period is created) or resumed (the current billing period is respected) will depend on the parameters that are sent with the request as well as the date of the request relative to the primary subscription's period.

## Reactivating within the current period

If a subscription group is cancelled and reactivated within the primary subscription's current period, we can choose to either start a new billing period or maintain the existing one. If we want to maintain the existing billing period the `resume=true` option must be passed in request parameters.

An exception to the above are subscriptions that are on calendar billing. These subscriptions cannot be reactivated within the current period. If the `resume=true` option is not passed the request will return an error.

The `resume_members` option is ignored in this case. All eligible group members will be automatically resumed.

## Reactivating beyond the current period

In this case, a subscription group can only be reactivated with a new billing period. If the `resume=true` option is passed it will be ignored.

Member subscriptions can have billing periods that are longer than the primary (e.g. a monthly primary with annual group members). If the primary subscription in a group cannot be reactivated within the current period, but other group members can be, passing `resume_members=true` will resume the existing billing period for eligible group members. The primary subscription will begin a new billing period.

For calendar billing subscriptions, the new billing period created will be a partial one, spanning from the date of reactivation to the next corresponding calendar renewal date.

```ts
async reactivateSubscriptionGroup(
  uid: string,
  body?: ReactivateSubscriptionGroupRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReactivateSubscriptionGroupResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string` | Template, Required | The uid of the subscription group |
| `body` | [`ReactivateSubscriptionGroupRequest \| undefined`](../../doc/models/reactivate-subscription-group-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReactivateSubscriptionGroupResponse`](../../doc/models/reactivate-subscription-group-response.md)

## Example Usage

```ts
const uid = 'uid0';

const body: ReactivateSubscriptionGroupRequest = {
  resume: true,
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await subscriptionGroupStatusController.reactivateSubscriptionGroup(
  uid,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "uid": "grp_93wgm89cbjkw6",
  "scheme": 1,
  "customer_id": 1,
  "payment_profile_id": 1,
  "subscription_ids": [
    1,
    2
  ],
  "primary_subscription_id": 1,
  "next_assessment_at": "2020-06-18T12:00:00-04:00",
  "state": "active",
  "cancel_at_end_of_period": false
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |

