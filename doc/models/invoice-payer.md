
# Invoice Payer

## Structure

`InvoicePayer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chargifyId` | `number \| undefined` | Optional | - |
| `firstName` | `string \| undefined` | Optional | - |
| `lastName` | `string \| undefined` | Optional | - |
| `organization` | `string \| null \| undefined` | Optional | - |
| `email` | `string \| undefined` | Optional | - |
| `vatNumber` | `string \| null \| undefined` | Optional | - |

## Example

```ts
import { InvoicePayer } from '@maxio-com/advanced-billing-sdk';

const invoicePayer: InvoicePayer = {
  chargifyId: 198,
  firstName: 'first_name2',
  lastName: 'last_name0',
  organization: 'organization4',
  email: 'email4',
};
```

