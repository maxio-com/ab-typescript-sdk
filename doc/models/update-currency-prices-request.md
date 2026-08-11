
# Update Currency Prices Request

## Structure

`UpdateCurrencyPricesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currencyPrices` | [`UpdateCurrencyPrice[]`](../../doc/models/update-currency-price.md) | Required | - |

## Example

```ts
import { UpdateCurrencyPricesRequest } from '@maxio-com/advanced-billing-sdk';

const updateCurrencyPricesRequest: UpdateCurrencyPricesRequest = {
  currencyPrices: [
    {
      id: 50,
      price: 233.74,
    }
  ],
};
```

