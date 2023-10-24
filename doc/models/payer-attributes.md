
# Payer Attributes

## Structure

`PayerAttributes`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string \| undefined` | Optional | - |
| `lastName` | `string \| undefined` | Optional | - |
| `email` | `string \| undefined` | Optional | - |
| `ccEmails` | `string \| undefined` | Optional | - |
| `organization` | `string \| undefined` | Optional | - |
| `reference` | `string \| undefined` | Optional | - |
| `address` | `string \| undefined` | Optional | - |
| `address2` | `string \| undefined` | Optional | - |
| `city` | `string \| undefined` | Optional | - |
| `state` | `string \| undefined` | Optional | - |
| `zip` | `string \| undefined` | Optional | - |
| `country` | `string \| undefined` | Optional | - |
| `phone` | `string \| undefined` | Optional | - |
| `locale` | `string \| undefined` | Optional | - |
| `vatNumber` | `string \| undefined` | Optional | - |
| `taxExempt` | `string \| undefined` | Optional | - |
| `taxExemptReason` | `string \| undefined` | Optional | - |
| `metafields` | `Record<string, string> \| undefined` | Optional | (Optional) A set of key/value pairs representing custom fields and their values. Metafields will be created “on-the-fly” in your site for a given key, if they have not been created yet. |

## Example (as JSON)

```json
{
  "metafields": {
    "custom_field_name_1": "custom_field_value_1",
    "custom_field_name_2": "custom_field_value_2"
  },
  "first_name": "first_name4",
  "last_name": "last_name2",
  "email": "email2",
  "cc_emails": "cc_emails4",
  "organization": "organization8"
}
```

