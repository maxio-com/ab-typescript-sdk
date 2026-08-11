
# Override Subscription Request

## Structure

`OverrideSubscriptionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscription` | [`OverrideSubscription`](../../doc/models/override-subscription.md) | Required | - |

## Example

```ts
import { OverrideSubscriptionRequest } from '@maxio-com/advanced-billing-sdk';

const overrideSubscriptionRequest: OverrideSubscriptionRequest = {
  subscription: {
    activatedAt: '2016-03-13T12:52:32.123Z',
    canceledAt: '2016-03-13T12:52:32.123Z',
    cancellationMessage: 'cancellation_message2',
    expiresAt: '2016-03-13T12:52:32.123Z',
    currentPeriodStartsAt: '2016-03-13T12:52:32.123Z',
  },
};
```

