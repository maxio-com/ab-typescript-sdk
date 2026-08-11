
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

## Example

```ts
import { ProformaInvoiceIssued } from '@maxio-com/advanced-billing-sdk';

const proformaInvoiceIssued: ProformaInvoiceIssued = {
  uid: 'uid6',
  number: 'number4',
  role: 'role0',
  deliveryDate: '2016-03-13T12:52:32.123Z',
  createdAt: '2016-03-13T12:52:32.123Z',
  dueAmount: 'due_amount8',
  paidAmount: 'paid_amount8',
  taxAmount: 'tax_amount0',
  totalAmount: 'total_amount2',
  productName: 'product_name2',
  lineItems: [
    {
      uid: 'uid8',
      title: 'title4',
      description: 'description8',
      quantity: 102,
      quantityDelta: 204,
    }
  ],
};
```

