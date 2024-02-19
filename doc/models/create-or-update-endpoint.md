
# Create or Update Endpoint

Used to Create or Update Endpoint

## Structure

`CreateOrUpdateEndpoint`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string` | Required | - |
| `webhookSubscriptions` | [`WebhookSubscription[]`](../../doc/models/webhook-subscription.md) | Required | - |

## Example (as JSON)

```json
{
  "url": "url8",
  "webhook_subscriptions": [
    "payment_success"
  ]
}
```

