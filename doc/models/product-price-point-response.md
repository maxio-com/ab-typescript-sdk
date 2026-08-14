
# Product Price Point Response

## Structure

`ProductPricePointResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricePoint` | [`ProductPricePoint`](../../doc/models/product-price-point.md) | Required | - |

## Example

```ts
import { ProductPricePointResponse } from '@maxio-com/advanced-billing-sdk';

const productPricePointResponse: ProductPricePointResponse = {
  pricePoint: {
    id: 248,
    name: 'name0',
    handle: 'handle6',
    priceInCents: BigInt(196),
    interval: 44,
  },
};
```

