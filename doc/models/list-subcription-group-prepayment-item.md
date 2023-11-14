
# List Subcription Group Prepayment Item

## Structure

`ListSubcriptionGroupPrepaymentItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `subscriptionGroupUid` | `string \| undefined` | Optional | - |
| `amountInCents` | `bigint \| undefined` | Optional | - |
| `remainingAmountInCents` | `bigint \| undefined` | Optional | - |
| `details` | `string \| undefined` | Optional | - |
| `external` | `boolean \| undefined` | Optional | - |
| `memo` | `string \| undefined` | Optional | - |
| `paymentType` | [`PrepaymentMethod \| undefined`](../../doc/models/prepayment-method.md) | Optional | :- When the `method` specified is `"credit_card_on_file"`, the prepayment amount will be collected using the default credit card payment profile and applied to the prepayment account balance. This is especially useful for manual replenishment of prepaid subscriptions. |
| `createdAt` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": 254,
  "subscription_group_uid": "subscription_group_uid6",
  "amount_in_cents": 172,
  "remaining_amount_in_cents": 142,
  "details": "details2"
}
```

