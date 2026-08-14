
# Clone Component Price Point Request

## Structure

`CloneComponentPricePointRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricePoint` | [`CloneComponentPricePoint`](../../doc/models/clone-component-price-point.md) | Required | - |

## Example

```ts
import {
  CloneComponentPricePointRequest,
} from '@maxio-com/advanced-billing-sdk';

const cloneComponentPricePointRequest: CloneComponentPricePointRequest = {
  pricePoint: {
    name: 'name0',
    handle: 'handle6',
  },
};
```

