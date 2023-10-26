
# Create Invoice

## Structure

`CreateInvoice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `lineItems` | [`CreateInvoiceItem[] \| undefined`](../../doc/models/create-invoice-item.md) | Optional | - |
| `issueDate` | `string \| undefined` | Optional | - |
| `netTerms` | `number \| undefined` | Optional | By default, invoices will be created with a due date matching the date of invoice creation. If a different due date is desired, the net_terms parameter can be sent indicating the number of days in advance the due date should be. |
| `paymentInstructions` | `string \| undefined` | Optional | - |
| `memo` | `string \| undefined` | Optional | A custom memo can be sent to override the site's default. |
| `sellerAddress` | [`CreateInvoiceAddress \| undefined`](../../doc/models/create-invoice-address.md) | Optional | Overrides the defaults for the site |
| `billingAddress` | [`CreateInvoiceAddress \| undefined`](../../doc/models/create-invoice-address.md) | Optional | Overrides the default for the customer |
| `shippingAddress` | [`CreateInvoiceAddress \| undefined`](../../doc/models/create-invoice-address.md) | Optional | Overrides the default for the customer |
| `coupons` | [`CreateInvoiceCoupon[] \| undefined`](../../doc/models/create-invoice-coupon.md) | Optional | - |
| `status` | [`Status1 \| undefined`](../../doc/models/status-1.md) | Optional | **Default**: `Status1.Open` |

## Example (as JSON)

```json
{
  "status": "draft",
  "line_items": [
    {
      "title": "title4",
      "quantity": 56.68,
      "unit_price": 39.9,
      "taxable": false,
      "tax_code": "tax_code6"
    }
  ],
  "issue_date": "issue_date2",
  "net_terms": 18,
  "payment_instructions": "payment_instructions0",
  "memo": "memo6"
}
```

