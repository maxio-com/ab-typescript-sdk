
# Create Payment

## Structure

`CreatePayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `string` | Required | - |
| `memo` | `string` | Required | - |
| `paymentDetails` | `string` | Required | - |
| `paymentMethod` | [`InvoicePaymentMethodType`](../../doc/models/invoice-payment-method-type.md) | Required | The type of payment method used. Defaults to other. |

## Example

```ts
import {
  CreatePayment,
  InvoicePaymentMethodType,
} from '@maxio-com/advanced-billing-sdk';

const createPayment: CreatePayment = {
  amount: 'amount6',
  memo: 'memo8',
  paymentDetails: 'payment_details4',
  paymentMethod: InvoicePaymentMethodType.CreditCard,
};
```

