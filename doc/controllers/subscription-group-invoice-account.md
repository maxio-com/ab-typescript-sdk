# Subscription Group Invoice Account

```ts
const subscriptionGroupInvoiceAccountController = new SubscriptionGroupInvoiceAccountController(client);
```

## Class Name

`SubscriptionGroupInvoiceAccountController`

## Methods

* [Create Subscription Group Prepayment](../../doc/controllers/subscription-group-invoice-account.md#create-subscription-group-prepayment)
* [List Prepayments for Subscription Group](../../doc/controllers/subscription-group-invoice-account.md#list-prepayments-for-subscription-group)
* [Issue Subscription Group Service Credit](../../doc/controllers/subscription-group-invoice-account.md#issue-subscription-group-service-credit)
* [Deduct Subscription Group Service Credit](../../doc/controllers/subscription-group-invoice-account.md#deduct-subscription-group-service-credit)


# Create Subscription Group Prepayment

A prepayment can be added for a subscription group identified by the group's `uid`. This endpoint requires a `amount`, `details`, `method`, and `memo`. On success, the prepayment will be added to the group's prepayment balance.

```ts
async createSubscriptionGroupPrepayment(  uid: string,
  body?: SubscriptionGroupPrepaymentRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<SubscriptionGroupPrepaymentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string` | Template, Required | The uid of the subscription group |
| `body` | [`SubscriptionGroupPrepaymentRequest \| undefined`](../../doc/models/subscription-group-prepayment-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SubscriptionGroupPrepaymentResponse`](../../doc/models/subscription-group-prepayment-response.md)

## Example Usage

```ts
const uid = 'uid0';

try {
  const { result, ...httpResponse } = await subscriptionGroupInvoiceAccountController.createSubscriptionGroupPrepayment(uid);
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
  "id": 6049554,
  "amount_in_cents": 10000,
  "ending_balance_in_cents": 5000,
  "entry_type": "Debit",
  "memo": "Debit from invoice account."
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |


# List Prepayments for Subscription Group

This request will list a subscription group's prepayments.

```ts
async listPrepaymentsForSubscriptionGroup(  uid: string,
  page?: number,
  perPage?: number,
  filter?: ListPrepaymentsFilter,
requestOptions?: RequestOptions): Promise<ApiResponse<ListSubscriptionGroupPrepaymentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string` | Template, Required | The uid of the subscription group |
| `page` | `number \| undefined` | Query, Optional | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| `perPage` | `number \| undefined` | Query, Optional | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |
| `filter` | [`ListPrepaymentsFilter \| undefined`](../../doc/models/list-prepayments-filter.md) | Query, Optional | Filter to use for List Prepayments operations |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListSubscriptionGroupPrepaymentResponse`](../../doc/models/list-subscription-group-prepayment-response.md)

## Example Usage

```ts
const collect = {
  uid: 'uid0',
  page: 2,
  perPage: 50,
  filter: {
    dateField: ListPrepaymentDateField.CreatedAt,
    startDate: '2024-01-01',
    endDate: '2024-01-31',
  }
}
try {
  const { result, ...httpResponse } = await subscriptionGroupInvoiceAccountController.listPrepaymentsForSubscriptionGroup(collect);
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
      "prepayment": {
        "id": 142,
        "subscription_group_uid": "grp_b4qhx3bvx72t8",
        "amount_in_cents": 10000,
        "remaining_amount_in_cents": 10000,
        "details": "test",
        "external": true,
        "memo": "test",
        "payment_type": "cash",
        "created_at": "2023-06-21T04:37:02-04:00"
      }
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | Not Found | `ApiError` |


# Issue Subscription Group Service Credit

Credit can be issued for a subscription group identified by the group's `uid`. Credit will be added to the group in the amount specified in the request body. The credit will be applied to group member invoices as they are generated.

```ts
async issueSubscriptionGroupServiceCredit(  uid: string,
  body?: IssueServiceCreditRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<ServiceCreditResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string` | Template, Required | The uid of the subscription group |
| `body` | [`IssueServiceCreditRequest \| undefined`](../../doc/models/issue-service-credit-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ServiceCreditResponse`](../../doc/models/service-credit-response.md)

## Example Usage

```ts
const uid = 'uid0';

const body: IssueServiceCreditRequest = {
  serviceCredit: {
    amount: 10,
    memo: 'Credit the group account',
  },
};

try {
  const { result, ...httpResponse } = await subscriptionGroupInvoiceAccountController.issueSubscriptionGroupServiceCredit(
  uid,
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
  "service_credit": {
    "id": 101,
    "amount_in_cents": 1000,
    "ending_balance_in_cents": 2000,
    "entry_type": "Credit",
    "memo": "Credit to group account"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |


# Deduct Subscription Group Service Credit

Credit can be deducted for a subscription group identified by the group's `uid`. Credit will be deducted from the group in the amount specified in the request body.

```ts
async deductSubscriptionGroupServiceCredit(  uid: string,
  body?: DeductServiceCreditRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<ServiceCredit>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string` | Template, Required | The uid of the subscription group |
| `body` | [`DeductServiceCreditRequest \| undefined`](../../doc/models/deduct-service-credit-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ServiceCredit`](../../doc/models/service-credit.md)

## Example Usage

```ts
const uid = 'uid0';

const body: DeductServiceCreditRequest = {
  deduction: {
    amount: 10,
    memo: 'Deduct from group account',
  },
};

try {
  const { result, ...httpResponse } = await subscriptionGroupInvoiceAccountController.deductSubscriptionGroupServiceCredit(
  uid,
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
  "id": 100,
  "amount_in_cents": 1000,
  "ending_balance_in_cents": 0,
  "entry_type": "Debit",
  "memo": "Debit from group account"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |

