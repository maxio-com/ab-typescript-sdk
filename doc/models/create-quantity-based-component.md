
# Create Quantity Based Component

## Structure

`CreateQuantityBasedComponent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `quantityBasedComponent` | [`QuantityBasedComponent`](../../doc/models/quantity-based-component.md) | Required | - |

## Example

```ts
import {
  CreateQuantityBasedComponent,
  CreditType,
  PricingScheme,
} from '@maxio-com/advanced-billing-sdk';

const createQuantityBasedComponent: CreateQuantityBasedComponent = {
  quantityBasedComponent: {
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
      }
    ],
    upgradeCharge: CreditType.Prorated,
  },
};
```

