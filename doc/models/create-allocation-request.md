
# Create Allocation Request

## Structure

`CreateAllocationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `allocation` | [`CreateAllocation`](../../doc/models/create-allocation.md) | Required | - |

## Example

```ts
import { CreateAllocationRequest } from '@maxio-com/advanced-billing-sdk';

const createAllocationRequest: CreateAllocationRequest = {
  allocation: {
    quantity: 228.94,
    decimalQuantity: 'decimal_quantity6',
    previousQuantity: 254.04,
    decimalPreviousQuantity: 'decimal_previous_quantity8',
    componentId: 8,
    memo: 'memo2',
  },
};
```

