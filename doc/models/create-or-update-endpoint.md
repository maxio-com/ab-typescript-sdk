
# Create or Update Endpoint

Used to Create or Update Endpoint.

## Structure

`CreateOrUpdateEndpoint`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string` | Required | - |
| `webhookSubscriptions` | [`WebhookSubscription[]`](../../doc/models/webhook-subscription.md) | Required | - |

## Example

```ts
import {
  CreateOrUpdateEndpoint,
  WebhookSubscription,
} from '@maxio-com/advanced-billing-sdk';

const createOrUpdateEndpoint: CreateOrUpdateEndpoint = {
  url: 'url4',
  webhookSubscriptions: [
    WebhookSubscription.TrialEndNotice,
    WebhookSubscription.SubscriptionStateChange,
    WebhookSubscription.SubscriptionProductChangeScheduled
  ],
};
```

