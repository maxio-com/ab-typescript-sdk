
# List Invoices Response

## Structure

`ListInvoicesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invoices` | [`Invoice[]`](../../doc/models/invoice.md) | Required | - |

## Example

```ts
import { ListInvoicesResponse } from '@maxio-com/advanced-billing-sdk';

const listInvoicesResponse: ListInvoicesResponse = {
  invoices: [
    {
      id: BigInt(196),
      uid: 'uid6',
      siteId: 122,
      customerId: 234,
      subscriptionId: 50,
      issueDate: '2024-01-01',
      dueDate: '2024-01-01',
      paidDate: '2024-01-01',
      publicUrlExpiresOn: '2024-01-21',
    }
  ],
};
```

