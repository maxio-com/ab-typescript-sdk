
# List Subscription Groups Item

## Structure

`ListSubscriptionGroupsItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| undefined` | Optional | - |
| `scheme` | `number \| undefined` | Optional | - |
| `customerId` | `number \| undefined` | Optional | - |
| `paymentProfileId` | `number \| undefined` | Optional | - |
| `subscriptionIds` | `number[] \| undefined` | Optional | - |
| `primarySubscriptionId` | `number \| undefined` | Optional | - |
| `nextAssessmentAt` | `string \| undefined` | Optional | - |
| `state` | `string \| undefined` | Optional | - |
| `cancelAtEndOfPeriod` | `boolean \| undefined` | Optional | - |
| `accountBalances` | [`SubscriptionGroupBalances \| undefined`](../../doc/models/subscription-group-balances.md) | Optional | - |
| `groupType` | [`GroupType \| undefined`](../../doc/models/group-type.md) | Optional | - |

## Example

```ts
import { ListSubscriptionGroupsItem } from '@maxio-com/advanced-billing-sdk';

const listSubscriptionGroupsItem: ListSubscriptionGroupsItem = {
  uid: 'uid0',
  scheme: 228,
  customerId: 248,
  paymentProfileId: 100,
  subscriptionIds: [
    102,
    103
  ],
};
```

