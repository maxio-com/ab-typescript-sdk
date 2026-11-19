
# Invoice Status

The current status of the invoice. See [Invoice Statuses](https://docs.maxio.com/billing/invoicing/overview/understand-how-invoices-are-generated#invoice-statuses) for more.

## Enumeration

`InvoiceStatus`

## Fields

| Name |
|  --- |
| `Draft` |
| `Open` |
| `Paid` |
| `Pending` |
| `Voided` |
| `Canceled` |
| `Processing` |

## Example

```ts
import { InvoiceStatus } from '@maxio-com/advanced-billing-sdk';

const invoiceStatus = InvoiceStatus.Paid;
```

