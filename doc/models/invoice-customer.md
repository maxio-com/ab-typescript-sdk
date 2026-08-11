
# Invoice Customer

Information about the customer who is owner or recipient of the invoiced subscription.

## Structure

`InvoiceCustomer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chargifyId` | `number \| null \| undefined` | Optional | - |
| `firstName` | `string \| undefined` | Optional | - |
| `lastName` | `string \| undefined` | Optional | - |
| `organization` | `string \| null \| undefined` | Optional | - |
| `email` | `string \| undefined` | Optional | - |
| `vatNumber` | `string \| null \| undefined` | Optional | - |
| `reference` | `string \| null \| undefined` | Optional | - |

## Example

```ts
import { InvoiceCustomer } from '@maxio-com/advanced-billing-sdk';

const invoiceCustomer: InvoiceCustomer = {
  chargifyId: 82,
  firstName: 'first_name2',
  lastName: 'last_name0',
  organization: 'organization6',
  email: 'email4',
};
```

