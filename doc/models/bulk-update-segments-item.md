
# Bulk Update Segments Item

## Structure

`BulkUpdateSegmentsItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | The ID of the segment you want to update. |
| `pricingScheme` | [`PricingScheme`](../../doc/models/pricing-scheme.md) | Required | The identifier for the pricing scheme. See [Product Components](https://help.chargify.com/products/product-components.html) for an overview of pricing schemes. |
| `prices` | [`CreateOrUpdateSegmentPrice[]`](../../doc/models/create-or-update-segment-price.md) | Required | - |

## Example (as JSON)

```json
{
  "id": 180,
  "pricing_scheme": "per_unit",
  "prices": [
    {
      "starting_quantity": 64,
      "ending_quantity": 38,
      "unit_price": "String3"
    }
  ]
}
```

