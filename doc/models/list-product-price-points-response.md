
# List Product Price Points Response

## Structure

`ListProductPricePointsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricePoints` | [`ProductPricePoint[]`](../../doc/models/product-price-point.md) | Required | - |

## Example

```ts
import {
  ListProductPricePointsResponse,
} from '@maxio-com/advanced-billing-sdk';

const listProductPricePointsResponse: ListProductPricePointsResponse = {
  pricePoints: [
    {
      id: 40,
      name: 'name2',
      handle: 'handle8',
      priceInCents: BigInt(108),
      interval: 92,
    }
  ],
};
```

