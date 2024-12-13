# Subscription Invoice Account

```ts
const subscriptionInvoiceAccountController = new SubscriptionInvoiceAccountController(client);
```

## Class Name

`SubscriptionInvoiceAccountController`

## Methods

* [Read Account Balances](../../doc/controllers/subscription-invoice-account.md#read-account-balances)
* [Create Prepayment](../../doc/controllers/subscription-invoice-account.md#create-prepayment)
* [List Prepayments](../../doc/controllers/subscription-invoice-account.md#list-prepayments)
* [Issue Service Credit](../../doc/controllers/subscription-invoice-account.md#issue-service-credit)
* [Deduct Service Credit](../../doc/controllers/subscription-invoice-account.md#deduct-service-credit)
* [Refund Prepayment](../../doc/controllers/subscription-invoice-account.md#refund-prepayment)


# Read Account Balances

Returns the `balance_in_cents` of the Subscription's Pending Discount, Service Credit, and Prepayment accounts, as well as the sum of the Subscription's open, payable invoices.

```ts
async readAccountBalances(
  subscriptionId: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AccountBalances>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AccountBalances`](../../doc/models/account-balances.md)

## Example Usage

```ts
const subscriptionId = 222;

try {
  const { result, ...httpResponse } = await subscriptionInvoiceAccountController.readAccountBalances(subscriptionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Prepayment

## Create Prepayment

In order to specify a prepayment made against a subscription, specify the `amount, memo, details, method`.

When the `method` specified is `"credit_card_on_file"`, the prepayment amount will be collected using the default credit card payment profile and applied to the prepayment account balance.  This is especially useful for manual replenishment of prepaid subscriptions.

Please note that you **can't** pass `amount_in_cents`.

```ts
async createPrepayment(
  subscriptionId: number,
  body?: CreatePrepaymentRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreatePrepaymentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription |
| `body` | [`CreatePrepaymentRequest \| undefined`](../../doc/models/create-prepayment-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreatePrepaymentResponse`](../../doc/models/create-prepayment-response.md)

## Example Usage

```ts
const subscriptionId = 222;

const body: CreatePrepaymentRequest = {
  prepayment: {
    amount: 100,
    details: 'John Doe signup for $100',
    memo: 'Signup for $100',
    method: CreatePrepaymentMethod.Check,
  },
};

try {
  const { result, ...httpResponse } = await subscriptionInvoiceAccountController.createPrepayment(
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
  "prepayment": {
    "id": 1,
    "subscription_id": 1,
    "amount_in_cents": 10000,
    "memo": "John Doe - Prepayment",
    "created_at": "2020-07-31T05:52:32-04:00",
    "starting_balance_in_cents": 0,
    "ending_balance_in_cents": -10000
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | `ApiError` |


# List Prepayments

This request will list a subscription's prepayments.

```ts
async listPrepayments(
  subscriptionId: number,
  page?: number,
  perPage?: number,
  filter?: ListPrepaymentsFilter,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PrepaymentsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription |
| `page` | `number \| undefined` | Query, Optional | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`.<br>**Default**: `1`<br>**Constraints**: `>= 1` |
| `perPage` | `number \| undefined` | Query, Optional | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`.<br>**Default**: `20`<br>**Constraints**: `<= 200` |
| `filter` | [`ListPrepaymentsFilter \| undefined`](../../doc/models/list-prepayments-filter.md) | Query, Optional | Filter to use for List Prepayments operations |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PrepaymentsResponse`](../../doc/models/prepayments-response.md)

## Example Usage

```ts
const collect = {
  subscriptionId: 222,
  page: 2,
  perPage: 50,
  filter: {
    dateField: ListPrepaymentDateField.CreatedAt,
    startDate: '2024-01-01',
    endDate: '2024-01-31',
  }
}

try {
  const { result, ...httpResponse } = await subscriptionInvoiceAccountController.listPrepayments(collect);
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
  "prepayments": [
    {
      "id": 17,
      "subscription_id": 3558750,
      "amount_in_cents": 2000,
      "remaining_amount_in_cents": 1100,
      "refunded_amount_in_cents": 0,
      "external": true,
      "memo": "test",
      "details": "test details",
      "payment_type": "cash",
      "created_at": "2022-01-18T22:45:41+11:00"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | Not Found | `ApiError` |


# Issue Service Credit

Credit will be added to the subscription in the amount specified in the request body. The credit is subsequently applied to the next generated invoice.

```ts
async issueServiceCredit(
  subscriptionId: number,
  body?: IssueServiceCreditRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ServiceCredit>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription |
| `body` | [`IssueServiceCreditRequest \| undefined`](../../doc/models/issue-service-credit-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ServiceCredit`](../../doc/models/service-credit.md)

## Example Usage

```ts
const subscriptionId = 222;

const body: IssueServiceCreditRequest = {
  serviceCredit: {
    amount: '1',
  },
};

try {
  const { result, ...httpResponse } = await subscriptionInvoiceAccountController.issueServiceCredit(
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
  "id": 101,
  "amount_in_cents": 1000,
  "ending_balance_in_cents": 2000,
  "entry_type": "Credit",
  "memo": "Credit to group account"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | `ApiError` |


# Deduct Service Credit

Credit will be removed from the subscription in the amount specified in the request body. The credit amount being deducted must be equal to or less than the current credit balance.

```ts
async deductServiceCredit(
  subscriptionId: number,
  body?: DeductServiceCreditRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription |
| `body` | [`DeductServiceCreditRequest \| undefined`](../../doc/models/deduct-service-credit-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const subscriptionId = 222;

const body: DeductServiceCreditRequest = {
  deduction: {
    amount: '1',
    memo: 'Deduction',
  },
};

try {
  const { result, ...httpResponse } = await subscriptionInvoiceAccountController.deductServiceCredit(
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
| 422 | Unprocessable Entity (WebDAV) | `ApiError` |


# Refund Prepayment

This endpoint will refund, completely or partially, a particular prepayment applied to a subscription. The `prepayment_id` will be the account transaction ID of the original payment. The prepayment must have some amount remaining in order to be refunded.

The amount may be passed either as a decimal, with `amount`, or an integer in cents, with `amount_in_cents`.

```ts
async refundPrepayment(
  subscriptionId: number,
  prepaymentId: bigint,
  body?: RefundPrepaymentRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PrepaymentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription |
| `prepaymentId` | `bigint` | Template, Required | id of prepayment |
| `body` | [`RefundPrepaymentRequest \| undefined`](../../doc/models/refund-prepayment-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PrepaymentResponse`](../../doc/models/prepayment-response.md)

## Example Usage

```ts
const subscriptionId = 222;

const prepaymentId = BigInt(228);

try {
  const { result, ...httpResponse } = await subscriptionInvoiceAccountController.refundPrepayment(
  subscriptionId,
  prepaymentId
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
| 400 | Bad Request | [`RefundPrepaymentBaseErrorsResponseError`](../../doc/models/refund-prepayment-base-errors-response-error.md) |
| 404 | Not Found | `ApiError` |
| 422 | Unprocessable Entity | `ApiError` |

