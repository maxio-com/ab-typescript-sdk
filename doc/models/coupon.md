
# Coupon

## Structure

`Coupon`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `code` | `string \| undefined` | Optional | - |
| `description` | `string \| undefined` | Optional | - |
| `amount` | `number \| null \| undefined` | Optional | - |
| `amountInCents` | `number \| null \| undefined` | Optional | - |
| `productFamilyId` | `number \| undefined` | Optional | - |
| `productFamilyName` | `string \| null \| undefined` | Optional | - |
| `startDate` | `string \| undefined` | Optional | - |
| `endDate` | `string \| null \| undefined` | Optional | - |
| `percentage` | `string \| null \| undefined` | Optional | - |
| `recurring` | `boolean \| undefined` | Optional | - |
| `recurringScheme` | [`RecurringScheme \| undefined`](../../doc/models/recurring-scheme.md) | Optional | - |
| `durationPeriodCount` | `number \| null \| undefined` | Optional | - |
| `durationInterval` | `number \| null \| undefined` | Optional | - |
| `durationIntervalUnit` | `string \| null \| undefined` | Optional | - |
| `durationIntervalSpan` | `string \| null \| undefined` | Optional | - |
| `allowNegativeBalance` | `boolean \| undefined` | Optional | - |
| `archivedAt` | `string \| null \| undefined` | Optional | - |
| `conversionLimit` | `string \| null \| undefined` | Optional | - |
| `stackable` | `boolean \| undefined` | Optional | - |
| `compoundingStrategy` | [`CompoundingStrategy \| null \| undefined`](../../doc/models/compounding-strategy.md) | Optional | - |
| `useSiteExchangeRate` | `boolean \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | - |
| `discountType` | [`DiscountType \| undefined`](../../doc/models/discount-type.md) | Optional | - |
| `excludeMidPeriodAllocations` | `boolean \| undefined` | Optional | - |
| `applyOnCancelAtEndOfPeriod` | `boolean \| undefined` | Optional | - |
| `applyOnSubscriptionExpiration` | `boolean \| undefined` | Optional | - |
| `couponRestrictions` | [`CouponRestriction[] \| undefined`](../../doc/models/coupon-restriction.md) | Optional | - |

## Example (as JSON)

```json
{
  "id": 22,
  "name": "name2",
  "code": "code0",
  "description": "description2",
  "amount": 62.64
}
```

