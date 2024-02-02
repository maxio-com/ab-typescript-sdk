
# Invoice Custom Field

## Structure

`InvoiceCustomField`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ownerId` | `number \| undefined` | Optional | - |
| `ownerType` | [`CustomFieldOwner \| undefined`](../../doc/models/custom-field-owner.md) | Optional | - |
| `name` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `value` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `metadatumId` | `number \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "owner_id": 142,
  "owner_type": "Customer",
  "name": "name0",
  "value": "value2",
  "metadatum_id": 142
}
```

