
# Create Prepaid Component

## Structure

`CreatePrepaidComponent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `prepaidUsageComponent` | [`PrepaidUsageComponent`](../../doc/models/prepaid-usage-component.md) | Required | - |

## Example

```ts
import {
  CreatePrepaidComponent,
  CreditType,
  PricingScheme,
} from '@maxio-com/advanced-billing-sdk';

const createPrepaidComponent: CreatePrepaidComponent = {
  prepaidUsageComponent: {
    name: 'name2',
    unitName: 'unit_name4',
    pricingScheme: PricingScheme.PerUnit,
    overagePricing: {
      pricingScheme: PricingScheme.Stairstep,
      prices: [
        {
          startingQuantity: 242,
          unitPrice: 23.26,
          endingQuantity: 40,
        }
      ],
    },
    description: 'description2',
    handle: 'handle8',
    taxable: false,
    prices: [
      {
        startingQuantity: 242,
        unitPrice: 23.26,
        endingQuantity: 40,
      }
    ],
    upgradeCharge: CreditType.Full,
  },
};
```

