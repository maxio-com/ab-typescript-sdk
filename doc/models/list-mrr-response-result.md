
# List MRR Response Result

## Structure

`ListMRRResponseResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `number \| undefined` | Optional | - |
| `perPage` | `number \| undefined` | Optional | - |
| `totalPages` | `number \| undefined` | Optional | - |
| `totalEntries` | `number \| undefined` | Optional | - |
| `currency` | `string \| undefined` | Optional | - |
| `currencySymbol` | `string \| undefined` | Optional | - |
| `movements` | [`Movement[] \| undefined`](../../doc/models/movement.md) | Optional | - |

## Example (as JSON)

```json
{
  "page": 150,
  "per_page": 238,
  "total_pages": 16,
  "total_entries": 112,
  "currency": "currency8"
}
```

