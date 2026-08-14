
# Register

## Structure

`Register`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `maxioId` | `string \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `currencyCode` | `string \| undefined` | Optional | The ISO 4217 currency code (3 character string) representing the currency of an invoice transaction. |

## Example

```ts
import { Register } from '@maxio-com/advanced-billing-sdk';

const register: Register = {
  id: 54,
  maxioId: 'maxio_id4',
  name: 'name2',
  currencyCode: 'currency_code2',
};
```

