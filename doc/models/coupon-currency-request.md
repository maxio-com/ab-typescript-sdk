
# Coupon Currency Request

## Structure

`CouponCurrencyRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currencyPrices` | [`UpdateCouponCurrency[]`](../../doc/models/update-coupon-currency.md) | Required | - |

## Example

```ts
import { CouponCurrencyRequest } from '@maxio-com/advanced-billing-sdk';

const couponCurrencyRequest: CouponCurrencyRequest = {
  currencyPrices: [
    {
      currency: 'currency8',
      price: 78,
    }
  ],
};
```

