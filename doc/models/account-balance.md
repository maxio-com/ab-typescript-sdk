
# Account Balance

## Structure

`AccountBalance`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceInCents` | `bigint \| undefined` | Optional | The balance in cents. |
| `automaticBalanceInCents` | `bigint \| null \| undefined` | Optional | The automatic balance in cents. |
| `remittanceBalanceInCents` | `bigint \| null \| undefined` | Optional | The remittance balance in cents. |

## Example (as JSON)

```json
{
  "balance_in_cents": 16,
  "automatic_balance_in_cents": 226,
  "remittance_balance_in_cents": 62
}
```

