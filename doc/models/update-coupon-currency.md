
# Update Coupon Currency

## Structure

`UpdateCouponCurrency`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | ISO code for the site defined currency. |
| `price` | `number` | Required | Price for the given currency. |

## Example

```ts
import { UpdateCouponCurrency } from '@maxio-com/advanced-billing-sdk';

const updateCouponCurrency: UpdateCouponCurrency = {
  currency: 'currency4',
  price: 100,
};
```

