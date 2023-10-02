
# Prepayment Response

## Structure

`PrepaymentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `prepayment` | [`Prepayment1`](../../doc/models/prepayment-1.md) | Required | - |

## Example (as JSON)

```json
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
```

