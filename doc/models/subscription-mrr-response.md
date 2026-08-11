
# Subscription MRR Response

## Structure

`SubscriptionMRRResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionsMrr` | [`SubscriptionMRR[]`](../../doc/models/subscription-mrr.md) | Required | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |

## Example

```ts
import { SubscriptionMRRResponse } from '@maxio-com/advanced-billing-sdk';

const subscriptionMRRResponse: SubscriptionMRRResponse = {
  subscriptionsMrr: [
    {
      subscriptionId: 0,
      mrrAmountInCents: BigInt(0),
      breakouts: {
        planAmountInCents: BigInt(0),
        usageAmountInCents: BigInt(0),
      },
    }
  ],
};
```

