
# Debit Note

## Structure

`DebitNote`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| undefined` | Optional | Unique identifier for the debit note. It is generated automatically by Chargify and has the prefix "db_" followed by alphanumeric characters. |
| `siteId` | `number \| undefined` | Optional | ID of the site to which the debit note belongs. |
| `customerId` | `number \| undefined` | Optional | ID of the customer to which the debit note belongs. |
| `subscriptionId` | `number \| undefined` | Optional | ID of the subscription that generated the debit note. |
| `number` | `number \| undefined` | Optional | A unique, identifier that appears on the debit note and in places it is referenced. |
| `sequenceNumber` | `number \| undefined` | Optional | A monotonically increasing number assigned to debit notes as they are created. |
| `originCreditNoteUid` | `string \| undefined` | Optional | Unique identifier for the connected credit note. It is generated automatically by Chargify and has the prefix "cn_" followed by alphanumeric characters.<br><br>While the UID is long and not appropriate to show to customers, the number is usually shorter and consumable by the customer and the merchant alike. |
| `originCreditNoteNumber` | `string \| undefined` | Optional | A unique, identifying string of the connected credit note. |
| `issueDate` | `string \| undefined` | Optional | Date the document was issued to the customer. This is the date that the document was made available for payment.<br><br>The format is "YYYY-MM-DD". |
| `appliedDate` | `string \| undefined` | Optional | Debit notes are applied to invoices to offset invoiced amounts - they adjust the amount due. This field is the date the debit note document became fully applied to the invoice.<br><br>The format is "YYYY-MM-DD". |
| `dueDate` | `string \| undefined` | Optional | Date the document is due for payment. The format is "YYYY-MM-DD". |
| `status` | [`DebitNoteStatus \| undefined`](../../doc/models/debit-note-status.md) | Optional | Current status of the debit note. |
| `memo` | `string \| undefined` | Optional | The memo printed on debit note, which is a description of the reason for the debit. |
| `role` | [`DebitNoteRole \| undefined`](../../doc/models/debit-note-role.md) | Optional | The role of the debit note. |
| `currency` | `string \| undefined` | Optional | The ISO 4217 currency code (3 character string) representing the currency of the credit note amount fields. |
| `seller` | [`InvoiceSeller \| undefined`](../../doc/models/invoice-seller.md) | Optional | Information about the seller (merchant) listed on the masthead of the debit note. |
| `customer` | [`InvoiceCustomer \| undefined`](../../doc/models/invoice-customer.md) | Optional | Information about the customer who is owner or recipient the debited subscription. |
| `billingAddress` | [`InvoiceAddress \| undefined`](../../doc/models/invoice-address.md) | Optional | The billing address of the debited subscription. |
| `shippingAddress` | [`InvoiceAddress \| undefined`](../../doc/models/invoice-address.md) | Optional | The shipping address of the debited subscription. |
| `lineItems` | [`CreditNoteLineItem[] \| undefined`](../../doc/models/credit-note-line-item.md) | Optional | Line items on the debit note. |
| `discounts` | [`InvoiceDiscount[] \| undefined`](../../doc/models/invoice-discount.md) | Optional | - |
| `taxes` | [`InvoiceTax[] \| undefined`](../../doc/models/invoice-tax.md) | Optional | - |
| `refunds` | [`InvoiceRefund[] \| undefined`](../../doc/models/invoice-refund.md) | Optional | - |

## Example (as JSON)

```json
{
  "uid": "uid2",
  "site_id": 112,
  "customer_id": 224,
  "subscription_id": 40,
  "number": 172
}
```

