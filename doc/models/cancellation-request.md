
# Cancellation Request

## Structure

`CancellationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscription` | [`CancellationOptions`](../../doc/models/cancellation-options.md) | Required | - |

## Example

```ts
import { CancellationRequest } from '@maxio-com/advanced-billing-sdk';

const cancellationRequest: CancellationRequest = {
  subscription: {
    cancellationMessage: 'cancellation_message2',
    reasonCode: 'reason_code8',
    cancelAtEndOfPeriod: false,
    scheduledCancellationAt: '2016-03-13T12:52:32.123Z',
    refundPrepaymentAccountBalance: false,
  },
};
```

