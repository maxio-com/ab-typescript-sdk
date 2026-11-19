
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
| `vatCountry` | `string \| undefined` | Optional | The two-letter ISO 3166-1 country code that qualifies the customer's tax ID. Required when `entity_identifier_kind` is `vat_eu` or `national_tax`, and used to derive the kind when only the legacy `vat_number` is sent. |
| `entityIdentifierKind` | [`EntityIdentifierKind \| undefined`](../../doc/models/entity-identifier-kind.md) | Optional | The kind of tax or business identifier held by the customer:<br><br>- `vat_eu`: an EU VAT number. Requires `vat_country` to be an EU member state code or `GB`.<br>- `national_tax`: a national tax ID registered outside the EU. Requires `vat_country` to be one of `AL`, `AM`, `AR`, `AU`, `BR`, `CA`, `CH`, `DZ`, `IN`, `MX`, `NO`, `NZ`, or `ZA`.<br>- `company_reg`: a company registration number, such as a French SIREN. No `vat_country` is required.<br>- `gln`: a Global Location Number. The value must be 13 digits.<br>- `duns`: a D-U-N-S Number. The value must be 9 digits.<br>- `lei`: a Legal Entity Identifier. The value must be 20 characters: 18 letters or digits followed by 2 digits.<br><br>A customer holds one identifier at a time. Saving an identifier of a different kind replaces the existing one. |
| `entityIdentifierValue` | `string \| undefined` | Optional | The customer's tax or business identifier, sent together with `entity_identifier_kind`. Advanced Billing trims surrounding whitespace and stores the value in uppercase. |
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

