
# Update Subscription Group Request

## Structure

`UpdateSubscriptionGroupRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionGroup` | [`UpdateSubscriptionGroup`](../../doc/models/update-subscription-group.md) | Required | - |

## Example

```ts
import {
  UpdateSubscriptionGroupRequest,
} from '@maxio-com/advanced-billing-sdk';

const updateSubscriptionGroupRequest: UpdateSubscriptionGroupRequest = {
  subscriptionGroup: {
    memberIds: [
      164,
      165
    ],
  },
};
```

