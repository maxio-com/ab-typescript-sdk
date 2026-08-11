
# List Components Filter

## Structure

`ListComponentsFilter`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `number[] \| undefined` | Optional | Allows fetching components with matching id based on provided value. Use in query `filter[ids]=1,2,3`.<br><br>**Constraints**: *Minimum Items*: `1` |
| `useSiteExchangeRate` | `boolean \| undefined` | Optional | Allows fetching components with matching use_site_exchange_rate based on provided value (refers to default price point). Use in query `filter[use_site_exchange_rate]=true`. |

## Example

```ts
import { ListComponentsFilter } from '@maxio-com/advanced-billing-sdk';

const listComponentsFilter: ListComponentsFilter = {
  ids: [
    1,
    2,
    3
  ],
  useSiteExchangeRate: false,
};
```

