
# Proforma Invoice Preview

## Structure

`ProformaInvoicePreview`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `siteId` | `number \| undefined` | Optional | - |
| `customerId` | `number \| undefined` | Optional | - |
| `subscriptionId` | `number \| undefined` | Optional | - |
| `number` | `string \| undefined` | Optional | - |
| `sequenceNumber` | `number \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `deliveryDate` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `status` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `collectionMethod` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `paymentInstructions` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `currency` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `consolidationLevel` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `productName` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `productFamilyName` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `role` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `seller` | [`InvoiceSeller \| undefined`](../../doc/models/invoice-seller.md) | Optional | Information about the seller (merchant) listed on the masthead of the invoice. |
| `customer` | [`InvoiceCustomer \| undefined`](../../doc/models/invoice-customer.md) | Optional | Information about the customer who is owner or recipient the invoiced subscription. |
| `memo` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `billingAddress` | [`InvoiceAddress \| undefined`](../../doc/models/invoice-address.md) | Optional | - |
| `shippingAddress` | [`InvoiceAddress \| undefined`](../../doc/models/invoice-address.md) | Optional | - |
| `subtotalAmount` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `discountAmount` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `taxAmount` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `totalAmount` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `creditAmount` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `paidAmount` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `refundAmount` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `dueAmount` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `lineItems` | [`InvoiceLineItem[] \| undefined`](../../doc/models/invoice-line-item.md) | Optional | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |
| `discounts` | [`ProformaInvoiceDiscount[] \| undefined`](../../doc/models/proforma-invoice-discount.md) | Optional | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |
| `taxes` | [`ProformaInvoiceTax[] \| undefined`](../../doc/models/proforma-invoice-tax.md) | Optional | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |
| `credits` | [`ProformaInvoiceCredit[] \| undefined`](../../doc/models/proforma-invoice-credit.md) | Optional | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |
| `payments` | [`ProformaInvoicePayment[] \| undefined`](../../doc/models/proforma-invoice-payment.md) | Optional | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |
| `customFields` | [`ProformaCustomField[] \| undefined`](../../doc/models/proforma-custom-field.md) | Optional | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |
| `publicUrl` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "uid": "uid2",
  "site_id": 127.58,
  "customer_id": 51.9,
  "subscription_id": 206.22,
  "number": "number0"
}
```

