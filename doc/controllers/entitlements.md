# Entitlements

Entitlements report what a subscription is allowed to do, and how much of it, based on the features granted by the subscription's products and components.

When more than one product or component grants the same feature, the values are aggregated into one entry per feature key and periodicity. For more information, see [Read Subscription Entitlements with the API](https://docs.maxio.com/billing/catalog/entitlements/read-subscription-entitlements-with-the-api).

```ts
const entitlementsController = new EntitlementsController(client);
```

## Class Name

`EntitlementsController`


# Read Subscription Entitlements

Returns every feature a subscription is entitled to, collapsed into one entry per feature key and periodicity window across all products and components on the subscription. A `usage_limit` feature granted with two different periodicities comes back as two entries sharing one `feature_key`, each identified by its own `periodicity_key`.

When more than one product or component grants the same feature key and periodicity, the values are combined:

- **`access_right`** features are combined with a boolean OR. If any contributor grants access, the aggregate is `true`. `source_products` only lists the contributors that granted `true`.
- **`usage_limit`** features are summed across every contributor sharing the same periodicity window. `source_products` lists every contributor. Grants with different periodicities are not summed together. Each periodicity is returned as a separate entry.
- **`service_right`** features are not combined: one contributor's value wins. Do not rely on which one when several grant the same feature key.

`enabled` reflects both the aggregated value and the subscription's state. The field is `false` whenever the subscription is not in a live state (`active`, `trialing`, `assessing`, `past_due`, `soft_failure`), regardless of the aggregated value. Entitlements deliberately stay enabled through dunning.

```ts
async readSubscriptionEntitlements(
  subscriptionId: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AggregatedEntitlementsResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AggregatedEntitlementsResponse`](../../doc/models/aggregated-entitlements-response.md).

## Example Usage

```ts
const subscriptionId = 222;

try {
  const response = await entitlementsController.readSubscriptionEntitlements(subscriptionId);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof ErrorListResponseError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "subscription_id": 12345,
  "customer_id": 678,
  "status": "active",
  "entitlements": [
    {
      "feature_key": "feature.sso",
      "periodicity_key": "feature.sso",
      "name": "SSO",
      "type": "access_right",
      "value": true,
      "enabled": true,
      "periodicity": null,
      "source_products": [
        "Gold Plan"
      ]
    },
    {
      "feature_key": "usage.api_calls",
      "periodicity_key": "usage.api_calls:1:month",
      "name": "API Calls",
      "type": "usage_limit",
      "value": 50000,
      "enabled": true,
      "periodicity": {
        "interval": 1,
        "unit": "month"
      },
      "source_products": [
        "Gold Plan"
      ]
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 403 | Forbidden | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |
| 404 | Not Found | `ApiError` |

