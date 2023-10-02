
# Components Price Points Segments Bulk Json 422 Error

## Structure

`ComponentsPricePointsSegmentsBulkJson422Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Errors12`](../../doc/models/errors-12.md) | Required | - |

## Example (as JSON)

```json
{
  "errors": {
    "segments": {
      "'x'": {
        "base": [
          "base9",
          "base0",
          "base1"
        ],
        "pricing_scheme": [
          "pricing_scheme1",
          "pricing_scheme0",
          "pricing_scheme9"
        ],
        "prices": [
          "prices3",
          "prices2",
          "prices1"
        ],
        "property_values_fingerprint": [
          "property_values_fingerprint5",
          "property_values_fingerprint4"
        ]
      }
    }
  }
}
```

