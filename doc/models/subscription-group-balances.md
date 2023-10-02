
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
    "balance_in_cents": 192
  },
  "service_credits": {
    "balance_in_cents": 84
  },
  "open_invoices": {
    "balance_in_cents": 40
  },
  "pending_discounts": {
    "balance_in_cents": 88
  }
}
```

