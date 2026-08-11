
# List Sale Rep Item

## Structure

`ListSaleRepItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `fullName` | `string \| undefined` | Optional | - |
| `subscriptionsCount` | `number \| undefined` | Optional | - |
| `mrrData` | [`Record<string, SaleRepItemMrr> \| undefined`](../../doc/models/sale-rep-item-mrr.md) | Optional | - |
| `testMode` | `boolean \| undefined` | Optional | - |

## Example

```ts
import { ListSaleRepItem } from '@maxio-com/advanced-billing-sdk';

const listSaleRepItem: ListSaleRepItem = {
  id: 54,
  fullName: 'full_name2',
  subscriptionsCount: 126,
  mrrData: {
    'november_2019': {
      mrr: '$0.00',
      usage: '$0.00',
      recurring: '$0.00',
    },
    'december_2019': {
      mrr: '$0.00',
      usage: '$0.00',
      recurring: '$0.00',
    },
    'january_2020': {
      mrr: '$400.00',
      usage: '$0.00',
      recurring: '$400.00',
    }
  },
  testMode: false,
};
```

