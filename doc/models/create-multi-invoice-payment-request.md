
# Create Multi Invoice Payment Request

## Structure

`CreateMultiInvoicePaymentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payment` | [`CreateMultiInvoicePayment`](../../doc/models/create-multi-invoice-payment.md) | Required | - |

## Example

```ts
import {
  CreateMultiInvoicePaymentRequest,
  InvoicePaymentMethodType,
} from '@maxio-com/advanced-billing-sdk';

const createMultiInvoicePaymentRequest: CreateMultiInvoicePaymentRequest = {
  payment: {
    amount: 'String9',
    applications: [
      {
        invoiceUid: 'invoice_uid8',
        amount: 'amount0',
      }
    ],
    memo: 'memo0',
    details: 'details6',
    method: InvoicePaymentMethodType.Ach,
    receivedOn: 'received_on8',
  },
};
```

