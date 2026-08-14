
# Payment Method Paypal

## Structure

`PaymentMethodPaypal`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Required | - |
| `type` | [`InvoiceEventPaymentMethod`](../../doc/models/invoice-event-payment-method.md) | Required | - |

## Example

```ts
import {
  InvoiceEventPaymentMethod,
  PaymentMethodPaypal,
} from '@maxio-com/advanced-billing-sdk';

const paymentMethodPaypal: PaymentMethodPaypal = {
  email: 'email8',
  type: InvoiceEventPaymentMethod.PaypalAccount,
};
```

