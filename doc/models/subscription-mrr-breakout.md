
# Subscription MRR Breakout

## Structure

`SubscriptionMRRBreakout`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `planAmountInCents` | `bigint` | Required | - |
| `usageAmountInCents` | `bigint` | Required | - |

## Example

```ts
import { SubscriptionMRRBreakout } from '@maxio-com/advanced-billing-sdk';

const subscriptionMRRBreakout: SubscriptionMRRBreakout = {
  planAmountInCents: BigInt(248),
  usageAmountInCents: BigInt(100),
};
```

