
# Currency Price

## Structure

`CurrencyPrice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `currency` | `string \| undefined` | Optional | - |
| `price` | `number \| undefined` | Optional | - |
| `formattedPrice` | `string \| undefined` | Optional | - |
| `priceId` | `number \| undefined` | Optional | - |
| `pricePointId` | `number \| undefined` | Optional | - |
| `productPricePointId` | `number \| undefined` | Optional | - |
| `role` | [`CurrencyPriceRole \| undefined`](../../doc/models/currency-price-role.md) | Optional | Role for the price. |

## Example

```ts
import { CurrencyPrice } from '@maxio-com/advanced-billing-sdk';

const currencyPrice: CurrencyPrice = {
  id: 208,
  currency: 'currency4',
  price: 70.88,
  formattedPrice: 'formatted_price2',
  priceId: 214,
};
```

