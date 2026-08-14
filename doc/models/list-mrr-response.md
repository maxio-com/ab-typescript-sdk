
# List MRR Response

## Structure

`ListMRRResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mrr` | [`ListMRRResponseResult`](../../doc/models/list-mrr-response-result.md) | Required | - |

## Example

```ts
import { ListMRRResponse } from '@maxio-com/advanced-billing-sdk';

const listMRRResponse: ListMRRResponse = {
  mrr: {
    page: 30,
    perPage: 198,
    totalPages: 92,
    totalEntries: 188,
    currency: 'currency4',
  },
};
```

