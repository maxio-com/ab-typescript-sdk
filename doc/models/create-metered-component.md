
# Create Metered Component

## Structure

`CreateMeteredComponent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `meteredComponent` | [`MeteredComponent`](../../doc/models/metered-component.md) | Required | - |

## Example

```ts
import {
  CreateMeteredComponent,
  IntervalUnit,
  PricingScheme,
} from '@maxio-com/advanced-billing-sdk';

const createMeteredComponent: CreateMeteredComponent = {
  meteredComponent: {
    name: 'name0',
    unitName: 'unit_name2',
    pricingScheme: PricingScheme.Stairstep,
    description: 'description0',
    handle: 'handle6',
    taxable: false,
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
    pricePoints: [
      {
        name: 'name2',
        handle: 'handle8',
        pricingScheme: PricingScheme.PerUnit,
        interval: 92,
        intervalUnit: IntervalUnit.Day,
      },
      {
        name: 'name2',
        handle: 'handle8',
        pricingScheme: PricingScheme.PerUnit,
        interval: 92,
        intervalUnit: IntervalUnit.Day,
      },
      {
        name: 'name2',
        handle: 'handle8',
        pricingScheme: PricingScheme.PerUnit,
        interval: 92,
        intervalUnit: IntervalUnit.Day,
      }
    ],
  },
};
```

