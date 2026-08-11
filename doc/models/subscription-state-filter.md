
# Subscription State Filter

Allowed values for filtering by the current state of the subscription.

## Enumeration

`SubscriptionStateFilter`

## Fields

| Name |
|  --- |
| `Active` |
| `Canceled` |
| `Expired` |
| `ExpiredCards` |
| `EnumExpiredCardsLiveSubscriptions` |
| `EnumExpiredCardsAllSubscriptions` |
| `OnHold` |
| `AwaitingSignup` |
| `AwaitingSignupDate` |
| `PastDue` |
| `PendingCancellation` |
| `PendingRenewal` |
| `PrepaidDunning` |
| `Suspended` |
| `TrialEnded` |
| `Trialing` |
| `Unpaid` |

## Example

```ts
import { SubscriptionStateFilter } from '@maxio-com/advanced-billing-sdk';

const subscriptionStateFilter = SubscriptionStateFilter.AwaitingSignup;
```

