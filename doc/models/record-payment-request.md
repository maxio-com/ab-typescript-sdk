
# Record Payment Request

## Structure

`RecordPaymentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payment` | [`CreatePayment`](../../doc/models/create-payment.md) | Required | - |

## Example

```ts
import {
  InvoicePaymentMethodType,
  RecordPaymentRequest,
} from '@maxio-com/advanced-billing-sdk';

const recordPaymentRequest: RecordPaymentRequest = {
  payment: {
    amount: 'amount8',
    memo: 'memo0',
    paymentDetails: 'payment_details6',
    paymentMethod: InvoicePaymentMethodType.Cash,
  },
};
```

