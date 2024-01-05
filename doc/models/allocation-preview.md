
# Allocation Preview

## Structure

`AllocationPreview`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startDate` | `string \| undefined` | Optional | - |
| `endDate` | `string \| undefined` | Optional | - |
| `subtotalInCents` | `bigint \| undefined` | Optional | - |
| `totalTaxInCents` | `bigint \| undefined` | Optional | - |
| `totalDiscountInCents` | `bigint \| undefined` | Optional | - |
| `totalInCents` | `bigint \| undefined` | Optional | - |
| `direction` | [`AllocationPreviewDirection \| undefined`](../../doc/models/allocation-preview-direction.md) | Optional | - |
| `prorationScheme` | `string \| undefined` | Optional | - |
| `lineItems` | [`AllocationPreviewLineItem[] \| undefined`](../../doc/models/allocation-preview-line-item.md) | Optional | - |
| `accrueCharge` | `boolean \| undefined` | Optional | - |
| `allocations` | [`AllocationPreviewItem[] \| undefined`](../../doc/models/allocation-preview-item.md) | Optional | - |
| `periodType` | `string \| undefined` | Optional | - |
| `existingBalanceInCents` | `bigint \| undefined` | Optional | An integer representing the amount of the subscription's current balance |

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

