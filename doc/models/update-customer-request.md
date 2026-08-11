
# Update Customer Request

## Structure

`UpdateCustomerRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customer` | [`UpdateCustomer`](../../doc/models/update-customer.md) | Required | - |

## Example

```ts
import { UpdateCustomerRequest } from '@maxio-com/advanced-billing-sdk';

const updateCustomerRequest: UpdateCustomerRequest = {
  customer: {
    firstName: 'first_name0',
    lastName: 'last_name8',
    email: 'email6',
    ccEmails: 'cc_emails0',
    organization: 'organization6',
  },
};
```

