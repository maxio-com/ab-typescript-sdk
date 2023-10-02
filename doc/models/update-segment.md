
# Update Segment

## Structure

`UpdateSegment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricingScheme` | `string` | Required | The handle for the pricing scheme. Available options: per_unit, volume, tiered, stairstep. See [Price Bracket Rules](https://help.chargify.com/products/product-components.html#price-bracket-rules) for an overview of pricing schemes. |
| `prices` | [`CreateOrUpdateSegmentPrice[] \| undefined`](../../doc/models/create-or-update-segment-price.md) | Optional | - |

## Example (as JSON)

```json
{
  "pricing_scheme": "pricing_scheme6",
  "prices": [
    {
      "starting_quantity": 64,
      "ending_quantity": 38,
      "unit_price": "String3"
    }
  ]
}
```

