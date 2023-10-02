
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
| `customer` | [`ProformaCustomer \| undefined`](../../doc/models/proforma-customer.md) | Optional | - |
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
| `lineItems` | [`ProformaInvoiceLineItem[] \| undefined`](../../doc/models/proforma-invoice-line-item.md) | Optional | - |
| `discounts` | `unknown[] \| undefined` | Optional | - |
| `taxes` | `unknown[] \| undefined` | Optional | - |
| `credits` | `unknown[] \| undefined` | Optional | - |
| `payments` | `unknown[] \| undefined` | Optional | - |
| `customFields` | `unknown[] \| undefined` | Optional | - |
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

