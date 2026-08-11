
# Pending Cancellation Change

## Structure

`PendingCancellationChange`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cancellationState` | `string` | Required | - |
| `cancelsAt` | `string` | Required | - |

## Example

```ts
import { PendingCancellationChange } from '@maxio-com/advanced-billing-sdk';

const pendingCancellationChange: PendingCancellationChange = {
  cancellationState: 'cancellation_state0',
  cancelsAt: '2016-03-13T12:52:32.123Z',
};
```

