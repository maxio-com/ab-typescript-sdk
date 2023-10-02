
# Create or Update Coupon

## Structure

`CreateOrUpdateCoupon`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `coupon` | [`CreateOrUpdateCouponCoupon \| undefined`](../../doc/models/containers/create-or-update-coupon-coupon.md) | Optional | This is a container for one-of cases. |
| `restrictedProducts` | [`Record<string, CreateOrUpdateCouponRestrictedProducts> \| undefined`](../../doc/models/containers/create-or-update-coupon-restricted-products.md) | Optional | This is Map of a container for one-of cases. |
| `restrictedComponents` | [`Record<string, CreateOrUpdateCouponRestrictedComponents> \| undefined`](../../doc/models/containers/create-or-update-coupon-restricted-components.md) | Optional | This is Map of a container for one-of cases. |

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
    "key0": {
      "key0": true,
      "key1": false
    }
  },
  "restricted_components": {
    "key0": {
      "key0": true,
      "key1": false
    }
  }
}
```

