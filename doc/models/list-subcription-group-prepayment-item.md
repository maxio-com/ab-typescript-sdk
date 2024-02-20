
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
| `paymentType` | [`PrepaymentMethod \| undefined`](../../doc/models/prepayment-method.md) | Optional | - |
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

