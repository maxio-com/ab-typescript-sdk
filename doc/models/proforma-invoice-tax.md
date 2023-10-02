
# Proforma Invoice Tax

## Structure

`ProformaInvoiceTax`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `title` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `sourceType` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `percentage` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `taxableAmount` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `taxAmount` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `lineItemBreakouts` | [`ProformaInvoiceTaxBreakout[] \| undefined`](../../doc/models/proforma-invoice-tax-breakout.md) | Optional | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |

## Example (as JSON)

```json
{
  "uid": "uid8",
  "title": "title4",
  "source_type": "source_type8",
  "percentage": "percentage6",
  "taxable_amount": "taxable_amount2"
}
```

