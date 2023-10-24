
# Subscription Group Subscription Error

Object which contains subscription errors.

## Structure

`SubscriptionGroupSubscriptionError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `product` | `string[] \| undefined` | Optional | - |
| `productPricePointId` | `string[] \| undefined` | Optional | - |
| `paymentProfile` | `string[] \| undefined` | Optional | - |
| `paymentProfileChargifyToken` | `string[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "product": [
    "product7",
    "product6"
  ],
  "product_price_point_id": [
    "product_price_point_id9",
    "product_price_point_id0"
  ],
  "payment_profile": [
    "payment_profile4",
    "payment_profile5"
  ],
  "payment_profile.chargify_token": [
    "payment_profile.chargify_token8",
    "payment_profile.chargify_token9"
  ]
}
```

