
# Update Allocation Expiration Date

## Structure

`UpdateAllocationExpirationDate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `allocation` | [`AllocationExpirationDate \| undefined`](../../doc/models/allocation-expiration-date.md) | Optional | - |

## Example

```ts
import {
  UpdateAllocationExpirationDate,
} from '@maxio-com/advanced-billing-sdk';

const updateAllocationExpirationDate: UpdateAllocationExpirationDate = {
  allocation: {
    expiresAt: '2016-03-13T12:52:32.123Z',
  },
};
```

