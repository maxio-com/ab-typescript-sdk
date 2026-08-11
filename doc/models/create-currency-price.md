
# Create Currency Price

## Structure

`CreateCurrencyPrice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string \| undefined` | Optional | ISO code for a currency defined on the site level |
| `price` | `number \| undefined` | Optional | Price for the price level in this currency |
| `priceId` | `number \| undefined` | Optional | ID of the price that this corresponds with |

## Example

```ts
import { CreateCurrencyPrice } from '@maxio-com/advanced-billing-sdk';

const createCurrencyPrice: CreateCurrencyPrice = {
  currency: 'currency2',
  price: 54.8,
  priceId: 142,
};
```

