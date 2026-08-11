
# Invoice Payer Change

## Structure

`InvoicePayerChange`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string \| undefined` | Optional | - |
| `lastName` | `string \| undefined` | Optional | - |
| `organization` | `string \| undefined` | Optional | - |
| `email` | `string \| undefined` | Optional | - |

## Example

```ts
import { InvoicePayerChange } from '@maxio-com/advanced-billing-sdk';

const invoicePayerChange: InvoicePayerChange = {
  firstName: 'first_name4',
  lastName: 'last_name2',
  organization: 'organization2',
  email: 'email2',
};
```

