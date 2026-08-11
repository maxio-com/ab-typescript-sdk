
# Record Payment Response

## Structure

`RecordPaymentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paidInvoices` | [`PaidInvoice[] \| undefined`](../../doc/models/paid-invoice.md) | Optional | - |
| `prepayment` | [`InvoicePrePayment \| null \| undefined`](../../doc/models/invoice-pre-payment.md) | Optional | - |

## Example

```ts
import {
  InvoiceStatus,
  RecordPaymentResponse,
} from '@maxio-com/advanced-billing-sdk';

const recordPaymentResponse: RecordPaymentResponse = {
  paidInvoices: [
    {
      invoiceId: 'invoice_id8',
      status: InvoiceStatus.Draft,
      dueAmount: 'due_amount0',
      paidAmount: 'paid_amount0',
    }
  ],
  prepayment: {
    subscriptionId: 148,
    amountInCents: BigInt(124),
    endingBalanceInCents: BigInt(164),
  },
};
```

