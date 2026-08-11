
# Contract

Contract linked to the scheduled renewal configuration.

## Structure

`Contract`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `maxioId` | `string \| undefined` | Optional | - |
| `number` | `string \| null \| undefined` | Optional | - |
| `register` | [`Register \| undefined`](../../doc/models/register.md) | Optional | - |

## Example

```ts
import { Contract } from '@maxio-com/advanced-billing-sdk';

const contract: Contract = {
  id: 112,
  maxioId: 'maxio_id6',
  number: 'number2',
  register: {
    id: 54,
    maxioId: 'maxio_id4',
    name: 'name2',
    currencyCode: 'currency_code2',
  },
};
```

