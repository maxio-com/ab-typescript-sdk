
# Subscription Response

## Structure

`SubscriptionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscription` | [`Subscription \| undefined`](../../doc/models/subscription.md) | Optional | - |

## Example

```ts
import {
  SubscriptionResponse,
  SubscriptionState,
} from '@maxio-com/advanced-billing-sdk';

const subscriptionResponse: SubscriptionResponse = {
  subscription: {
    id: 8,
    state: SubscriptionState.Paused,
    balanceInCents: BigInt(124),
    totalRevenueInCents: BigInt(48),
    productPriceInCents: BigInt(238),
  },
};
```

