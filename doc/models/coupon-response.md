
# Coupon Response

## Structure

`CouponResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `coupon` | [`Coupon \| undefined`](../../doc/models/coupon.md) | Optional | - |

## Example

```ts
import { CouponResponse } from '@maxio-com/advanced-billing-sdk';

const couponResponse: CouponResponse = {
  coupon: {
    id: 196,
    name: 'name4',
    code: 'code2',
    description: 'description6',
    amount: 97.66,
  },
};
```

