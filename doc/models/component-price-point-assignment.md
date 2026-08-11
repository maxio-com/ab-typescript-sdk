
# Component Price Point Assignment

## Structure

`ComponentPricePointAssignment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `componentId` | `number \| undefined` | Optional | - |
| `pricePoint` | [`ComponentPricePointAssignmentPricePoint \| undefined`](../../doc/models/containers/component-price-point-assignment-price-point.md) | Optional | This is a container for one-of cases. |

## Example

```ts
import {
  ComponentPricePointAssignment,
} from '@maxio-com/advanced-billing-sdk';

const componentPricePointAssignment: ComponentPricePointAssignment = {
  componentId: 190,
  pricePoint: 'String7',
};
```

