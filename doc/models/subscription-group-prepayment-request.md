
# Subscription Group Prepayment Request

## Structure

`SubscriptionGroupPrepaymentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `prepayment` | [`SubscriptionGroupPrepayment`](../../doc/models/subscription-group-prepayment.md) | Required | - |

## Example

```ts
import {
  SubscriptionGroupPrepaymentMethod,
  SubscriptionGroupPrepaymentRequest,
} from '@maxio-com/advanced-billing-sdk';

const subscriptionGroupPrepaymentRequest: SubscriptionGroupPrepaymentRequest = {
  prepayment: {
    amount: 136,
    details: 'details8',
    memo: 'memo2',
    method: SubscriptionGroupPrepaymentMethod.PaypalAccount,
  },
};
```

