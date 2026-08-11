
# Component Allocation Change

## Structure

`ComponentAllocationChange`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `previousAllocation` | `number` | Required | - |
| `newAllocation` | `number` | Required | - |
| `componentId` | `number` | Required | - |
| `componentHandle` | `string` | Required | - |
| `memo` | `string` | Required | - |
| `allocationId` | `number` | Required | - |
| `allocatedQuantity` | [`ComponentAllocationChangeAllocatedQuantity \| undefined`](../../doc/models/containers/component-allocation-change-allocated-quantity.md) | Optional | This is a container for one-of cases. |

## Example

```ts
import { ComponentAllocationChange } from '@maxio-com/advanced-billing-sdk';

const componentAllocationChange: ComponentAllocationChange = {
  previousAllocation: 78,
  newAllocation: 118,
  componentId: 72,
  componentHandle: 'component_handle8',
  memo: 'memo2',
  allocationId: 174,
  allocatedQuantity: 88,
};
```

