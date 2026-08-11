
# Update Component Price Point Request

## Structure

`UpdateComponentPricePointRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricePoint` | [`UpdateComponentPricePoint \| undefined`](../../doc/models/update-component-price-point.md) | Optional | - |

## Example

```ts
import {
  PricingScheme,
  UpdateComponentPricePointRequest,
} from '@maxio-com/advanced-billing-sdk';

const updateComponentPricePointRequest: UpdateComponentPricePointRequest = {
  pricePoint: {
    name: 'name0',
    handle: 'handle6',
    pricingScheme: PricingScheme.PerUnit,
    useSiteExchangeRate: false,
    taxIncluded: false,
  },
};
```

