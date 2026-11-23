
# Create Component Price Point Request

## Structure

`CreateComponentPricePointRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricePoint` | [`CreateComponentPricePointRequestPricePoint`](../../doc/models/containers/create-component-price-point-request-price-point.md) | Required | This is a container for any-of cases. |

## Example

```ts
import {
  CreateComponentPricePointRequest,
  PricingScheme,
} from '@maxio-com/advanced-billing-sdk';

const createComponentPricePointRequest: CreateComponentPricePointRequest = {
  pricePoint: {
    name: 'name0',
    pricingScheme: PricingScheme.PerUnit,
    prices: [
      {
        startingQuantity: 242,
        unitPrice: 23.26,
        endingQuantity: 40,
      }
    ],
    handle: 'handle6',
    secondaryPricing: {
      pricingScheme: PricingScheme.Stairstep,
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
        }
      ],
    },
    secondaryPricingScheme: PricingScheme.Stairstep,
    useSiteExchangeRate: true,
    taxIncluded: false,
  },
};
```

