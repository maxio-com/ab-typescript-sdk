
# Bulk Create Product Price Points Response

## Structure

`BulkCreateProductPricePointsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricePoints` | [`ProductPricePoint[] \| undefined`](../../doc/models/product-price-point.md) | Optional | - |

## Example

```ts
import {
  BulkCreateProductPricePointsResponse,
} from '@maxio-com/advanced-billing-sdk';

const bulkCreateProductPricePointsResponse: BulkCreateProductPricePointsResponse = {
  pricePoints: [
    {
      id: 40,
      name: 'name2',
      handle: 'handle8',
      priceInCents: BigInt(108),
      interval: 92,
    },
    {
      id: 40,
      name: 'name2',
      handle: 'handle8',
      priceInCents: BigInt(108),
      interval: 92,
    },
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

