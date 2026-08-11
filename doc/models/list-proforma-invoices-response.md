
# List Proforma Invoices Response

## Structure

`ListProformaInvoicesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `proformaInvoices` | [`ProformaInvoice[] \| undefined`](../../doc/models/proforma-invoice.md) | Optional | - |
| `meta` | [`ListProformaInvoicesMeta \| undefined`](../../doc/models/list-proforma-invoices-meta.md) | Optional | - |

## Example

```ts
import {
  ListProformaInvoicesResponse,
} from '@maxio-com/advanced-billing-sdk';

const listProformaInvoicesResponse: ListProformaInvoicesResponse = {
  proformaInvoices: [
    {
      uid: 'uid0',
      siteId: 140,
      customerId: 252,
      subscriptionId: 68,
      number: 56,
    },
    {
      uid: 'uid0',
      siteId: 140,
      customerId: 252,
      subscriptionId: 68,
      number: 56,
    },
    {
      uid: 'uid0',
      siteId: 140,
      customerId: 252,
      subscriptionId: 68,
      number: 56,
    }
  ],
  meta: {
    totalCount: 150,
    currentPage: 126,
    totalPages: 138,
    statusCode: 168,
  },
};
```

