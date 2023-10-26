
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
| `sourceType` | `string \| undefined` | Optional | - |
| `sourceId` | `number \| undefined` | Optional | - |
| `discountType` | `string \| undefined` | Optional | - |
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
  "source_type": "source_type0"
}
```

