
# Create Segment

## Structure

`CreateSegment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `segmentProperty1Value` | [`CreateSegmentSegmentProperty1Value \| undefined`](../../doc/models/containers/create-segment-segment-property-1-value.md) | Optional | This is a container for one-of cases. |
| `segmentProperty2Value` | [`CreateSegmentSegmentProperty2Value \| undefined`](../../doc/models/containers/create-segment-segment-property-2-value.md) | Optional | This is a container for one-of cases. |
| `segmentProperty3Value` | [`CreateSegmentSegmentProperty3Value \| undefined`](../../doc/models/containers/create-segment-segment-property-3-value.md) | Optional | This is a container for one-of cases. |
| `segmentProperty4Value` | [`CreateSegmentSegmentProperty4Value \| undefined`](../../doc/models/containers/create-segment-segment-property-4-value.md) | Optional | This is a container for one-of cases. |
| `pricingScheme` | `string` | Required | The handle for the pricing scheme. Available options: per_unit, volume, tiered, stairstep. See [Price Bracket Rules](https://help.chargify.com/products/product-components.html#price-bracket-rules) for an overview of pricing schemes. |
| `prices` | [`CreateOrUpdateSegmentPrice[] \| undefined`](../../doc/models/create-or-update-segment-price.md) | Optional | - |

## Example (as JSON)

```json
{
  "segment_property_1_value": "String9",
  "segment_property_2_value": "String1",
  "segment_property_3_value": "String3",
  "segment_property_4_value": "String3",
  "pricing_scheme": "pricing_scheme6",
  "prices": [
    {
      "starting_quantity": 64,
      "ending_quantity": 38,
      "unit_price": "String3"
    },
    {
      "starting_quantity": 64,
      "ending_quantity": 38,
      "unit_price": "String3"
    },
    {
      "starting_quantity": 64,
      "ending_quantity": 38,
      "unit_price": "String3"
    }
  ]
}
```

