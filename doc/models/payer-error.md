
# Payer Error

## Structure

`PayerError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `lastName` | `string[] \| undefined` | Optional | - |
| `firstName` | `string[] \| undefined` | Optional | - |
| `email` | `string[] \| undefined` | Optional | - |

## Example

```ts
import { PayerError } from '@maxio-com/advanced-billing-sdk';

const payerError: PayerError = {
  lastName: [
    'last_name9'
  ],
  firstName: [
    'first_name2',
    'first_name3',
    'first_name4'
  ],
  email: [
    'email6',
    'email7',
    'email8'
  ],
};
```

