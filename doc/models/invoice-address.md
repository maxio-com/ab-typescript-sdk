
# Invoice Address

## Structure

`InvoiceAddress`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `street` | `string \| null \| undefined` | Optional | - |
| `line2` | `string \| null \| undefined` | Optional | - |
| `city` | `string \| null \| undefined` | Optional | - |
| `state` | `string \| null \| undefined` | Optional | - |
| `zip` | `string \| null \| undefined` | Optional | - |
| `country` | `string \| null \| undefined` | Optional | - |

## Example

```ts
import { InvoiceAddress } from '@maxio-com/advanced-billing-sdk';

const invoiceAddress: InvoiceAddress = {
  street: 'street2',
  line2: 'line26',
  city: 'city2',
  state: 'state8',
  zip: 'zip6',
};
```

