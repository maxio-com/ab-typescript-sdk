# Subscription Renewals

```ts
const subscriptionRenewalsController = new SubscriptionRenewalsController(client);
```

## Class Name

`SubscriptionRenewalsController`

## Methods

* [Create Scheduled Renewal Configuration](../../doc/controllers/subscription-renewals.md#create-scheduled-renewal-configuration)
* [List Scheduled Renewal Configurations](../../doc/controllers/subscription-renewals.md#list-scheduled-renewal-configurations)
* [Read Scheduled Renewal Configuration](../../doc/controllers/subscription-renewals.md#read-scheduled-renewal-configuration)
* [Update Scheduled Renewal Configuration](../../doc/controllers/subscription-renewals.md#update-scheduled-renewal-configuration)
* [Schedule Scheduled Renewal Lock In](../../doc/controllers/subscription-renewals.md#schedule-scheduled-renewal-lock-in)
* [Lock in Scheduled Renewal Immediately](../../doc/controllers/subscription-renewals.md#lock-in-scheduled-renewal-immediately)
* [Unpublish Scheduled Renewal Configuration](../../doc/controllers/subscription-renewals.md#unpublish-scheduled-renewal-configuration)
* [Cancel Scheduled Renewal Configuration](../../doc/controllers/subscription-renewals.md#cancel-scheduled-renewal-configuration)
* [Create Scheduled Renewal Configuration Item](../../doc/controllers/subscription-renewals.md#create-scheduled-renewal-configuration-item)
* [Update Scheduled Renewal Configuration Item](../../doc/controllers/subscription-renewals.md#update-scheduled-renewal-configuration-item)
* [Delete Scheduled Renewal Configuration Item](../../doc/controllers/subscription-renewals.md#delete-scheduled-renewal-configuration-item)


# Create Scheduled Renewal Configuration

Creates a scheduled renewal configuration for a subscription. The scheduled renewal is based on the subscription’s current product and component setup.

```ts
async createScheduledRenewalConfiguration(
  subscriptionId: number,
  body?: ScheduledRenewalConfigurationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ScheduledRenewalConfigurationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription. |
| `body` | [`ScheduledRenewalConfigurationRequest \| undefined`](../../doc/models/scheduled-renewal-configuration-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ScheduledRenewalConfigurationResponse`](../../doc/models/scheduled-renewal-configuration-response.md).

## Example Usage

```ts
const subscriptionId = 222;

const body: ScheduledRenewalConfigurationRequest = {
  renewalConfiguration: {
    startsAt: '2024-12-01T00:00:00Z',
    endsAt: '2025-12-01T00:00:00Z',
    lockInAt: '2024-11-15T00:00:00Z',
    contractId: 222,
  },
};

try {
  const response = await subscriptionRenewalsController.createScheduledRenewalConfiguration(
    subscriptionId,
    body
  );

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
  "scheduled_renewal_configuration": {
    "id": 123,
    "site_id": 456,
    "subscription_id": 12345,
    "starts_at": "2024-12-01T00:00:00Z",
    "ends_at": "2025-12-01T00:00:00Z",
    "lock_in_at": "2024-11-15T00:00:00Z",
    "created_at": "2024-09-01T12:00:00Z",
    "status": "scheduled",
    "scheduled_renewal_configuration_items": [
      {
        "id": 789,
        "subscription_id": 12345,
        "subscription_renewal_configuration_id": 123,
        "item_id": 4,
        "item_type": "Product",
        "item_subclass": "Product",
        "price_point_id": 7,
        "price_point_type": "ProductPricePoint",
        "quantity": 1,
        "decimal_quantity": "1.0",
        "created_at": "2024-09-01T12:00:00Z"
      }
    ],
    "contract": {
      "id": 107,
      "maxio_id": "maxio-id",
      "number": null,
      "register": {
        "id": 12,
        "maxio_id": "maxio_id-id",
        "name": "Register",
        "currency_code": "USD"
      }
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |


# List Scheduled Renewal Configurations

Lists scheduled renewal configurations for the subscription and permits an optional status query filter.

```ts
async listScheduledRenewalConfigurations(
  subscriptionId: number,
  status?: Status,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ScheduledRenewalConfigurationsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription. |
| `status` | [`Status \| undefined`](../../doc/models/status.md) | Query, Optional | (Optional) Status filter for scheduled renewal configurations. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ScheduledRenewalConfigurationsResponse`](../../doc/models/scheduled-renewal-configurations-response.md).

## Example Usage

```ts
const subscriptionId = 222;

try {
  const response = await subscriptionRenewalsController.listScheduledRenewalConfigurations(subscriptionId);

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
  }
}
```

## Example Response *(as JSON)*

```json
{
  "scheduled_renewal_configurations": [
    {
      "id": 123,
      "site_id": 456,
      "subscription_id": 12345,
      "starts_at": "2024-12-01T00:00:00Z",
      "ends_at": "2025-12-01T00:00:00Z",
      "lock_in_at": "2024-11-15T00:00:00Z",
      "created_at": "2024-09-01T12:00:00Z",
      "status": "scheduled",
      "scheduled_renewal_configuration_items": [
        {
          "id": 789,
          "subscription_id": 12345,
          "subscription_renewal_configuration_id": 123,
          "item_id": 4,
          "item_type": "Product",
          "item_subclass": "Product",
          "price_point_id": 7,
          "price_point_type": "ProductPricePoint",
          "quantity": 1,
          "decimal_quantity": "1.0",
          "created_at": "2024-09-01T12:00:00Z"
        }
      ],
      "contract": {
        "id": 107,
        "maxio_id": "maxio-id",
        "number": null,
        "register": {
          "id": 12,
          "maxio_id": "maxio-id",
          "name": "Register",
          "currency_code": "USD"
        }
      }
    }
  ]
}
```


# Read Scheduled Renewal Configuration

Retrieves the configuration settings for the scheduled renewal.

```ts
async readScheduledRenewalConfiguration(
  subscriptionId: number,
  id: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ScheduledRenewalConfigurationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription. |
| `id` | `number` | Template, Required | The renewal id. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ScheduledRenewalConfigurationResponse`](../../doc/models/scheduled-renewal-configuration-response.md).

## Example Usage

```ts
const subscriptionId = 222;

const id = 112;

try {
  const response = await subscriptionRenewalsController.readScheduledRenewalConfiguration(
    subscriptionId,
    id
  );

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
  }
}
```

## Example Response *(as JSON)*

```json
{
  "scheduled_renewal_configuration": {
    "id": 123,
    "site_id": 456,
    "subscription_id": 12345,
    "starts_at": "2024-12-01T00:00:00Z",
    "ends_at": "2025-12-01T00:00:00Z",
    "lock_in_at": "2024-11-15T00:00:00Z",
    "created_at": "2024-09-01T12:00:00Z",
    "status": "scheduled",
    "scheduled_renewal_configuration_items": [
      {
        "id": 789,
        "subscription_id": 12345,
        "subscription_renewal_configuration_id": 123,
        "item_id": 4,
        "item_type": "Product",
        "item_subclass": "Product",
        "price_point_id": 7,
        "price_point_type": "ProductPricePoint",
        "quantity": 1,
        "decimal_quantity": "1.0",
        "created_at": "2024-09-01T12:00:00Z"
      }
    ],
    "contract": {
      "id": 107,
      "maxio_id": "maxio-id",
      "number": null,
      "register": {
        "id": 12,
        "maxio_id": "maxio-id",
        "name": "Register",
        "currency_code": "USD"
      }
    }
  }
}
```


# Update Scheduled Renewal Configuration

Updates an existing configuration.

```ts
async updateScheduledRenewalConfiguration(
  subscriptionId: number,
  id: number,
  body?: ScheduledRenewalConfigurationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ScheduledRenewalConfigurationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription. |
| `id` | `number` | Template, Required | The renewal id. |
| `body` | [`ScheduledRenewalConfigurationRequest \| undefined`](../../doc/models/scheduled-renewal-configuration-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ScheduledRenewalConfigurationResponse`](../../doc/models/scheduled-renewal-configuration-response.md).

## Example Usage

```ts
const subscriptionId = 222;

const id = 112;

const body: ScheduledRenewalConfigurationRequest = {
  renewalConfiguration: {
    startsAt: '2025-12-01T00:00:00Z',
    endsAt: '2026-12-01T00:00:00Z',
    lockInAt: '2025-11-15T00:00:00Z',
  },
};

try {
  const response = await subscriptionRenewalsController.updateScheduledRenewalConfiguration(
    subscriptionId,
    id,
    body
  );

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
  "scheduled_renewal_configuration": {
    "id": 123,
    "site_id": 456,
    "subscription_id": 12345,
    "starts_at": "2025-12-01T00:00:00Z",
    "ends_at": "2026-12-01T00:00:00Z",
    "lock_in_at": "2025-11-15T00:00:00Z",
    "created_at": "2025-09-01T12:00:00Z",
    "status": "scheduled",
    "scheduled_renewal_configuration_items": [
      {
        "id": 789,
        "subscription_id": 12345,
        "subscription_renewal_configuration_id": 123,
        "item_id": 4,
        "item_type": "Product",
        "item_subclass": "Product",
        "price_point_id": 7,
        "price_point_type": "ProductPricePoint",
        "quantity": 1,
        "decimal_quantity": "1.0",
        "created_at": "2025-09-01T12:00:00Z"
      }
    ],
    "contract": {
      "id": 107,
      "maxio_id": "maxio-id",
      "number": null,
      "register": {
        "id": 12,
        "maxio_id": "maxio-id",
        "name": "Register",
        "currency_code": "USD"
      }
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |


# Schedule Scheduled Renewal Lock In

Schedules a future lock-in date for the renewal.

```ts
async scheduleScheduledRenewalLockIn(
  subscriptionId: number,
  id: number,
  body?: ScheduledRenewalLockInRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ScheduledRenewalConfigurationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription. |
| `id` | `number` | Template, Required | The renewal id. |
| `body` | [`ScheduledRenewalLockInRequest \| undefined`](../../doc/models/scheduled-renewal-lock-in-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ScheduledRenewalConfigurationResponse`](../../doc/models/scheduled-renewal-configuration-response.md).

## Example Usage

```ts
const subscriptionId = 222;

const id = 112;

const body: ScheduledRenewalLockInRequest = {
  lockInAt: '2025-11-15',
};

try {
  const response = await subscriptionRenewalsController.scheduleScheduledRenewalLockIn(
    subscriptionId,
    id,
    body
  );

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
  "scheduled_renewal_configuration": {
    "id": 123,
    "site_id": 456,
    "subscription_id": 12345,
    "starts_at": "2025-12-01T00:00:00Z",
    "ends_at": "2026-12-01T00:00:00Z",
    "lock_in_at": "2025-11-15T00:00:00Z",
    "created_at": "2025-09-01T12:00:00Z",
    "status": "scheduled",
    "scheduled_renewal_configuration_items": [
      {
        "id": 789,
        "subscription_id": 12345,
        "subscription_renewal_configuration_id": 123,
        "item_id": 4,
        "item_type": "Product",
        "item_subclass": "Product",
        "price_point_id": 7,
        "price_point_type": "ProductPricePoint",
        "quantity": 1,
        "decimal_quantity": "1.0",
        "created_at": "2025-09-01T12:00:00Z"
      }
    ],
    "contract": {
      "id": 107,
      "maxio_id": "maxio-id",
      "number": null,
      "register": {
        "id": 12,
        "maxio_id": "maxio-id",
        "name": "Register",
        "currency_code": "USD"
      }
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |


# Lock in Scheduled Renewal Immediately

Locks in the renewal immediately.

```ts
async lockInScheduledRenewalImmediately(
  subscriptionId: number,
  id: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ScheduledRenewalConfigurationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription. |
| `id` | `number` | Template, Required | The renewal id. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ScheduledRenewalConfigurationResponse`](../../doc/models/scheduled-renewal-configuration-response.md).

## Example Usage

```ts
const subscriptionId = 222;

const id = 112;

try {
  const response = await subscriptionRenewalsController.lockInScheduledRenewalImmediately(
    subscriptionId,
    id
  );

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
  "scheduled_renewal_configuration": {
    "id": 987,
    "site_id": 321,
    "subscription_id": 12345,
    "starts_at": "2025-12-01T00:00:00Z",
    "ends_at": "2026-12-01T00:00:00Z",
    "lock_in_at": "2025-11-15T00:00:00Z",
    "created_at": "2025-09-01T12:00:00Z",
    "status": "scheduled",
    "scheduled_renewal_configuration_items": [
      {
        "id": 555,
        "subscription_id": 12345,
        "subscription_renewal_configuration_id": 987,
        "item_id": 42,
        "item_type": "Product",
        "price_point_id": 73,
        "price_point_type": "ProductPricePoint",
        "quantity": 1,
        "decimal_quantity": "1.0",
        "created_at": "2025-09-01T12:00:00Z"
      }
    ],
    "contract": {
      "id": 222,
      "maxio_id": "maxio-id",
      "number": null,
      "register": {
        "id": 12,
        "maxio_id": "maxio-id",
        "name": "Register",
        "currency_code": "USD"
      }
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |


# Unpublish Scheduled Renewal Configuration

Returns a scheduled renewal configuration to an editable state.

```ts
async unpublishScheduledRenewalConfiguration(
  subscriptionId: number,
  id: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ScheduledRenewalConfigurationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription. |
| `id` | `number` | Template, Required | The renewal id. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ScheduledRenewalConfigurationResponse`](../../doc/models/scheduled-renewal-configuration-response.md).

## Example Usage

```ts
const subscriptionId = 222;

const id = 112;

try {
  const response = await subscriptionRenewalsController.unpublishScheduledRenewalConfiguration(
    subscriptionId,
    id
  );

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
  "scheduled_renewal_configuration": {
    "id": 987,
    "site_id": 321,
    "subscription_id": 12345,
    "starts_at": "2025-12-01T00:00:00Z",
    "ends_at": "2026-12-01T00:00:00Z",
    "lock_in_at": "2025-11-15T00:00:00Z",
    "created_at": "2025-09-01T12:00:00Z",
    "status": "draft",
    "scheduled_renewal_configuration_items": [
      {
        "id": 555,
        "subscription_id": 12345,
        "subscription_renewal_configuration_id": 987,
        "item_id": 42,
        "item_type": "Product",
        "price_point_id": 73,
        "price_point_type": "ProductPricePoint",
        "quantity": 1,
        "decimal_quantity": "1.0",
        "created_at": "2025-09-01T12:00:00Z"
      }
    ],
    "contract": {
      "id": 222
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |


# Cancel Scheduled Renewal Configuration

Cancels a scheduled renewal configuration.

```ts
async cancelScheduledRenewalConfiguration(
  subscriptionId: number,
  id: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ScheduledRenewalConfigurationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription. |
| `id` | `number` | Template, Required | The renewal id. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ScheduledRenewalConfigurationResponse`](../../doc/models/scheduled-renewal-configuration-response.md).

## Example Usage

```ts
const subscriptionId = 222;

const id = 112;

try {
  const response = await subscriptionRenewalsController.cancelScheduledRenewalConfiguration(
    subscriptionId,
    id
  );

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
  "scheduled_renewal_configuration": {
    "id": 987,
    "site_id": 321,
    "subscription_id": 12345,
    "starts_at": "2025-12-01T00:00:00Z",
    "ends_at": "2026-12-01T00:00:00Z",
    "lock_in_at": "2025-11-15T00:00:00Z",
    "created_at": "2025-09-01T12:00:00Z",
    "status": "canceled",
    "scheduled_renewal_configuration_items": [
      {
        "id": 555,
        "subscription_id": 12345,
        "subscription_renewal_configuration_id": 987,
        "item_id": 42,
        "item_type": "Product",
        "price_point_id": 73,
        "price_point_type": "ProductPricePoint",
        "quantity": 1,
        "decimal_quantity": "1.0",
        "created_at": "2025-09-01T12:00:00Z"
      }
    ],
    "contract": {
      "id": 222
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |


# Create Scheduled Renewal Configuration Item

Adds product and component line items to the scheduled renewal.

```ts
async createScheduledRenewalConfigurationItem(
  subscriptionId: number,
  scheduledRenewalsConfigurationId: number,
  body?: ScheduledRenewalConfigurationItemRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ScheduledRenewalConfigurationItemResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription. |
| `scheduledRenewalsConfigurationId` | `number` | Template, Required | The scheduled renewal configuration id. |
| `body` | [`ScheduledRenewalConfigurationItemRequest \| undefined`](../../doc/models/scheduled-renewal-configuration-item-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ScheduledRenewalConfigurationItemResponse`](../../doc/models/scheduled-renewal-configuration-item-response.md).

## Example Usage

```ts
const subscriptionId = 222;

const scheduledRenewalsConfigurationId = 250;

const body: ScheduledRenewalConfigurationItemRequest = {
  renewalConfigurationItem: {
    itemType: 'Component',
    itemId: 57,
    quantity: 1,
    customPrice: {
      pricingScheme: PricingScheme.Stairstep,
      prices: [
        {
          startingQuantity: 1,
          unitPrice: 5,
          endingQuantity: null,
        }
      ],
    },
  },
};

try {
  const response = await subscriptionRenewalsController.createScheduledRenewalConfigurationItem(
    subscriptionId,
    scheduledRenewalsConfigurationId,
    body
  );

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
  "scheduled_renewal_configuration_item": {
    "id": 555,
    "subscription_id": 12345,
    "subscription_renewal_configuration_id": 987,
    "item_id": 42,
    "item_type": "Product",
    "item_subclass": "SubscriptionProduct",
    "price_point_id": 73,
    "price_point_type": "ProductPricePoint",
    "quantity": 1,
    "decimal_quantity": "1.0",
    "created_at": "2025-09-01T12:00:00Z"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |


# Update Scheduled Renewal Configuration Item

Updates an existing configuration item’s pricing and quantity.

```ts
async updateScheduledRenewalConfigurationItem(
  subscriptionId: number,
  scheduledRenewalsConfigurationId: number,
  id: number,
  body?: ScheduledRenewalUpdateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ScheduledRenewalConfigurationItemResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription. |
| `scheduledRenewalsConfigurationId` | `number` | Template, Required | The scheduled renewal configuration id. |
| `id` | `number` | Template, Required | The scheduled renewal configuration item id. |
| `body` | [`ScheduledRenewalUpdateRequest \| undefined`](../../doc/models/scheduled-renewal-update-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ScheduledRenewalConfigurationItemResponse`](../../doc/models/scheduled-renewal-configuration-item-response.md).

## Example Usage

```ts
const subscriptionId = 222;

const scheduledRenewalsConfigurationId = 250;

const id = 112;

const body: ScheduledRenewalUpdateRequest = {
  renewalConfigurationItem: {
    itemType: 'Component',
    itemId: 57,
    quantity: 2,
    customPrice: {
      pricingScheme: PricingScheme.Stairstep,
      prices: [
        {
          startingQuantity: 1,
          unitPrice: 5,
          endingQuantity: null,
        }
      ],
    },
  },
};

try {
  const response = await subscriptionRenewalsController.updateScheduledRenewalConfigurationItem(
    subscriptionId,
    scheduledRenewalsConfigurationId,
    id,
    body
  );

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
  "scheduled_renewal_configuration_item": {
    "id": 555,
    "subscription_id": 12345,
    "subscription_renewal_configuration_id": 987,
    "item_id": 42,
    "item_type": "Component",
    "item_subclass": "SubscriptionComponent",
    "price_point_id": 73,
    "price_point_type": "ComponentPricePoint",
    "quantity": 3,
    "decimal_quantity": "3.0",
    "created_at": "2025-09-01T12:00:00Z"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |


# Delete Scheduled Renewal Configuration Item

Removes an item from the pending renewal configuration.

```ts
async deleteScheduledRenewalConfigurationItem(
  subscriptionId: number,
  scheduledRenewalsConfigurationId: number,
  id: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription. |
| `scheduledRenewalsConfigurationId` | `number` | Template, Required | The scheduled renewal configuration id. |
| `id` | `number` | Template, Required | The scheduled renewal configuration item id. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const subscriptionId = 222;

const scheduledRenewalsConfigurationId = 250;

const id = 112;

try {
  const response = await subscriptionRenewalsController.deleteScheduledRenewalConfigurationItem(
    subscriptionId,
    scheduledRenewalsConfigurationId,
    id
  );

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

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |

