
# Customer Attributes

## Structure

`CustomerAttributes`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string \| undefined` | Optional | The first name of the customer. Required when creating a customer via attributes. |
| `lastName` | `string \| undefined` | Optional | The last name of the customer. Required when creating a customer via attributes. |
| `email` | `string \| undefined` | Optional | The email address of the customer. Required when creating a customer via attributes. |
| `ccEmails` | `string \| undefined` | Optional | (Optional) A list of emails that should be cc’d on all customer communications. |
| `organization` | `string \| undefined` | Optional | (Optional) The organization/company of the customer. |
| `reference` | `string \| undefined` | Optional | (Optional) A customer “reference”, or unique identifier from your app, stored in Chargify. Can be used so that you may reference your customer’s within Chargify using the same unique value you use in your application. |
| `address` | `string \| undefined` | Optional | (Optional) The customer’s shipping street address (e.g., “123 Main St.”). |
| `address2` | `string \| null \| undefined` | Optional | (Optional) Second line of the customer’s shipping address e.g., “Apt. 100” |
| `city` | `string \| undefined` | Optional | (Optional) The customer’s shipping address city (e.g., “Boston”). |
| `state` | `string \| undefined` | Optional | “(Optional) The customer’s shipping address state (e.g., “MA”). This must conform to the [ISO_3166-1](https://en.wikipedia.org/wiki/ISO_3166-1#Current_codes) in order to be valid for tax locale purposes.” |
| `zip` | `string \| undefined` | Optional | (Optional) The customer’s shipping address zip code (e.g., “12345”). |
| `country` | `string \| undefined` | Optional | “(Optional) The customer shipping address country, required in [ISO_3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format (e.g., “US”).” |
| `phone` | `string \| undefined` | Optional | (Optional) The phone number of the customer. |
| `verified` | `boolean \| undefined` | Optional | - |
| `taxExempt` | `boolean \| undefined` | Optional | (Optional) The tax_exempt status of the customer. Acceptable values are true or 1 for true and false or 0 for false. |
| `surcharging` | `boolean \| undefined` | Optional | (Optional) Whether surcharging is enabled for the customer. Defaults to `true` when omitted. Only applied on sites where surcharging control is enabled. |
| `vatNumber` | `string \| undefined` | Optional | (Optional) Supplying the VAT number allows EU customers to opt-out of the Value Added Tax assuming the merchant address and customer billing address are not within the same EU country. It’s important to omit the country code from the VAT number upon entry. Otherwise, taxes will be assessed upon the purchase. |
| `metafields` | `Record<string, string> \| undefined` | Optional | (Optional) A set of key/value pairs representing custom fields and their values. Metafields will be created “on-the-fly” in your site for a given key, if they have not been created yet. |
| `parentId` | `number \| null \| undefined` | Optional | The parent ID in Chargify if applicable. Parent is another Customer object. |
| `salesforceId` | `string \| null \| undefined` | Optional | (Optional) The Salesforce ID of the customer. |
| `defaultAutoRenewalProfileId` | `number \| null \| undefined` | Optional | (Optional) The default auto-renewal profile ID for the customer |

## Example

```ts
import { CustomerAttributes } from '@maxio-com/advanced-billing-sdk';

const customerAttributes: CustomerAttributes = {
  firstName: 'first_name2',
  lastName: 'last_name0',
  email: 'email4',
  ccEmails: 'cc_emails2',
  organization: 'organization6',
  metafields: {
    'custom_field_name_1': 'custom_field_value_1',
    'custom_field_name_2': 'custom_field_value_2'
  },
};
```

