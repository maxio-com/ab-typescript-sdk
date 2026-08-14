
# Update Product Price Point Request

## Structure

`UpdateProductPricePointRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricePoint` | [`UpdateProductPricePoint`](../../doc/models/update-product-price-point.md) | Required | - |

## Example

```ts
import {
  UpdateProductPricePointRequest,
} from '@maxio-com/advanced-billing-sdk';

const updateProductPricePointRequest: UpdateProductPricePointRequest = {
  pricePoint: {
    handle: 'handle6',
    priceInCents: BigInt(196),
  },
};
```

