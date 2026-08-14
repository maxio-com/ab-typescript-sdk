
# Coupon Currency Response

## Structure

`CouponCurrencyResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currencyPrices` | [`CouponCurrency[] \| undefined`](../../doc/models/coupon-currency.md) | Optional | - |

## Example

```ts
import { CouponCurrencyResponse } from '@maxio-com/advanced-billing-sdk';

const couponCurrencyResponse: CouponCurrencyResponse = {
  currencyPrices: [
    {
      id: 50,
      currency: 'currency8',
      price: 233.74,
      couponId: 224,
    }
  ],
};
```

