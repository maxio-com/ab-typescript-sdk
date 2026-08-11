
# Payment Profile Params

PCI-safe cardholder fields only. Full card numbers, CVV, and billing address are never included.

## Structure

`PaymentProfileParams`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string \| undefined` | Optional | - |
| `lastName` | `string \| undefined` | Optional | - |
| `cardType` | `string \| undefined` | Optional | - |

## Example

```ts
import { PaymentProfileParams } from '@maxio-com/advanced-billing-sdk';

const paymentProfileParams: PaymentProfileParams = {
  firstName: 'first_name2',
  lastName: 'last_name0',
  cardType: 'card_type2',
};
```

