
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
| `allowNegativeBalance` | `boolean \| undefined` | Optional | - |
| `recurring` | `boolean \| undefined` | Optional | - |
| `endDate` | `string \| undefined` | Optional | - |
| `productFamilyId` | `string \| undefined` | Optional | - |
| `stackable` | `boolean \| undefined` | Optional | - |
| `compoundingStrategy` | [`CompoundingStrategy \| undefined`](../../doc/models/compounding-strategy.md) | Optional | - |
| `excludeMidPeriodAllocations` | `boolean \| undefined` | Optional | - |
| `applyOnCancelAtEndOfPeriod` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "name": "name0",
  "code": "code8",
  "description": "description0",
  "percentage": "String9",
  "allow_negative_balance": false,
  "recurring": false,
  "end_date": "2016-03-13T12:52:32.123Z",
  "product_family_id": "product_family_id6"
}
```

