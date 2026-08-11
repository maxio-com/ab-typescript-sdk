
# Product Family

## Structure

`ProductFamily`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `handle` | `string \| undefined` | Optional | - |
| `accountingCode` | `string \| null \| undefined` | Optional | - |
| `description` | `string \| null \| undefined` | Optional | - |
| `surcharging` | `boolean \| undefined` | Optional | Whether surcharging applies to this product family. Only included on sites where surcharging is enabled. |
| `createdAt` | `string \| undefined` | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | - |
| `archivedAt` | `string \| null \| undefined` | Optional | Timestamp indicating when this product family was archived. `null` if the product family is not archived. |

## Example

```ts
import { ProductFamily } from '@maxio-com/advanced-billing-sdk';

const productFamily: ProductFamily = {
  id: 134,
  name: 'name4',
  handle: 'handle0',
  accountingCode: 'accounting_code0',
  description: 'description4',
};
```

