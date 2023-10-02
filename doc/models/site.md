
# Site

## Structure

`Site`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `subdomain` | `string \| undefined` | Optional | - |
| `currency` | `string \| undefined` | Optional | - |
| `sellerId` | `number \| undefined` | Optional | - |
| `nonPrimaryCurrencies` | `string[] \| undefined` | Optional | - |
| `relationshipInvoicingEnabled` | `boolean \| undefined` | Optional | - |
| `customerHierarchyEnabled` | `boolean \| undefined` | Optional | - |
| `whopaysEnabled` | `boolean \| undefined` | Optional | - |
| `whopaysDefaultPayer` | `string \| undefined` | Optional | - |
| `allocationSettings` | [`AllocationSettings \| undefined`](../../doc/models/allocation-settings.md) | Optional | - |
| `defaultPaymentCollectionMethod` | `string \| undefined` | Optional | - |
| `organizationAddress` | [`OrganizationAddress \| undefined`](../../doc/models/organization-address.md) | Optional | - |
| `taxConfiguration` | [`TaxConfiguration \| undefined`](../../doc/models/tax-configuration.md) | Optional | - |
| `netTerms` | [`NetTerms \| undefined`](../../doc/models/net-terms.md) | Optional | - |
| `test` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": 34,
  "name": "name0",
  "subdomain": "subdomain4",
  "currency": "currency0",
  "seller_id": 198
}
```

