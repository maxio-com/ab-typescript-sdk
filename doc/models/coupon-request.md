
# Coupon Request

## Structure

`CouponRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `coupon` | [`CouponPayload \| undefined`](../../doc/models/coupon-payload.md) | Optional | - |
| `restrictedProducts` | `Record<string, boolean> \| undefined` | Optional | An object where the keys are product_ids and the values are booleans indicating if the coupon should be applicable to the product |
| `restrictedComponents` | `Record<string, boolean> \| undefined` | Optional | An object where the keys are component_ids and the values are booleans indicating if the coupon should be applicable to the component |

## Example (as JSON)

```json
{
  "coupon": {
    "name": "name4",
    "code": "code2",
    "description": "description6",
    "percentage": "String3",
    "amount_in_cents": 230
  },
  "restricted_products": {
    "key0": true
  },
  "restricted_components": {
    "key0": true
  }
}
```

