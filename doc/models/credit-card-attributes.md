
# Credit Card Attributes

## Structure

`CreditCardAttributes`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fullNumber` | `string \| undefined` | Optional | - |
| `expirationMonth` | `string \| undefined` | Optional | - |
| `expirationYear` | `string \| undefined` | Optional | - |

## Example

```ts
import { CreditCardAttributes } from '@maxio-com/advanced-billing-sdk';

const creditCardAttributes: CreditCardAttributes = {
  fullNumber: 'full_number8',
  expirationMonth: 'expiration_month8',
  expirationYear: 'expiration_year2',
};
```

