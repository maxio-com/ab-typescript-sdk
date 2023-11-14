
# Create Offer

## Structure

`CreateOffer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | - |
| `handle` | `string` | Required | - |
| `description` | `string \| undefined` | Optional | - |
| `productId` | `number` | Required | - |
| `productPricePointId` | `number \| undefined` | Optional | - |
| `components` | [`CreateOfferComponent[] \| undefined`](../../doc/models/create-offer-component.md) | Optional | - |
| `coupons` | `string[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "name": "name4",
  "handle": "handle0",
  "description": "description4",
  "product_id": 208,
  "product_price_point_id": 132,
  "components": [
    {
      "component_id": 108,
      "starting_quantity": 84
    },
    {
      "component_id": 108,
      "starting_quantity": 84
    }
  ],
  "coupons": [
    "coupons4"
  ]
}
```

