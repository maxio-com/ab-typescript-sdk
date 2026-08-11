
# List Public Keys Meta

## Structure

`ListPublicKeysMeta`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalCount` | `number \| undefined` | Optional | - |
| `currentPage` | `number \| undefined` | Optional | - |
| `totalPages` | `number \| undefined` | Optional | - |
| `perPage` | `number \| undefined` | Optional | - |

## Example

```ts
import { ListPublicKeysMeta } from '@maxio-com/advanced-billing-sdk';

const listPublicKeysMeta: ListPublicKeysMeta = {
  totalCount: 232,
  currentPage: 208,
  totalPages: 220,
  perPage: 70,
};
```

