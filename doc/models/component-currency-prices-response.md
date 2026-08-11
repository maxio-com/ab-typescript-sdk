
# Component Currency Prices Response

## Structure

`ComponentCurrencyPricesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currencyPrices` | [`ComponentCurrencyPrice[]`](../../doc/models/component-currency-price.md) | Required | - |

## Example

```ts
import {
  ComponentCurrencyPricesResponse,
} from '@maxio-com/advanced-billing-sdk';

const componentCurrencyPricesResponse: ComponentCurrencyPricesResponse = {
  currencyPrices: [
    {
      id: 50,
      currency: 'currency8',
      price: 'price4',
      formattedPrice: 'formatted_price6',
      priceId: 116,
    }
  ],
};
```

