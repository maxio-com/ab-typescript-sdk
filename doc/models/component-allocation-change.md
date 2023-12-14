
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

## Example (as JSON)

```json
{
  "previous_allocation": 94,
  "new_allocation": 102,
  "component_id": 88,
  "component_handle": "component_handle8",
  "memo": "memo2",
  "allocation_id": 158,
  "allocated_quantity": 104
}
```

