
# Prepayment Prepayments Response

## Structure

`PrepaymentPrepaymentsResponse`

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
  "id": 182.48,
  "subscription_id": 209.18,
  "amount_in_cents": 93.14,
  "remaining_amount_in_cents": 214.64,
  "refunded_amount_in_cents": 239.74,
  "details": "details8",
  "external": false,
  "memo": "memo2",
  "payment_type": "credit_card_on_file",
  "created_at": "created_at6"
}
```

