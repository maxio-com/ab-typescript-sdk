
# Create EBB Component

## Structure

`CreateEBBComponent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `eventBasedComponent` | [`EBBComponent`](../../doc/models/ebb-component.md) | Required | - |

## Example

```ts
import {
  CreateEBBComponent,
  IntervalUnit,
  PricingScheme,
} from '@maxio-com/advanced-billing-sdk';

const createEBBComponent: CreateEBBComponent = {
  eventBasedComponent: {
    name: 'name8',
    unitName: 'unit_name0',
    pricingScheme: PricingScheme.Stairstep,
    eventBasedBillingMetricId: 68,
    description: 'description8',
    handle: 'handle4',
    taxable: false,
    prices: [
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
      }
    ],
  },
};
```

