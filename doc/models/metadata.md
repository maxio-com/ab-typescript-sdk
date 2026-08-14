
# Metadata

## Structure

`Metadata`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| null \| undefined` | Optional | - |
| `value` | `string \| null \| undefined` | Optional | - |
| `resourceId` | `number \| null \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `deletedAt` | `string \| null \| undefined` | Optional | - |
| `metafieldId` | `number \| null \| undefined` | Optional | - |

## Example

```ts
import { Metadata } from '@maxio-com/advanced-billing-sdk';

const metadata: Metadata = {
  id: 50,
  value: 'value8',
  resourceId: 134,
  name: 'name6',
  deletedAt: '2016-03-13T12:52:32.123Z',
};
```

