
# Coupon Restriction

## Structure

`CouponRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `itemType` | [`RestrictionType \| undefined`](../../doc/models/restriction-type.md) | Optional | - |
| `itemId` | `number \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `handle` | `string \| null \| undefined` | Optional | - |

## Example

```ts
import {
  CouponRestriction,
  RestrictionType,
} from '@maxio-com/advanced-billing-sdk';

const couponRestriction: CouponRestriction = {
  id: 66,
  itemType: RestrictionType.Component,
  itemId: 214,
  name: 'name0',
  handle: 'handle6',
};
```

