
# Invoice

## Structure

`Invoice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `uid` | `string \| undefined` | Optional | Unique identifier for the invoice. It is generated automatically by Chargify and has the prefix "inv_" followed by alphanumeric characters. |
| `siteId` | `number \| undefined` | Optional | ID of the site to which the invoice belongs. |
| `customerId` | `number \| undefined` | Optional | ID of the customer to which the invoice belongs. |
| `subscriptionId` | `number \| undefined` | Optional | ID of the subscription that generated the invoice. |
| `number` | `string \| undefined` | Optional | A unique, identifying string that appears on the invoice and in places the invoice is referenced.<br><br>While the UID is long and not appropriate to show to customers, the number is usually shorter and consumable by the customer and the merchant alike. |
| `sequenceNumber` | `number \| undefined` | Optional | A monotonically increasing number assigned to invoices as they are created.  This number is unique within a site and can be used to sort and order invoices. |
| `transactionTime` | `string \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | - |
| `issueDate` | `string \| undefined` | Optional | Date the invoice was issued to the customer.  This is the date that the invoice was made available for payment.<br><br>The format is `"YYYY-MM-DD"`. |
| `dueDate` | `string \| undefined` | Optional | Date the invoice is due.<br><br>The format is `"YYYY-MM-DD"`. |
| `paidDate` | `string \| null \| undefined` | Optional | Date the invoice became fully paid.<br><br>If partial payments are applied to the invoice, this date will not be present until payment has been made in full.<br><br>The format is `"YYYY-MM-DD"`. |
| `status` | [`Status \| undefined`](../../doc/models/status.md) | Optional | The current status of the invoice. See [Invoice Statuses](https://chargify.zendesk.com/hc/en-us/articles/4407737494171#line-item-breakdowns) for more. |
| `role` | `string \| undefined` | Optional | - |
| `parentInvoiceId` | `number \| null \| undefined` | Optional | - |
| `collectionMethod` | `string \| undefined` | Optional | The collection method of the invoice, which is either "automatic" (tried and retried on an existing payment method by Chargify) or "remittance" (payment must be remitted by the customer or keyed in by the merchant). |
| `paymentInstructions` | `string \| undefined` | Optional | A message that is printed on the invoice when it is marked for remittance collection. It is intended to describe to the customer how they may make payment, and is configured by the merchant. |
| `currency` | `string \| undefined` | Optional | The ISO 4217 currency code (3 character string) representing the currency of invoice transaction. |
| `consolidationLevel` | [`InvoiceConsolidationLevel \| undefined`](../../doc/models/invoice-consolidation-level.md) | Optional | Consolidation level of the invoice, which is applicable to invoice consolidation.  It will hold one of the following values:<br><br>* "none": A normal invoice with no consolidation.<br>* "child": An invoice segment which has been combined into a consolidated invoice.<br>* "parent": A consolidated invoice, whose contents are composed of invoice segments.<br><br>"Parent" invoices do not have lines of their own, but they have subtotals and totals which aggregate the member invoice segments.<br><br>See also the [invoice consolidation documentation](https://chargify.zendesk.com/hc/en-us/articles/4407746391835). |
| `parentInvoiceUid` | `string \| null \| undefined` | Optional | For invoices with `consolidation_level` of `child`, this specifies the UID of the parent (consolidated) invoice. |
| `subscriptionGroupId` | `number \| null \| undefined` | Optional | - |
| `parentInvoiceNumber` | `number \| null \| undefined` | Optional | For invoices with `consolidation_level` of `child`, this specifies the number of the parent (consolidated) invoice. |
| `groupPrimarySubscriptionId` | `number \| null \| undefined` | Optional | For invoices with `consolidation_level` of `parent`, this specifies the ID of the subscription which was the primary subscription of the subscription group that generated the invoice. |
| `productName` | `string \| undefined` | Optional | The name of the product subscribed when the invoice was generated. |
| `productFamilyName` | `string \| undefined` | Optional | The name of the product family subscribed when the invoice was generated. |
| `seller` | [`InvoiceSeller \| undefined`](../../doc/models/invoice-seller.md) | Optional | Information about the seller (merchant) listed on the masthead of the invoice. |
| `customer` | [`InvoiceCustomer \| undefined`](../../doc/models/invoice-customer.md) | Optional | Information about the customer who is owner or recipient the invoiced subscription. |
| `payer` | [`InvoicePayer \| undefined`](../../doc/models/invoice-payer.md) | Optional | - |
| `recipientEmails` | `string[] \| undefined` | Optional | **Constraints**: *Maximum Items*: `5` |
| `netTerms` | `number \| undefined` | Optional | - |
| `memo` | `string \| undefined` | Optional | The memo printed on invoices of any collection type.  This message is in control of the merchant. |
| `billingAddress` | [`InvoiceAddress \| undefined`](../../doc/models/invoice-address.md) | Optional | The invoice billing address. |
| `shippingAddress` | [`InvoiceAddress \| undefined`](../../doc/models/invoice-address.md) | Optional | The invoice shipping address. |
| `subtotalAmount` | `string \| undefined` | Optional | Subtotal of the invoice, which is the sum of all line items before discounts or taxes. |
| `discountAmount` | `string \| undefined` | Optional | Total discount applied to the invoice. |
| `taxAmount` | `string \| undefined` | Optional | Total tax on the invoice. |
| `totalAmount` | `string \| undefined` | Optional | The invoice total, which is `subtotal_amount - discount_amount + tax_amount`.' |
| `creditAmount` | `string \| undefined` | Optional | The amount of credit (from credit notes) applied to this invoice.<br><br>Credits offset the amount due from the customer. |
| `refundAmount` | `string \| undefined` | Optional | - |
| `paidAmount` | `string \| undefined` | Optional | The amount paid on the invoice by the customer. |
| `dueAmount` | `string \| undefined` | Optional | Amount due on the invoice, which is `total_amount - credit_amount - paid_amount`. |
| `lineItems` | [`InvoiceLineItem[] \| undefined`](../../doc/models/invoice-line-item.md) | Optional | Line items on the invoice. |
| `discounts` | [`InvoiceDiscount[] \| undefined`](../../doc/models/invoice-discount.md) | Optional | - |
| `taxes` | [`InvoiceTax[] \| undefined`](../../doc/models/invoice-tax.md) | Optional | - |
| `credits` | [`InvoiceCredit[] \| undefined`](../../doc/models/invoice-credit.md) | Optional | - |
| `refunds` | [`InvoiceRefund[] \| undefined`](../../doc/models/invoice-refund.md) | Optional | - |
| `payments` | [`InvoicePayment[] \| undefined`](../../doc/models/invoice-payment.md) | Optional | - |
| `customFields` | [`InvoiceCustomField[] \| undefined`](../../doc/models/invoice-custom-field.md) | Optional | - |
| `displaySettings` | [`InvoiceDisplaySettings \| undefined`](../../doc/models/invoice-display-settings.md) | Optional | - |
| `publicUrl` | `string \| undefined` | Optional | The public URL of the invoice |
| `previousBalanceData` | [`InvoicePreviousBalance \| undefined`](../../doc/models/invoice-previous-balance.md) | Optional | - |

## Example (as JSON)

```json
{
  "id": 252,
  "uid": "uid0",
  "site_id": 178,
  "customer_id": 34,
  "subscription_id": 106
}
```

