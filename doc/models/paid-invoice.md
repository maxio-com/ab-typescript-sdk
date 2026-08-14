
# Paid Invoice

## Structure

`PaidInvoice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invoiceId` | `string \| undefined` | Optional | The uid of the paid invoice |
| `status` | [`InvoiceStatus \| undefined`](../../doc/models/invoice-status.md) | Optional | The current status of the invoice. See [Invoice Statuses](https://maxio.zendesk.com/hc/en-us/articles/24252287829645-Advanced-Billing-Invoices-Overview#invoice-statuses) for more. |
| `dueAmount` | `string \| undefined` | Optional | The remaining due amount on the invoice |
| `paidAmount` | `string \| undefined` | Optional | The total amount paid on this invoice (including any prior payments) |

## Example

```ts
import { InvoiceStatus, PaidInvoice } from '@maxio-com/advanced-billing-sdk';

const paidInvoice: PaidInvoice = {
  invoiceId: 'invoice_id2',
  status: InvoiceStatus.Canceled,
  dueAmount: 'due_amount4',
  paidAmount: 'paid_amount6',
};
```

