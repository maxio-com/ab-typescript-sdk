
# Create Customer Request

## Structure

`CreateCustomerRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customer` | [`CreateCustomer`](../../doc/models/create-customer.md) | Required | - |

## Example

```ts
import { CreateCustomerRequest } from '@maxio-com/advanced-billing-sdk';

const createCustomerRequest: CreateCustomerRequest = {
  customer: {
    firstName: 'first_name0',
    lastName: 'last_name8',
    email: 'email6',
    ccEmails: 'cc_emails0',
    organization: 'organization6',
    reference: 'reference4',
    address: 'address6',
    address2: 'address_24',
  },
};
```

