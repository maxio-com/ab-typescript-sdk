
# Proforma Invoice Discount

## Structure

`ProformaInvoiceDiscount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `title` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `sourceType` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `discountType` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `eligibleAmount` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `discountAmount` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `lineItemBreakouts` | [`ProformaInvoiceDiscountBreakout[] \| undefined`](../../doc/models/proforma-invoice-discount-breakout.md) | Optional | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |

## Example (as JSON)

```json
{
  "title": "title8",
  "source_type": "source_type2",
  "discount_type": "discount_type0",
  "eligible_amount": "eligible_amount4",
  "discount_amount": "discount_amount6"
}
```

