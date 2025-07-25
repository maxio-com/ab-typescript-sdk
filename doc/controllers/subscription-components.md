# Subscription Components

```ts
const subscriptionComponentsController = new SubscriptionComponentsController(client);
```

## Class Name

`SubscriptionComponentsController`

## Methods

* [Read Subscription Component](../../doc/controllers/subscription-components.md#read-subscription-component)
* [List Subscription Components](../../doc/controllers/subscription-components.md#list-subscription-components)
* [Bulk Update Subscription Components Price Points](../../doc/controllers/subscription-components.md#bulk-update-subscription-components-price-points)
* [Bulk Reset Subscription Components Price Points](../../doc/controllers/subscription-components.md#bulk-reset-subscription-components-price-points)
* [Allocate Component](../../doc/controllers/subscription-components.md#allocate-component)
* [List Allocations](../../doc/controllers/subscription-components.md#list-allocations)
* [Allocate Components](../../doc/controllers/subscription-components.md#allocate-components)
* [Preview Allocations](../../doc/controllers/subscription-components.md#preview-allocations)
* [Update Prepaid Usage Allocation Expiration Date](../../doc/controllers/subscription-components.md#update-prepaid-usage-allocation-expiration-date)
* [Delete Prepaid Usage Allocation](../../doc/controllers/subscription-components.md#delete-prepaid-usage-allocation)
* [Create Usage](../../doc/controllers/subscription-components.md#create-usage)
* [List Usages](../../doc/controllers/subscription-components.md#list-usages)
* [Activate Event Based Component](../../doc/controllers/subscription-components.md#activate-event-based-component)
* [Deactivate Event Based Component](../../doc/controllers/subscription-components.md#deactivate-event-based-component)
* [Record Event](../../doc/controllers/subscription-components.md#record-event)
* [Bulk Record Events](../../doc/controllers/subscription-components.md#bulk-record-events)
* [List Subscription Components for Site](../../doc/controllers/subscription-components.md#list-subscription-components-for-site)


# Read Subscription Component

This request will list information regarding a specific component owned by a subscription.

```ts
async readSubscriptionComponent(
  subscriptionId: number,
  componentId: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SubscriptionComponentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription |
| `componentId` | `number` | Template, Required | The Advanced Billing id of the component. Alternatively, the component's handle prefixed by `handle:` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SubscriptionComponentResponse`](../../doc/models/subscription-component-response.md).

## Example Usage

```ts
const subscriptionId = 222;

const componentId = 222;

try {
  const { result, ...httpResponse } = await subscriptionComponentsController.readSubscriptionComponent(
    subscriptionId,
    componentId
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "component": {
    "component_id": 193028,
    "subscription_id": 14593192,
    "allocated_quantity": 1,
    "pricing_scheme": "per_unit",
    "name": "Users",
    "kind": "quantity_based_component",
    "unit_name": "Users",
    "price_point_id": 1,
    "price_point_handle": "top-tier",
    "enabled": true
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | Not Found | `ApiError` |


# List Subscription Components

This request will list a subscription's applied components.

## Archived Components

When requesting to list components for a given subscription, if the subscription contains **archived** components they will be listed in the server response.

```ts
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
): Promise<ApiResponse<SubscriptionComponentResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription |
| `dateField` | [`SubscriptionListDateField \| undefined`](../../doc/models/subscription-list-date-field.md) | Query, Optional | The type of filter you'd like to apply to your search. Use in query `date_field=updated_at`. |
| `direction` | [`SortingDirection \| undefined`](../../doc/models/sorting-direction.md) | Query, Optional | Controls the order in which results are returned.<br>Use in query `direction=asc`. |
| `filter` | [`ListSubscriptionComponentsFilter \| undefined`](../../doc/models/list-subscription-components-filter.md) | Query, Optional | Filter to use for List Subscription Components operation |
| `endDate` | `string \| undefined` | Query, Optional | The end date (format YYYY-MM-DD) with which to filter the date_field. Returns components with a timestamp up to and including 11:59:59PM in your site’s time zone on the date specified. |
| `endDatetime` | `string \| undefined` | Query, Optional | The end date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns components with a timestamp at or before exact time provided in query. You can specify timezone in query - otherwise your site''s time zone will be used. If provided, this parameter will be used instead of end_date. |
| `pricePointIds` | [`IncludeNotNull \| undefined`](../../doc/models/include-not-null.md) | Query, Optional | Allows fetching components allocation only if price point id is present. Use in query `price_point_ids=not_null`. |
| `productFamilyIds` | `number[] \| undefined` | Query, Optional | Allows fetching components allocation with matching product family id based on provided ids. Use in query `product_family_ids=1,2,3`. |
| `sort` | [`ListSubscriptionComponentsSort \| undefined`](../../doc/models/list-subscription-components-sort.md) | Query, Optional | The attribute by which to sort. Use in query `sort=updated_at`. |
| `startDate` | `string \| undefined` | Query, Optional | The start date (format YYYY-MM-DD) with which to filter the date_field. Returns components with a timestamp at or after midnight (12:00:00 AM) in your site’s time zone on the date specified. |
| `startDatetime` | `string \| undefined` | Query, Optional | The start date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns components with a timestamp at or after exact time provided in query. You can specify timezone in query - otherwise your site''s time zone will be used. If provided, this parameter will be used instead of start_date. |
| `include` | [`ListSubscriptionComponentsInclude[] \| undefined`](../../doc/models/list-subscription-components-include.md) | Query, Optional | Allows including additional data in the response. Use in query `include=subscription,historic_usages`. |
| `inUse` | `boolean \| undefined` | Query, Optional | If in_use is set to true, it returns only components that are currently in use. However, if it's set to false or not provided, it returns all components connected with the subscription. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SubscriptionComponentResponse[]`](../../doc/models/subscription-component-response.md).

## Example Usage

```ts
const collect = {
  subscriptionId: 222,
  dateField: SubscriptionListDateField.UpdatedAt,
  filter: {
    currencies: [
      'EUR',
      'USD'
    ],
  },
  pricePointIds: IncludeNotNull.NotNull,
  productFamilyIds: [
    1,
    2,
    3
  ],
  sort: ListSubscriptionComponentsSort.UpdatedAt,
  include: [
    ListSubscriptionComponentsInclude.Subscription,
    ListSubscriptionComponentsInclude.HistoricUsages
  ],
  inUse: true
}

try {
  const { result, ...httpResponse } = await subscriptionComponentsController.listSubscriptionComponents(collect);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
[
  {
    "component": {
      "component_id": 0,
      "subscription_id": 0,
      "allocated_quantity": 0,
      "pricing_scheme": "per_unit",
      "name": "string",
      "kind": "quantity_based_component",
      "unit_name": "string",
      "price_point_id": 0,
      "price_point_handle": "string",
      "price_point_type": "default",
      "price_point_name": "string",
      "enabled": true,
      "unit_balance": 0,
      "id": 0,
      "created_at": "2022-02-22T14:07:00-05:00",
      "updated_at": "2022-02-22T14:07:00-05:00",
      "component_handle": "string",
      "archived_at": null
    }
  }
]
```


# Bulk Update Subscription Components Price Points

Updates the price points on one or more of a subscription's components.

The `price_point` key can take either a:

1. Price point id (integer)
2. Price point handle (string)
3. `"_default"` string, which will reset the price point to the component's current default price point.

```ts
async bulkUpdateSubscriptionComponentsPricePoints(
  subscriptionId: number,
  body?: BulkComponentsPricePointAssignment,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BulkComponentsPricePointAssignment>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription |
| `body` | [`BulkComponentsPricePointAssignment \| undefined`](../../doc/models/bulk-components-price-point-assignment.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`BulkComponentsPricePointAssignment`](../../doc/models/bulk-components-price-point-assignment.md).

## Example Usage

```ts
const subscriptionId = 222;

const body: BulkComponentsPricePointAssignment = {
  components: [
    {
      componentId: 997,
      pricePoint: 1022,
    },
    {
      componentId: 998,
      pricePoint: 'wholesale-handle',
    },
    {
      componentId: 999,
      pricePoint: '_default',
    }
  ],
};

try {
  const { result, ...httpResponse } = await subscriptionComponentsController.bulkUpdateSubscriptionComponentsPricePoints(
    subscriptionId,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "components": [
    {
      "component_id": 123,
      "price_point": 456
    },
    {
      "component_id": 789,
      "price_point": 987
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ComponentPricePointError`](../../doc/models/component-price-point-error.md) |


# Bulk Reset Subscription Components Price Points

Resets all of a subscription's components to use the current default.

**Note**: this will update the price point for all of the subscription's components, even ones that have not been allocated yet.

```ts
async bulkResetSubscriptionComponentsPricePoints(
  subscriptionId: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SubscriptionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SubscriptionResponse`](../../doc/models/subscription-response.md).

## Example Usage

```ts
const subscriptionId = 222;

try {
  const { result, ...httpResponse } = await subscriptionComponentsController.bulkResetSubscriptionComponentsPricePoints(subscriptionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "subscription": {
    "id": 80293620,
    "state": "active",
    "trial_started_at": null,
    "trial_ended_at": null,
    "activated_at": "2023-11-23T10:28:34-05:00",
    "created_at": "2023-11-23T10:28:34-05:00",
    "updated_at": "2023-11-23T10:28:34-05:00",
    "expires_at": null,
    "balance_in_cents": 50504234,
    "current_period_ends_at": "2023-11-23T10:28:34-05:00",
    "next_assessment_at": "2023-11-23T10:28:34-05:00",
    "canceled_at": null,
    "cancellation_message": "lorem ipsum",
    "next_product_id": null,
    "cancel_at_end_of_period": false,
    "payment_collection_method": "remittance",
    "snap_day": null,
    "cancellation_method": "dunning",
    "current_period_started_at": "2023-11-23T10:28:34-05:00",
    "previous_state": "active",
    "signup_payment_id": -45156092,
    "signup_revenue": "do aliquip ea",
    "delayed_cancel_at": null,
    "coupon_code": null,
    "total_revenue_in_cents": -49740952,
    "product_price_in_cents": 87617888,
    "product_version_number": 13656635,
    "payment_type": null,
    "referral_code": null,
    "coupon_use_count": null,
    "coupon_uses_allowed": null,
    "reason_code": null,
    "automatically_resume_at": null,
    "current_billing_amount_in_cents": -26151968,
    "customer": {
      "id": 15208337,
      "first_name": "ipsum culpa in labore eiusmod",
      "last_name": "esse",
      "organization": null,
      "email": "ex eiusmod",
      "created_at": "2021-05-05T16:00:21-04:00",
      "updated_at": "2021-05-05T16:00:21-04:00",
      "reference": "laboris ea cupidatat",
      "address": null,
      "address_2": null,
      "city": "id eiusmod proident",
      "state": "magna eiusmod anim non",
      "zip": null,
      "country": null,
      "phone": null,
      "portal_invite_last_sent_at": null,
      "portal_invite_last_accepted_at": "2021-05-05T20:00:21-04:00",
      "portal_customer_created_at": "2021-05-05T16:00:21-04:00",
      "cc_emails": "eiusmod sunt",
      "tax_exempt": true
    },
    "product": {
      "id": -74447756,
      "name": "eu mollit nulla ut aute",
      "handle": "esse dolor anim",
      "description": "Lorem ut et non",
      "accounting_code": "nisi",
      "request_credit_card": false,
      "expiration_interval": 1,
      "expiration_interval_unit": "day",
      "created_at": "2022-11-23T10:28:34-05:00",
      "updated_at": "2022-11-23T10:28:34-05:00",
      "price_in_cents": -4151649,
      "interval": 20680876,
      "interval_unit": "day",
      "initial_charge_in_cents": null,
      "trial_price_in_cents": null,
      "trial_interval": null,
      "trial_interval_unit": "day",
      "archived_at": null,
      "require_credit_card": true,
      "return_params": "magna eu",
      "taxable": true,
      "update_return_url": "exercitation in",
      "tax_code": "Excepteur aliqua sunt in",
      "initial_charge_after_trial": true,
      "version_number": 41642597,
      "update_return_params": "dolore labore",
      "product_family": {
        "id": -5356997,
        "name": "officia amet Lorem proident enim",
        "description": "Duis",
        "handle": "ea dolore dolore sunt",
        "accounting_code": null
      }
    }
  }
}
```


# Allocate Component

This endpoint creates a new allocation, setting the current allocated quantity for the Component and recording a memo.

**Notice**: Allocations can only be updated for Quantity, On/Off, and Prepaid Components.

## Allocations Documentation

Full documentation on how to record Allocations in the Advanced Billing UI can be located [here](https://maxio.zendesk.com/hc/en-us/articles/24251883961485-Component-Allocations-Overview). It is focused on how allocations operate within the Advanced Billing UI.It goes into greater detail on how the user interface will react when recording allocations.

This documentation also goes into greater detail on how proration is taken into consideration when applying component allocations.

## Proration Schemes

Changing the allocated quantity of a component mid-period can result in either a Charge or Credit being applied to the subscription. When creating an allocation via the API, you can pass the `upgrade_charge`, `downgrade_credit`, and `accrue_charge` to be applied.

**Notice:** These proration and accural fields will be ignored for Prepaid Components since this component type always generate charges immediately without proration.

For background information on prorated components and upgrade/downgrade schemes, see [Setting Component Allocations.](https://maxio.zendesk.com/hc/en-us/articles/24251906165133-Component-Allocations-Proration).
See the tables below for valid values.

| upgrade_charge | Definition                                                        |
|----------------|-------------------------------------------------------------------|
| `full`         | A charge is added for the full price of the component.            |
| `prorated`     | A charge is added for the prorated price of the component change. |
| `none`         | No charge is added.                                               |

| downgrade_credit | Definition                                        |
|------------------|---------------------------------------------------|
| `full`           | A full price credit is added for the amount owed. |
| `prorated`       | A prorated credit is added for the amount owed.   |
| `none`           | No charge is added.                               |

| accrue_charge | Definition                                                                                                 |
|---------------|------------------------------------------------------------------------------------------------------------|
| `true`        | Attempt to charge the customer at next renewal.                                                            |
| `false`       | Attempt to charge the customer right away. If it fails, the charge will be accrued until the next renewal. |

### Order of Resolution for upgrade_charge and downgrade_credit

1. Per allocation in API call (within a single allocation of the `allocations` array)
2. [Component-level default value](https://maxio.zendesk.com/hc/en-us/articles/24251883961485-Component-Allocations-Overview)
3. Allocation API call top level (outside of the `allocations` array)
4. [Site-level default value](https://maxio.zendesk.com/hc/en-us/articles/24251906165133-Component-Allocations-Proration#proration-schemes)

### Order of Resolution for accrue charge

1. Allocation API call top level (outside of the `allocations` array)
2. [Site-level default value](https://maxio.zendesk.com/hc/en-us/articles/24251906165133-Component-Allocations-Proration#proration-schemes)

**NOTE: Proration uses the current price of the component as well as the current tax rates. Changes to either may cause the prorated charge/credit to be wrong.**

```ts
async allocateComponent(
  subscriptionId: number,
  componentId: number,
  body?: CreateAllocationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AllocationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription |
| `componentId` | `number` | Template, Required | The Advanced Billing id of the component |
| `body` | [`CreateAllocationRequest \| undefined`](../../doc/models/create-allocation-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AllocationResponse`](../../doc/models/allocation-response.md).

## Example Usage

```ts
const subscriptionId = 222;

const componentId = 222;

const body: CreateAllocationRequest = {
  allocation: {
    quantity: 5,
    memo: 'Recoding component purchase of Acme Support',
  },
};

try {
  const { result, ...httpResponse } = await subscriptionComponentsController.allocateComponent(
    subscriptionId,
    componentId,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "allocation": {
    "component_id": 4034995,
    "subscription_id": 23737320,
    "quantity": 3,
    "previous_quantity": 2,
    "memo": "dolore cupidatat elit",
    "timestamp": "2022-11-23T10:28:34-05:00",
    "proration_upgrade_scheme": "laboris ipsum dolore",
    "proration_downgrade_scheme": "eiusmod dolore",
    "price_point_id": -69720370,
    "previous_price_point_id": -76493052,
    "accrue_charge": true,
    "upgrade_charge": "full",
    "downgrade_credit": "full",
    "payment": {
      "id": -44566528,
      "amount_in_cents": 123,
      "success": false,
      "memo": "aliqua"
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |


# List Allocations

This endpoint returns the 50 most recent Allocations, ordered by most recent first.

## On/Off Components

When a subscription's on/off component has been toggled to on (`1`) or off (`0`), usage will be logged in this response.

## Querying data via Advanced Billing gem

You can also query the current quantity via the [official Advanced Billing Gem.](http://github.com/chargify/chargify_api_ares)

```# First way
component = Chargify::Subscription::Component.find(1, :params => {:subscription_id => 7})
puts component.allocated_quantity
# => 23

# Second way
component = Chargify::Subscription.find(7).component(1)
puts component.allocated_quantity
# => 23
```

```ts
async listAllocations(
  subscriptionId: number,
  componentId: number,
  page?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AllocationResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription |
| `componentId` | `number` | Template, Required | The Advanced Billing id of the component |
| `page` | `number \| undefined` | Query, Optional | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`.<br><br>**Default**: `1`<br><br>**Constraints**: `>= 1` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AllocationResponse[]`](../../doc/models/allocation-response.md).

## Example Usage

```ts
const subscriptionId = 222;

const componentId = 222;

const page = 2;

try {
  const { result, ...httpResponse } = await subscriptionComponentsController.listAllocations(
    subscriptionId,
    componentId,
    page
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
[
  {
    "allocation": {
      "allocation_id": 2370199,
      "component_id": 41028,
      "subscription_id": 352827,
      "quantity": 10,
      "previous_quantity": 0,
      "memo": "Recoding component allocation",
      "timestamp": "2024-02-28T09:31:05Z",
      "proration_upgrade_scheme": "full-price-attempt-capture",
      "proration_downgrade_scheme": "no-prorate",
      "price_point_id": 2957424,
      "price_point_handle": "uuid:03190e20-b84a-013c-ca77-0286551bb34f",
      "price_point_name": "Original",
      "previous_price_point_id": 2957424,
      "component_handle": "test-prepaid-component-4982065948",
      "accrue_charge": false,
      "upgrade_charge": "full",
      "downgrade_credit": "none",
      "created_at": "2024-02-28T04:31:05-05:00",
      "initiate_dunning": false,
      "expires_at": "2024-08-03T20:00:00-04:00",
      "used_quantity": 5,
      "charge_id": 11586076
    }
  },
  {
    "allocation": {
      "memo": null,
      "timestamp": "2012-11-20T21:48:09Z",
      "quantity": 3,
      "previous_quantity": 0,
      "component_id": 11960,
      "subscription_id": 2585595,
      "proration_upgrade_scheme": "no-prorate",
      "proration_downgrade_scheme": "no-prorate"
    }
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | Not Found | `ApiError` |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |


# Allocate Components

Creates multiple allocations, setting the current allocated quantity for each of the components and recording a memo. The charges and/or credits that are created will be rolled up into a single total which is used to determine whether this is an upgrade or a downgrade. Be aware of the Order of Resolutions explained below in determining the proration scheme.

A `component_id` is required for each allocation.

This endpoint only responds to JSON. It is not available for XML.

```ts
async allocateComponents(
  subscriptionId: number,
  body?: AllocateComponents,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AllocationResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription |
| `body` | [`AllocateComponents \| undefined`](../../doc/models/allocate-components.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AllocationResponse[]`](../../doc/models/allocation-response.md).

## Example Usage

```ts
const subscriptionId = 222;

const body: AllocateComponents = {
  prorationUpgradeScheme: 'prorate-attempt-capture',
  prorationDowngradeScheme: 'no-prorate',
  allocations: [
    {
      quantity: 10,
      componentId: 123,
      memo: 'foo',
    },
    {
      quantity: 5,
      componentId: 456,
      memo: 'bar',
    }
  ],
};

try {
  const { result, ...httpResponse } = await subscriptionComponentsController.allocateComponents(
    subscriptionId,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
[
  {
    "allocation": {
      "component_id": 193159,
      "subscription_id": 15540611,
      "quantity": 10,
      "previous_quantity": 0,
      "memo": "foo",
      "timestamp": "2016-12-08T19:09:15Z",
      "proration_upgrade_scheme": "prorate-attempt-capture",
      "proration_downgrade_scheme": "no-prorate",
      "payment": {
        "amount_in_cents": 1451,
        "success": true,
        "memo": "Payment for: Prorated component allocation changes.",
        "id": 165473487
      }
    }
  },
  {
    "allocation": {
      "component_id": 277221,
      "subscription_id": 15540611,
      "quantity": 5,
      "previous_quantity": 0,
      "memo": "bar",
      "timestamp": "2016-12-08T19:09:15Z",
      "proration_upgrade_scheme": "prorate-attempt-capture",
      "proration_downgrade_scheme": "no-prorate",
      "payment": {
        "amount_in_cents": 1451,
        "success": true,
        "memo": "Payment for: Prorated component allocation changes.",
        "id": 165473487
      }
    }
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | Not Found | `ApiError` |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |


# Preview Allocations

Advanced Billing offers the ability to preview a potential subscription's **quantity-based** or **on/off** component allocation in the middle of the current billing period.  This is useful if you want users to be able to see the effect of a component operation before actually doing it.

## Fine-grained Component Control: Use with multiple `upgrade_charge`s or `downgrade_credits`

When the allocation uses multiple different types of `upgrade_charge`s or `downgrade_credit`s, the Allocation is viewed as an Allocation which uses "Fine-Grained Component Control". As a result, the response will not include `direction` and `proration` within the `allocation_preview`, but at the `line_items` and `allocations` level respectfully.

See example below for Fine-Grained Component Control response.

```ts
async previewAllocations(
  subscriptionId: number,
  body?: PreviewAllocationsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AllocationPreviewResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription |
| `body` | [`PreviewAllocationsRequest \| undefined`](../../doc/models/preview-allocations-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AllocationPreviewResponse`](../../doc/models/allocation-preview-response.md).

## Example Usage

```ts
const subscriptionId = 222;

const body: PreviewAllocationsRequest = {
  allocations: [
    {
      quantity: 10,
      componentId: 554108,
      memo: 'NOW',
      prorationDowngradeScheme: 'prorate',
      prorationUpgradeScheme: 'prorate-attempt-capture',
      pricePointId: 325826,
    }
  ],
  effectiveProrationDate: '2023-11-01',
};

try {
  const { result, ...httpResponse } = await subscriptionComponentsController.previewAllocations(
    subscriptionId,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "allocation_preview": {
    "start_date": "2019-05-02T15:26:46Z",
    "end_date": "2019-05-08T15:26:46Z",
    "period_type": "prorated",
    "total_in_cents": 150,
    "total_discount_in_cents": 0,
    "total_tax_in_cents": 0,
    "subtotal_in_cents": 150,
    "existing_balance_in_cents": 0,
    "accrue_charge": true,
    "line_items": [
      {
        "direction": "upgrade",
        "transaction_type": "charge",
        "kind": "quantity_based_component",
        "amount_in_cents": 100,
        "taxable_amount_in_cents": 0,
        "discount_amount_in_cents": 0,
        "memo": "Foo: 0 to 10 foo",
        "component_id": 123,
        "component_handle": "foo"
      },
      {
        "direction": "downgrade",
        "transaction_type": "credit",
        "kind": "quantity_based_component",
        "amount_in_cents": -20,
        "taxable_amount_in_cents": 0,
        "discount_amount_in_cents": 0,
        "memo": "Foo: 10 to 5 bar",
        "component_id": 456,
        "component_handle": "bar"
      },
      {
        "direction": "upgrade",
        "transaction_type": "credit",
        "kind": "quantity_based_component",
        "amount_in_cents": 70,
        "taxable_amount_in_cents": 0,
        "discount_amount_in_cents": 0,
        "memo": "Foo: 0 to 10 baz",
        "component_id": 789,
        "component_handle": "baz"
      }
    ],
    "allocations": [
      {
        "accrue_charge": true,
        "upgrade_charge": "prorated",
        "downgrade_credit": "full",
        "component_handle": "foo",
        "component_id": 123,
        "memo": "foo",
        "previous_price_point_id": 123,
        "previous_quantity": 0,
        "price_point_id": 123,
        "proration_downgrade_scheme": "full",
        "proration_upgrade_scheme": "prorate-delay-capture",
        "quantity": 10,
        "subscription_id": 123456,
        "timestamp": null
      },
      {
        "accrue_charge": true,
        "upgrade_charge": "full",
        "downgrade_credit": "prorated",
        "component_handle": "bar",
        "component_id": 456,
        "memo": "foo",
        "previous_price_point_id": 456,
        "previous_quantity": 10,
        "price_point_id": 456,
        "proration_downgrade_scheme": "prorate",
        "proration_upgrade_scheme": "full-price-delay-capture",
        "quantity": 5,
        "subscription_id": 123456,
        "timestamp": null
      },
      {
        "accrue_charge": true,
        "upgrade_charge": "full",
        "downgrade_credit": "none",
        "component_handle": "baz",
        "component_id": 789,
        "memo": "foo",
        "previous_price_point_id": 789,
        "previous_quantity": 0,
        "price_point_id": 789,
        "proration_downgrade_scheme": "no-prorate",
        "proration_upgrade_scheme": "full-price-delay-capture",
        "quantity": 10,
        "subscription_id": 123456,
        "timestamp": null
      }
    ]
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ComponentAllocationError`](../../doc/models/component-allocation-error.md) |


# Update Prepaid Usage Allocation Expiration Date

When the expiration interval options are selected on a prepaid usage component price point, all allocations will be created with an expiration date. This expiration date can be changed after the fact to allow for extending or shortening the allocation's active window.

In order to change a prepaid usage allocation's expiration date, a PUT call must be made to the allocation's endpoint with a new expiration date.

## Limitations

A few limitations exist when changing an allocation's expiration date:

- An expiration date can only be changed for an allocation that belongs to a price point with expiration interval options explicitly set.
- An expiration date can be changed towards the future with no limitations.
- An expiration date can be changed towards the past (essentially expiring it) up to the subscription's current period beginning date.

```ts
async updatePrepaidUsageAllocationExpirationDate(
  subscriptionId: number,
  componentId: number,
  allocationId: number,
  body?: UpdateAllocationExpirationDate,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription |
| `componentId` | `number` | Template, Required | The Advanced Billing id of the component |
| `allocationId` | `number` | Template, Required | The Advanced Billing id of the allocation |
| `body` | [`UpdateAllocationExpirationDate \| undefined`](../../doc/models/update-allocation-expiration-date.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const subscriptionId = 222;

const componentId = 222;

const allocationId = 24;

const body: UpdateAllocationExpirationDate = {
  allocation: {
    expiresAt: '2021-05-05T16:00:00',
  },
};

try {
  const { result, ...httpResponse } = await subscriptionComponentsController.updatePrepaidUsageAllocationExpirationDate(
    subscriptionId,
    componentId,
    allocationId,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | Not Found | `ApiError` |
| 422 | Unprocessable Entity (WebDAV) | [`SubscriptionComponentAllocationError`](../../doc/models/subscription-component-allocation-error.md) |


# Delete Prepaid Usage Allocation

Prepaid Usage components are unique in that their allocations are always additive. In order to reduce a subscription's allocated quantity for a prepaid usage component each allocation must be destroyed individually via this endpoint.

## Credit Scheme

By default, destroying an allocation will generate a service credit on the subscription. This behavior can be modified with the optional `credit_scheme` parameter on this endpoint. The accepted values are:

1. `none`: The allocation will be destroyed and the balances will be updated but no service credit or refund will be created.
2. `credit`: The allocation will be destroyed and the balances will be updated and a service credit will be generated. This is also the default behavior if the `credit_scheme` param is not passed.
3. `refund`: The allocation will be destroyed and the balances will be updated and a refund will be issued along with a Credit Note.

```ts
async deletePrepaidUsageAllocation(
  subscriptionId: number,
  componentId: number,
  allocationId: number,
  body?: CreditSchemeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription |
| `componentId` | `number` | Template, Required | The Advanced Billing id of the component |
| `allocationId` | `number` | Template, Required | The Advanced Billing id of the allocation |
| `body` | [`CreditSchemeRequest \| undefined`](../../doc/models/credit-scheme-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const subscriptionId = 222;

const componentId = 222;

const allocationId = 24;

const body: CreditSchemeRequest = {
  creditScheme: CreditScheme.None,
};

try {
  const { result, ...httpResponse } = await subscriptionComponentsController.deletePrepaidUsageAllocation(
    subscriptionId,
    componentId,
    allocationId,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | Not Found | `ApiError` |
| 422 | Unprocessable Entity (WebDAV) | [`SubscriptionComponentAllocationError`](../../doc/models/subscription-component-allocation-error.md) |


# Create Usage

## Documentation

Full documentation on how to create Components in the Advanced Billing UI can be located [here](https://maxio.zendesk.com/hc/en-us/articles/24261149711501-Create-Edit-and-Archive-Components). Additionally, for information on how to record component usage against a subscription, please see the following resources:

+ [Recording Metered Component Usage](https://maxio.zendesk.com/hc/en-us/articles/24251890500109-Reporting-Component-Allocations#reporting-metered-component-usage)
+ [Reporting Prepaid Component Status](https://maxio.zendesk.com/hc/en-us/articles/24251890500109-Reporting-Component-Allocations#reporting-prepaid-component-status)

You may choose to report metered or prepaid usage to Advanced Billing as often as you wish. You may report usage as it happens. You may also report usage periodically, such as each night or once per billing period. If usage events occur in your system very frequently (on the order of thousands of times an hour), it is best to accumulate usage into batches on your side, and then report those batches less frequently, such as daily. This will ensure you remain below any API throttling limits. If your use case requires higher rates of usage reporting, we recommend utilizing Events Based Components.

## Create Usage for Subscription

This endpoint allows you to record an instance of metered or prepaid usage for a subscription. The `quantity` from usage for each component is accumulated to the `unit_balance` on the [Component Line Item](./b3A6MTQxMDgzNzQ-read-subscription-component) for the subscription.

## Price Point ID usage

If you are using price points, for metered and prepaid usage components, Advanced Billing gives you the option to specify a price point in your request.

You do not need to specify a price point ID. If a price point is not included, the default price point for the component will be used when the usage is recorded.

If an invalid `price_point_id` is submitted, the endpoint will return an error.

## Deducting Usage

In the event that you need to reverse a previous usage report or otherwise deduct from the current usage balance, you may provide a negative quantity.

Example:

Previously recorded:

```json
{
  "usage": {
    "quantity": 5000,
    "memo": "Recording 5000 units"
  }
}
```

At this point, `unit_balance` would be `5000`. To reduce the balance to `0`, POST the following payload:

```json
{
  "usage": {
    "quantity": -5000,
    "memo": "Deducting 5000 units"
  }
}
```

The `unit_balance` has a floor of `0`; negative unit balances are never allowed. For example, if the usage balance is 100 and you deduct 200 units, the unit balance would then be `0`, not `-100`.

## FAQ

Q. Is it possible to record metered usage for more than one component at a time?

A. No. Usage should be reported as one API call per component on a single subscription. For example, to record that a subscriber has sent both an SMS Message and an Email, send an API call for each.

```ts
async createUsage(
  subscriptionId: number,
  componentId: CreateUsageComponentId,
  body?: CreateUsageRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UsageResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription |
| `componentId` | [`CreateUsageComponentId`](../../doc/models/containers/create-usage-component-id.md) | Template, Required | This is a container for one-of cases. |
| `body` | [`CreateUsageRequest \| undefined`](../../doc/models/create-usage-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UsageResponse`](../../doc/models/usage-response.md).

## Example Usage

```ts
const subscriptionId = 222;

const componentId: CreateUsageComponentId = 144;

const body: CreateUsageRequest = {
  usage: {
    quantity: 1000,
    pricePointId: '149416',
    memo: 'My memo',
  },
};

try {
  const { result, ...httpResponse } = await subscriptionComponentsController.createUsage(
    subscriptionId,
    componentId,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "usage": {
    "id": 138522957,
    "memo": "My memo",
    "created_at": "2017-11-13T10:05:32-06:00",
    "price_point_id": 149416,
    "quantity": 1000,
    "component_id": 500093,
    "component_handle": "handle",
    "subscription_id": 22824464
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |


# List Usages

This request will return a list of the usages associated with a subscription for a particular metered component. This will display the previously recorded components for a subscription.

This endpoint is not compatible with quantity-based components.

## Since Date and Until Date Usage

Note: The `since_date` and `until_date` attributes each default to midnight on the date specified. For example, in order to list usages for January 20th, you would need to append the following to the URL.

```
?since_date=2016-01-20&until_date=2016-01-21
```

## Read Usage by Handle

Use this endpoint to read the previously recorded components for a subscription.  You can now specify either the component id (integer) or the component handle prefixed by "handle:" to specify the unique identifier for the component you are working with.

```ts
async listUsages(
  {
    subscriptionId,
    componentId,
    sinceId,
    maxId,
    sinceDate,
    untilDate,
    page,
    perPage,
  }: {
    subscriptionId: number;
    componentId: ListUsagesInputComponentId;
    sinceId?: bigint;
    maxId?: bigint;
    sinceDate?: string;
    untilDate?: string;
    page?: number;
    perPage?: number;
  },
  requestOptions?: RequestOptions
): Promise<ApiResponse<UsageResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription |
| `componentId` | [`ListUsagesInputComponentId`](../../doc/models/containers/list-usages-input-component-id.md) | Template, Required | This is a container for one-of cases. |
| `sinceId` | `bigint \| undefined` | Query, Optional | Returns usages with an id greater than or equal to the one specified |
| `maxId` | `bigint \| undefined` | Query, Optional | Returns usages with an id less than or equal to the one specified |
| `sinceDate` | `string \| undefined` | Query, Optional | Returns usages with a created_at date greater than or equal to midnight (12:00 AM) on the date specified. |
| `untilDate` | `string \| undefined` | Query, Optional | Returns usages with a created_at date less than or equal to midnight (12:00 AM) on the date specified. |
| `page` | `number \| undefined` | Query, Optional | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`.<br><br>**Default**: `1`<br><br>**Constraints**: `>= 1` |
| `perPage` | `number \| undefined` | Query, Optional | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`.<br><br>**Default**: `20`<br><br>**Constraints**: `<= 200` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UsageResponse[]`](../../doc/models/usage-response.md).

## Example Usage

```ts
const collect = {
  subscriptionId: 222,
  componentId: 144,
  page: 2,
  perPage: 50
}

try {
  const { result, ...httpResponse } = await subscriptionComponentsController.listUsages(collect);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
[
  {
    "usage": {
      "id": 178534642,
      "memo": "20",
      "created_at": "2018-08-03T11:58:42-05:00",
      "price_point_id": 242632,
      "quantity": "20.0",
      "component_id": 500093,
      "component_handle": "handle",
      "subscription_id": 22824464
    }
  },
  {
    "usage": {
      "id": 178534591,
      "memo": "10",
      "created_at": "2018-08-03T11:58:29-05:00",
      "price_point_id": 242632,
      "quantity": "10.0",
      "component_id": 500093,
      "component_handle": "handle",
      "subscription_id": 22824464
    }
  }
]
```


# Activate Event Based Component

In order to bill your subscribers on your Events data under the Events-Based Billing feature, the components must be activated for the subscriber.

Learn more about the role of activation in the [Events-Based Billing docs](https://maxio.zendesk.com/hc/en-us/articles/24260323329805-Events-Based-Billing-Overview).

Use this endpoint to activate an event-based component for a single subscription. Activating an event-based component causes Advanced Billing to bill for events when the subscription is renewed.

*Note: it is possible to stream events for a subscription at any time, regardless of component activation status. The activation status only determines if the subscription should be billed for event-based component usage at renewal.*

```ts
async activateEventBasedComponent(
  subscriptionId: number,
  componentId: number,
  body?: ActivateEventBasedComponent,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Advanced Billing id of the subscription |
| `componentId` | `number` | Template, Required | The Advanced Billing id of the component |
| `body` | [`ActivateEventBasedComponent \| undefined`](../../doc/models/activate-event-based-component.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const subscriptionId = 222;

const componentId = 222;

const body: ActivateEventBasedComponent = {
  pricePointId: 1,
  billingSchedule: {
    initialBillingAt: '2022-01-01',
  },
  customPrice: {
    prices: [
      {
        startingQuantity: 1,
        unitPrice: '5.0',
      }
    ],
    taxIncluded: false,
    pricingScheme: PricingScheme.PerUnit,
    interval: 30,
    intervalUnit: IntervalUnit.Day,
  },
};

try {
  const { result, ...httpResponse } = await subscriptionComponentsController.activateEventBasedComponent(
    subscriptionId,
    componentId,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Deactivate Event Based Component

Use this endpoint to deactivate an event-based component for a single subscription. Deactivating the event-based component causes Advanced Billing to ignore related events at subscription renewal.

```ts
async deactivateEventBasedComponent(
  subscriptionId: number,
  componentId: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Advanced Billing id of the subscription |
| `componentId` | `number` | Template, Required | The Advanced Billing id of the component |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const subscriptionId = 222;

const componentId = 222;

try {
  const { result, ...httpResponse } = await subscriptionComponentsController.deactivateEventBasedComponent(
    subscriptionId,
    componentId
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Record Event

## Documentation

Events-Based Billing is an evolved form of metered billing that is based on data-rich events streamed in real-time from your system to Advanced Billing.

These events can then be transformed, enriched, or analyzed to form the computed totals of usage charges billed to your customers.

This API allows you to stream events into the Advanced Billing data ingestion engine.

Learn more about the feature in general in the [Events-Based Billing help docs](https://maxio.zendesk.com/hc/en-us/articles/24260323329805-Events-Based-Billing-Overview).

## Record Event

Use this endpoint to record a single event.

*Note: this endpoint differs from the standard Chargify API endpoints in that the URL subdomain will be `events` and your site subdomain will be included in the URL path. For example:*

```
https://events.chargify.com/my-site-subdomain/events/my-stream-api-handle
```

```ts
async recordEvent(
  apiHandle: string,
  storeUid?: string,
  body?: EBBEvent,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiHandle` | `string` | Template, Required | Identifies the Stream for which the event should be published. |
| `storeUid` | `string \| undefined` | Query, Optional | If you've attached your own Keen project as an Advanced Billing event data-store, use this parameter to indicate the data-store. |
| `body` | [`EBBEvent \| undefined`](../../doc/models/ebb-event.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const apiHandle = 'api_handle6';

const body: EBBEvent = {
  chargify: {
    timestamp: '2020-02-27T17:45:50-05:00',
    subscriptionId: 1,
  },
};

try {
  const { result, ...httpResponse } = await subscriptionComponentsController.recordEvent(
    apiHandle,
    undefined,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Bulk Record Events

Use this endpoint to record a collection of events.

*Note: this endpoint differs from the standard Chargify API endpoints in that the subdomain will be `events` and your site subdomain will be included in the URL path.*

A maximum of 1000 events can be published in a single request. A 422 will be returned if this limit is exceeded.

```ts
async bulkRecordEvents(
  apiHandle: string,
  storeUid?: string,
  body?: EBBEvent[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiHandle` | `string` | Template, Required | Identifies the Stream for which the events should be published. |
| `storeUid` | `string \| undefined` | Query, Optional | If you've attached your own Keen project as an Advanced Billing event data-store, use this parameter to indicate the data-store. |
| `body` | [`EBBEvent[] \| undefined`](../../doc/models/ebb-event.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const apiHandle = 'api_handle6';

const body: EBBEvent[] = [
  {
    chargify: {
      timestamp: '2020-02-27T17:45:50-05:00',
      subscriptionId: 1,
    },
  }
];

try {
  const { result, ...httpResponse } = await subscriptionComponentsController.bulkRecordEvents(
    apiHandle,
    undefined,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Subscription Components for Site

This request will list components applied to each subscription.

```ts
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
): Promise<ApiResponse<ListSubscriptionComponentsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `number \| undefined` | Query, Optional | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`.<br><br>**Default**: `1`<br><br>**Constraints**: `>= 1` |
| `perPage` | `number \| undefined` | Query, Optional | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`.<br><br>**Default**: `20`<br><br>**Constraints**: `<= 200` |
| `sort` | [`ListSubscriptionComponentsSort \| undefined`](../../doc/models/list-subscription-components-sort.md) | Query, Optional | The attribute by which to sort. Use in query: `sort=updated_at`. |
| `direction` | [`SortingDirection \| undefined`](../../doc/models/sorting-direction.md) | Query, Optional | Controls the order in which results are returned.<br>Use in query `direction=asc`. |
| `filter` | [`ListSubscriptionComponentsForSiteFilter \| undefined`](../../doc/models/list-subscription-components-for-site-filter.md) | Query, Optional | Filter to use for List Subscription Components For Site operation |
| `dateField` | [`SubscriptionListDateField \| undefined`](../../doc/models/subscription-list-date-field.md) | Query, Optional | The type of filter you'd like to apply to your search. Use in query: `date_field=updated_at`. |
| `startDate` | `string \| undefined` | Query, Optional | The start date (format YYYY-MM-DD) with which to filter the date_field. Returns components with a timestamp at or after midnight (12:00:00 AM) in your site’s time zone on the date specified. Use in query `start_date=2011-12-15`. |
| `startDatetime` | `string \| undefined` | Query, Optional | The start date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns components with a timestamp at or after exact time provided in query. You can specify timezone in query - otherwise your site''s time zone will be used. If provided, this parameter will be used instead of start_date. Use in query `start_datetime=2022-07-01 09:00:05`. |
| `endDate` | `string \| undefined` | Query, Optional | The end date (format YYYY-MM-DD) with which to filter the date_field. Returns components with a timestamp up to and including 11:59:59PM in your site’s time zone on the date specified. Use in query `end_date=2011-12-16`. |
| `endDatetime` | `string \| undefined` | Query, Optional | The end date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns components with a timestamp at or before exact time provided in query. You can specify timezone in query - otherwise your site''s time zone will be used. If provided, this parameter will be used instead of end_date. Use in query `end_datetime=2022-07-01 09:00:05`. |
| `subscriptionIds` | `number[] \| undefined` | Query, Optional | Allows fetching components allocation with matching subscription id based on provided ids. Use in query `subscription_ids=1,2,3`.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `200` |
| `pricePointIds` | [`IncludeNotNull \| undefined`](../../doc/models/include-not-null.md) | Query, Optional | Allows fetching components allocation only if price point id is present. Use in query `price_point_ids=not_null`. |
| `productFamilyIds` | `number[] \| undefined` | Query, Optional | Allows fetching components allocation with matching product family id based on provided ids. Use in query `product_family_ids=1,2,3`. |
| `include` | [`ListSubscriptionComponentsInclude \| undefined`](../../doc/models/list-subscription-components-include.md) | Query, Optional | Allows including additional data in the response. Use in query `include=subscription,historic_usages`. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListSubscriptionComponentsResponse`](../../doc/models/list-subscription-components-response.md).

## Example Usage

```ts
const collect = {
  page: 2,
  perPage: 50,
  sort: ListSubscriptionComponentsSort.UpdatedAt,
  filter: {
    currencies: [
      'EUR',
      'USD'
    ],
  },
  dateField: SubscriptionListDateField.UpdatedAt,
  subscriptionIds: [
    1,
    2,
    3
  ],
  pricePointIds: IncludeNotNull.NotNull,
  productFamilyIds: [
    1,
    2,
    3
  ],
  include: ListSubscriptionComponentsInclude.Subscription
}

try {
  const { result, ...httpResponse } = await subscriptionComponentsController.listSubscriptionComponentsForSite(collect);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

