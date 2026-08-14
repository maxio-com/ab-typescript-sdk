
# Multi Invoice Payment Response

## Structure

`MultiInvoicePaymentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payment` | [`MultiInvoicePayment`](../../doc/models/multi-invoice-payment.md) | Required | - |

## Example

```ts
import { MultiInvoicePaymentResponse } from '@maxio-com/advanced-billing-sdk';

const multiInvoicePaymentResponse: MultiInvoicePaymentResponse = {
  payment: {
    transactionId: 224,
    totalAmount: 'total_amount2',
    currencyCode: 'currency_code2',
    applications: [
      {
        invoiceUid: 'invoice_uid8',
        applicationUid: 'application_uid8',
        appliedAmount: 'applied_amount0',
      },
      {
        invoiceUid: 'invoice_uid8',
        applicationUid: 'application_uid8',
        appliedAmount: 'applied_amount0',
      },
      {
        invoiceUid: 'invoice_uid8',
        applicationUid: 'application_uid8',
        appliedAmount: 'applied_amount0',
      }
    ],
  },
};
```

