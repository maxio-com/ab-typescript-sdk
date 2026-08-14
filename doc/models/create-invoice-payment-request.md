
# Create Invoice Payment Request

## Structure

`CreateInvoicePaymentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payment` | [`CreateInvoicePayment`](../../doc/models/create-invoice-payment.md) | Required | - |
| `type` | [`InvoicePaymentType \| undefined`](../../doc/models/invoice-payment-type.md) | Optional | The type of payment to be applied to an Invoice. Defaults to external. |

## Example

```ts
import {
  CreateInvoicePaymentRequest,
  InvoicePaymentMethodType,
  InvoicePaymentType,
} from '@maxio-com/advanced-billing-sdk';

const createInvoicePaymentRequest: CreateInvoicePaymentRequest = {
  payment: {
    amount: 'String9',
    memo: 'memo0',
    method: InvoicePaymentMethodType.Ach,
    details: 'details6',
    paymentProfileId: 42,
  },
  type: InvoicePaymentType.External,
};
```

