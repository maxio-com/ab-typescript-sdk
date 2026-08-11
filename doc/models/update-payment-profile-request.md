
# Update Payment Profile Request

## Structure

`UpdatePaymentProfileRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentProfile` | [`UpdatePaymentProfile`](../../doc/models/update-payment-profile.md) | Required | - |

## Example

```ts
import {
  CardType,
  UpdatePaymentProfileRequest,
} from '@maxio-com/advanced-billing-sdk';

const updatePaymentProfileRequest: UpdatePaymentProfileRequest = {
  paymentProfile: {
    firstName: 'first_name4',
    lastName: 'last_name2',
    fullNumber: '5424000000000015',
    cardType: CardType.Bogus,
    expirationMonth: 'expiration_month0',
  },
};
```

