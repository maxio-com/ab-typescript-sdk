
# List Components Price Points Response

## Structure

`ListComponentsPricePointsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricePoints` | [`ComponentPricePoint[]`](../../doc/models/component-price-point.md) | Required | - |

## Example

```ts
import {
  ListComponentsPricePointsResponse,
  PricePointType,
  PricingScheme,
} from '@maxio-com/advanced-billing-sdk';

const listComponentsPricePointsResponse: ListComponentsPricePointsResponse = {
  pricePoints: [
    {
      id: 40,
      type: PricePointType.Default,
      mDefault: false,
      name: 'name2',
      pricingScheme: PricingScheme.PerUnit,
    }
  ],
};
```

