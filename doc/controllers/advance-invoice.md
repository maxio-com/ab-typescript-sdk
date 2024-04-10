# Advance Invoice

```ts
const advanceInvoiceController = new AdvanceInvoiceController(client);
```

## Class Name

`AdvanceInvoiceController`

## Methods

* [Issue Advance Invoice](../../doc/controllers/advance-invoice.md#issue-advance-invoice)
* [Read Advance Invoice](../../doc/controllers/advance-invoice.md#read-advance-invoice)
* [Void Advance Invoice](../../doc/controllers/advance-invoice.md#void-advance-invoice)


# Issue Advance Invoice

Generate an invoice in advance for a subscription's next renewal date. [Please see our docs](../../doc/models/invoice.md) for more information on advance invoices, including eligibility on generating one; for the most part, they function like any other invoice, except they are issued early and have special behavior upon being voided.
A subscription may only have one advance invoice per billing period. Attempting to issue an advance invoice when one already exists will return an error.
That said, regeneration of the invoice may be forced with the params `force: true`, which will void an advance invoice if one exists and generate a new one. If no advance invoice exists, a new one will be generated.
We recommend using either the create or preview endpoints for proforma invoices to preview this advance invoice before using this endpoint to generate it.

```ts
async issueAdvanceInvoice(
  subscriptionId: number,
  body?: IssueAdvanceInvoiceRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Invoice>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription |
| `body` | [`IssueAdvanceInvoiceRequest \| undefined`](../../doc/models/issue-advance-invoice-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Invoice`](../../doc/models/invoice.md)

## Example Usage

```ts
const subscriptionId = 222;

const body: IssueAdvanceInvoiceRequest = {
  force: true,
};

try {
  const { result, ...httpResponse } = await advanceInvoiceController.issueAdvanceInvoice(
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

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | Not Found | `ApiError` |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |


# Read Advance Invoice

Once an advance invoice has been generated for a subscription's upcoming renewal, it can be viewed through this endpoint. There can only be one advance invoice per subscription per billing cycle.

```ts
async readAdvanceInvoice(
  subscriptionId: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Invoice>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Invoice`](../../doc/models/invoice.md)

## Example Usage

```ts
const subscriptionId = 222;

try {
  const { result, ...httpResponse } = await advanceInvoiceController.readAdvanceInvoice(subscriptionId);
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


# Void Advance Invoice

Void a subscription's existing advance invoice. Once voided, it can later be regenerated if desired.
A `reason` is required in order to void, and the invoice must have an open status. Voiding will cause any prepayments and credits that were applied to the invoice to be returned to the subscription. For a full overview of the impact of voiding, please [see our help docs](../../doc/models/invoice.md).

```ts
async voidAdvanceInvoice(
  subscriptionId: number,
  body?: VoidInvoiceRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Invoice>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription |
| `body` | [`VoidInvoiceRequest \| undefined`](../../doc/models/void-invoice-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Invoice`](../../doc/models/invoice.md)

## Example Usage

```ts
const subscriptionId = 222;

try {
  const { result, ...httpResponse } = await advanceInvoiceController.voidAdvanceInvoice(subscriptionId);
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

