
# Invoice Response

## Structure

`InvoiceResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invoice` | [`Invoice`](../../doc/models/invoice.md) | Required | - |

## Example

```ts
import { InvoiceResponse } from '@maxio-com/advanced-billing-sdk';

const invoiceResponse: InvoiceResponse = {
  invoice: {
    id: BigInt(166),
    uid: 'uid6',
    siteId: 92,
    customerId: 204,
    subscriptionId: 20,
    issueDate: '2024-01-01',
    dueDate: '2024-01-01',
    paidDate: '2024-01-01',
    publicUrlExpiresOn: '2024-01-21',
  },
};
```

