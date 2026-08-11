
# Subscription State Change

## Structure

`SubscriptionStateChange`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `previousSubscriptionState` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `newSubscriptionState` | `string` | Required | **Constraints**: *Minimum Length*: `1` |

## Example

```ts
import { SubscriptionStateChange } from '@maxio-com/advanced-billing-sdk';

const subscriptionStateChange: SubscriptionStateChange = {
  previousSubscriptionState: 'previous_subscription_state8',
  newSubscriptionState: 'new_subscription_state2',
};
```

