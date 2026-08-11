
# Add Subscription to a Group

## Structure

`AddSubscriptionToAGroup`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `group` | [`GroupSettings \| undefined`](../../doc/models/group-settings.md) | Optional | - |

## Example

```ts
import {
  AddSubscriptionToAGroup,
  GroupTargetType,
} from '@maxio-com/advanced-billing-sdk';

const addSubscriptionToAGroup: AddSubscriptionToAGroup = {
  group: {
    target: {
      type: GroupTargetType.Parent,
      id: 236,
    },
    billing: {
      accrue: false,
      alignDate: false,
      prorate: false,
    },
  },
};
```

