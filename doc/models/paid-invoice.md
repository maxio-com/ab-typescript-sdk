
# Paid Invoice

## Structure

`PaidInvoice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invoiceId` | `string \| undefined` | Optional | The uid of the paid invoice |
| `status` | [`InvoiceStatus \| undefined`](../../doc/models/invoice-status.md) | Optional | The current status of the invoice. See [Invoice Statuses](https://maxio.zendesk.com/hc/en-us/articles/24252287829645-Advanced-Billing-Invoices-Overview#invoice-statuses) for more. |
| `dueAmount` | `string \| undefined` | Optional | The remaining due amount on the invoice |
| `paidAmount` | `string \| undefined` | Optional | The total amount paid on this invoice (including any prior payments) |

## Example (as JSON)

```json
{
  "invoice_id": "invoice_id6",
  "status": "open",
  "due_amount": "due_amount8",
  "paid_amount": "paid_amount8"
}
```

