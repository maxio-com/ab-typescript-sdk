
# Customer

## Structure

`Customer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string \| undefined` | Optional | The first name of the customer |
| `lastName` | `string \| undefined` | Optional | The last name of the customer |
| `email` | `string \| undefined` | Optional | The email address of the customer |
| `ccEmails` | `string \| null \| undefined` | Optional | “A comma-separated list of emails that should be cc’d on all customer communications (e.g., “joe@example.com, sue@example.com”)” |
| `organization` | `string \| null \| undefined` | Optional | The organization of the customer. If no value, `null` or empty string is provided, `organization` will be populated with the customer's first and last name, separated with a space. |
| `reference` | `string \| null \| undefined` | Optional | The unique identifier used within your own application for this customer |
| `id` | `number \| undefined` | Optional | The customer ID in Chargify |
| `createdAt` | `string \| undefined` | Optional | The timestamp in which the customer object was created in Chargify |
| `updatedAt` | `string \| undefined` | Optional | The timestamp in which the customer object was last edited |
| `address` | `string \| null \| undefined` | Optional | The customer’s shipping street address (e.g., “123 Main St.”) |
| `address2` | `string \| null \| undefined` | Optional | Second line of the customer’s shipping address e.g., “Apt. 100” |
| `city` | `string \| null \| undefined` | Optional | The customer’s shipping address city (e.g., “Boston”) |
| `state` | `string \| null \| undefined` | Optional | The customer’s shipping address state (e.g., “MA”) |
| `stateName` | `string \| null \| undefined` | Optional | The customer's full name of state |
| `zip` | `string \| null \| undefined` | Optional | The customer’s shipping address zip code (e.g., “12345”) |
| `country` | `string \| null \| undefined` | Optional | The customer shipping address country |
| `countryName` | `string \| null \| undefined` | Optional | The customer's full name of country |
| `phone` | `string \| null \| undefined` | Optional | The phone number of the customer |
| `verified` | `boolean \| null \| undefined` | Optional | Is the customer verified to use ACH as a payment method. |
| `portalCustomerCreatedAt` | `string \| null \| undefined` | Optional | The timestamp of when the Billing Portal entry was created at for the customer |
| `portalInviteLastSentAt` | `string \| null \| undefined` | Optional | The timestamp of when the Billing Portal invite was last sent at |
| `portalInviteLastAcceptedAt` | `string \| null \| undefined` | Optional | The timestamp of when the Billing Portal invite was last accepted |
| `taxExempt` | `boolean \| undefined` | Optional | The tax exempt status for the customer. Acceptable values are true or 1 for true and false or 0 for false. |
| `surcharging` | `boolean \| undefined` | Optional | Whether surcharging is enabled for the customer. Only included on sites where surcharging control is enabled. |
| `vatNumber` | `string \| null \| undefined` | Optional | The VAT business identification number for the customer. This number is used to determine VAT tax opt out rules. It is not validated when added or updated on a customer record. Instead, it is validated via VIES before calculating taxes. Only valid business identification numbers will allow for VAT opt out. |
| `parentId` | `number \| null \| undefined` | Optional | The parent ID in Chargify if applicable. Parent is another Customer object. |
| `locale` | `string \| null \| undefined` | Optional | The locale for the customer to identify language-region |
| `defaultSubscriptionGroupUid` | `string \| null \| undefined` | Optional | - |
| `salesforceId` | `string \| null \| undefined` | Optional | The Salesforce ID for the customer |
| `taxExemptReason` | `string \| null \| undefined` | Optional | The Tax Exemption Reason Code for the customer |
| `defaultAutoRenewalProfileId` | `number \| null \| undefined` | Optional | The default auto-renewal profile ID for the customer |
| `maxioid` | `string \| null \| undefined` | Optional | The Maxio-generated unique identifier for the customer. |
| `brandingThemeId` | `number \| null \| undefined` | Optional | The ID of the Branding Theme assigned to this customer as the customer's default Branding Theme. This customer-level Branding Theme is used when a subscription does not have its own subscription-level Branding Theme.  Available only when Branding Themes are enabled for the site. |

## Example

```ts
import { Customer } from '@maxio-com/advanced-billing-sdk';

const customer: Customer = {
  firstName: 'first_name0',
  lastName: 'last_name8',
  email: 'email6',
  ccEmails: 'cc_emails0',
  organization: 'organization6',
};
```

