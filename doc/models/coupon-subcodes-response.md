
# Coupon Subcodes Response

## Structure

`CouponSubcodesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `createdCodes` | `string[] \| undefined` | Optional | - |
| `duplicateCodes` | `string[] \| undefined` | Optional | - |
| `invalidCodes` | `string[] \| undefined` | Optional | - |

## Example

```ts
import { CouponSubcodesResponse } from '@maxio-com/advanced-billing-sdk';

const couponSubcodesResponse: CouponSubcodesResponse = {
  createdCodes: [
    'created_codes7'
  ],
  duplicateCodes: [
    'duplicate_codes8'
  ],
  invalidCodes: [
    'invalid_codes4',
    'invalid_codes3'
  ],
};
```

