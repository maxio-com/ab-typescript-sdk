
# MRR

## Structure

`MRR`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amountInCents` | `number \| undefined` | Optional | - |
| `amountFormatted` | `string \| undefined` | Optional | - |
| `currency` | `string \| undefined` | Optional | - |
| `currencySymbol` | `string \| undefined` | Optional | - |
| `breakouts` | [`Breakouts \| undefined`](../../doc/models/breakouts.md) | Optional | - |
| `atTime` | `string \| undefined` | Optional | ISO8601 timestamp |

## Example (as JSON)

```json
{
  "amount_in_cents": 208,
  "amount_formatted": "amount_formatted2",
  "currency": "currency0",
  "currency_symbol": "currency_symbol8",
  "breakouts": {
    "plan_amount_in_cents": 254,
    "plan_amount_formatted": "plan_amount_formatted0",
    "usage_amount_in_cents": 106,
    "usage_amount_formatted": "usage_amount_formatted8"
  }
}
```

