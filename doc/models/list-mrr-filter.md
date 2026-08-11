
# List Mrr Filter

## Structure

`ListMrrFilter`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionIds` | `number[] \| undefined` | Optional | Submit ids in order to limit results. Use in query: `filter[subscription_ids]=1,2,3`.<br><br>**Constraints**: *Minimum Items*: `1` |

## Example

```ts
import { ListMrrFilter } from '@maxio-com/advanced-billing-sdk';

const listMrrFilter: ListMrrFilter = {
  subscriptionIds: [
    1,
    2,
    3
  ],
};
```

