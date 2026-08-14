
# Payment Profile Response

## Structure

`PaymentProfileResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentProfile` | [`PaymentProfile`](../../doc/models/containers/payment-profile.md) | Required | - |

## Example

```ts
import {
  ApplePayVault,
  PaymentProfileResponse,
  PaymentType,
} from '@maxio-com/advanced-billing-sdk';

const paymentProfileResponse: PaymentProfileResponse = {
  paymentProfile: {
    paymentType: PaymentType.ApplePay,
    id: 60,
    firstName: 'first_name2',
    lastName: 'last_name0',
    customerId: 98,
    currentVault: ApplePayVault.BraintreeBlue,
  },
};
```

