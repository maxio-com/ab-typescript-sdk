
# List Subscription Group Prepayment Item

## Structure

`ListSubscriptionGroupPrepaymentItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `subscriptionGroupUid` | `string \| undefined` | Optional | - |
| `amountInCents` | `bigint \| undefined` | Optional | - |
| `remainingAmountInCents` | `bigint \| undefined` | Optional | - |
| `details` | `string \| undefined` | Optional | - |
| `external` | `boolean \| undefined` | Optional | - |
| `memo` | `string \| undefined` | Optional | - |
| `paymentType` | [`PrepaymentMethod \| undefined`](../../doc/models/prepayment-method.md) | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |

## Example

```ts
import {
  ListSubscriptionGroupPrepaymentItem,
} from '@maxio-com/advanced-billing-sdk';

const listSubscriptionGroupPrepaymentItem: ListSubscriptionGroupPrepaymentItem = {
  id: 72,
  subscriptionGroupUid: 'subscription_group_uid6',
  amountInCents: BigInt(98),
  remainingAmountInCents: BigInt(216),
  details: 'details2',
};
```

