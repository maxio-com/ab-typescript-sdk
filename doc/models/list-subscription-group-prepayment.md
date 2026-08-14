
# List Subscription Group Prepayment

## Structure

`ListSubscriptionGroupPrepayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `prepayment` | [`ListSubscriptionGroupPrepaymentItem`](../../doc/models/list-subscription-group-prepayment-item.md) | Required | - |

## Example

```ts
import {
  ListSubscriptionGroupPrepayment,
} from '@maxio-com/advanced-billing-sdk';

const listSubscriptionGroupPrepayment: ListSubscriptionGroupPrepayment = {
  prepayment: {
    id: 38,
    subscriptionGroupUid: 'subscription_group_uid2',
    amountInCents: BigInt(124),
    remainingAmountInCents: BigInt(182),
    details: 'details8',
  },
};
```

