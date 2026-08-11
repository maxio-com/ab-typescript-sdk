
# Payment Method Credit Card

## Structure

`PaymentMethodCreditCard`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardBrand` | `string` | Required | - |
| `cardExpiration` | `string \| undefined` | Optional | - |
| `lastFour` | `string \| null \| undefined` | Optional | - |
| `maskedCardNumber` | `string` | Required | - |
| `type` | [`InvoiceEventPaymentMethod`](../../doc/models/invoice-event-payment-method.md) | Required | - |

## Example

```ts
import {
  InvoiceEventPaymentMethod,
  PaymentMethodCreditCard,
} from '@maxio-com/advanced-billing-sdk';

const paymentMethodCreditCard: PaymentMethodCreditCard = {
  cardBrand: 'card_brand4',
  maskedCardNumber: 'masked_card_number0',
  type: InvoiceEventPaymentMethod.CreditCard,
  cardExpiration: 'card_expiration2',
  lastFour: 'last_four6',
};
```

