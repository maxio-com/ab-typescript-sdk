
# Webhook Response

## Structure

`WebhookResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `webhook` | [`Webhook \| undefined`](../../doc/models/webhook.md) | Optional | - |

## Example

```ts
import { WebhookResponse } from '@maxio-com/advanced-billing-sdk';

const webhookResponse: WebhookResponse = {
  webhook: {
    event: 'event2',
    id: BigInt(18),
    createdAt: '2016-03-13T12:52:32.123Z',
    lastError: 'last_error4',
    lastErrorAt: '2016-03-13T12:52:32.123Z',
  },
};
```

