
# Credit Note 1

## Structure

`CreditNote1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| undefined` | Optional | Unique identifier for the credit note. It is generated automatically by Chargify and has the prefix "cn_" followed by alphanumeric characters. |
| `siteId` | `number \| undefined` | Optional | ID of the site to which the credit note belongs. |
| `customerId` | `number \| undefined` | Optional | ID of the customer to which the credit note belongs. |
| `subscriptionId` | `number \| undefined` | Optional | ID of the subscription that generated the credit note. |
| `number` | `string \| undefined` | Optional | A unique, identifying string that appears on the credit note and in places it is referenced.<br><br>While the UID is long and not appropriate to show to customers, the number is usually shorter and consumable by the customer and the merchant alike. |
| `sequenceNumber` | `number \| undefined` | Optional | A monotonically increasing number assigned to credit notes as they are created.  This number is unique within a site and can be used to sort and order credit notes. |
| `issueDate` | `string \| undefined` | Optional | Date the credit note was issued to the customer.  This is the date that the credit was made available for application, and may come before it is fully applied.<br><br>The format is `"YYYY-MM-DD"`. |
| `appliedDate` | `string \| undefined` | Optional | Credit notes are applied to invoices to offset invoiced amounts - they reduce the amount due. This field is the date the credit note became fully applied to invoices.<br><br>If the credit note has been partially applied, this field will not have a value until it has been fully applied.<br><br>The format is `"YYYY-MM-DD"`. |
| `status` | [`CreditNoteStatus \| undefined`](../../doc/models/credit-note-status.md) | Optional | Current status of the credit note. |
| `currency` | `string \| undefined` | Optional | The ISO 4217 currency code (3 character string) representing the currency of the credit note amount fields. |
| `memo` | `string \| undefined` | Optional | The memo printed on credit note, which is a description of the reason for the credit. |
| `seller` | [`Seller \| undefined`](../../doc/models/seller.md) | Optional | - |
| `customer` | [`Customer1 \| undefined`](../../doc/models/customer-1.md) | Optional | - |
| `billingAddress` | [`BillingAddress \| undefined`](../../doc/models/billing-address.md) | Optional | - |
| `shippingAddress` | [`ShippingAddress \| undefined`](../../doc/models/shipping-address.md) | Optional | - |
| `subtotalAmount` | `string \| undefined` | Optional | Subtotal of the credit note, which is the sum of all line items before discounts or taxes. Note that this is a positive amount representing the credit back to the customer. |
| `discountAmount` | `string \| undefined` | Optional | Total discount applied to the credit note. Note that this is a positive amount representing the discount amount being credited back to the customer (i.e. a credit on an earlier discount). For example, if the original purchase was $1.00 and the original discount was $0.10, a credit of $0.50 of the original purchase (half) would have a discount credit of $0.05 (also half). |
| `taxAmount` | `string \| undefined` | Optional | Total tax of the credit note. Note that this is a positive amount representing a previously taxex amount being credited back to the customer (i.e. a credit of an earlier tax). For example, if the original purchase was $1.00 and the original tax was $0.10, a credit of $0.50 of the original purchase (half) would also have a tax credit of $0.05 (also half). |
| `totalAmount` | `string \| undefined` | Optional | The credit note total, which is `subtotal_amount - discount_amount + tax_amount`.' |
| `appliedAmount` | `string \| undefined` | Optional | The amount of the credit note that has already been applied to invoices. |
| `remainingAmount` | `string \| undefined` | Optional | The amount of the credit note remaining to be applied to invoices, which is `total_amount - applied_amount`. |
| `lineItems` | [`CreditNoteLineItem[] \| undefined`](../../doc/models/credit-note-line-item.md) | Optional | Line items on the credit note. |
| `discounts` | [`InvoiceDiscount[] \| undefined`](../../doc/models/invoice-discount.md) | Optional | - |
| `taxes` | [`InvoiceTax[] \| undefined`](../../doc/models/invoice-tax.md) | Optional | - |
| `applications` | [`CreditNoteApplication[] \| undefined`](../../doc/models/credit-note-application.md) | Optional | - |
| `refunds` | [`InvoiceRefund[] \| undefined`](../../doc/models/invoice-refund.md) | Optional | - |
| `originInvoices` | [`OriginInvoice[] \| undefined`](../../doc/models/origin-invoice.md) | Optional | An array of origin invoices for the credit note. Learn more about [Origin Invoice from our docs](https://chargify.zendesk.com/hc/en-us/articles/4407753036699#origin-invoices) |

## Example (as JSON)

```json
{
  "uid": "uid8",
  "site_id": 120,
  "customer_id": 232,
  "subscription_id": 48,
  "number": "number6"
}
```

