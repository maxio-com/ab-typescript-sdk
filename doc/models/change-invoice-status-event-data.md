
# Change Invoice Status Event Data

Example schema for an `change_invoice_status` event

## Structure

`ChangeInvoiceStatusEventData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `gatewayTransId` | `string \| undefined` | Optional | Identifier for the transaction within the payment gateway. |
| `amount` | `string \| undefined` | Optional | The monetary value associated with the linked payment, expressed in dollars. |
| `fromStatus` | [`InvoiceStatus`](../../doc/models/invoice-status.md) | Required | The status of the invoice before any changes occurred. See [Invoice Statuses](https://maxio.zendesk.com/hc/en-us/articles/24252287829645-Advanced-Billing-Invoices-Overview#invoice-statuses) for more. |
| `toStatus` | [`InvoiceStatus`](../../doc/models/invoice-status.md) | Required | The updated status of the invoice after changes have been made. See [Invoice Statuses](https://maxio.zendesk.com/hc/en-us/articles/24252287829645-Advanced-Billing-Invoices-Overview#invoice-statuses) for more. |
| `consolidationLevel` | [`InvoiceConsolidationLevel \| undefined`](../../doc/models/invoice-consolidation-level.md) | Optional | - |

## Example (as JSON)

```json
{
  "gateway_trans_id": "gateway_trans_id2",
  "amount": "amount2",
  "from_status": "draft",
  "to_status": "pending",
  "consolidation_level": "none"
}
```

