# Sites

```ts
const sitesController = new SitesController(client);
```

## Class Name

`SitesController`

## Methods

* [Read Site](../../doc/controllers/sites.md#read-site)
* [Clear Site](../../doc/controllers/sites.md#clear-site)
* [List Chargify Js Public Keys](../../doc/controllers/sites.md#list-chargify-js-public-keys)


# Read Site

This endpoint allows you to fetch some site data.

Full documentation on Sites in the Advanced Billing UI can be located [here](https://maxio.zendesk.com/hc/en-us/sections/24250550707085-Sites).

Specifically, the [Clearing Site Data](https://maxio.zendesk.com/hc/en-us/articles/24250617028365-Clearing-Site-Data) section is extremely relevant to this endpoint documentation.

#### Relationship invoicing enabled

If site has RI enabled then you will see more settings like:

    "customer_hierarchy_enabled": true,
    "whopays_enabled": true,
    "whopays_default_payer": "self"

You can read more about these settings here:
[Who Pays & Customer Hierarchy](https://maxio.zendesk.com/hc/en-us/articles/24252185211533-Customer-Hierarchies-WhoPays)

```ts
async readSite(
  requestOptions?: RequestOptions
): Promise<ApiResponse<SiteResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SiteResponse`](../../doc/models/site-response.md).

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await sitesController.readSite();
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
  "site": {
    "id": 0,
    "name": "string",
    "subdomain": "string",
    "currency": "string",
    "seller_id": 0,
    "non_primary_currencies": [
      "string"
    ],
    "relationship_invoicing_enabled": true,
    "schedule_subscription_cancellation_enabled": true,
    "customer_hierarchy_enabled": true,
    "whopays_enabled": true,
    "whopays_default_payer": "string",
    "default_payment_collection_method": "string",
    "organization_address": {
      "street": null,
      "line2": null,
      "city": null,
      "state": null,
      "zip": null,
      "country": null,
      "name": "string",
      "phone": "string"
    },
    "tax_configuration": {
      "kind": "custom",
      "fully_configured": true,
      "destination_address": "shipping_then_billing"
    },
    "net_terms": {
      "default_net_terms": 0,
      "automatic_net_terms": 0,
      "remittance_net_terms": 0,
      "net_terms_on_remittance_signups_enabled": false,
      "custom_net_terms_enabled": false
    },
    "test": true,
    "allocation_settings": {
      "upgrade_charge": "prorated",
      "downgrade_credit": "none",
      "accrue_charge": "true"
    }
  }
}
```


# Clear Site

This call is asynchronous and there may be a delay before the site data is fully deleted. If you are clearing site data for an automated test, you will need to build in a delay and/or check that there are no products, etc., in the site before proceeding.

**This functionality will only work on sites in TEST mode. Attempts to perform this on sites in “live” mode will result in a response of 403 FORBIDDEN.**

```ts
async clearSite(
  cleanupScope?: CleanupScope,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cleanupScope` | [`CleanupScope \| undefined`](../../doc/models/cleanup-scope.md) | Query, Optional | `all`: Will clear all products, customers, and related subscriptions from the site.<br>`customers`: Will clear only customers and related subscriptions (leaving the products untouched) for the site.<br>Revenue will also be reset to 0.<br>Use in query `cleanup_scope=all`.<br><br>**Default**: `CleanupScope.All` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const cleanupScope = CleanupScope.All;

try {
  const { result, ...httpResponse } = await sitesController.clearSite(cleanupScope);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Chargify Js Public Keys

This endpoint returns public keys used for Chargify.js.

```ts
async listChargifyJsPublicKeys(
  {
    page,
    perPage,
  }: {
    page?: number;
    perPage?: number;
  },
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListPublicKeysResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `number \| undefined` | Query, Optional | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`.<br><br>**Default**: `1`<br><br>**Constraints**: `>= 1` |
| `perPage` | `number \| undefined` | Query, Optional | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`.<br><br>**Default**: `20`<br><br>**Constraints**: `<= 200` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListPublicKeysResponse`](../../doc/models/list-public-keys-response.md).

## Example Usage

```ts
const collect = {
  page: 2,
  perPage: 50
}

try {
  const { result, ...httpResponse } = await sitesController.listChargifyJsPublicKeys(collect);
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
  "chargify_js_keys": [
    {
      "public_key": "chjs_ftrxt7c4fv6f74wchjs_5zyn7gnwv",
      "requires_security_token": false,
      "created_at": "2021-01-01T05:00:00-04:00"
    }
  ],
  "meta": {
    "total_count": 1,
    "current_page": 1,
    "total_pages": 1,
    "per_page": 10
  }
}
```

