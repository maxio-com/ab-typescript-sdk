
# Create Payment Profile Request

## Structure

`CreatePaymentProfileRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentProfile` | [`CreatePaymentProfile`](../../doc/models/create-payment-profile.md) | Required | - |

## Example

```ts
import {
  CreatePaymentProfileRequest,
  PaymentType,
} from '@maxio-com/advanced-billing-sdk';

const createPaymentProfileRequest: CreatePaymentProfileRequest = {
  paymentProfile: {
    chargifyToken: 'tok_9g6hw85pnpt6knmskpwp4ttt',
    id: 44,
    paymentType: PaymentType.CreditCard,
    firstName: 'first_name4',
    lastName: 'last_name2',
    fullNumber: '5424000000000015',
  },
};
```

