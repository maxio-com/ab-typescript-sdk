
# Create Invoice Request

## Structure

`CreateInvoiceRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invoice` | [`CreateInvoice`](../../doc/models/create-invoice.md) | Required | - |

## Example

```ts
import {
  CreateInvoiceRequest,
  CreateInvoiceStatus,
} from '@maxio-com/advanced-billing-sdk';

const createInvoiceRequest: CreateInvoiceRequest = {
  invoice: {
    lineItems: [
      {
        title: 'title4',
        quantity: 56.68,
        unitPrice: 39.9,
        taxable: false,
        taxCode: 'tax_code6',
      },
      {
        title: 'title4',
        quantity: 56.68,
        unitPrice: 39.9,
        taxable: false,
        taxCode: 'tax_code6',
      },
      {
        title: 'title4',
        quantity: 56.68,
        unitPrice: 39.9,
        taxable: false,
        taxCode: 'tax_code6',
      }
    ],
    issueDate: '2024-01-01',
    netTerms: 144,
    paymentInstructions: 'payment_instructions6',
    memo: 'memo0',
    status: CreateInvoiceStatus.Draft,
  },
};
```

