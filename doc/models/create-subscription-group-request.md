
# Create Subscription Group Request

## Structure

`CreateSubscriptionGroupRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionGroup` | [`CreateSubscriptionGroup`](../../doc/models/create-subscription-group.md) | Required | - |

## Example

```ts
import {
  CreateSubscriptionGroupRequest,
} from '@maxio-com/advanced-billing-sdk';

const createSubscriptionGroupRequest: CreateSubscriptionGroupRequest = {
  subscriptionGroup: {
    subscriptionId: 36,
    memberIds: [
      164,
      165
    ],
  },
};
```

