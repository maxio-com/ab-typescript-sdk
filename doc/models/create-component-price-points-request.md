
# Create Component Price Points Request

## Structure

`CreateComponentPricePointsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricePoints` | [`CreateComponentPricePointsRequestPricePoints[]`](../../doc/models/containers/create-component-price-points-request-price-points.md) | Required | This is Array of a container for any-of cases. |

## Example

```ts
import {
  CreateComponentPricePointsRequest,
  IntervalUnit,
  PricingScheme,
} from '@maxio-com/advanced-billing-sdk';

const createComponentPricePointsRequest: CreateComponentPricePointsRequest = {
  pricePoints: [
    {
      name: 'name0',
      pricingScheme: PricingScheme.PerUnit,
      prices: [
        {
          startingQuantity: 242,
          unitPrice: 23.26,
          endingQuantity: 40,
        },
        {
          startingQuantity: 242,
          unitPrice: 23.26,
          endingQuantity: 40,
        },
        {
          startingQuantity: 242,
          unitPrice: 23.26,
          endingQuantity: 40,
        }
      ],
      handle: 'handle6',
      useSiteExchangeRate: false,
      taxIncluded: false,
      interval: 24,
      intervalUnit: IntervalUnit.Day,
    }
  ],
};
```

