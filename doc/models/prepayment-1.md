
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
| `refundedAmountInCents` | `number \| undefined` | Optional | - |
| `details` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `external` | `boolean` | Required | - |
| `memo` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `paymentType` | [`PrepaymentMethod \| undefined`](../../doc/models/prepayment-method.md) | Optional | The payment type of the prepayment. |
| `createdAt` | `string` | Required | **Constraints**: *Minimum Length*: `1` |

## Example (as JSON)

```json
{
  "id": 52.0,
  "subscription_id": 78.7,
  "amount_in_cents": 32.38,
  "remaining_amount_in_cents": 84.16,
  "refunded_amount_in_cents": 109.26,
  "details": "details0",
  "external": false,
  "memo": "memo4",
  "payment_type": "ach",
  "created_at": "created_at8"
}
```

