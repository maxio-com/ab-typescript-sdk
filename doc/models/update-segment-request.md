
# Update Segment Request

## Structure

`UpdateSegmentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `segment` | [`UpdateSegment`](../../doc/models/update-segment.md) | Required | - |

## Example (as JSON)

```json
{
  "segment": {
    "pricing_scheme": "pricing_scheme4",
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
}
```

