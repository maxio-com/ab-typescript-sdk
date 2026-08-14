
# Chjs Tokenization Failure

## Structure

`ChjsTokenizationFailure`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | `string` | Required | - |
| `paymentProfileParams` | [`PaymentProfileParams \| undefined`](../../doc/models/payment-profile-params.md) | Optional | PCI-safe cardholder fields only. Full card numbers, CVV, and billing address are never included. |

## Example

```ts
import { ChjsTokenizationFailure } from '@maxio-com/advanced-billing-sdk';

const chjsTokenizationFailure: ChjsTokenizationFailure = {
  errors: 'errors2',
  paymentProfileParams: {
    firstName: 'first_name2',
    lastName: 'last_name0',
    cardType: 'card_type2',
  },
};
```

