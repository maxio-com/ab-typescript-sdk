
# List Subscription Components Filter

## Structure

`ListSubscriptionComponentsFilter`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currencies` | `string[] \| undefined` | Optional | Allows fetching components allocation with matching currency based on provided values. Use in query `filter[currencies]=EUR,USD`.<br><br>**Constraints**: *Minimum Items*: `1` |
| `useSiteExchangeRate` | `boolean \| undefined` | Optional | Allows fetching components allocation with matching use_site_exchange_rate based on provided value. Use in query `filter[use_site_exchange_rate]=true`. |

## Example

```ts
import {
  ListSubscriptionComponentsFilter,
} from '@maxio-com/advanced-billing-sdk';

const listSubscriptionComponentsFilter: ListSubscriptionComponentsFilter = {
  currencies: [
    'EUR',
    'USD'
  ],
  useSiteExchangeRate: false,
};
```

