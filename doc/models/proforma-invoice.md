
# Proforma Invoice

## Structure

`ProformaInvoice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| undefined` | Optional | - |
| `siteId` | `number \| undefined` | Optional | - |
| `customerId` | `number \| undefined` | Optional | - |
| `subscriptionId` | `number \| undefined` | Optional | - |
| `number` | `number \| undefined` | Optional | - |
| `sequenceNumber` | `number \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `deliveryDate` | `string \| undefined` | Optional | - |
| `status` | `string \| undefined` | Optional | - |
| `collectionMethod` | `string \| undefined` | Optional | - |
| `paymentInstructions` | `string \| undefined` | Optional | - |
| `currency` | `string \| undefined` | Optional | - |
| `consolidationLevel` | `string \| undefined` | Optional | - |
| `productName` | `string \| undefined` | Optional | - |
| `productFamilyName` | `string \| undefined` | Optional | - |
| `role` | `string \| undefined` | Optional | - |
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
| `customFields` | [`ProformaCustomField[] \| undefined`](../../doc/models/proforma-custom-field.md) | Optional | - |
| `publicUrl` | `string \| undefined` | Optional | - |

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

