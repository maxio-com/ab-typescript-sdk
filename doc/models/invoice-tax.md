
# Invoice Tax

## Structure

`InvoiceTax`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| undefined` | Optional | - |
| `title` | `string \| undefined` | Optional | - |
| `description` | `string \| null \| undefined` | Optional | - |
| `sourceType` | `string \| undefined` | Optional | - |
| `sourceId` | `number \| undefined` | Optional | - |
| `percentage` | `string \| undefined` | Optional | - |
| `taxableAmount` | `string \| undefined` | Optional | - |
| `taxAmount` | `string \| undefined` | Optional | - |
| `transactionId` | `number \| undefined` | Optional | - |
| `lineItemBreakouts` | [`InvoiceTaxBreakout[] \| undefined`](../../doc/models/invoice-tax-breakout.md) | Optional | - |
| `taxComponentBreakouts` | [`InvoiceTaxComponentBreakout[] \| undefined`](../../doc/models/invoice-tax-component-breakout.md) | Optional | - |

## Example (as JSON)

```json
{
  "uid": "uid8",
  "title": "title6",
  "description": "description2",
  "source_type": "source_type8",
  "source_id": 164
}
```

