
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
| `scheduleSubscriptionCancellationEnabled` | `boolean \| undefined` | Optional | - |
| `customerHierarchyEnabled` | `boolean \| undefined` | Optional | - |
| `whopaysEnabled` | `boolean \| undefined` | Optional | - |
| `whopaysDefaultPayer` | `string \| undefined` | Optional | - |
| `allocationSettings` | [`AllocationSettings \| undefined`](../../doc/models/allocation-settings.md) | Optional | - |
| `defaultPaymentCollectionMethod` | `string \| undefined` | Optional | - |
| `organizationAddress` | [`OrganizationAddress \| undefined`](../../doc/models/organization-address.md) | Optional | - |
| `taxConfiguration` | [`TaxConfiguration \| undefined`](../../doc/models/tax-configuration.md) | Optional | - |
| `netTerms` | [`NetTerms \| undefined`](../../doc/models/net-terms.md) | Optional | - |
| `multiFrequencyEnabled` | `boolean \| undefined` | Optional | Whether the site has the multi-frequency billing feature enabled. Only present when relationship invoicing is active. |
| `autoRenewalsEnabled` | `boolean \| undefined` | Optional | Whether the auto-renewals feature is enabled for this site. |
| `portalEnabled` | `boolean \| undefined` | Optional | Whether the Billing Portal is enabled for this site. |
| `test` | `boolean \| undefined` | Optional | - |

## Example

```ts
import { Site } from '@maxio-com/advanced-billing-sdk';

const site: Site = {
  id: 64,
  name: 'name4',
  subdomain: 'subdomain0',
  currency: 'currency4',
  sellerId: 228,
};
```

