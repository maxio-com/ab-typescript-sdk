
# Billing Manifest

## Structure

`BillingManifest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `lineItems` | [`BillingManifestItem[] \| undefined`](../../doc/models/billing-manifest-item.md) | Optional | - |
| `totalInCents` | `number \| undefined` | Optional | - |
| `totalDiscountInCents` | `number \| undefined` | Optional | - |
| `totalTaxInCents` | `number \| undefined` | Optional | - |
| `subtotalInCents` | `number \| undefined` | Optional | - |
| `startDate` | `string \| undefined` | Optional | - |
| `endDate` | `string \| undefined` | Optional | - |
| `periodType` | `string \| undefined` | Optional | - |
| `existingBalanceInCents` | `number \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "line_items": [
    {
      "transaction_type": "transaction_type0",
      "kind": "kind6",
      "amount_in_cents": 24,
      "memo": "memo2",
      "discount_amount_in_cents": 172
    },
    {
      "transaction_type": "transaction_type0",
      "kind": "kind6",
      "amount_in_cents": 24,
      "memo": "memo2",
      "discount_amount_in_cents": 172
    },
    {
      "transaction_type": "transaction_type0",
      "kind": "kind6",
      "amount_in_cents": 24,
      "memo": "memo2",
      "discount_amount_in_cents": 172
    }
  ],
  "total_in_cents": 192,
  "total_discount_in_cents": 178,
  "total_tax_in_cents": 172,
  "subtotal_in_cents": 48
}
```

