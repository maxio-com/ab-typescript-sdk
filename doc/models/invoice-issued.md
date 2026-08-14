
# Invoice Issued

## Structure

`InvoiceIssued`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string` | Required | - |
| `number` | `string` | Required | - |
| `role` | `string` | Required | - |
| `dueDate` | `string \| null` | Required | - |
| `issueDate` | `string` | Required | Invoice issue date. Can be an empty string if value is missing. |
| `paidDate` | `string` | Required | Paid date. Can be an empty string if value is missing. |
| `dueAmount` | `string` | Required | - |
| `paidAmount` | `string` | Required | - |
| `taxAmount` | `string` | Required | - |
| `refundAmount` | `string` | Required | - |
| `totalAmount` | `string` | Required | - |
| `statusAmount` | `string` | Required | - |
| `productName` | `string` | Required | - |
| `consolidationLevel` | `string` | Required | - |
| `lineItems` | [`InvoiceLineItemEventData[]`](../../doc/models/invoice-line-item-event-data.md) | Required | - |

## Example

```ts
import { InvoiceIssued } from '@maxio-com/advanced-billing-sdk';

const invoiceIssued: InvoiceIssued = {
  uid: 'uid8',
  number: 'number4',
  role: 'role8',
  dueDate: '2016-03-13T12:52:32.123Z',
  issueDate: 'issue_date4',
  paidDate: 'paid_date8',
  dueAmount: 'due_amount0',
  paidAmount: 'paid_amount0',
  taxAmount: 'tax_amount8',
  refundAmount: 'refund_amount6',
  totalAmount: 'total_amount4',
  statusAmount: 'status_amount8',
  productName: 'product_name4',
  consolidationLevel: 'consolidation_level0',
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

