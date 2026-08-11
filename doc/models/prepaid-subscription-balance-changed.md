
# Prepaid Subscription Balance Changed

## Structure

`PrepaidSubscriptionBalanceChanged`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reason` | `string` | Required | - |
| `currentAccountBalanceInCents` | `bigint` | Required | - |
| `prepaymentAccountBalanceInCents` | `bigint` | Required | - |
| `currentUsageAmountInCents` | `bigint` | Required | - |

## Example

```ts
import {
  PrepaidSubscriptionBalanceChanged,
} from '@maxio-com/advanced-billing-sdk';

const prepaidSubscriptionBalanceChanged: PrepaidSubscriptionBalanceChanged = {
  reason: 'reason6',
  currentAccountBalanceInCents: BigInt(194),
  prepaymentAccountBalanceInCents: BigInt(100),
  currentUsageAmountInCents: BigInt(186),
};
```

