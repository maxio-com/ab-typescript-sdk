
# Subscription Group Response

## Structure

`SubscriptionGroupResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionGroup` | [`SubscriptionGroup`](../../doc/models/subscription-group.md) | Required | - |

## Example

```ts
import {
  CollectionMethod,
  SubscriptionGroupResponse,
} from '@maxio-com/advanced-billing-sdk';

const subscriptionGroupResponse: SubscriptionGroupResponse = {
  subscriptionGroup: {
    uid: 'uid8',
    customerId: 220,
    paymentProfile: {
      id: 44,
      firstName: 'first_name4',
      lastName: 'last_name2',
      maskedCardNumber: 'masked_card_number2',
    },
    paymentCollectionMethod: CollectionMethod.Prepaid,
    subscriptionIds: [
      74,
      75
    ],
  },
};
```

