
# Proforma Invoice Tax

## Structure

`ProformaInvoiceTax`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `title` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `sourceType` | [`ProformaInvoiceTaxSourceType \| undefined`](../../doc/models/proforma-invoice-tax-source-type.md) | Optional | - |
| `percentage` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `taxableAmount` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `taxAmount` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `lineItemBreakouts` | [`InvoiceTaxBreakout[] \| undefined`](../../doc/models/invoice-tax-breakout.md) | Optional | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |

## Example (as JSON)

```json
{
  "uid": "uid8",
  "title": "title4",
  "source_type": "Tax",
  "percentage": "percentage6",
  "taxable_amount": "taxable_amount2"
}
```

