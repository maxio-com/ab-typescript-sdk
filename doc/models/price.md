
# Price

## Structure

`Price`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startingQuantity` | [`PriceStartingQuantity`](../../doc/models/containers/price-starting-quantity.md) | Required | This is a container for one-of cases. |
| `endingQuantity` | [`PriceEndingQuantity \| null \| undefined`](../../doc/models/containers/price-ending-quantity.md) | Optional | This is a container for one-of cases. |
| `unitPrice` | [`PriceUnitPrice`](../../doc/models/containers/price-unit-price.md) | Required | This is a container for one-of cases. |

## Example

```ts
import { Price } from '@maxio-com/advanced-billing-sdk';

const price: Price = {
  startingQuantity: 132,
  unitPrice: 70.44,
  endingQuantity: 6,
};
```

