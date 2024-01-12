
# Invoice Previous Balance

## Structure

`InvoicePreviousBalance`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `capturedAt` | `string \| undefined` | Optional | - |
| `invoices` | [`InvoiceBalanceItem[] \| undefined`](../../doc/models/invoice-balance-item.md) | Optional | - |

## Example (as JSON)

```json
{
  "captured_at": "2016-03-13T12:52:32.123Z",
  "invoices": [
    {
      "uid": "uid6",
      "number": "number6",
      "outstanding_amount": "outstanding_amount8"
    }
  ]
}
```

