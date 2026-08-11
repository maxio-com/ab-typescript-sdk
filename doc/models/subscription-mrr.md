
# Subscription MRR

## Structure

`SubscriptionMRR`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Required | - |
| `mrrAmountInCents` | `bigint` | Required | - |
| `breakouts` | [`SubscriptionMRRBreakout \| undefined`](../../doc/models/subscription-mrr-breakout.md) | Optional | - |

## Example

```ts
import { SubscriptionMRR } from '@maxio-com/advanced-billing-sdk';

const subscriptionMRR: SubscriptionMRR = {
  subscriptionId: 192,
  mrrAmountInCents: BigInt(210),
  breakouts: {
    planAmountInCents: BigInt(254),
    usageAmountInCents: BigInt(106),
  },
};
```

