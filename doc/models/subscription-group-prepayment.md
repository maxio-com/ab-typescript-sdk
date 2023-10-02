
# Subscription Group Prepayment

## Structure

`SubscriptionGroupPrepayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number` | Required | - |
| `details` | `string` | Required | - |
| `memo` | `string` | Required | - |
| `method` | [`SubscriptionGroupPrepaymentMethodEnum`](../../doc/models/subscription-group-prepayment-method-enum.md) | Required | - |

## Example (as JSON)

```json
{
  "amount": 96,
  "details": "details2",
  "memo": "memo6",
  "method": "money_order"
}
```

