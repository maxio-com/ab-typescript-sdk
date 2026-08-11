
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
| `surcharging` | `boolean \| undefined` | Optional | Whether surcharging is enabled for the customer. Defaults to `true` when omitted. Only applied on sites where surcharging control is enabled. |
| `taxExemptReason` | `string \| undefined` | Optional | - |
| `parentId` | `number \| null \| undefined` | Optional | The parent ID in Chargify if applicable. Parent is another Customer object. |
| `salesforceId` | `string \| null \| undefined` | Optional | The Salesforce ID of the customer |
| `brandingThemeId` | `number \| null \| undefined` | Optional | The ID of the Branding Theme assigned to this customer as the customer's default Branding Theme. This customer-level Branding Theme is used when a subscription does not have its own subscription-level Branding Theme. Available only when Branding Themes are enabled for the site. |

## Example

```ts
import { CreateCustomer } from '@maxio-com/advanced-billing-sdk';

const createCustomer: CreateCustomer = {
  firstName: 'first_name0',
  lastName: 'last_name8',
  email: 'email6',
  ccEmails: 'cc_emails0',
  organization: 'organization6',
  reference: 'reference4',
  address: 'address6',
  address2: 'address_24',
};
```

