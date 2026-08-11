
# Update Customer

## Structure

`UpdateCustomer`

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
| `locale` | `string \| undefined` | Optional | Set a specific language on a customer record. |
| `vatNumber` | `string \| undefined` | Optional | - |
| `taxExempt` | `boolean \| undefined` | Optional | - |
| `surcharging` | `boolean \| undefined` | Optional | Whether surcharging is enabled for the customer. Only applied on sites where surcharging control is enabled. |
| `taxExemptReason` | `string \| undefined` | Optional | - |
| `parentId` | `number \| null \| undefined` | Optional | - |
| `verified` | `boolean \| null \| undefined` | Optional | Is the customer verified to use ACH as a payment method. Available only on the Authorize.Net gateway. |
| `salesforceId` | `string \| null \| undefined` | Optional | The Salesforce ID of the customer |
| `brandingThemeId` | `number \| null \| undefined` | Optional | The ID of the Branding Theme assigned to this customer as the customer's default Branding Theme. This customer-level Branding Theme is used when a subscription does not have its own subscription-level Branding Theme. Available only when Branding Themes are enabled for the site. |

## Example

```ts
import { UpdateCustomer } from '@maxio-com/advanced-billing-sdk';

const updateCustomer: UpdateCustomer = {
  firstName: 'first_name2',
  lastName: 'last_name0',
  email: 'email4',
  ccEmails: 'cc_emails8',
  organization: 'organization6',
};
```

