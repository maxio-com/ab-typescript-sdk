
# Coupon Usage

## Structure

`CouponUsage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | The Chargify id of the product |
| `name` | `string \| undefined` | Optional | Name of the product |
| `signups` | `number \| undefined` | Optional | Number of times the coupon has been applied |
| `savings` | `number \| null \| undefined` | Optional | Dollar amount of customer savings as a result of the coupon. |
| `savingsInCents` | `bigint \| null \| undefined` | Optional | Dollar amount of customer savings as a result of the coupon. |
| `revenue` | `number \| null \| undefined` | Optional | Total revenue of all subscriptions that have received a discount from this coupon. |
| `revenueInCents` | `bigint \| undefined` | Optional | Total revenue of all subscriptions that have received a discount from this coupon. |

## Example

```ts
import { CouponUsage } from '@maxio-com/advanced-billing-sdk';

const couponUsage: CouponUsage = {
  id: 240,
  name: 'name8',
  signups: 4,
  savings: 22,
  savingsInCents: BigInt(108),
};
```

