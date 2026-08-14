# Referral Codes

```ts
const referralCodesController = new ReferralCodesController(client);
```

## Class Name

`ReferralCodesController`


# Validate Referral Code

Validates whether a referral code is valid and applicable within your site. This method is useful for validating referral codes that are entered by a customer.

For more information, see [Understanding Referrals](https://docs.maxio.com/hc/en-us/articles/24286981223693-Understanding-Referrals) in the product documentation.

```ts
async validateReferralCode(
  code: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReferralValidationResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string` | Query, Required | The referral code you are trying to validate |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ReferralValidationResponse`](../../doc/models/referral-validation-response.md).

## Example Usage

```ts
const code = 'code8';

try {
  const response = await referralCodesController.validateReferralCode(code);

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
    if (error instanceof SingleStringErrorResponseError) {
      console.log(error.result);
    }
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

