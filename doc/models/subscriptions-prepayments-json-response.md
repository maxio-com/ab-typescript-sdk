
# Subscriptions Prepayments Json Response

## Structure

`SubscriptionsPrepaymentsJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `prepayments` | [`PrepaymentResponse[] \| undefined`](../../doc/models/prepayment-response.md) | Optional | **Constraints**: *Unique Items Required* |

## Example (as JSON)

```json
{
  "prepayments": [
    {
      "prepayment": {
        "id": 128.38,
        "subscription_id": 155.08,
        "amount_in_cents": 108.76,
        "remaining_amount_in_cents": 160.54,
        "details": {
          "key1": "val1",
          "key2": "val2"
        },
        "external": false,
        "memo": "memo2",
        "payment_type": {
          "key1": "val1",
          "key2": "val2"
        },
        "created_at": "created_at6"
      }
    }
  ]
}
```

