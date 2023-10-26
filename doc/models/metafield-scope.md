
# Metafield Scope

Warning: When updating a metafield's scope attribute, all scope attributes must be passed. Partially complete scope attributes will override the existing settings.

## Structure

`MetafieldScope`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `csv` | [`IncludeOption \| undefined`](../../doc/models/include-option.md) | Optional | Include (1) or exclude (0) metafields from the csv export. |
| `invoices` | [`IncludeOption \| undefined`](../../doc/models/include-option.md) | Optional | Include (1) or exclude (0) metafields from invoices. |
| `statements` | [`IncludeOption \| undefined`](../../doc/models/include-option.md) | Optional | Include (1) or exclude (0) metafields from statements. |
| `portal` | [`IncludeOption \| undefined`](../../doc/models/include-option.md) | Optional | Include (1) or exclude (0) metafields from the portal. |
| `publicShow` | [`IncludeOption \| undefined`](../../doc/models/include-option.md) | Optional | Include (1) or exclude (0) metafields from being viewable by your ecosystem. |
| `publicEdit` | [`IncludeOption \| undefined`](../../doc/models/include-option.md) | Optional | Include (1) or exclude (0) metafields from being edited by your ecosystem. |
| `hosted` | `string[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "csv": "0",
  "invoices": "0",
  "statements": "0",
  "portal": "0",
  "public_show": "0"
}
```

