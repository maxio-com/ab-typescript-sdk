
# Invoice Discount

## Structure

`InvoiceDiscount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| undefined` | Optional | - |
| `title` | `string \| undefined` | Optional | - |
| `description` | `string \| null \| undefined` | Optional | - |
| `code` | `string \| undefined` | Optional | - |
| `sourceType` | [`InvoiceDiscountSourceType \| undefined`](../../doc/models/invoice-discount-source-type.md) | Optional | - |
| `sourceId` | `number \| undefined` | Optional | - |
| `discountType` | [`InvoiceDiscountType \| undefined`](../../doc/models/invoice-discount-type.md) | Optional | - |
| `percentage` | `string \| undefined` | Optional | - |
| `eligibleAmount` | `string \| undefined` | Optional | - |
| `discountAmount` | `string \| undefined` | Optional | - |
| `transactionId` | `number \| undefined` | Optional | - |
| `lineItemBreakouts` | [`InvoiceDiscountBreakout[] \| undefined`](../../doc/models/invoice-discount-breakout.md) | Optional | - |

## Example (as JSON)

```json
{
  "uid": "uid0",
  "title": "title4",
  "description": "description0",
  "code": "code8",
  "source_type": "Coupon"
}
```

