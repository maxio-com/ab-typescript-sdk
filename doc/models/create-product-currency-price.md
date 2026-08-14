
# Create Product Currency Price

## Structure

`CreateProductCurrencyPrice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | ISO code for one of the site level currencies. |
| `price` | `number` | Required | Price for the given role. |
| `role` | [`CurrencyPriceRole`](../../doc/models/currency-price-role.md) | Required | Role for the price. |

## Example

```ts
import {
  CreateProductCurrencyPrice,
  CurrencyPriceRole,
} from '@maxio-com/advanced-billing-sdk';

const createProductCurrencyPrice: CreateProductCurrencyPrice = {
  currency: 'currency2',
  price: 78,
  role: CurrencyPriceRole.Baseline,
};
```

