
# Prepayment

## Structure

`Prepayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `subscriptionId` | `number` | Required | - |
| `amountInCents` | `bigint` | Required | - |
| `remainingAmountInCents` | `bigint` | Required | - |
| `refundedAmountInCents` | `bigint \| undefined` | Optional | - |
| `details` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `external` | `boolean` | Required | - |
| `memo` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `paymentType` | [`PrepaymentMethod \| undefined`](../../doc/models/prepayment-method.md) | Optional | The payment type of the prepayment. |
| `createdAt` | `string` | Required | **Constraints**: *Minimum Length*: `1` |

## Example (as JSON)

```json
{
  "id": 50,
  "subscription_id": 160,
  "amount_in_cents": 120,
  "remaining_amount_in_cents": 194,
  "refunded_amount_in_cents": 144,
  "details": "details4",
  "external": false,
  "memo": "memo8",
  "payment_type": "cash",
  "created_at": "created_at8"
}
```

