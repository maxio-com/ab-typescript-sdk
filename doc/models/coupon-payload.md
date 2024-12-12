
# Coupon Payload

## Structure

`CouponPayload`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | Required when creating a new coupon. This name is not displayed to customers and is limited to 255 characters. |
| `code` | `string \| undefined` | Optional | Required when creating a new coupon. The code is limited to 255 characters. May contain uppercase alphanumeric characters and these special characters (which allow for email addresses to be used): “%”, “@”, “+”, “-”, “_”, and “.” |
| `description` | `string \| undefined` | Optional | Required when creating a new coupon. A description of the coupon that can be displayed to customers in transactions and on statements. The description is limited to 255 characters. |
| `percentage` | [`CouponPayloadPercentage \| undefined`](../../doc/models/containers/coupon-payload-percentage.md) | Optional | This is a container for one-of cases. |
| `amountInCents` | `bigint \| undefined` | Optional | Required when creating a new flat amount coupon. Can't be used together with percentage. Flat USD discount |
| `allowNegativeBalance` | `boolean \| undefined` | Optional | If set to true, discount is not limited (credits will carry forward to next billing). Can't be used together with restrictions. |
| `recurring` | `boolean \| undefined` | Optional | - |
| `endDate` | `string \| undefined` | Optional | After the end of the given day, this coupon code will be invalid for new signups. Recurring discounts started before this date will continue to recur even after this date. |
| `productFamilyId` | `string \| undefined` | Optional | - |
| `stackable` | `boolean \| undefined` | Optional | A stackable coupon can be combined with other coupons on a Subscription. |
| `compoundingStrategy` | [`CompoundingStrategy \| undefined`](../../doc/models/compounding-strategy.md) | Optional | Applicable only to stackable coupons. For `compound`, Percentage-based discounts will be calculated against the remaining price, after prior discounts have been calculated. For `full-price`, Percentage-based discounts will always be calculated against the original item price, before other discounts are applied. |
| `excludeMidPeriodAllocations` | `boolean \| undefined` | Optional | - |
| `applyOnCancelAtEndOfPeriod` | `boolean \| undefined` | Optional | - |
| `applyOnSubscriptionExpiration` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "name": "name8",
  "code": "code6",
  "description": "description8",
  "percentage": "String7",
  "amount_in_cents": 110
}
```

