
# Component Response

## Structure

`ComponentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `component` | [`Component`](../../doc/models/component.md) | Required | - |

## Example

```ts
import {
  ComponentResponse,
  ItemCategory,
  PricingScheme,
} from '@maxio-com/advanced-billing-sdk';

const componentResponse: ComponentResponse = {
  component: {
    id: 80,
    name: 'name8',
    handle: 'handle4',
    pricingScheme: PricingScheme.PerUnit,
    unitName: 'unit_name0',
    itemCategory: ItemCategory.EnumBusinessSoftware,
  },
};
```

