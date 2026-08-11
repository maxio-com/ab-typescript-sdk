
# Create Currency Prices Request

## Structure

`CreateCurrencyPricesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currencyPrices` | [`CreateCurrencyPrice[]`](../../doc/models/create-currency-price.md) | Required | - |

## Example

```ts
import { CreateCurrencyPricesRequest } from '@maxio-com/advanced-billing-sdk';

const createCurrencyPricesRequest: CreateCurrencyPricesRequest = {
  currencyPrices: [
    {
      currency: 'currency8',
      price: 233.74,
      priceId: 116,
    }
  ],
};
```

