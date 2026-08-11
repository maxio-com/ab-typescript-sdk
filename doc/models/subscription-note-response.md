
# Subscription Note Response

## Structure

`SubscriptionNoteResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `note` | [`SubscriptionNote`](../../doc/models/subscription-note.md) | Required | - |

## Example

```ts
import { SubscriptionNoteResponse } from '@maxio-com/advanced-billing-sdk';

const subscriptionNoteResponse: SubscriptionNoteResponse = {
  note: {
    id: 28,
    body: 'body0',
    subscriptionId: 138,
    createdAt: '2016-03-13T12:52:32.123Z',
    updatedAt: '2016-03-13T12:52:32.123Z',
  },
};
```

