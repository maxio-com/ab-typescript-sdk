
# Customer Response

## Structure

`CustomerResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customer` | [`Customer`](../../doc/models/customer.md) | Required | - |

## Example

```ts
import { CustomerResponse } from '@maxio-com/advanced-billing-sdk';

const customerResponse: CustomerResponse = {
  customer: {
    firstName: 'first_name0',
    lastName: 'last_name8',
    email: 'email6',
    ccEmails: 'cc_emails0',
    organization: 'organization6',
  },
};
```

