
# Custom Field Value Change

## Structure

`CustomFieldValueChange`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `eventType` | `string` | Required | - |
| `metafieldName` | `string` | Required | - |
| `metafieldId` | `number` | Required | - |
| `oldValue` | `string \| null` | Required | - |
| `newValue` | `string \| null` | Required | - |
| `resourceType` | `string` | Required | - |
| `resourceId` | `number` | Required | - |

## Example (as JSON)

```json
{
  "event_type": "event_type2",
  "metafield_name": "metafield_name6",
  "metafield_id": 78,
  "old_value": "old_value2",
  "new_value": "new_value8",
  "resource_type": "resource_type2",
  "resource_id": 74
}
```

