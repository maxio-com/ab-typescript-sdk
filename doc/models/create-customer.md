
# Create Customer

## Structure

`CreateCustomer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string` | Required | - |
| `lastName` | `string` | Required | - |
| `email` | `string` | Required | - |
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
| `locale` | `string \| undefined` | Optional | Set a specific language on a customer record. |
| `vatNumber` | `string \| undefined` | Optional | - |
| `taxExempt` | `boolean \| undefined` | Optional | - |
| `taxExemptReason` | `string \| undefined` | Optional | - |
| `parentId` | `number \| null \| undefined` | Optional | The parent ID in Chargify if applicable. Parent is another Customer object. |

## Example (as JSON)

```json
{
  "first_name": "first_name8",
  "last_name": "last_name6",
  "email": "email8",
  "cc_emails": "cc_emails8",
  "organization": "organization2",
  "reference": "reference4",
  "address": "address4",
  "address_2": "address_22"
}
```

