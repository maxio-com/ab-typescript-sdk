
# Proforma Invoice

## Structure

`ProformaInvoice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| undefined` | Optional | - |
| `siteId` | `number \| undefined` | Optional | - |
| `customerId` | `number \| null \| undefined` | Optional | - |
| `subscriptionId` | `number \| null \| undefined` | Optional | - |
| `number` | `number \| null \| undefined` | Optional | - |
| `sequenceNumber` | `number \| null \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `deliveryDate` | `string \| undefined` | Optional | - |
| `status` | [`ProformaInvoiceStatus \| undefined`](../../doc/models/proforma-invoice-status.md) | Optional | - |
| `collectionMethod` | [`CollectionMethod \| undefined`](../../doc/models/collection-method.md) | Optional | The type of payment collection to be used in the subscription. For legacy Statements Architecture valid options are - `invoice`, `automatic`. For current Relationship Invoicing Architecture valid options are - `remittance`, `automatic`, `prepaid`. |
| `paymentInstructions` | `string \| undefined` | Optional | - |
| `currency` | `string \| undefined` | Optional | - |
| `consolidationLevel` | [`InvoiceConsolidationLevel \| undefined`](../../doc/models/invoice-consolidation-level.md) | Optional | Consolidation level of the invoice, which is applicable to invoice consolidation.  It will hold one of the following values:<br><br>* "none": A normal invoice with no consolidation.<br>* "child": An invoice segment which has been combined into a consolidated invoice.<br>* "parent": A consolidated invoice, whose contents are composed of invoice segments.<br><br>"Parent" invoices do not have lines of their own, but they have subtotals and totals which aggregate the member invoice segments.<br><br>See also the [invoice consolidation documentation](https://chargify.zendesk.com/hc/en-us/articles/4407746391835). |
| `productName` | `string \| undefined` | Optional | - |
| `productFamilyName` | `string \| undefined` | Optional | - |
| `role` | [`ProformaInvoiceRole \| undefined`](../../doc/models/proforma-invoice-role.md) | Optional | 'proforma' value is deprecated in favor of proforma_adhoc and proforma_automatic |
| `seller` | [`InvoiceSeller \| undefined`](../../doc/models/invoice-seller.md) | Optional | Information about the seller (merchant) listed on the masthead of the invoice. |
| `customer` | [`InvoiceCustomer \| undefined`](../../doc/models/invoice-customer.md) | Optional | Information about the customer who is owner or recipient the invoiced subscription. |
| `memo` | `string \| undefined` | Optional | - |
| `billingAddress` | [`InvoiceAddress \| undefined`](../../doc/models/invoice-address.md) | Optional | - |
| `shippingAddress` | [`InvoiceAddress \| undefined`](../../doc/models/invoice-address.md) | Optional | - |
| `subtotalAmount` | `string \| undefined` | Optional | - |
| `discountAmount` | `string \| undefined` | Optional | - |
| `taxAmount` | `string \| undefined` | Optional | - |
| `totalAmount` | `string \| undefined` | Optional | - |
| `creditAmount` | `string \| undefined` | Optional | - |
| `paidAmount` | `string \| undefined` | Optional | - |
| `refundAmount` | `string \| undefined` | Optional | - |
| `dueAmount` | `string \| undefined` | Optional | - |
| `lineItems` | [`InvoiceLineItem[] \| undefined`](../../doc/models/invoice-line-item.md) | Optional | - |
| `discounts` | [`ProformaInvoiceDiscount[] \| undefined`](../../doc/models/proforma-invoice-discount.md) | Optional | - |
| `taxes` | [`ProformaInvoiceTax[] \| undefined`](../../doc/models/proforma-invoice-tax.md) | Optional | - |
| `credits` | [`ProformaInvoiceCredit[] \| undefined`](../../doc/models/proforma-invoice-credit.md) | Optional | - |
| `payments` | [`ProformaInvoicePayment[] \| undefined`](../../doc/models/proforma-invoice-payment.md) | Optional | - |
| `customFields` | [`InvoiceCustomField[] \| undefined`](../../doc/models/invoice-custom-field.md) | Optional | - |
| `publicUrl` | `string \| null \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "uid": "uid6",
  "site_id": 196,
  "customer_id": 52,
  "subscription_id": 124,
  "number": 0
}
```

