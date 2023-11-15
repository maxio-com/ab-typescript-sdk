
# Customer Custom Fields Change

## Structure

`CustomerCustomFieldsChange`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `before` | [`ProformaCustomField[] \| undefined`](../../doc/models/proforma-custom-field.md) | Optional | - |
| `after` | [`ProformaCustomField[] \| undefined`](../../doc/models/proforma-custom-field.md) | Optional | - |

## Example (as JSON)

```json
{
  "before": [
    {
      "owner_id": 26,
      "owner_type": "owner_type2",
      "name": "name0",
      "value": "value2",
      "metadatum_id": 26
    }
  ],
  "after": [
    {
      "owner_id": 130,
      "owner_type": "owner_type4",
      "name": "name2",
      "value": "value4",
      "metadatum_id": 130
    },
    {
      "owner_id": 130,
      "owner_type": "owner_type4",
      "name": "name2",
      "value": "value4",
      "metadatum_id": 130
    }
  ]
}
```

