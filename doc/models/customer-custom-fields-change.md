
# Customer Custom Fields Change

## Structure

`CustomerCustomFieldsChange`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `before` | [`InvoiceCustomField[]`](../../doc/models/invoice-custom-field.md) | Required | - |
| `after` | [`InvoiceCustomField[]`](../../doc/models/invoice-custom-field.md) | Required | - |

## Example (as JSON)

```json
{
  "before": [
    {
      "owner_id": 26,
      "owner_type": "Customer",
      "name": "name0",
      "value": "value2",
      "metadatum_id": 26
    }
  ],
  "after": [
    {
      "owner_id": 130,
      "owner_type": "Customer",
      "name": "name2",
      "value": "value4",
      "metadatum_id": 130
    }
  ]
}
```

