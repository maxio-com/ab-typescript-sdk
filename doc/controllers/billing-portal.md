# Billing Portal

```ts
const billingPortalController = new BillingPortalController(client);
```

## Class Name

`BillingPortalController`

## Methods

* [Enable Billing Portal for Customer](../../doc/controllers/billing-portal.md#enable-billing-portal-for-customer)
* [Read Billing Portal Link](../../doc/controllers/billing-portal.md#read-billing-portal-link)
* [Resend Billing Portal Invitation](../../doc/controllers/billing-portal.md#resend-billing-portal-invitation)
* [Revoke Billing Portal Access](../../doc/controllers/billing-portal.md#revoke-billing-portal-access)


# Enable Billing Portal for Customer

## Billing Portal Documentation

Full documentation on how the Billing Portal operates within the Chargify UI can be located [here](https://chargify.zendesk.com/hc/en-us/articles/4407648972443).

This documentation is focused on how the to configure the Billing Portal Settings, as well as Subscriber Interaction and Merchant Management of the Billing Portal.

You can use this endpoint to enable Billing Portal access for a Customer, with the option of sending the Customer an Invitation email at the same time.

## Billing Portal Security

If your customer has been invited to the Billing Portal, then they will receive a link to manage their subscription (the “Management URL”) automatically at the bottom of their statements, invoices, and receipts. **This link changes periodically for security and is only valid for 65 days.**

If you need to provide your customer their Management URL through other means, you can retrieve it via the API. Because the URL is cryptographically signed with a timestamp, it is not possible for merchants to generate the URL without requesting it from Chargify.

In order to prevent abuse & overuse, we ask that you request a new URL only when absolutely necessary. Management URLs are good for 65 days, so you should re-use a previously generated one as much as possible. If you use the URL frequently (such as to display on your website), please **do not** make an API request to Chargify every time.

```ts
async enableBillingPortalForCustomer(
  customerId: number,
  autoInvite?: AutoInvite,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CustomerResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `number` | Template, Required | The Chargify id of the customer |
| `autoInvite` | [`AutoInvite \| undefined`](../../doc/models/auto-invite.md) | Query, Optional | When set to 1, an Invitation email will be sent to the Customer.<br>When set to 0, or not sent, an email will not be sent.<br>Use in query: `auto_invite=1`. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CustomerResponse`](../../doc/models/customer-response.md)

## Example Usage

```ts
const customerId = 150;

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await billingPortalController.enableBillingPortalForCustomer(customerId);
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


# Read Billing Portal Link

This method will provide to the API user the exact URL required for a subscriber to access the Billing Portal.

## Rules for Management Link API

+ When retrieving a management URL, multiple requests for the same customer in a short period will return the **same** URL
+ We will not generate a new URL for 15 days
+ You must cache and remember this URL if you are going to need it again within 15 days
+ Only request a new URL after the `new_link_available_at` date
+ You are limited to 15 requests for the same URL. If you make more than 15 requests before `new_link_available_at`, you will be blocked from further Management URL requests (with a response code `429`)

```ts
async readBillingPortalLink(
  customerId: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PortalManagementLink>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `number` | Template, Required | The Chargify id of the customer |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PortalManagementLink`](../../doc/models/portal-management-link.md)

## Example Usage

```ts
const customerId = 150;

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await billingPortalController.readBillingPortalLink(customerId);
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
  "url": "https://www.billingportal.com/manage/19804639/1517596469/bd16498719a7d3e6",
  "fetch_count": 1,
  "created_at": "2018-02-02T18:34:29Z",
  "new_link_available_at": "2018-02-17T18:34:29Z",
  "expires_at": "2018-04-08T17:34:29Z",
  "last_invite_sent_at": "2018-02-02T18:34:29Z"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |
| 429 | Too Many Requests | [`TooManyManagementLinkRequestsError`](../../doc/models/too-many-management-link-requests-error.md) |


# Resend Billing Portal Invitation

You can resend a customer's Billing Portal invitation.

If you attempt to resend an invitation 5 times within 30 minutes, you will receive a `422` response with `error` message in the body.

If you attempt to resend an invitation when the Billing Portal is already disabled for a Customer, you will receive a `422` error response.

If you attempt to resend an invitation when the Billing Portal is already disabled for a Customer, you will receive a `422` error response.

If you attempt to resend an invitation when the Customer does not exist a Customer, you will receive a `404` error response.

## Limitations

This endpoint will only return a JSON response.

```ts
async resendBillingPortalInvitation(
  customerId: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResentInvitation>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `number` | Template, Required | The Chargify id of the customer |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResentInvitation`](../../doc/models/resent-invitation.md)

## Example Usage

```ts
const customerId = 150;

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await billingPortalController.resendBillingPortalInvitation(customerId);
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
  "last_sent_at": "enim Duis esse dolore",
  "last_accepted_at": "adipisicing magna do in irure",
  "send_invite_link_text": "veniam sit",
  "uninvited_count": 66254678
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | Not Found | `ApiError` |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |


# Revoke Billing Portal Access

You can revoke a customer's Billing Portal invitation.

If you attempt to revoke an invitation when the Billing Portal is already disabled for a Customer, you will receive a 422 error response.

## Limitations

This endpoint will only return a JSON response.

```ts
async revokeBillingPortalAccess(
  customerId: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RevokedInvitation>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `number` | Template, Required | The Chargify id of the customer |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RevokedInvitation`](../../doc/models/revoked-invitation.md)

## Example Usage

```ts
const customerId = 150;

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await billingPortalController.revokeBillingPortalAccess(customerId);
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
  "last_sent_at": "Not Invited",
  "last_accepted_at": "Invite Revoked",
  "uninvited_count": 8
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | `ApiError` |

