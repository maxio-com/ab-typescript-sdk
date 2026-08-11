
# List Subscription Components for Site Filter

## Structure

`ListSubscriptionComponentsForSiteFilter`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currencies` | `string[] \| undefined` | Optional | Allows fetching components allocation with matching currency based on provided values. Use in query `filter[currencies]=USD,EUR`.<br><br>**Constraints**: *Minimum Items*: `1` |
| `useSiteExchangeRate` | `boolean \| undefined` | Optional | Allows fetching components allocation with matching use_site_exchange_rate based on provided value. Use in query `filter[use_site_exchange_rate]=true`. |
| `subscription` | [`SubscriptionFilter \| undefined`](../../doc/models/subscription-filter.md) | Optional | Nested filter used for List Subscription Components For Site Filter |

## Example

```ts
import {
  ListSubscriptionComponentsForSiteFilter,
  SubscriptionListDateField,
  SubscriptionStateFilter,
} from '@maxio-com/advanced-billing-sdk';

const listSubscriptionComponentsForSiteFilter: ListSubscriptionComponentsForSiteFilter = {
  currencies: [
    'EUR',
    'USD'
  ],
  useSiteExchangeRate: false,
  subscription: {
    states: [
      SubscriptionStateFilter.Trialing,
      SubscriptionStateFilter.Unpaid,
      SubscriptionStateFilter.Active
    ],
    dateField: SubscriptionListDateField.UpdatedAt,
    startDate: '2016-03-13T12:52:32.123Z',
    endDate: '2016-03-13T12:52:32.123Z',
    startDatetime: '2016-03-13T12:52:32.123Z',
  },
};
```

