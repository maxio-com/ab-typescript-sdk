
# Proforma Invoice Issued

## Structure

`ProformaInvoiceIssued`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string` | Required | - |
| `number` | `string` | Required | - |
| `role` | `string` | Required | - |
| `deliveryDate` | `string` | Required | - |
| `createdAt` | `string` | Required | - |
| `dueAmount` | `string` | Required | - |
| `paidAmount` | `string` | Required | - |
| `taxAmount` | `string` | Required | - |
| `totalAmount` | `string` | Required | - |
| `productName` | `string` | Required | - |
| `lineItems` | [`InvoiceLineItemEventData[]`](../../doc/models/invoice-line-item-event-data.md) | Required | - |

## Example (as JSON)

```json
{
  "uid": "uid0",
  "number": "number2",
  "role": "role6",
  "delivery_date": "delivery_date0",
  "created_at": "created_at8",
  "due_amount": "due_amount2",
  "paid_amount": "paid_amount8",
  "tax_amount": "tax_amount6",
  "total_amount": "total_amount6",
  "product_name": "product_name6",
  "line_items": [
    {
      "uid": "uid8",
      "title": "title4",
      "description": "description8",
      "quantity": 102,
      "quantity_delta": 204
    }
  ]
}
```

