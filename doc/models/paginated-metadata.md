
# Paginated Metadata

## Structure

`PaginatedMetadata`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalCount` | `number \| undefined` | Optional | - |
| `currentPage` | `number \| undefined` | Optional | - |
| `totalPages` | `number \| undefined` | Optional | - |
| `perPage` | `number \| undefined` | Optional | - |
| `metadata` | [`Metadata[] \| undefined`](../../doc/models/metadata.md) | Optional | - |

## Example

```ts
import { PaginatedMetadata } from '@maxio-com/advanced-billing-sdk';

const paginatedMetadata: PaginatedMetadata = {
  totalCount: 166,
  currentPage: 142,
  totalPages: 154,
  perPage: 136,
  metadata: [
    {
      id: 50,
      value: 'value8',
      resourceId: 134,
      name: 'name6',
      deletedAt: '2016-03-13T12:52:32.123Z',
    }
  ],
};
```

