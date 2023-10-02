
# Prepayment 1

## Structure

`Prepayment1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `subscriptionId` | `number` | Required | - |
| `amountInCents` | `number` | Required | - |
| `remainingAmountInCents` | `number` | Required | - |
| `details` | `unknown \| undefined` | Optional | - |
| `external` | `boolean` | Required | - |
| `memo` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `paymentType` | `unknown \| undefined` | Optional | - |
| `createdAt` | `string` | Required | **Constraints**: *Minimum Length*: `1` |

## Example (as JSON)

```json
{
  "id": 52.0,
  "subscription_id": 78.7,
  "amount_in_cents": 32.38,
  "remaining_amount_in_cents": 84.16,
  "details": {
    "key1": "val1",
    "key2": "val2"
  },
  "external": false,
  "memo": "memo4",
  "payment_type": {
    "key1": "val1",
    "key2": "val2"
  },
  "created_at": "created_at8"
}
```

