
# Subscription Group Balances

## Structure

`SubscriptionGroupBalances`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `prepayments` | [`AccountBalance \| undefined`](../../doc/models/account-balance.md) | Optional | - |
| `serviceCredits` | [`AccountBalance \| undefined`](../../doc/models/account-balance.md) | Optional | - |
| `openInvoices` | [`AccountBalance \| undefined`](../../doc/models/account-balance.md) | Optional | - |
| `pendingDiscounts` | [`AccountBalance \| undefined`](../../doc/models/account-balance.md) | Optional | - |

## Example (as JSON)

```json
{
  "prepayments": {
    "balance_in_cents": 192,
    "automatic_balance_in_cents": 178,
    "remittance_balance_in_cents": 146
  },
  "service_credits": {
    "balance_in_cents": 84,
    "automatic_balance_in_cents": 70,
    "remittance_balance_in_cents": 38
  },
  "open_invoices": {
    "balance_in_cents": 40,
    "automatic_balance_in_cents": 202,
    "remittance_balance_in_cents": 170
  },
  "pending_discounts": {
    "balance_in_cents": 88,
    "automatic_balance_in_cents": 154,
    "remittance_balance_in_cents": 134
  }
}
```

