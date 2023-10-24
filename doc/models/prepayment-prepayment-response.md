
# Prepayment Prepayment Response

## Structure

`PrepaymentPrepaymentResponse`

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
  "id": 233.44,
  "subscription_id": 4.14,
  "amount_in_cents": 42.18,
  "remaining_amount_in_cents": 9.6,
  "refunded_amount_in_cents": 34.7,
  "details": "details4",
  "external": false,
  "memo": "memo8",
  "payment_type": "paypal_account",
  "created_at": "created_at2"
}
```

