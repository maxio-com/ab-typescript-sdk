
# Create Invoice Address

Overrides the default address.

## Structure

`CreateInvoiceAddress`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string \| undefined` | Optional | - |
| `lastName` | `string \| undefined` | Optional | - |
| `phone` | `string \| undefined` | Optional | - |
| `address` | `string \| undefined` | Optional | - |
| `address2` | `string \| undefined` | Optional | - |
| `city` | `string \| undefined` | Optional | - |
| `state` | `string \| undefined` | Optional | - |
| `zip` | `string \| undefined` | Optional | - |
| `country` | `string \| undefined` | Optional | - |

## Example

```ts
import { CreateInvoiceAddress } from '@maxio-com/advanced-billing-sdk';

const createInvoiceAddress: CreateInvoiceAddress = {
  firstName: 'first_name6',
  lastName: 'last_name4',
  phone: 'phone4',
  address: 'address2',
  address2: 'address_20',
};
```

