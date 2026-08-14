
# Allocation Response

## Structure

`AllocationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `allocation` | [`Allocation \| undefined`](../../doc/models/allocation.md) | Optional | - |

## Example

```ts
import { AllocationResponse } from '@maxio-com/advanced-billing-sdk';

const allocationResponse: AllocationResponse = {
  allocation: {
    allocationId: 238,
    componentId: 8,
    componentHandle: 'component_handle8',
    subscriptionId: 8,
    quantity: 32,
  },
};
```

