
# Coupon Request

## Structure

`CouponRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `coupon` | [`CouponPayload \| undefined`](../../doc/models/coupon-payload.md) | Optional | - |
| `restrictedProducts` | `Record<string, boolean> \| undefined` | Optional | An object where the keys are product IDs or handles (prefixed with 'handle:'), and the values are booleans indicating if the coupon should be applicable to the product. |
| `restrictedComponents` | `Record<string, boolean> \| undefined` | Optional | An object where the keys are component IDs or handles (prefixed with 'handle:'), and the values are booleans indicating if the coupon should be applicable to the component. |

## Example

```ts
import { CouponRequest } from '@maxio-com/advanced-billing-sdk';

const couponRequest: CouponRequest = {
  coupon: {
    name: 'name4',
    code: 'code2',
    description: 'description6',
    percentage: 'String3',
    amountInCents: BigInt(230),
  },
  restrictedProducts: {
    'key0': true,
    'key1': false
  },
  restrictedComponents: {
    'key0': true,
    'key1': false
  },
};
```

