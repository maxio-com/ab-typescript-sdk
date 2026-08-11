
# Payment Method Bank Account

## Structure

`PaymentMethodBankAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `maskedAccountNumber` | `string` | Required | - |
| `maskedRoutingNumber` | `string` | Required | - |
| `type` | [`InvoiceEventPaymentMethod`](../../doc/models/invoice-event-payment-method.md) | Required | - |

## Example

```ts
import {
  InvoiceEventPaymentMethod,
  PaymentMethodBankAccount,
} from '@maxio-com/advanced-billing-sdk';

const paymentMethodBankAccount: PaymentMethodBankAccount = {
  maskedAccountNumber: 'masked_account_number4',
  maskedRoutingNumber: 'masked_routing_number4',
  type: InvoiceEventPaymentMethod.BankAccount,
};
```

