
# Subscription Included Coupon

## Structure

`SubscriptionIncludedCoupon`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string \| undefined` | Optional | - |
| `useCount` | `number \| undefined` | Optional | - |
| `usesAllowed` | `number \| undefined` | Optional | - |
| `expiresAt` | `string \| null \| undefined` | Optional | - |
| `recurring` | `boolean \| undefined` | Optional | - |
| `amountInCents` | `bigint \| null \| undefined` | Optional | **Constraints**: `>= 0` |
| `percentage` | `string \| null \| undefined` | Optional | - |

## Example

```ts
import { SubscriptionIncludedCoupon } from '@maxio-com/advanced-billing-sdk';

const subscriptionIncludedCoupon: SubscriptionIncludedCoupon = {
  code: '"ABCD_10"',
  useCount: 2,
  usesAllowed: 10,
  expiresAt: '"2023-07-13T05:18:58-04:00"',
  recurring: false,
  amountInCents: BigInt(1000),
  percentage: '"15.0"',
};
```

