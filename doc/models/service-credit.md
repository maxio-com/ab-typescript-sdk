
# Service Credit

## Structure

`ServiceCredit`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `amountInCents` | `number \| undefined` | Optional | The amount in cents of the entry |
| `endingBalanceInCents` | `number \| undefined` | Optional | The new balance for the credit account |
| `entryType` | [`ServiceCreditType \| undefined`](../../doc/models/service-credit-type.md) | Optional | The type of entry |
| `memo` | `string \| undefined` | Optional | The memo attached to the entry |

## Example (as JSON)

```json
{
  "id": 216,
  "amount_in_cents": 210,
  "ending_balance_in_cents": 86,
  "entry_type": "Credit",
  "memo": "memo2"
}
```

