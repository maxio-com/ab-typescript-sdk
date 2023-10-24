
# Create or Update Flat Amount Coupon

## Structure

`CreateOrUpdateFlatAmountCoupon`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | the name of the coupon |
| `code` | `string` | Required | may contain uppercase alphanumeric characters and these special characters (which allow for email addresses to be used): “%”, “@”, “+”, “-”, “_”, and “.” |
| `description` | `string \| undefined` | Optional | - |
| `amountInCents` | `number` | Required | - |
| `allowNegativeBalance` | `string \| undefined` | Optional | - |
| `recurring` | `string \| undefined` | Optional | - |
| `endDate` | `string \| undefined` | Optional | - |
| `productFamilyId` | `string \| undefined` | Optional | - |
| `stackable` | `string \| undefined` | Optional | - |
| `compoundingStrategy` | [`CreateOrUpdateFlatAmountCouponCompoundingStrategy \| undefined`](../../doc/models/containers/create-or-update-flat-amount-coupon-compounding-strategy.md) | Optional | This is a container for one-of cases. |
| `excludeMidPeriodAllocations` | `boolean \| undefined` | Optional | - |
| `applyOnCancelAtEndOfPeriod` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "name": "name0",
  "code": "code8",
  "description": "description0",
  "amount_in_cents": 120,
  "allow_negative_balance": "allow_negative_balance2",
  "recurring": "recurring6",
  "end_date": "end_date0",
  "product_family_id": "product_family_id4"
}
```

