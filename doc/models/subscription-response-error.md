
# Subscription Response Error

## Structure

`SubscriptionResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscription` | [`Subscription \| undefined`](../../doc/models/subscription.md) | Optional | - |

## Example (as JSON)

```json
{
  "subscription": {
    "id": 8,
    "state": "paused",
    "balance_in_cents": 124,
    "total_revenue_in_cents": 48,
    "product_price_in_cents": 238
  }
}
```

