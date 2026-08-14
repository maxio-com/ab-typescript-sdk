
# Currency Prices Response

## Structure

`CurrencyPricesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currencyPrices` | [`CurrencyPrice[]`](../../doc/models/currency-price.md) | Required | - |

## Example

```ts
import { CurrencyPricesResponse } from '@maxio-com/advanced-billing-sdk';

const currencyPricesResponse: CurrencyPricesResponse = {
  currencyPrices: [
    {
      id: 50,
      currency: 'currency8',
      price: 233.74,
      formattedPrice: 'formatted_price6',
      priceId: 116,
    }
  ],
};
```

