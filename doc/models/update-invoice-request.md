
# Update Invoice Request

Request payload for updating a draft ad hoc invoice.

## Structure

`UpdateInvoiceRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invoice` | [`UpdateInvoice`](../../doc/models/update-invoice.md) | Required | Attributes of a draft ad hoc invoice which can be updated. Only the submitted attributes are changed. |

## Example

```ts
import { UpdateInvoiceRequest } from '@maxio-com/advanced-billing-sdk';

const updateInvoiceRequest: UpdateInvoiceRequest = {
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
  },
};
```

