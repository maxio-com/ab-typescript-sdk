# Insights

```ts
const insightsController = new InsightsController(client);
```

## Class Name

`InsightsController`

## Methods

* [Read Site Stats](../../doc/controllers/insights.md#read-site-stats)
* [Read Mrr](../../doc/controllers/insights.md#read-mrr)
* [List Mrr Movements](../../doc/controllers/insights.md#list-mrr-movements)
* [List Mrr Per Subscription](../../doc/controllers/insights.md#list-mrr-per-subscription)


# Read Site Stats

The Stats API is a very basic view of some Site-level stats. This API call only answers with JSON responses. An XML version is not provided.

## Stats Documentation

There currently is not a complimentary matching set of documentation that compliments this endpoint. However, each Site's dashboard will reflect the summary of information provided in the Stats response.

```
https://subdomain.chargify.com/dashboard
```

```ts
async readSiteStats(
  requestOptions?: RequestOptions
): Promise<ApiResponse<SiteSummary>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SiteSummary`](../../doc/models/site-summary.md).

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await insightsController.readSiteStats();
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
  "seller_name": "Acme, Inc.",
  "site_name": "Production",
  "site_id": 12345,
  "site_currency": "USD",
  "stats": {
    "total_subscriptions": 120,
    "subscriptions_today": 4,
    "total_revenue": "$45,978.81",
    "revenue_today": "$1,405.12",
    "revenue_this_month": "$10,000.00",
    "revenue_this_year": "$27,935.24"
  }
}
```


# Read Mrr

**This endpoint is deprecated.**

This endpoint returns your site's current MRR, including plan and usage breakouts.

```ts
async readMrr(
  atTime?: string,
  subscriptionId?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<MRRResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `atTime` | `string \| undefined` | Query, Optional | submit a timestamp in ISO8601 format to request MRR for a historic time |
| `subscriptionId` | `number \| undefined` | Query, Optional | submit the id of a subscription in order to limit results |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`MRRResponse`](../../doc/models/mrr-response.md).

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await insightsController.readMrr();
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
  "mrr": {
    "amount_in_cents": 9915593,
    "amount_formatted": "$99,155.93",
    "currency": "USD",
    "currency_symbol": "$",
    "at_time": "2021-02-03T14:23:17-05:00",
    "breakouts": {
      "plan_amount_in_cents": 9913593,
      "plan_amount_formatted": "$99,135.93",
      "usage_amount_in_cents": 2000,
      "usage_amount_formatted": "$20.00"
    }
  }
}
```


# List Mrr Movements

**This endpoint is deprecated.**

This endpoint returns your site's MRR movements.

## Understanding MRR movements

This endpoint will aid in accessing your site's [MRR Report](https://maxio.zendesk.com/hc/en-us/articles/24285894587021-MRR-Analytics) data.

Whenever a subscription event occurs that causes your site's MRR to change (such as a signup or upgrade), we record an MRR movement. These records are accessible via the MRR Movements endpoint.

Each MRR Movement belongs to a subscription and contains a timestamp, category, and an amount. `line_items` represent the subscription's product configuration at the time of the movement.

### Plan & Usage Breakouts

In the MRR Report UI, we support a setting to [include or exclude](https://maxio.zendesk.com/hc/en-us/articles/24285894587021-MRR-Analytics#displaying-component-based-metered-usage-in-mrr) usage revenue. In the MRR APIs, responses include `plan` and `usage` breakouts.

Plan includes revenue from:

* Products
* Quantity-Based Components
* On/Off Components

Usage includes revenue from:

* Metered Components
* Prepaid Usage Components

```ts
async listMrrMovements(
  {
    subscriptionId,
    page,
    perPage,
    direction,
  }: {
    subscriptionId?: number;
    page?: number;
    perPage?: number;
    direction?: SortingDirection;
  },
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListMRRResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number \| undefined` | Query, Optional | optionally filter results by subscription |
| `page` | `number \| undefined` | Query, Optional | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`.<br><br>**Default**: `1`<br><br>**Constraints**: `>= 1` |
| `perPage` | `number \| undefined` | Query, Optional | This parameter indicates how many records to fetch in each request. Default value is 10. The maximum allowed values is 50; any per_page value over 50 will be changed to 50.<br>Use in query `per_page=20`.<br><br>**Default**: `10`<br><br>**Constraints**: `<= 50` |
| `direction` | [`SortingDirection \| undefined`](../../doc/models/sorting-direction.md) | Query, Optional | Controls the order in which results are returned.<br>Use in query `direction=asc`. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListMRRResponse`](../../doc/models/list-mrr-response.md).

## Example Usage

```ts
const collect = {
  page: 2,
  perPage: 20
}

try {
  const { result, ...httpResponse } = await insightsController.listMrrMovements(collect);
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
  "mrr": {
    "page": 0,
    "per_page": 10,
    "total_pages": 80,
    "total_entries": 791,
    "currency": "USD",
    "currency_symbol": "$",
    "movements": [
      {
        "timestamp": "2014-12-03T13:59:46-05:00",
        "amount_in_cents": 2173,
        "amount_formatted": "$21.73",
        "description": "Awesome Company signed up for Super Product ($21.73/mo)",
        "category": "new_business",
        "breakouts": {
          "plan_amount_in_cents": 2173,
          "plan_amount_formatted": "$21.73",
          "usage_amount_in_cents": 0,
          "usage_amount_formatted": "$0.00"
        },
        "line_items": [
          {
            "product_id": 306386,
            "component_id": 0,
            "price_point_id": 3856987,
            "name": "Cached Queries",
            "mrr": 2173,
            "mrr_movements": [
              {
                "amount": 2173,
                "category": "new_business",
                "subscriber_delta": 0,
                "lead_delta": 0
              }
            ],
            "quantity": 1,
            "prev_quantity": 0,
            "recurring": true
          }
        ],
        "subscription_id": 12355,
        "subscriber_name": "Amy Smith"
      }
    ]
  }
}
```


# List Mrr Per Subscription

**This endpoint is deprecated.**

This endpoint returns your site's current MRR, including plan and usage breakouts split per subscription.

```ts
async listMrrPerSubscription(
  {
    filter,
    atTime,
    page,
    perPage,
    direction,
  }: {
    filter?: ListMrrFilter;
    atTime?: string;
    page?: number;
    perPage?: number;
    direction?: Direction;
  },
  requestOptions?: RequestOptions
): Promise<ApiResponse<SubscriptionMRRResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `filter` | [`ListMrrFilter \| undefined`](../../doc/models/list-mrr-filter.md) | Query, Optional | Filter to use for List MRR per subscription operation |
| `atTime` | `string \| undefined` | Query, Optional | Submit a timestamp in ISO8601 format to request MRR for a historic time. Use in query: `at_time=2022-01-10T10:00:00-05:00`. |
| `page` | `number \| undefined` | Query, Optional | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`.<br><br>**Default**: `1`<br><br>**Constraints**: `>= 1` |
| `perPage` | `number \| undefined` | Query, Optional | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`.<br><br>**Default**: `20`<br><br>**Constraints**: `<= 200` |
| `direction` | [`Direction \| undefined`](../../doc/models/direction.md) | Query, Optional | Controls the order in which results are returned. Records are ordered by subscription_id in ascending order by default. Use in query `direction=desc`. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SubscriptionMRRResponse`](../../doc/models/subscription-mrr-response.md).

## Example Usage

```ts
const collect = {
  filter: {
    subscriptionIds: [
      1,
      2,
      3
    ],
  },
  atTime: 'at_time=2022-01-10T10:00:00-05:00',
  page: 2,
  perPage: 50,
  direction: Direction.Desc
}

try {
  const { result, ...httpResponse } = await insightsController.listMrrPerSubscription(collect);
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
| 400 | Bad Request | [`SubscriptionsMrrErrorResponseError`](../../doc/models/subscriptions-mrr-error-response-error.md) |

