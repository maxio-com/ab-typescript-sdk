
# Proforma Invoice Payment

## Structure

`ProformaInvoicePayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `memo` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `originalAmount` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `appliedAmount` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `prepayment` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "memo": "memo4",
  "original_amount": "original_amount4",
  "applied_amount": "applied_amount8",
  "prepayment": false
}
```

