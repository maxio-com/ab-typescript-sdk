# Referral Codes

```ts
const referralCodesController = new ReferralCodesController(client);
```

## Class Name

`ReferralCodesController`


# Validate Referral Code

Use this method to determine if the referral code is valid and applicable within your Site. This method is useful for validating referral codes that are entered by a customer.

## Referrals Documentation

Full documentation on how to use the referrals feature in the Advanced Billing UI can be located [here](https://maxio.zendesk.com/hc/en-us/sections/24286965611405-Referrals).

## Server Response

If the referral code is valid the status code will be `200` and the referral code will be returned. If the referral code is invalid, a `404` response will be returned.

```ts
async validateReferralCode(
  code: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReferralValidationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string` | Query, Required | The referral code you are trying to validate |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ReferralValidationResponse`](../../doc/models/referral-validation-response.md).

## Example Usage

```ts
const code = 'code8';

try {
  const { result, ...httpResponse } = await referralCodesController.validateReferralCode(code);
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
  "referral_code": {
    "id": 1032514,
    "site_id": 31615,
    "subscription_id": 16254270,
    "code": "9b6cdw"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | Not Found | [`SingleStringErrorResponseError`](../../doc/models/single-string-error-response-error.md) |

