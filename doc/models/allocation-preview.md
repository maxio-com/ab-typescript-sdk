
# Allocation Preview

## Structure

`AllocationPreview`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startDate` | `string \| undefined` | Optional | - |
| `endDate` | `string \| undefined` | Optional | - |
| `subtotalInCents` | `number \| undefined` | Optional | - |
| `totalTaxInCents` | `number \| undefined` | Optional | - |
| `totalDiscountInCents` | `number \| undefined` | Optional | - |
| `totalInCents` | `number \| undefined` | Optional | - |
| `direction` | `string \| undefined` | Optional | - |
| `prorationScheme` | `string \| undefined` | Optional | - |
| `lineItems` | [`AllocationPreviewLineItem[] \| undefined`](../../doc/models/allocation-preview-line-item.md) | Optional | - |
| `accrueCharge` | `boolean \| undefined` | Optional | - |
| `allocations` | [`AllocationPreviewItem[] \| undefined`](../../doc/models/allocation-preview-item.md) | Optional | - |
| `periodType` | `string \| undefined` | Optional | - |
| `existingBalanceInCents` | `number \| undefined` | Optional | An integer representing the amount of the subscription's current balance |

## Example (as JSON)

```json
{
  "start_date": "start_date2",
  "end_date": "end_date8",
  "subtotal_in_cents": 4,
  "total_tax_in_cents": 128,
  "total_discount_in_cents": 122
}
```

