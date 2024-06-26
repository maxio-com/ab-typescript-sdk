
# Subscription Group Prepayment Response

## Structure

`SubscriptionGroupPrepaymentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `amountInCents` | `bigint \| undefined` | Optional | The amount in cents of the entry. |
| `endingBalanceInCents` | `bigint \| undefined` | Optional | The ending balance in cents of the account. |
| `entryType` | [`ServiceCreditType \| undefined`](../../doc/models/service-credit-type.md) | Optional | The type of entry |
| `memo` | `string \| null \| undefined` | Optional | A memo attached to the entry. |

## Example (as JSON)

```json
{
  "id": 110,
  "amount_in_cents": 196,
  "ending_balance_in_cents": 236,
  "entry_type": "Credit",
  "memo": "memo2"
}
```

