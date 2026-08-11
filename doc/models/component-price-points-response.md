
# Component Price Points Response

## Structure

`ComponentPricePointsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricePoints` | [`ComponentPricePoint[] \| undefined`](../../doc/models/component-price-point.md) | Optional | - |
| `meta` | [`ListPublicKeysMeta \| undefined`](../../doc/models/list-public-keys-meta.md) | Optional | - |

## Example

```ts
import {
  ComponentPricePointsResponse,
  PricePointType,
  PricingScheme,
} from '@maxio-com/advanced-billing-sdk';

const componentPricePointsResponse: ComponentPricePointsResponse = {
  pricePoints: [
    {
      id: 40,
      type: PricePointType.Default,
      mDefault: false,
      name: 'name2',
      pricingScheme: PricingScheme.PerUnit,
    },
    {
      id: 40,
      type: PricePointType.Default,
      mDefault: false,
      name: 'name2',
      pricingScheme: PricingScheme.PerUnit,
    },
    {
      id: 40,
      type: PricePointType.Default,
      mDefault: false,
      name: 'name2',
      pricingScheme: PricingScheme.PerUnit,
    }
  ],
  meta: {
    totalCount: 150,
    currentPage: 126,
    totalPages: 138,
    perPage: 152,
  },
};
```

