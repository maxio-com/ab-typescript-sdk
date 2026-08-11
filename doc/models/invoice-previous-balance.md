
# Invoice Previous Balance

## Structure

`InvoicePreviousBalance`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `capturedAt` | `string \| undefined` | Optional | - |
| `invoices` | [`InvoiceBalanceItem[] \| undefined`](../../doc/models/invoice-balance-item.md) | Optional | - |

## Example

```ts
import { InvoicePreviousBalance } from '@maxio-com/advanced-billing-sdk';

const invoicePreviousBalance: InvoicePreviousBalance = {
  capturedAt: '2016-03-13T12:52:32.123Z',
  invoices: [
    {
      uid: 'uid6',
      number: 'number6',
      outstandingAmount: 'outstanding_amount8',
    },
    {
      uid: 'uid6',
      number: 'number6',
      outstandingAmount: 'outstanding_amount8',
    },
    {
      uid: 'uid6',
      number: 'number6',
      outstandingAmount: 'outstanding_amount8',
    }
  ],
};
```

