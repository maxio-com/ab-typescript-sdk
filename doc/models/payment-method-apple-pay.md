
# Payment Method Apple Pay

## Structure

`PaymentMethodApplePay`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`InvoiceEventPaymentMethod`](../../doc/models/invoice-event-payment-method.md) | Required | - |

## Example

```ts
import {
  InvoiceEventPaymentMethod,
  PaymentMethodApplePay,
} from '@maxio-com/advanced-billing-sdk';

const paymentMethodApplePay: PaymentMethodApplePay = {
  type: InvoiceEventPaymentMethod.ApplePay,
};
```

