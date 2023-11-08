# Subscription Groups

```ts
const subscriptionGroupsController = new SubscriptionGroupsController(client);
```

## Class Name

`SubscriptionGroupsController`

## Methods

* [Signup With Subscription Group](../../doc/controllers/subscription-groups.md#signup-with-subscription-group)
* [Create Subscription Group](../../doc/controllers/subscription-groups.md#create-subscription-group)
* [List Subscription Groups](../../doc/controllers/subscription-groups.md#list-subscription-groups)
* [Read Subscription Group](../../doc/controllers/subscription-groups.md#read-subscription-group)
* [Update Subscription Group Members](../../doc/controllers/subscription-groups.md#update-subscription-group-members)
* [Delete Subscription Group](../../doc/controllers/subscription-groups.md#delete-subscription-group)
* [Read Subscription Group by Subscription Id](../../doc/controllers/subscription-groups.md#read-subscription-group-by-subscription-id)
* [Create Subscription Group Hierarchy](../../doc/controllers/subscription-groups.md#create-subscription-group-hierarchy)
* [Remove Subscription From Group](../../doc/controllers/subscription-groups.md#remove-subscription-from-group)


# Signup With Subscription Group

Create multiple subscriptions at once under the same customer and consolidate them into a subscription group.

You must provide one and only one of the `payer_id`/`payer_reference`/`payer_attributes` for the customer attached to the group.

You must provide one and only one of the `payment_profile_id`/`credit_card_attributes`/`bank_account_attributes` for the payment profile attached to the group.

Only one of the `subscriptions` can have `"primary": true` attribute set.

When passing product to a subscription you can use either `product_id` or `product_handle` or `offer_id`. You can also use `custom_price` instead.

```ts
async signupWithSubscriptionGroup(
  body?: SubscriptionGroupSignupRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SubscriptionGroupSignupResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SubscriptionGroupSignupRequest \| undefined`](../../doc/models/subscription-group-signup-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SubscriptionGroupSignupResponse`](../../doc/models/subscription-group-signup-response.md)

## Example Usage

```ts
const body: SubscriptionGroupSignupRequest = {
  subscriptionGroup: {
    subscriptions: [
      {
        productId: 11,
        primary: true,
      },
      {
        productId: 12,
      },
      {
        productId: 13,
      }
    ],
    paymentProfileId: 123,
    payerId: 123,
  },
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await subscriptionGroupsController.signupWithSubscriptionGroup(body);
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
| 422 | Unprocessable Entity (WebDAV) | [`SubscriptionGroupSignupErrorResponseError`](../../doc/models/subscription-group-signup-error-response-error.md) |


# Create Subscription Group

Creates a subscription group with given members.

```ts
async createSubscriptionGroup(
  body?: CreateSubscriptionGroupRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SubscriptionGroupResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateSubscriptionGroupRequest \| undefined`](../../doc/models/create-subscription-group-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SubscriptionGroupResponse`](../../doc/models/subscription-group-response.md)

## Example Usage

```ts
const body: CreateSubscriptionGroupRequest = {
  subscriptionGroup: {
    subscriptionId: 1,
    memberIds: [
      2,
      3,
      4
    ],
  },
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await subscriptionGroupsController.createSubscriptionGroup(body);
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
  "subscription_group": {
    "customer_id": 1,
    "payment_profile": {
      "id": 1,
      "first_name": "t",
      "last_name": "t",
      "masked_card_number": "XXXX-XXXX-XXXX-1"
    },
    "payment_collection_method": "automatic",
    "subscription_ids": [
      1,
      2
    ],
    "created_at": "2021-01-21T05:47:38-05:00"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`SingleStringErrorResponseError`](../../doc/models/single-string-error-response-error.md) |


# List Subscription Groups

Returns an array of subscription groups for the site. The response is paginated and will return a `meta` key with pagination information.

#### Account Balance Information

Account balance information for the subscription groups is not returned by default. If this information is desired, the `include[]=account_balances` parameter must be provided with the request.

```ts
async listSubscriptionGroups(
  page?: number,
  perPage?: number,
  include?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListSubscriptionGroupsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `number \| undefined` | Query, Optional | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`.<br>**Default**: `1`<br>**Constraints**: `>= 1` |
| `perPage` | `number \| undefined` | Query, Optional | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`.<br>**Default**: `20`<br>**Constraints**: `<= 200` |
| `include` | `string \| undefined` | Query, Optional | A list of additional information to include in the response. The following values are supported:<br><br>- `account_balances`: Account balance information for the subscription groups. Use in query: `include[]=account_balances` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListSubscriptionGroupsResponse`](../../doc/models/list-subscription-groups-response.md)

## Example Usage

```ts
const collect = {
  page: 2,
  perPage: 50
}
try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await subscriptionGroupsController.listSubscriptionGroups(collect);
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
  "subscription_groups": [
    {
      "uid": "grp_952mvqcnk53wq",
      "scheme": 1,
      "customer_id": 88498000,
      "payment_profile_id": 93063018,
      "subscription_ids": [
        42768907,
        82370782
      ],
      "primary_subscription_id": 69844395,
      "next_assessment_at": "Sun, 09 Aug 2020 15:59:06 EDT -04:00",
      "state": "active",
      "cancel_at_end_of_period": false,
      "account_balances": {
        "prepayments": {
          "balance_in_cents": 0
        },
        "service_credits": {
          "balance_in_cents": 0
        },
        "pending_discounts": {
          "balance_in_cents": 0
        }
      }
    }
  ],
  "meta": {
    "current_page": 1,
    "total_count": 1
  }
}
```


# Read Subscription Group

Use this endpoint to find subscription group details.

#### Current Billing Amount in Cents

Current billing amount for the subscription group is not returned by default. If this information is desired, the `include[]=current_billing_amount_in_cents` parameter must be provided with the request.

```ts
async readSubscriptionGroup(
  uid: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FullSubscriptionGroupResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string` | Template, Required | The uid of the subscription group |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FullSubscriptionGroupResponse`](../../doc/models/full-subscription-group-response.md)

## Example Usage

```ts
const uid = 'uid0';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await subscriptionGroupsController.readSubscriptionGroup(uid);
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
  "uid": "grp_939ktzq8v4477",
  "scheme": 1,
  "customer_id": 400,
  "payment_profile_id": 567,
  "subscription_ids": [
    101,
    102,
    103
  ],
  "primary_subscription_id": 101,
  "next_assessment_at": "2020-08-01T14:00:00-05:00",
  "state": "active",
  "cancel_at_end_of_period": false,
  "current_billing_amount_in_cents": 11500,
  "customer": {
    "first_name": "Mark",
    "last_name": "Wannabewahlberg",
    "organization": "The Funky Bunch",
    "email": "markymark@example.com",
    "reference": "4c92223b-bc16-4d0d-87ff-b177a89a2655"
  },
  "account_balances": {
    "prepayments": {
      "balance_in_cents": 0
    },
    "service_credits": {
      "balance_in_cents": 0
    },
    "open_invoices": {
      "balance_in_cents": 4400
    },
    "pending_discounts": {
      "balance_in_cents": 0
    }
  }
}
```


# Update Subscription Group Members

Use this endpoint to update subscription group members.
`"member_ids": []` should contain an array of both subscription IDs to set as group members and subscription IDs already present in the groups. Not including them will result in removing them from subscription group. To clean up members, just leave the array empty.

```ts
async updateSubscriptionGroupMembers(
  uid: string,
  body?: UpdateSubscriptionGroupRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SubscriptionGroupResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string` | Template, Required | The uid of the subscription group |
| `body` | [`UpdateSubscriptionGroupRequest \| undefined`](../../doc/models/update-subscription-group-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SubscriptionGroupResponse`](../../doc/models/subscription-group-response.md)

## Example Usage

```ts
const uid = 'uid0';

const body: UpdateSubscriptionGroupRequest = {
  subscriptionGroup: {
    memberIds: [
      1,
      2,
      3
    ],
  },
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await subscriptionGroupsController.updateSubscriptionGroupMembers(
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
  "subscription_group": {
    "customer_id": 1,
    "payment_profile": {
      "id": 1,
      "first_name": "t",
      "last_name": "t",
      "masked_card_number": "XXXX-XXXX-XXXX-1"
    },
    "payment_collection_method": "automatic",
    "subscription_ids": [
      1
    ],
    "created_at": "2021-01-21T05:47:38-05:00"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`SubscriptionGroupUpdateErrorResponseError`](../../doc/models/subscription-group-update-error-response-error.md) |


# Delete Subscription Group

Use this endpoint to delete subscription group.
Only groups without members can be deleted

```ts
async deleteSubscriptionGroup(
  uid: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeleteSubscriptionGroupResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string` | Template, Required | The uid of the subscription group |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeleteSubscriptionGroupResponse`](../../doc/models/delete-subscription-group-response.md)

## Example Usage

```ts
const uid = 'uid0';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await subscriptionGroupsController.deleteSubscriptionGroup(uid);
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
  "uid": "grp_99w5xp9y5xycy",
  "deleted": true
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | Not Found | `ApiError` |


# Read Subscription Group by Subscription Id

Use this endpoint to find subscription group associated with subscription.

If the subscription is not in a group endpoint will return 404 code.

```ts
async readSubscriptionGroupBySubscriptionId(
  subscriptionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FullSubscriptionGroupResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Query, Required | The Chargify id of the subscription associated with the subscription group |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FullSubscriptionGroupResponse`](../../doc/models/full-subscription-group-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await subscriptionGroupsController.readSubscriptionGroupBySubscriptionId(subscriptionId);
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
  "uid": "grp_939ktzq8v4477",
  "scheme": 1,
  "customer_id": 400,
  "payment_profile_id": 567,
  "subscription_ids": [
    101,
    102,
    103
  ],
  "primary_subscription_id": 101,
  "next_assessment_at": "2020-08-01T14:00:00-05:00",
  "state": "active",
  "cancel_at_end_of_period": false,
  "customer": {
    "first_name": "Mark",
    "last_name": "Wannabewahlberg",
    "organization": "The Funky Bunch",
    "email": "markymark@example.com",
    "reference": "4c92223b-bc16-4d0d-87ff-b177a89a2655"
  },
  "account_balances": {
    "prepayments": {
      "balance_in_cents": 0
    },
    "service_credits": {
      "balance_in_cents": 0
    },
    "open_invoices": {
      "balance_in_cents": 4400
    },
    "pending_discounts": {
      "balance_in_cents": 0
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | Not Found | `ApiError` |


# Create Subscription Group Hierarchy

For sites making use of the [Relationship Billing](https://chargify.zendesk.com/hc/en-us/articles/4407737494171) and [Customer Hierarchy](https://chargify.zendesk.com/hc/en-us/articles/4407746683291) features, it is possible to add existing subscriptions to subscription groups.

Passing `group` parameters with a `target` containing a `type` and optional `id` is all that's needed. When the `target` parameter specifies a `"customer"` or `"subscription"` that is already part of a hierarchy, the subscription will become a member of the customer's subscription group.  If the target customer or subscription is not part of a subscription group, a new group will be created and the subscription will become part of the group with the specified target customer set as the responsible payer for the group's subscriptions.

**Please Note:** In order to add an existing subscription to a subscription group, it must belong to either the same customer record as the target, or be within the same customer hierarchy.

Rather than specifying a customer, the `target` parameter could instead simply have a value of

* `"self"` which indicates the subscription will be paid for not by some other customer, but by the subscribing customer,
* `"parent"` which indicates the subscription will be paid for by the subscribing customer's parent within a customer hierarchy, or
* `"eldest"` which indicates the subscription will be paid for by the root-level customer in the subscribing customer's hierarchy.

To create a new subscription into a subscription group, please reference the following:
[Create Subscription in a Subscription Group](https://developers.chargify.com/docs/api-docs/d571659cf0f24-create-subscription#subscription-in-a-subscription-group)

```ts
async createSubscriptionGroupHierarchy(
  subscriptionId: string,
  body?: AddSubscriptionToAGroup,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SubscriptionGroupResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The Chargify id of the subscription |
| `body` | [`AddSubscriptionToAGroup \| undefined`](../../doc/models/add-subscription-to-a-group.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SubscriptionGroupResponse`](../../doc/models/subscription-group-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const body: AddSubscriptionToAGroup = {
  group: {
    target: {
      type: GroupTargetType.Subscription,
      id: 32987,
    },
    billing: {
      accrue: true,
      alignDate: true,
      prorate: true,
    },
  },
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await subscriptionGroupsController.createSubscriptionGroupHierarchy(
  subscriptionId,
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
  "subscription_group": {
    "customer_id": 130690,
    "payment_profile": {
      "id": 32055,
      "first_name": "Marty",
      "last_name": "McFly",
      "masked_card_number": "XXXX-XXXX-XXXX-1111"
    },
    "subscription_ids": [
      32988,
      33060,
      32986
    ],
    "created_at": "2018-08-30T17:14:30-04:00"
  }
}
```


# Remove Subscription From Group

For sites making use of the [Relationship Billing](https://chargify.zendesk.com/hc/en-us/articles/4407737494171) and [Customer Hierarchy](https://chargify.zendesk.com/hc/en-us/articles/4407746683291) features, it is possible to remove existing subscription from subscription group.

```ts
async removeSubscriptionFromGroup(
  subscriptionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The Chargify id of the subscription |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await subscriptionGroupsController.removeSubscriptionFromGroup(subscriptionId);
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
| 404 | Not Found | `ApiError` |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |

