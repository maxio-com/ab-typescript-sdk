
# Update Product Price Point

## Structure

`UpdateProductPricePoint`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `handle` | `string \| undefined` | Optional | - |
| `priceInCents` | `bigint \| undefined` | Optional | - |

## Example

```ts
import { UpdateProductPricePoint } from '@maxio-com/advanced-billing-sdk';

const updateProductPricePoint: UpdateProductPricePoint = {
  handle: 'handle2',
  priceInCents: BigInt(154),
};
```

