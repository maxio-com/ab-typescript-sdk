
# List MRR Response Result

## Structure

`ListMRRResponseResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `number \| undefined` | Optional | - |
| `perPage` | `number \| undefined` | Optional | - |
| `totalPages` | `number \| undefined` | Optional | - |
| `totalEntries` | `number \| undefined` | Optional | - |
| `currency` | `string \| undefined` | Optional | - |
| `currencySymbol` | `string \| undefined` | Optional | - |
| `movements` | [`Movement[] \| undefined`](../../doc/models/movement.md) | Optional | - |

## Example

```ts
import { ListMRRResponseResult } from '@maxio-com/advanced-billing-sdk';

const listMRRResponseResult: ListMRRResponseResult = {
  page: 40,
  perPage: 208,
  totalPages: 82,
  totalEntries: 78,
  currency: 'currency6',
};
```

