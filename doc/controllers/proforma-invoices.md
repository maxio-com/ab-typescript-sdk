# Proforma Invoices

```ts
const proformaInvoicesController = new ProformaInvoicesController(client);
```

## Class Name

`ProformaInvoicesController`

## Methods

* [Create Consolidated Proforma Invoice](../../doc/controllers/proforma-invoices.md#create-consolidated-proforma-invoice)
* [List Subscription Group Proforma Invoices](../../doc/controllers/proforma-invoices.md#list-subscription-group-proforma-invoices)
* [Read Proforma Invoice](../../doc/controllers/proforma-invoices.md#read-proforma-invoice)
* [Create Proforma Invoice](../../doc/controllers/proforma-invoices.md#create-proforma-invoice)
* [List Proforma Invoices](../../doc/controllers/proforma-invoices.md#list-proforma-invoices)
* [Void Proforma Invoice](../../doc/controllers/proforma-invoices.md#void-proforma-invoice)
* [Preview Proforma Invoice](../../doc/controllers/proforma-invoices.md#preview-proforma-invoice)
* [Create Signup Proforma Invoice](../../doc/controllers/proforma-invoices.md#create-signup-proforma-invoice)
* [Preview Signup Proforma Invoice](../../doc/controllers/proforma-invoices.md#preview-signup-proforma-invoice)


# Create Consolidated Proforma Invoice

This endpoint will trigger the creation of a consolidated proforma invoice asynchronously. It will return a 201 with no message, or a 422 with any errors. To find and view the new consolidated proforma invoice, you may poll the subscription group listing for proforma invoices; only one consolidated proforma invoice may be created per group at a time.

If the information becomes outdated, simply void the old consolidated proforma invoice and generate a new one.

## Restrictions

Proforma invoices are only available on Relationship Invoicing sites. To create a proforma invoice, the subscription must not be prepaid, and must be in a live state.

```ts
async createConsolidatedProformaInvoice(
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
  const { result, ...httpResponse } = await proformaInvoicesController.createConsolidatedProformaInvoice(uid);
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


# List Subscription Group Proforma Invoices

Only proforma invoices with a `consolidation_level` of parent are returned.

By default, proforma invoices returned on the index will only include totals, not detailed breakdowns for `line_items`, `discounts`, `taxes`, `credits`, `payments`, `custom_fields`. To include breakdowns, pass the specific field as a key in the query with a value set to true.

```ts
async listSubscriptionGroupProformaInvoices(
  uid: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ProformaInvoice>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string` | Template, Required | The uid of the subscription group |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProformaInvoice`](../../doc/models/proforma-invoice.md)

## Example Usage

```ts
const uid = 'uid0';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await proformaInvoicesController.listSubscriptionGroupProformaInvoices(uid);
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
| 403 | Forbidden | `ApiError` |
| 404 | Not Found | `ApiError` |


# Read Proforma Invoice

Use this endpoint to read the details of an existing proforma invoice.

## Restrictions

Proforma invoices are only available on Relationship Invoicing sites.

```ts
async readProformaInvoice(
  proformaInvoiceUid: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ProformaInvoice>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `proformaInvoiceUid` | `number` | Template, Required | The uid of the proforma invoice |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProformaInvoice`](../../doc/models/proforma-invoice.md)

## Example Usage

```ts
const proformaInvoiceUid = 242;

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await proformaInvoicesController.readProformaInvoice(proformaInvoiceUid);
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
| 403 | Forbidden | `ApiError` |
| 404 | Not Found | `ApiError` |


# Create Proforma Invoice

This endpoint will create a proforma invoice and return it as a response. If the information becomes outdated, simply void the old proforma invoice and generate a new one.

If you would like to preview the next billing amounts without generating a full proforma invoice, please use the renewal preview endpoint.

## Restrictions

Proforma invoices are only available on Relationship Invoicing sites. To create a proforma invoice, the subscription must not be in a group, must not be prepaid, and must be in a live state.

```ts
async createProformaInvoice(
  subscriptionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ProformaInvoice>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The Chargify id of the subscription |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProformaInvoice`](../../doc/models/proforma-invoice.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await proformaInvoicesController.createProformaInvoice(subscriptionId);
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
| 403 | Forbidden | `ApiError` |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |


# List Proforma Invoices

By default, proforma invoices returned on the index will only include totals, not detailed breakdowns for `line_items`, `discounts`, `taxes`, `credits`, `payments`, or `custom_fields`. To include breakdowns, pass the specific field as a key in the query with a value set to `true`.

```ts
async listProformaInvoices(
  subscriptionId: string,
  startDate?: string,
  endDate?: string,
  status?: Status,
  page?: number,
  perPage?: number,
  direction?: Direction,
  lineItems?: boolean,
  discounts?: boolean,
  taxes?: boolean,
  credits?: boolean,
  payments?: boolean,
  customFields?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ProformaInvoice[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The Chargify id of the subscription |
| `startDate` | `string \| undefined` | Query, Optional | The beginning date range for the invoice's Due Date, in the YYYY-MM-DD format. |
| `endDate` | `string \| undefined` | Query, Optional | The ending date range for the invoice's Due Date, in the YYYY-MM-DD format. |
| `status` | [`Status \| undefined`](../../doc/models/status.md) | Query, Optional | The current status of the invoice.  Allowed Values: draft, open, paid, pending, voided |
| `page` | `number \| undefined` | Query, Optional | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`.<br>**Default**: `1`<br>**Constraints**: `>= 1` |
| `perPage` | `number \| undefined` | Query, Optional | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`.<br>**Default**: `20`<br>**Constraints**: `<= 200` |
| `direction` | [`Direction \| undefined`](../../doc/models/direction.md) | Query, Optional | The sort direction of the returned invoices.<br>**Default**: `Direction.Desc` |
| `lineItems` | `boolean \| undefined` | Query, Optional | Include line items data<br>**Default**: `false` |
| `discounts` | `boolean \| undefined` | Query, Optional | Include discounts data<br>**Default**: `false` |
| `taxes` | `boolean \| undefined` | Query, Optional | Include taxes data<br>**Default**: `false` |
| `credits` | `boolean \| undefined` | Query, Optional | Include credits data<br>**Default**: `false` |
| `payments` | `boolean \| undefined` | Query, Optional | Include payments data<br>**Default**: `false` |
| `customFields` | `boolean \| undefined` | Query, Optional | Include custom fields data<br>**Default**: `false` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProformaInvoice[]`](../../doc/models/proforma-invoice.md)

## Example Usage

```ts
const collect = {
  subscriptionId: 'subscription_id0',
  page: 2,
  perPage: 50,
  direction: Direction.Desc,
  lineItems: false,
  discounts: false,
  taxes: false,
  credits: false,
  payments: false,
  customFields: false
}
try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await proformaInvoicesController.listProformaInvoices(collect);
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


# Void Proforma Invoice

This endpoint will void a proforma invoice that has the status "draft".

## Restrictions

Proforma invoices are only available on Relationship Invoicing sites.

Only proforma invoices that have the appropriate status may be reopened. If the invoice identified by {uid} does not have the appropriate status, the response will have HTTP status code 422 and an error message.

A reason for the void operation is required to be included in the request body. If one is not provided, the response will have HTTP status code 422 and an error message.

```ts
async voidProformaInvoice(
  proformaInvoiceUid: string,
  body?: VoidInvoiceRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ProformaInvoice>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `proformaInvoiceUid` | `string` | Template, Required | The uid of the proforma invoice |
| `body` | [`VoidInvoiceRequest \| undefined`](../../doc/models/void-invoice-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProformaInvoice`](../../doc/models/proforma-invoice.md)

## Example Usage

```ts
const proformaInvoiceUid = 'proforma_invoice_uid4';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await proformaInvoicesController.voidProformaInvoice(proformaInvoiceUid);
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
| 403 | Forbidden | `ApiError` |
| 404 | Not Found | `ApiError` |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |


# Preview Proforma Invoice

Return a preview of the data that will be included on a given subscription's proforma invoice if one were to be generated. It will have similar line items and totals as a renewal preview, but the response will be presented in the format of a proforma invoice. Consequently it will include additional information such as the name and addresses that will appear on the proforma invoice.

The preview endpoint is subject to all the same conditions as the proforma invoice endpoint. For example, previews are only available on the Relationship Invoicing architecture, and previews cannot be made for end-of-life subscriptions.

If all the data returned in the preview is as expected, you may then create a static proforma invoice and send it to your customer. The data within a preview will not be saved and will not be accessible after the call is made.

Alternatively, if you have some proforma invoices already, you may make a preview call to determine whether any billing information for the subscription's upcoming renewal has changed.

```ts
async previewProformaInvoice(
  subscriptionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ProformaInvoicePreview>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The Chargify id of the subscription |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProformaInvoicePreview`](../../doc/models/proforma-invoice-preview.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await proformaInvoicesController.previewProformaInvoice(subscriptionId);
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
| 403 | Forbidden | `ApiError` |
| 404 | Not Found | `ApiError` |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |


# Create Signup Proforma Invoice

This endpoint is only available for Relationship Invoicing sites. It cannot be used to create consolidated proforma invoices or preview prepaid subscriptions.

Create a proforma invoice to preview costs before a subscription's signup. Like other proforma invoices, it can be emailed to the customer, voided, and publicly viewed on the chargifypay domain.

Pass a payload that resembles a subscription create or signup preview request. For example, you can specify components, coupons/a referral, offers, custom pricing, and an existing customer or payment profile to populate a shipping or billing address.

A product and customer first name, last name, and email are the minimum requirements. We recommend associating the proforma invoice with a customer_id to easily find their proforma invoices, since the subscription_id will always be blank.

```ts
async createSignupProformaInvoice(
  body?: CreateSubscriptionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ProformaInvoice>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateSubscriptionRequest \| undefined`](../../doc/models/create-subscription-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProformaInvoice`](../../doc/models/proforma-invoice.md)

## Example Usage

```ts
const body: CreateSubscriptionRequest = {
  subscription: {
    productHandle: 'gold-product',
    customerAttributes: {
      firstName: 'Myra',
      lastName: 'Maisel',
      email: 'mmaisel@example.com',
    },
  },
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await proformaInvoicesController.createSignupProformaInvoice(body);
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
| 400 | Bad Request | [`ProformaBadRequestErrorResponseError`](../../doc/models/proforma-bad-request-error-response-error.md) |
| 403 | Forbidden | `ApiError` |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorMapResponseError`](../../doc/models/error-map-response-error.md) |


# Preview Signup Proforma Invoice

This endpoint is only available for Relationship Invoicing sites. It cannot be used to create consolidated proforma invoice previews or preview prepaid subscriptions.

Create a signup preview in the format of a proforma invoice to preview costs before a subscription's signup. You have the option of optionally previewing the first renewal's costs as well. The proforma invoice preview will not be persisted.

Pass a payload that resembles a subscription create or signup preview request. For example, you can specify components, coupons/a referral, offers, custom pricing, and an existing customer or payment profile to populate a shipping or billing address.

A product and customer first name, last name, and email are the minimum requirements.

```ts
async previewSignupProformaInvoice(
  includeNextProformaInvoice?: string,
  body?: CreateSubscriptionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SignupProformaPreviewResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `includeNextProformaInvoice` | `string \| undefined` | Query, Optional | Choose to include a proforma invoice preview for the first renewal |
| `body` | [`CreateSubscriptionRequest \| undefined`](../../doc/models/create-subscription-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SignupProformaPreviewResponse`](../../doc/models/signup-proforma-preview-response.md)

## Example Usage

```ts
const body: CreateSubscriptionRequest = {
  subscription: {
    productHandle: 'gold-plan',
    customerAttributes: {
      firstName: 'first',
      lastName: 'last',
      email: 'flast@example.com',
    },
  },
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await proformaInvoicesController.previewSignupProformaInvoice(
  undefined,
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
| 400 | Bad Request | [`ProformaBadRequestErrorResponseError`](../../doc/models/proforma-bad-request-error-response-error.md) |
| 403 | Forbidden | `ApiError` |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorMapResponseError`](../../doc/models/error-map-response-error.md) |

