
# Component Price Point Response

## Structure

`ComponentPricePointResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricePoint` | [`ComponentPricePoint`](../../doc/models/component-price-point.md) | Required | - |

## Example

```ts
import {
  ComponentPricePointResponse,
  PricePointType,
  PricingScheme,
} from '@maxio-com/advanced-billing-sdk';

const componentPricePointResponse: ComponentPricePointResponse = {
  pricePoint: {
    id: 248,
    type: PricePointType.Default,
    mDefault: false,
    name: 'name0',
    pricingScheme: PricingScheme.PerUnit,
  },
};
```

