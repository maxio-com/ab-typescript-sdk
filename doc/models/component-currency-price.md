
# Component Currency Price

## Structure

`ComponentCurrencyPrice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `currency` | `string \| undefined` | Optional | - |
| `price` | `string \| undefined` | Optional | - |
| `formattedPrice` | `string \| undefined` | Optional | - |
| `priceId` | `number \| undefined` | Optional | - |
| `pricePointId` | `number \| undefined` | Optional | - |

## Example

```ts
import { ComponentCurrencyPrice } from '@maxio-com/advanced-billing-sdk';

const componentCurrencyPrice: ComponentCurrencyPrice = {
  id: 128,
  currency: 'currency2',
  price: 'price4',
  formattedPrice: 'formatted_price6',
  priceId: 38,
};
```

