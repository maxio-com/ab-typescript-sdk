
# Create or Update Coupon

## Structure

`CreateOrUpdateCoupon`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `coupon` | [`CreateOrUpdateCouponCoupon \| undefined`](../../doc/models/containers/create-or-update-coupon-coupon.md) | Optional | This is a container for one-of cases. |
| `restrictedProducts` | `Record<string, boolean> \| undefined` | Optional | An object where the keys are product_ids and the values are booleans indicating if the coupon should be applicable to the product |
| `restrictedComponents` | `Record<string, boolean> \| undefined` | Optional | An object where the keys are component_ids and the values are booleans indicating if the coupon should be applicable to the component |

## Example (as JSON)

```json
{
  "coupon": {
    "name": "name0",
    "code": "code8",
    "description": "description0",
    "percentage": 11.02,
    "allow_negative_balance": "allow_negative_balance8",
    "recurring": "recurring4",
    "end_date": "end_date0",
    "product_family_id": "product_family_id6"
  },
  "restricted_products": {
    "key0": true
  },
  "restricted_components": {
    "key0": true
  }
}
```

