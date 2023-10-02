
# Create or Update Percentage Coupon

## Structure

`CreateOrUpdatePercentageCoupon`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | the name of the coupon |
| `code` | `string` | Required | may contain uppercase alphanumeric characters and these special characters (which allow for email addresses to be used): “%”, “@”, “+”, “-”, “_”, and “.” |
| `description` | `string \| undefined` | Optional | - |
| `percentage` | [`CreateOrUpdatePercentageCouponPercentage`](../../doc/models/containers/create-or-update-percentage-coupon-percentage.md) | Required | This is a container for one-of cases. |
| `allowNegativeBalance` | `string \| undefined` | Optional | - |
| `recurring` | `string \| undefined` | Optional | - |
| `endDate` | `string \| undefined` | Optional | - |
| `productFamilyId` | `string \| undefined` | Optional | - |
| `stackable` | `string \| undefined` | Optional | - |
| `compoundingStrategy` | [`CreateOrUpdatePercentageCouponCompoundingStrategy \| undefined`](../../doc/models/containers/create-or-update-percentage-coupon-compounding-strategy.md) | Optional | This is a container for one-of cases. |
| `excludeMidPeriodAllocations` | `boolean \| undefined` | Optional | - |
| `applyOnCancelAtEndOfPeriod` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "name": "name0",
  "code": "code8",
  "description": "description0",
  "percentage": 11.02,
  "allow_negative_balance": "allow_negative_balance8",
  "recurring": "recurring4",
  "end_date": "end_date0",
  "product_family_id": "product_family_id6"
}
```

