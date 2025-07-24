
# Service Credit 1

## Structure

`ServiceCredit1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `amountInCents` | `bigint \| undefined` | Optional | The amount in cents of the entry |
| `endingBalanceInCents` | `bigint \| undefined` | Optional | The new balance for the credit account |
| `entryType` | [`ServiceCreditType \| undefined`](../../doc/models/service-credit-type.md) | Optional | The type of entry |
| `memo` | `string \| undefined` | Optional | The memo attached to the entry |
| `invoiceUid` | `string \| null \| undefined` | Optional | The invoice uid associated with the entry. Only present for debit entries |
| `remainingBalanceInCents` | `bigint \| undefined` | Optional | The remaining balance for the entry |
| `createdAt` | `string \| undefined` | Optional | The date and time the entry was created |

## Example (as JSON)

```json
{
  "id": 174,
  "amount_in_cents": 4,
  "ending_balance_in_cents": 44,
  "entry_type": "Credit",
  "memo": "memo8"
}
```

