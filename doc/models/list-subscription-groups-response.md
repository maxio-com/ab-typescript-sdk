
# List Subscription Groups Response

## Structure

`ListSubscriptionGroupsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionGroups` | [`ListSubscriptionGroupsItem[] \| undefined`](../../doc/models/list-subscription-groups-item.md) | Optional | - |
| `meta` | [`ListSubscriptionGroupsMeta \| undefined`](../../doc/models/list-subscription-groups-meta.md) | Optional | - |

## Example

```ts
import {
  ListSubscriptionGroupsResponse,
} from '@maxio-com/advanced-billing-sdk';

const listSubscriptionGroupsResponse: ListSubscriptionGroupsResponse = {
  subscriptionGroups: [
    {
      uid: 'uid2',
      scheme: 166,
      customerId: 186,
      paymentProfileId: 162,
      subscriptionIds: [
        40
      ],
    }
  ],
  meta: {
    currentPage: 126,
    totalCount: 150,
  },
};
```

