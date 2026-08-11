
# Create Product Currency Prices Request

## Structure

`CreateProductCurrencyPricesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currencyPrices` | [`CreateProductCurrencyPrice[]`](../../doc/models/create-product-currency-price.md) | Required | - |

## Example

```ts
import {
  CreateProductCurrencyPricesRequest,
  CurrencyPriceRole,
} from '@maxio-com/advanced-billing-sdk';

const createProductCurrencyPricesRequest: CreateProductCurrencyPricesRequest = {
  currencyPrices: [
    {
      currency: 'currency8',
      price: 78,
      role: CurrencyPriceRole.Initial,
    }
  ],
};
```

