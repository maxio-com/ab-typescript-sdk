
# Issue Invoice Event Data

Example schema for an `issue_invoice` event

## Structure

`IssueInvoiceEventData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consolidationLevel` | [`InvoiceConsolidationLevel`](../../doc/models/invoice-consolidation-level.md) | Required | Consolidation level of the invoice, which is applicable to invoice consolidation.  It will hold one of the following values:<br><br>* "none": A normal invoice with no consolidation.<br>* "child": An invoice segment which has been combined into a consolidated invoice.<br>* "parent": A consolidated invoice, whose contents are composed of invoice segments.<br><br>"Parent" invoices do not have lines of their own, but they have subtotals and totals which aggregate the member invoice segments.<br><br>See also the [invoice consolidation documentation](https://maxio.zendesk.com/hc/en-us/articles/24252269909389-Invoice-Consolidation). |
| `fromStatus` | [`InvoiceStatus`](../../doc/models/invoice-status.md) | Required | The status of the invoice before event occurrence. See [Invoice Statuses](https://maxio.zendesk.com/hc/en-us/articles/24252287829645-Advanced-Billing-Invoices-Overview#invoice-statuses) for more. |
| `toStatus` | [`InvoiceStatus`](../../doc/models/invoice-status.md) | Required | The status of the invoice after event occurrence. See [Invoice Statuses](https://maxio.zendesk.com/hc/en-us/articles/24252287829645-Advanced-Billing-Invoices-Overview#invoice-statuses) for more. |
| `dueAmount` | `string` | Required | Amount due on the invoice, which is `total_amount - credit_amount - paid_amount`. |
| `totalAmount` | `string` | Required | The invoice total, which is `subtotal_amount - discount_amount + tax_amount`.' |

## Example (as JSON)

```json
{
  "consolidation_level": "none",
  "from_status": "voided",
  "to_status": "draft",
  "due_amount": "due_amount6",
  "total_amount": "total_amount0"
}
```

