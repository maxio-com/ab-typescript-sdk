
# Proforma Invoice Discount

## Structure

`ProformaInvoiceDiscount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| undefined` | Optional | - |
| `title` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `code` | `string \| undefined` | Optional | - |
| `sourceType` | [`ProformaInvoiceDiscountSourceType \| undefined`](../../doc/models/proforma-invoice-discount-source-type.md) | Optional | - |
| `discountType` | [`InvoiceDiscountType \| undefined`](../../doc/models/invoice-discount-type.md) | Optional | - |
| `eligibleAmount` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `discountAmount` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `lineItemBreakouts` | [`InvoiceDiscountBreakout[] \| undefined`](../../doc/models/invoice-discount-breakout.md) | Optional | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |

## Example (as JSON)

```json
{
  "uid": "uid2",
  "title": "title8",
  "code": "code0",
  "source_type": "Coupon",
  "discount_type": "percentage"
}
```

