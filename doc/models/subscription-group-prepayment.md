
# Subscription Group Prepayment

## Structure

`SubscriptionGroupPrepayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number` | Required | - |
| `details` | `string` | Required | - |
| `memo` | `string` | Required | - |
| `method` | [`SubscriptionGroupPrepaymentMethod`](../../doc/models/subscription-group-prepayment-method.md) | Required | - |

## Example

```ts
import {
  SubscriptionGroupPrepayment,
  SubscriptionGroupPrepaymentMethod,
} from '@maxio-com/advanced-billing-sdk';

const subscriptionGroupPrepayment: SubscriptionGroupPrepayment = {
  amount: 12,
  details: 'details4',
  memo: 'memo8',
  method: SubscriptionGroupPrepaymentMethod.MoneyOrder,
};
```

