
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
| `amountInCents` | `bigint \| null \| undefined` | Optional | - |
| `productFamilyId` | `number \| undefined` | Optional | - |
| `productFamilyName` | `string \| null \| undefined` | Optional | - |
| `startDate` | `string \| undefined` | Optional | - |
| `endDate` | `string \| null \| undefined` | Optional | After the given time, this coupon code will be invalid for new signups. Recurring discounts started before this date will continue to recur even after this date. |
| `percentage` | `string \| null \| undefined` | Optional | - |
| `recurring` | `boolean \| undefined` | Optional | - |
| `recurringScheme` | [`RecurringScheme \| undefined`](../../doc/models/recurring-scheme.md) | Optional | - |
| `durationPeriodCount` | `number \| null \| undefined` | Optional | - |
| `durationInterval` | `number \| null \| undefined` | Optional | - |
| `durationIntervalUnit` | `string \| null \| undefined` | Optional | - |
| `durationIntervalSpan` | `string \| null \| undefined` | Optional | - |
| `allowNegativeBalance` | `boolean \| undefined` | Optional | If set to true, discount is not limited (credits will carry forward to next billing). |
| `archivedAt` | `string \| null \| undefined` | Optional | - |
| `conversionLimit` | `string \| null \| undefined` | Optional | - |
| `stackable` | `boolean \| undefined` | Optional | A stackable coupon can be combined with other coupons on a Subscription. |
| `compoundingStrategy` | [`CompoundingStrategy \| null \| undefined`](../../doc/models/compounding-strategy.md) | Optional | Applicable only to stackable coupons. For `compound`, Percentage-based discounts will be calculated against the remaining price, after prior discounts have been calculated. For `full-price`, Percentage-based discounts will always be calculated against the original item price, before other discounts are applied. |
| `useSiteExchangeRate` | `boolean \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | - |
| `discountType` | [`DiscountType \| undefined`](../../doc/models/discount-type.md) | Optional | - |
| `excludeMidPeriodAllocations` | `boolean \| undefined` | Optional | - |
| `applyOnCancelAtEndOfPeriod` | `boolean \| undefined` | Optional | - |
| `applyOnSubscriptionExpiration` | `boolean \| undefined` | Optional | - |
| `couponRestrictions` | [`CouponRestriction[] \| undefined`](../../doc/models/coupon-restriction.md) | Optional | - |
| `currencyPrices` | [`CouponCurrency[] \| undefined`](../../doc/models/coupon-currency.md) | Optional | Returned in read, find, and list endpoints if the query parameter is provided. |

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

