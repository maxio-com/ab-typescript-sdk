
# Customer Payer Change

## Structure

`CustomerPayerChange`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `before` | [`InvoicePayerChange`](../../doc/models/invoice-payer-change.md) | Required | - |
| `after` | [`InvoicePayerChange`](../../doc/models/invoice-payer-change.md) | Required | - |

## Example

```ts
import { CustomerPayerChange } from '@maxio-com/advanced-billing-sdk';

const customerPayerChange: CustomerPayerChange = {
  before: {
    firstName: 'first_name0',
    lastName: 'last_name8',
    organization: 'organization4',
    email: 'email6',
  },
  after: {
    firstName: 'first_name2',
    lastName: 'last_name0',
    organization: 'organization4',
    email: 'email4',
  },
};
```

