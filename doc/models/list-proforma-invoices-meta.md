
# List Proforma Invoices Meta

## Structure

`ListProformaInvoicesMeta`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalCount` | `number \| undefined` | Optional | - |
| `currentPage` | `number \| undefined` | Optional | - |
| `totalPages` | `number \| undefined` | Optional | - |
| `statusCode` | `number \| undefined` | Optional | - |

## Example

```ts
import { ListProformaInvoicesMeta } from '@maxio-com/advanced-billing-sdk';

const listProformaInvoicesMeta: ListProformaInvoicesMeta = {
  totalCount: 50,
  currentPage: 26,
  totalPages: 38,
  statusCode: 68,
};
```

