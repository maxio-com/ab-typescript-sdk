
# Coupon Currency

## Structure

`CouponCurrency`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| null \| undefined` | Optional | - |
| `currency` | `string \| undefined` | Optional | - |
| `price` | `number \| null \| undefined` | Optional | - |
| `couponId` | `number \| undefined` | Optional | - |

## Example

```ts
import { CouponCurrency } from '@maxio-com/advanced-billing-sdk';

const couponCurrency: CouponCurrency = {
  id: 202,
  currency: 'currency0',
  price: 14.62,
  couponId: 184,
};
```

