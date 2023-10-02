
# Create Metafields Request

## Structure

`CreateMetafieldsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `metafields` | [`CreateMetafieldsRequestMetafields`](../../doc/models/containers/create-metafields-request-metafields.md) | Required | This is a container for any-of cases. |

## Example (as JSON)

```json
{
  "metafields": {
    "id": 0.0,
    "name": "my_field",
    "scope": {
      "csv": "0",
      "invoices": "0",
      "statements": "0",
      "portal": "0",
      "public_show": "0",
      "public_edit": "0"
    },
    "input_type": "text",
    "enum": [
      "string"
    ]
  }
}
```

